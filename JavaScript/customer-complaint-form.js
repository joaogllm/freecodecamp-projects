const fullName = document.getElementById("full-name");
const email = document.getElementById("email");
function validateForm() {
  const formObject = {
    "full-name": fullName.value.trim().length !== 0,
    email: /^\S+@\S+\.\S+$/.test(email.value),
    "order-no": false,
    "product-code": false,
    quantity: false,
    "complaints-group": false,
    "complaint-description": false,
    "solutions-group": false,
    "solution-description": false,
  };
  return formObject;
}

fullName.addEventListener("change", function () {
  const validatedForm = validateForm();
  if (validatedForm["full-name"]) {
    fullName.style.borderColor = "green";
  } else {
    fullName.style.borderColor = "red";
  }
});

email.addEventListener("change", function () {
  const validatedForm = validateForm();
  if (validatedForm["email"]) {
    email.style.borderColor = "green";
  } else {
    email.style.borderColor = "red";
  }
});
