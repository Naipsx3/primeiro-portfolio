const themeButton = document.querySelector(".theme-toggle");
const savedTheme = localStorage.getItem("theme");

function updateThemeButton() {
  const isDark = document.body.classList.contains("dark");

  themeButton.textContent = isDark ? "Usar tema claro" : "Usar tema escuro";
  themeButton.setAttribute("aria-pressed", String(isDark));
}

if (savedTheme === "dark") {
  document.body.classList.add("dark");
}

updateThemeButton();

themeButton.addEventListener("click", () => {
  document.body.classList.toggle("dark");

  const currentTheme = document.body.classList.contains("dark")
    ? "dark"
    : "light";

  localStorage.setItem("theme", currentTheme);
  updateThemeButton();
});
