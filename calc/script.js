function suma() {
    var valor1 = document.getElementsByName("num1")[0].value;
    var valor2 = document.getElementsByName("num2")[0].value;
    var result = parseInt(valor1) + parseInt(valor2);
    alert("El resultado es " + result);
}

function resta() {
    var valor1 = document.getElementsByName("num1")[0].value;
    var valor2 = document.getElementsByName("num2")[0].value;
    var result = parseInt(valor1) - parseInt(valor2);
    alert("El resultado es " + result);
}

function multiplicacion() {
    var valor1 = document.getElementsByName("num1")[0].value;
    var valor2 = document.getElementsByName("num2")[0].value;
    var prod = parseInt(valor1) * parseInt(valor2);
    alert("El resultado es " + prod);
}

function division() {
    var valor1 = document.getElementsByName("num1")[0].value;
    var valor2 = document.getElementsByName("num2")[0].value;
    if (parseInt(valor2) === 0) {
        alert("No se puede dividir entre cero.");
    } else {
        var result = parseInt(valor1) / parseInt(valor2);
        alert("El resultado es " + result);
    }
}
