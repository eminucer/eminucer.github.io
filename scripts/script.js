      document.addEventListener("DOMContentLoaded", () => {
	  const htmlElement = document.documentElement;
	  const highlightStyle = document.getElementById("highlight-style");
	  
	  // Function to update Highlight.js style based on theme
	  const updateHighlightStyle = (theme) => {
              const lightTheme = "https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.10.0/styles/stackoverflow-light.min.css";
              const darkTheme = "https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.10.0/styles/github-dark.min.css";
              highlightStyle.href = theme === "dark" ? darkTheme : lightTheme;
	  };
	  
	  // Function to set the theme
	  const setTheme = (theme) => {
              htmlElement.setAttribute("data-bs-theme", theme);
              localStorage.setItem("theme", theme); // Save the theme to localStorage
              updateHighlightStyle(theme);
	  };
	  
	  // Get saved theme from localStorage or fallback to default ("light")
	  const savedTheme = localStorage.getItem("theme") || "light";
	  setTheme(savedTheme);
	  
	  // Event listener for theme dropdown
	  document.querySelectorAll(".dropdown-item").forEach((item) => {
              item.addEventListener("click", (e) => {
		  e.preventDefault();
		  const selectedTheme = item.getAttribute("data-theme");
		  setTheme(selectedTheme);
              });
	  });
	  
	  // Initialize Highlight.js
	  hljs.highlightAll();
      });

      document.querySelectorAll('.collapse-toggle').forEach(toggle => {
      const icon = toggle.querySelector('.collapse-icon');
      const targetId = toggle.getAttribute('data-bs-target');
      const target = document.querySelector(targetId);

      target.addEventListener('show.bs.collapse', (e) => {
        // Prevent the parent collapse from triggering
        if (e.target === target) {
          icon.classList.add('rotate');
        }
      });

      target.addEventListener('hide.bs.collapse', (e) => {
        // Prevent the parent collapse from triggering
        if (e.target === target) {
          icon.classList.remove('rotate');
        }
      });
    });