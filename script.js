/* script.js */
document.addEventListener("DOMContentLoaded", () => {
    const tabs = document.querySelectorAll(".tab");
    const contents = document.querySelectorAll(".tab-content");
    const themeToggle = document.getElementById("theme-toggle");
    
    tabs.forEach(tab => {
        tab.addEventListener("click", () => {
            tabs.forEach(t => t.classList.remove("active"));
            tab.classList.add("active");
            
            contents.forEach(content => {
                content.classList.remove("active");
                if (content.id === tab.dataset.tab) {
                    content.classList.add("active");
                }
            });
        });
    });
    
    themeToggle.addEventListener("click", () => {
        document.body.classList.toggle("light-mode");
    });
});
