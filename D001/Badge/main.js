const btnClick = document.querySelectorAll(".btn");
function clickBorder() {
  btnClick.forEach((btn) => {
    btn.addEventListener("click", () => {
      btn.classList.add("active");
    });
  });
}
clickBorder();
