document.addEventListener("DOMContentLoaded", () => {
    const root = document.documentElement;
  
    // Map your IDs to the mode names
    const buttons = {
      auto: document.getElementById("theme-auto"),
      light: document.getElementById("theme-light"),
      dark: document.getElementById("theme-dark"),
    };
  
    // Function to update the visual state of the text buttons
    function updateActiveButtonState(activeMode) {
      Object.keys(buttons).forEach((key) => {
        const btn = buttons[key];
        if (!btn) return;
  
        if (key === activeMode) {
          // ACTIVE STATE: Bold and fully opaque
          btn.classList.add("active-theme");
          btn.style.opacity = "1"; 
          btn.style.fontWeight = "bold";
        } else {
          // INACTIVE STATE: Dimmed
          btn.classList.remove("active-theme");
          btn.style.opacity = "0.5"; 
          btn.style.fontWeight = "normal";
        }
      });
    }
  
    function applyTheme(mode) {
      // 1. Apply the Data Attribute to HTML
      if (mode === "auto") {
        root.removeAttribute("data-theme");
      } else {
        root.setAttribute("data-theme", mode);
      }
  
      // 2. Save to LocalStorage
      localStorage.setItem("theme-preference", mode);
  
      // 3. Update the text UI to show what is selected
      updateActiveButtonState(mode);
    }
  
    // --- Initialization ---
  
    // Check storage, default to 'auto'
    const saved = localStorage.getItem("theme-preference") || "auto";
    applyTheme(saved);
  
    // --- Event Listeners ---
    // The '?' check ensures no errors if a button is missing from a specific page
    buttons.auto?.addEventListener("click", () => applyTheme("auto"));
    buttons.light?.addEventListener("click", () => applyTheme("light"));
    buttons.dark?.addEventListener("click", () => applyTheme("dark"));
  });