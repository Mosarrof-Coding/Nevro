const rCanvas = document.querySelector(".rCanvas");
const addPatientBtn = document.querySelector(".addPatientBtn");
const closePatient = document.querySelector(".closePatient");
const canvasBody = document.querySelector(".canvasBody");

addPatientBtn.addEventListener("click", () => {
  rCanvas.classList.add("toggler");
  canvasBody.classList.remove("hidden");
});
closePatient.addEventListener("click", () => {
  rCanvas.classList.remove("toggler");
  canvasBody.classList.add("hidden");
});
canvasBody.addEventListener("click", () => {
  rCanvas.classList.remove("toggler");
  canvasBody.classList.add("hidden");
});

// asideBar
const asideToggler = document.querySelector(".asideToggler");
const asideBar = document.querySelector(".sidebar");
console.log(asideToggler);
asideToggler.addEventListener("click", function () {
  asideBar.classList.add("fixed");
  asideBar.classList.toggle("hidden");
  asideBar.style.left = "0";
  console.log("first");
});
