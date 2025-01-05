let inputActivo = null;

const txtNum1 = document.getElementById('txtNum1');
const txtNum2 = document.getElementById('txtNum2');

txtNum1.addEventListener('focus', () => {
    inputActivo = txtNum1;
});

txtNum2.addEventListener('focus', () => {
    inputActivo = txtNum2;
});

function Escribir(numBoton) {
    if (inputActivo) {
        inputActivo.value += numBoton;
    } else {
        alert('Selecciona un cuadro de texto antes de ingresar números.');
    }
};

var segundoTexto = false;
var operador = "";

function sumar() {
    segundoTexto = true;
    operador = "+";
};

function multiplicar() {
    segundoTexto = true;
    operador = "*";
};

function restar() {
    segundoTexto = true;
    operador = "-";
};

function dividir() {
    segundoTexto = true;
    operador = "/";
};

function Operacion() {
    const num1 = Number(txtNum1.value);
    const num2 = Number(txtNum2.value);

    switch (operador) {
        case "+":
            alert("El resultado es " + (num1 + num2));
            break;
        case "-":
            alert("El resultado es " + (num1 - num2));
            break;
        case "*":
            alert("El resultado es " + (num1 * num2));
            break;
        case "/":
            alert("El resultado es " + (num1 / num2));
            break;
        default:
            alert("Operador inválido.");
            break;
    }
};

function Borrar() {
    txtNum1.value = "";
    txtNum2.value = "";
    segundoTexto = false;
    operador = "";
    inputActivo = null;
};