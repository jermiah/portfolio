/**
 * Generate a unique browser fingerprint
 * This combines multiple browser characteristics to create a semi-unique identifier
 * Note: Not 100% foolproof, but significantly harder to bypass than localStorage alone
 */

/**
 * Get canvas fingerprint
 */
const getCanvasFingerprint = () => {
  try {
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    const text = 'Portfolio Fingerprint 🎨';

    ctx.textBaseline = 'top';
    ctx.font = '14px Arial';
    ctx.textBaseline = 'alphabetic';
    ctx.fillStyle = '#f60';
    ctx.fillRect(125, 1, 62, 20);
    ctx.fillStyle = '#069';
    ctx.fillText(text, 2, 15);
    ctx.fillStyle = 'rgba(102, 204, 0, 0.7)';
    ctx.fillText(text, 4, 17);

    return canvas.toDataURL();
  } catch (e) {
    return 'canvas_unsupported';
  }
};

/**
 * Get WebGL fingerprint
 */
const getWebGLFingerprint = () => {
  try {
    const canvas = document.createElement('canvas');
    const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');

    if (!gl) return 'webgl_unsupported';

    const debugInfo = gl.getExtension('WEBGL_debug_renderer_info');
    const vendor = gl.getParameter(debugInfo.UNMASKED_VENDOR_WEBGL);
    const renderer = gl.getParameter(debugInfo.UNMASKED_RENDERER_WEBGL);

    return `${vendor}~${renderer}`;
  } catch (e) {
    return 'webgl_unsupported';
  }
};

/**
 * Get screen fingerprint
 */
const getScreenFingerprint = () => {
  return `${screen.width}x${screen.height}x${screen.colorDepth}`;
};

/**
 * Get timezone fingerprint
 */
const getTimezoneFingerprint = () => {
  return Intl.DateTimeFormat().resolvedOptions().timeZone;
};

/**
 * Get language fingerprint
 */
const getLanguageFingerprint = () => {
  return `${navigator.language}|${navigator.languages?.join(',') || ''}`;
};

/**
 * Get platform fingerprint
 */
const getPlatformFingerprint = () => {
  return `${navigator.platform}|${navigator.userAgent}`;
};

/**
 * Get plugins fingerprint
 */
const getPluginsFingerprint = () => {
  try {
    if (navigator.plugins && navigator.plugins.length > 0) {
      return Array.from(navigator.plugins)
        .map(p => p.name)
        .join(',');
    }
    return 'no_plugins';
  } catch (e) {
    return 'plugins_error';
  }
};

/**
 * Simple hash function for generating consistent IDs
 */
const simpleHash = (str) => {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    const char = str.charCodeAt(i);
    hash = ((hash << 5) - hash) + char;
    hash = hash & hash; // Convert to 32-bit integer
  }
  return Math.abs(hash).toString(36);
};

/**
 * Generate a unique browser fingerprint
 * Combines multiple browser characteristics and hashes them
 * @returns {string} A unique fingerprint hash
 */
export const generateFingerprint = () => {
  try {
    // Collect all fingerprint components
    const components = [
      getCanvasFingerprint(),
      getWebGLFingerprint(),
      getScreenFingerprint(),
      getTimezoneFingerprint(),
      getLanguageFingerprint(),
      getPlatformFingerprint(),
      getPluginsFingerprint(),
    ];

    // Combine all components into one string
    const fingerprintString = components.join('|');

    // Hash the combined string to create a shorter, consistent ID
    const fingerprint = simpleHash(fingerprintString);

    console.log('🔐 Browser fingerprint generated:', fingerprint);

    return fingerprint;
  } catch (error) {
    console.error('❌ Error generating fingerprint:', error);
    // Fallback to a random ID if fingerprinting fails
    return 'fallback_' + Math.random().toString(36).substring(2, 15);
  }
};

/**
 * Get or create a persistent fingerprint
 * Stores the fingerprint in localStorage for consistency
 * @returns {string} The browser fingerprint
 */
export const getOrCreateFingerprint = () => {
  const STORAGE_KEY = 'browser_fingerprint';

  // Check if we already have a fingerprint stored
  let fingerprint = localStorage.getItem(STORAGE_KEY);

  if (!fingerprint) {
    // Generate a new fingerprint
    fingerprint = generateFingerprint();

    // Store it for future use
    localStorage.setItem(STORAGE_KEY, fingerprint);
  }

  return fingerprint;
};
