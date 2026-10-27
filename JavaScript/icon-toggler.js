const heartButtons = document.querySelectorAll(".favorite-icon");
heartButtons.forEach((button) => {
  button.addEventListener("click", () => {
    if (button.classList.contains("filled")) {
      button.classList.toggle("filled");
      button.innerHTML = "&#9825;";
    } else {
      button.classList.toggle("filled");
      button.innerHTML = "&#10084;";
    }
  });
});
