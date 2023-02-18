document
  .getElementById("btn-calculation")
  .addEventListener("click", function () {
    const baseField = document.getElementById("base-value");
    const baseAmount = baseField.value;
    const heightField = document.getElementById("height-value");
    const heightAmount = heightField.value;
    const totalArea = baseAmount * heightAmount * 0.5;
    // console.log(totalArea);
    const total = document.getElementById("triangle");
    const totalText = total.innerText;
    total.innerText = totalArea;
    // console.log(totalText);
  });
