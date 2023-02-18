document
  .getElementById("triangle-btn-calculation")
  .addEventListener("click", function () {
    const baseField = document.getElementById("triangle-base-value");
    const baseAmount = baseField.value;
    const heightField = document.getElementById("triangle-height-value");
    const heightAmount = heightField.value;
    const totalArea = baseAmount * heightAmount * 0.5;
    // console.log(totalArea);
    const total = document.getElementById("triangle");
    const totalText = total.innerText;
    total.innerText = totalArea;
    // console.log(totalText);
  });
document
  .getElementById("rectangle-btn-calculation")
  .addEventListener("click", function () {
    const baseField = document.getElementById("rectangle-base-value");
    const baseAmount = baseField.value;
    const heightField = document.getElementById("rectangle-height-value");
    const heightAmount = heightField.value;
    const totalArea = baseAmount * heightAmount;
    // console.log(totalArea);
    const total = document.getElementById("rectangle");
    const totalText = total.innerText;
    total.innerText = totalArea;
    // console.log(totalText);
  });
document
  .getElementById("parallelogram-btn-calculation")
  .addEventListener("click", function () {
    const baseField = document.getElementById("parallelogram-base-value");
    const baseAmount = baseField.value;
    const heightField = document.getElementById("parallelogram-height-value");
    const heightAmount = heightField.value;
    const totalArea = baseAmount * heightAmount;
    // console.log(totalArea);
    const total = document.getElementById("parallelogram");
    const totalText = total.innerText;
    total.innerText = totalArea;
    // console.log(totalText);
  });
document
  .getElementById("rhombus-btn-calculation")
  .addEventListener("click", function () {
    const baseField = document.getElementById("rhombus-base-value");
    const baseAmount = baseField.value;
    const heightField = document.getElementById("rhombus-height-value");
    const heightAmount = heightField.value;
    const totalArea = baseAmount * heightAmount * 0.5;
    // console.log(totalArea);
    const total = document.getElementById("rhombus");
    const totalText = total.innerText;
    total.innerText = totalArea;
    // console.log(totalText);
  });
document
  .getElementById("pentagon-btn-calculation")
  .addEventListener("click", function () {
    const baseField = document.getElementById("pentagon-base-value");
    const baseAmount = baseField.value;
    const heightField = document.getElementById("pentagon-height-value");
    const heightAmount = heightField.value;
    const totalArea = baseAmount * heightAmount * 0.5;
    // console.log(totalArea);
    const total = document.getElementById("pentagon");
    const totalText = total.innerText;
    total.innerText = totalArea;
    // console.log(totalText);
  });
document
  .getElementById("ellipse-btn-calculation")
  .addEventListener("click", function () {
    const baseField = document.getElementById("ellipse-base-value");
    const baseAmount = baseField.value;
    const heightField = document.getElementById("ellipse-height-value");
    const heightAmount = heightField.value;
    const totalArea = baseAmount * heightAmount * 3.14;
    // console.log(totalArea);
    const total = document.getElementById("ellipse");
    const totalText = total.innerText;
    total.innerText = totalArea;
    // console.log(totalText);
  });
