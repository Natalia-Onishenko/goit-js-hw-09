let formData = { email: "", message: "" };
const STORAGE_KEY = "feedback-form-state";
const form = document.querySelector(".feedback-section .feedback-form");

const savedData = localStorage.getItem(STORAGE_KEY);
if (savedData) {
  formData = JSON.parse(savedData);
  form.elements.email.value = formData.email || "";
  form.elements.message.value = formData.message || "";
}

form.addEventListener("input", (e) => {
  const { name, value } = e.target;
  if (name === "email" || name === "message") {
    formData[name] = value.trim();
    localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
  }
});

form.addEventListener("submit", (e) => {
  e.preventDefault();
  if (!formData.email || !formData.message) {
    alert("Fill please all fields");
    return;
  }
  console.log("Form Data:", formData);
  formData = { email: "", message: "" };
  localStorage.removeItem(STORAGE_KEY);
  form.reset();
});