var btnAccordion = document.querySelectorAll(".accordion-button");
var showAccordion = document.querySelectorAll(".accordion-collapse");
var image = document.querySelectorAll("img");
console.log(image);
console.log(showAccordion);
function toggleAccordion() {
  btnAccordion.forEach((btn) => {
    btn.addEventListener("click", function () {
      showAccordion.forEach((content) => content.classList.remove("show"));
      image.forEach((img) => img.classList.remove("active"));
      const imgPresent = btn.querySelector("img");
      imgPresent.classList.add("active");
      const idElement = this.getAttribute("data-bs-target");
      const contentElement = document.querySelector(idElement);
      contentElement.classList.add("show");
    });
  });
}

toggleAccordion();

// function showAccordion(id) {
//   const curren = document.querySelector(`#${id}`);
//   const show = document.querySelectorAll(".accordion-collapse");
//   show.forEach((showAcc) => showAcc.classList.remove("show"));
//   curren.classList.add("show");
// }
