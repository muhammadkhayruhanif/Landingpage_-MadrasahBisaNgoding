
const namaForm = document.querySelector("#name"),
emailForm = document.querySelector("#email"),
kotaForm = document.querySelector("#city"),
kodeZipForm = document.querySelector("#zip-code"),
statusForm = document.querySelector("#status"),
warning = document.querySelector("#warning");
function handleGetFormData() {
return {
    name: namaForm.value,
    email: emailForm.value,
    city: kotaForm.value,
    zipCode: kodeZipForm.value,
    status: statusForm.checked
};
}
function isNumber(string) { return !isNaN(string)}
function checkboxIsChecked() { return statusForm.checked}
function validateFormData({ name, city, email, zipCode} ={}) {
return name && city && email && isNumber(zipCode) && checkboxIsChecked();
}
function submit() {
if (validateFormData(handleGetFormData())) warning.innerText ="";
else warning.innerText = "Periksa form anda sekali lagi";
}
document.forms[0].addEventListener("submit", event => {
event.preventDefault();
submit();
});
