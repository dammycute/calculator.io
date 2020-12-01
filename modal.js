// JavaScript Document
// JavaScript Document
const open = document.getElementById("open");
const close = document.getElementById("close");
const modalContainer = document.getElementById("modal-contain");


open.addEventListener("click", () => {
	modalContainer.classList.add("show");
});


close.addEventListener("click", () => {
	modalContainer.classList.remove("show");
});

