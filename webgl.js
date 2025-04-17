let scene, camera, renderer, material, plane;
let mouseX = 0, mouseY = 0;
let targetMouseX = 0, targetMouseY = 0;
const lerpFactor = 0.1;
let isDarkMode = false;
let currentColor1 = new THREE.Vector3(0, 0, 0);
let currentColor2 = new THREE.Vector3(0.2, 0.4, 0.8);
let targetColor1 = new THREE.Vector3(0, 0, 0);
let targetColor2 = new THREE.Vector3(0.2, 0.4, 0.8);
let rafId;

function init() {
  // Scene + camera
  scene = new THREE.Scene();
  camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0.1, 10);
  camera.position.z = 1;

  // Renderer with retina support
  renderer = new THREE.WebGLRenderer({ antialias: true });
  renderer.setPixelRatio(window.devicePixelRatio);
  renderer.setSize(window.innerWidth, window.innerHeight);
  document.getElementById('webgl-container').appendChild(renderer.domElement);

  // Full‑screen plane + shader
  const geometry = new THREE.PlaneGeometry(2, 2);
  const fragmentShader = `
    uniform float time;
    uniform vec2 resolution;
    uniform vec2 mouse;
    uniform vec3 color1;
    uniform vec3 color2;
    #define FLOW_INTENSITY 0.05
    void main() {
      vec2 uv = gl_FragCoord.xy / resolution.xy;
      vec2 p = uv * 2.0 - 1.0;
      vec2 m = mouse / resolution.xy * 2.0 - 1.0;
      vec2 flow = m - p;
      float dist = length(flow);
      p += flow * FLOW_INTENSITY / (dist + 0.5);
      for(int i = 1; i < 7; i++){
        float fi = float(i);
        p.x += 0.1/fi * sin(fi*2.0*p.y + time*0.25 + 0.2*fi);
        p.y += 0.1/fi * cos(fi*2.0*p.x + time*0.25 + 0.2*fi);
      }
      float intensity = 0.5 * sin(3.0*p.x + 2.0*p.y) + 0.5;
      vec3 color = mix(color1, color2, intensity);
      gl_FragColor = vec4(color, 1.0);
    }
  `;
  material = new THREE.ShaderMaterial({
    uniforms: {
      time:       { value: 1.0 },
      resolution: { value: new THREE.Vector2() },
      mouse:      { value: new THREE.Vector2() },
      color1:     { value: currentColor1 },
      color2:     { value: currentColor2 }
    },
    fragmentShader
  });
  plane = new THREE.Mesh(geometry, material);
  scene.add(plane);

  // Unified pointer input (mouse, touch, pen)
  document.addEventListener('pointermove', onPointerMove, { passive: true });

  // Color change on click
  document.addEventListener('click', changeColorsOnClick, false);

  // Handle resizing & orientation
  window.addEventListener('resize', onWindowResize, false);
  window.addEventListener('orientationchange', onWindowResize, false);
  onWindowResize();

  // Start
  startAutoColorChange();
  animate();
}

function onPointerMove(event) {
  targetMouseX = event.clientX;
  targetMouseY = event.clientY;
}

function onWindowResize() {
  const width = window.innerWidth;
  const height = window.innerHeight;

  // Update renderer & camera
  renderer.setPixelRatio(window.devicePixelRatio);
  renderer.setSize(width, height);

  camera.left   = -width / height;
  camera.right  =  width / height;
  camera.top    =  1;
  camera.bottom = -1;
  camera.updateProjectionMatrix();

  // Update shader uniform
  material.uniforms.resolution.value.set(width, height);
}

function lerp(a, b, t) {
  return a * (1 - t) + b * t;
}

function lerpVector(v1, v2, t) {
  return new THREE.Vector3(
    lerp(v1.x, v2.x, t),
    lerp(v1.y, v2.y, t),
    lerp(v1.z, v2.z, t)
  );
}

function animate() {
  rafId = requestAnimationFrame(animate);

  // Smooth mouse interpolation
  mouseX = lerp(mouseX, targetMouseX, lerpFactor);
  mouseY = lerp(mouseY, targetMouseY, lerpFactor);

  // Smooth color interpolation
  currentColor1 = lerpVector(currentColor1, targetColor1, 0.05);
  currentColor2 = lerpVector(currentColor2, targetColor2, 0.05);

  // Update uniforms
  material.uniforms.time.value += 0.025;
  material.uniforms.mouse.value.set(
    mouseX,
    window.innerHeight - mouseY
  );
  material.uniforms.color1.value = currentColor1;
  material.uniforms.color2.value = currentColor2;

  renderer.render(scene, camera);
}

function startAutoColorChange() {
  setInterval(changeColors, 45000);
}

function changeColors() {
  if (isDarkMode) {
    targetColor1.set(0, 0, 0);
    targetColor2.set(Math.random(), Math.random(), Math.random());
  } else {
    targetColor1.set(Math.random(), Math.random(), Math.random());
    targetColor2.set(Math.random(), Math.random(), Math.random());
  }
}

function changeColorsOnClick(event) {
  const tag = event.target.tagName.toLowerCase();
  if (tag !== 'a' && tag !== 'button') {
    event.preventDefault();
    changeColors();
  }
}

function toggleMode() {
  isDarkMode = !isDarkMode;
  document.body.classList.toggle('dark-mode', isDarkMode);
  document.body.classList.toggle('light-mode', !isDarkMode);
  const btn = document.getElementById('mode-toggle');
  btn.textContent = isDarkMode ? '☀️' : '🌑';
  changeColors();
}

// Initialize once DOM is ready
document.addEventListener('DOMContentLoaded', () => {
  init();
  document
    .getElementById('mode-toggle')
    .addEventListener('click', toggleMode);
});

// (Optional) Call to switch externally
function updateBackgroundMode(isLightMode) {
  isDarkMode = !isLightMode;
  changeColors();
}
