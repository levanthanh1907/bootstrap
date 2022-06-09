const btnClicks = document.querySelectorAll(".btn");
function clickBorder() {
  btnClicks.forEach((btn) => {
    btn.addEventListener("click", () => {
      btn.classList.add("active");
    });
  });
}
clickBorder();
