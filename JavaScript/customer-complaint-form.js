const fullName = document.getElementById("full-name");
const email = document.getElementById("email");
const orderNo = document.getElementById("order-no");
const productCode = document.getElementById("product-code");
const quantityInput = document.getElementById("quantity");
const complaintFieldset = document.getElementById("complaints-group");
const complaintBoxes = document.querySelectorAll("#complaints-group input");
const otherCheckbox = document.getElementById("other-complaint");
const complaintTextarea = document.getElementById("complaint-description");
const solutionFieldset = document.getElementById("solutions-group");
const solutionInputs = document.querySelectorAll("#solutions-group input");
const solutionTextarea = document.getElementById("solution-description");
const otherSolutionRadio = document.getElementById("other-solution");
const form = document.getElementById("form");
function validateForm() {
  const quantityValue = Number(quantityInput.value);
  const formObject = {
    "full-name": fullName.value.trim().length !== 0,
    email: /^\S+@\S+\.\S+$/.test(email.value),
    "order-no": /^2024\d{6}$/.test(orderNo.value),
    "product-code": /^[A-Za-z]{2}\d{2}-[A-Za-z]\d{3}-[A-Za-z]{2}\d$/.test(
      productCode.value,
    ),
    quantity: Number.isInteger(quantityValue) && quantityValue > 0,
    "complaints-group": Array.from(complaintBoxes).some(function (box) {
      return box.checked;
    }),
    "complaint-description":
      !otherCheckbox.checked || complaintTextarea.value.length >= 20,
    "solutions-group": Array.from(solutionInputs).some(function (box) {
      return box.checked;
    }),
    "solution-description":
      !otherSolutionRadio.checked || solutionTextarea.value.length >= 20,
  };
  return formObject;
}
function updateBorder(element, key) {
  const validatedForm = validateForm();
  if (validatedForm[key]) {
    element.style.borderColor = "green";
  } else {
    element.style.borderColor = "red";
  }
}
function isValid(formObject) {
  return Object.values(formObject).every((value) => value);
}

fullName.addEventListener("change", function () {
  updateBorder(fullName, "full-name");
});
email.addEventListener("change", function () {
  updateBorder(email, "email");
});
orderNo.addEventListener("change", function () {
  updateBorder(orderNo, "order-no");
});
productCode.addEventListener("change", function () {
  updateBorder(productCode, "product-code");
});
quantityInput.addEventListener("change", function () {
  updateBorder(quantityInput, "quantity");
});
complaintFieldset.addEventListener("change", function () {
  updateBorder(complaintFieldset, "complaints-group");
});
otherCheckbox.addEventListener("change", function () {
  updateBorder(complaintTextarea, "complaint-description");
});
complaintTextarea.addEventListener("change", function () {
  updateBorder(complaintTextarea, "complaint-description");
});
solutionFieldset.addEventListener("change", function () {
  updateBorder(solutionFieldset, "solutions-group");
  updateBorder(solutionTextarea, "solution-description");
});
otherSolutionRadio.addEventListener("change", function () {
  updateBorder(solutionTextarea, "solution-description");
});
solutionTextarea.addEventListener("change", function () {
  updateBorder(solutionTextarea, "solution-description");
});
form.addEventListener("submit", function (event) {
  event.preventDefault();
  const result = validateForm();
  const fieldElements = {
    "full-name": fullName,
    email: email,
    "order-no": orderNo,
    "product-code": productCode,
    quantity: quantityInput,
    "complaints-group": complaintFieldset,
    "complaint-description": complaintTextarea,
    "solutions-group": solutionFieldset,
    "solution-description": solutionTextarea,
  };
  if (!isValid(result)) {
    Object.entries(result).forEach(function ([key, isFieldValid]) {
      if (!isFieldValid) {
        fieldElements[key].style.borderColor = "red";
      }
    });
  }
});
