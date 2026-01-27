const activeBtn = document.querySelector("#active-form");
const form = document.querySelector("#formJS");

activeBtn.addEventListener("click", () => {
	form.classList.toggle("form-active")
});