const switcherBtn = document.getElementById("theme-switcher-button");
const dropDMenu = document.getElementById("theme-dropdown");
const dropDMenuItems = dropDMenu.querySelectorAll('[role="menuitem"]');
const statusMsg = document.querySelector('[aria-live="polite"]');
const themes = [
  { name: "light", message: "Light theme activated!" },
  { name: "dark", message: "Dark theme activated!" },
  { name: "orange", message: "Orange theme activated!" },
];

switcherBtn.addEventListener("click", () => {
  if (dropDMenu.hasAttribute("hidden")) {
    dropDMenu.removeAttribute("hidden");
    switcherBtn.setAttribute("aria-expanded", "true");
  } else {
    dropDMenu.setAttribute("hidden", "");
    switcherBtn.setAttribute("aria-expanded", "false");
  }
});

dropDMenuItems.forEach((item) => {
  item.addEventListener("click", (event) => {
    const themeId = event.currentTarget.id.replace("theme-", "");
    const selectedTheme = themes.find((theme) => theme.name === themeId);
    themes.forEach((item) => {
      document.body.classList.remove(`theme-${item.name}`);
    });
    document.body.classList.add(`theme-${selectedTheme.name}`);
    statusMsg.textContent = selectedTheme.message;
    dropDMenu.setAttribute("hidden", "");
    switcherBtn.setAttribute("aria-expanded", "false");
  });
});
