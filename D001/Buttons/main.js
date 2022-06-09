const btnClick = document.querySelectorAll(".btn");
function borderButtons() {
  btnClick.forEach((btn) => {
    btn.addEventListener("click", () => {
      btn.classList.add("active");
      const color = btn.getAttribute("data-color");
      console.log(color);
      btn.style.borderColor = color;
      // btn.style.background = "red";
    });
  });
}
borderButtons();
