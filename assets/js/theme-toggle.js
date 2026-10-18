(function () {
  "use strict";

  var root = document.documentElement;
  var toggle = document.getElementById("theme-toggle");
  var themeColor = document.querySelector('meta[name="theme-color"]');

  if (!toggle) {
    return;
  }

  function setTheme(theme, remember) {
    var isDark = theme === "dark";
    var nextTheme = isDark ? "light" : "dark";

    root.setAttribute("data-theme", theme);
    toggle.setAttribute("aria-label", "Switch to " + nextTheme + " theme");
    toggle.setAttribute("title", "Switch to " + nextTheme + " theme");

    if (themeColor) {
      themeColor.setAttribute("content", isDark ? "#111416" : "#ffffff");
    }

    if (remember) {
      try {
        window.localStorage.setItem("site-theme", theme);
      } catch (error) {}
    }
  }

  setTheme(root.getAttribute("data-theme") === "light" ? "light" : "dark", false);

  toggle.addEventListener("click", function () {
    setTheme(root.getAttribute("data-theme") === "dark" ? "light" : "dark", true);
  });
}());
