console.log("debug");
(function toggleDropdown() {
  const btnClick = document.querySelector(".btn");
  btnClick.addEventListener("click", () => {
    btnClick.classList.add("active");
    const modal = document.querySelector(".dropdown-menu");
    modal.classList.toggle("show");
    // const aba = modal.contains("div");
    // console.log(aba);
    // const showmodal = document.querySelector("show");
    // if (showmodal) {
    //   modal.classList.remove("show");
    // }
  });
})();
