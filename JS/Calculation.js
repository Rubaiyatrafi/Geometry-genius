document.getElementById("blog-btn").addEventListener("click", function () {
  window.location.href = "blog.html";
});

document
  .getElementById("triangle-btn-calculation")
  .addEventListener("click", function () {
    if (
      document.getElementById("triangle-base-value").value == "" ||
      document.getElementById("triangle-base-value").value <= 0
    ) {
      alert("Please fill the field accurately");
    }
    const baseField = document.getElementById("triangle-base-value");
    const baseAmount = baseField.value;
    if (
      document.getElementById("triangle-height-value").value == "" ||
      document.getElementById("triangle-height-value").value <= 0
    ) {
      alert("Please fill the field first accurately");
    }
    const heightField = document.getElementById("triangle-height-value");
    const heightAmount = heightField.value;
    const totalArea = baseAmount * heightAmount * 0.5;
    // console.log(totalArea);
    const total = document.getElementById("triangle");
    const totalText = total.innerText;
    total.innerText = totalArea.toFixed(2);
    // console.log(totalText);
  });
document
  .getElementById("rectangle-btn-calculation")
  .addEventListener("click", function () {
    if (
      document.getElementById("rectangle-base-value").value == "" ||
      document.getElementById("rectangle-base-value").value <= 0
    ) {
      alert("Please fill the field first accurately");
    }
    const baseField = document.getElementById("rectangle-base-value");
    const baseAmount = baseField.value;
    if (
      document.getElementById("rectangle-height-value").value == "" ||
      document.getElementById("rectangle-height-value").value <= 0
    ) {
      alert("Please fill the field first accurately");
    }
    const heightField = document.getElementById("rectangle-height-value");
    const heightAmount = heightField.value;
    const totalArea = baseAmount * heightAmount;
    // console.log(totalArea);
    const total = document.getElementById("rectangle");
    const totalText = total.innerText;
    total.innerText = totalArea.toFixed(2);
    // console.log(totalText);
  });
document
  .getElementById("parallelogram-btn-calculation")
  .addEventListener("click", function () {
    if (document.getElementById("parallelogram-base-value").value == "") {
      alert("Please fill the field first accurately");
    }
    const baseField = document.getElementById("parallelogram-base-value");
    const baseAmount = baseField.value;
    if (document.getElementById("parallelogram-height-value").value == "") {
      alert("Please fill the field first accurately");
    }
    const heightField = document.getElementById("parallelogram-height-value");
    const heightAmount = heightField.value;
    const totalArea = baseAmount * heightAmount;
    // console.log(totalArea);
    const total = document.getElementById("parallelogram");
    const totalText = total.innerText;
    total.innerText = totalArea.toFixed(2);
    // console.log(totalText);
  });
document
  .getElementById("rhombus-btn-calculation")
  .addEventListener("click", function () {
    if (document.getElementById("rhombus-base-value").value == "") {
      alert("Please fill the field first accurately");
    }
    const baseField = document.getElementById("rhombus-base-value");
    const baseAmount = baseField.value;
    if (document.getElementById("rhombus-height-value").value == "") {
      alert("Please fill the field first accurately");
    }
    const heightField = document.getElementById("rhombus-height-value");
    const heightAmount = heightField.value;
    const totalArea = baseAmount * heightAmount * 0.5;
    // console.log(totalArea);
    const total = document.getElementById("rhombus");
    const totalText = total.innerText;
    total.innerText = totalArea.toFixed(2);
    // console.log(totalText);
  });
document
  .getElementById("pentagon-btn-calculation")
  .addEventListener("click", function () {
    if (document.getElementById("pentagon-base-value").value == "") {
      alert("Please fill the field first accurately");
    }
    const baseField = document.getElementById("pentagon-base-value");
    const baseAmount = baseField.value;
    if (document.getElementById("pentagon-height-value").value == "") {
      alert("Please fill the field first accurately");
    }
    const heightField = document.getElementById("pentagon-height-value");
    const heightAmount = heightField.value;
    const totalArea = baseAmount * heightAmount * 0.5;
    // console.log(totalArea);
    const total = document.getElementById("pentagon");
    const totalText = total.innerText;
    total.innerText = totalArea.toFixed(2);
    // console.log(totalText);
  });
document
  .getElementById("ellipse-btn-calculation")
  .addEventListener("click", function () {
    if (
      document.getElementById("ellipse-base-value").value == "" ||
      document.getElementById("ellipse-base-value").value <= 0
    ) {
      alert("Please fill the field accurately");
    }
    const baseField = document.getElementById("ellipse-base-value");
    const baseAmount = baseField.value;
    if (
      document.getElementById("ellipse-height-value").value == "" ||
      document.getElementById("ellipse-height-value").value <= 0
    ) {
      alert("Please fill the field accurately");
    }
    const heightField = document.getElementById("ellipse-height-value");
    const heightAmount = heightField.value;
    const totalArea = baseAmount * heightAmount * 3.14;
    // console.log(totalArea);
    const total = document.getElementById("ellipse");
    const totalText = total.innerText;
    total.innerText = totalArea.toFixed(2);
    // console.log(totalText);
  });
