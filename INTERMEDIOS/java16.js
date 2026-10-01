const input1 = document.getElementById("input1");
const input2 = document.getElementById("input2");
const btnSumar = document.getElementById("btnSumar");
const btnRestar = document.getElementById("btnRestar");
const spanResultado = document.getElementById("resultado");

btnSumar.addEventListener("click", function() {
    let num1 = Number(input1.value);
    let num2 = Number(input2.value);

    let suma = num1 + num2;
    spanResultado.textContent = suma;
});

btnRestar.addEventListener("click", function() {
    let num1 = Number(input1.value);
    let num2 = Number(input2.value);

    let resta = num1 - num2;
    spanResultado.textContent = resta;
});