const btnList = document.querySelectorAll(".btn");
(function showContent() {
  btnList.forEach((btn) => {
    btn.addEventListener("click", () => {
      const content = document.querySelector(".collapse");
      content.classList.toggle("active");
    });
  });
})();
