const calculator = (() => {
    // Função Somar
    function sum(num1, num2) {
        return num1 + num2;
    }
    // Função Subtrair 
    function subtract(num1, num2) {
        return num1 - num2;
    }
    // Função Multiplicar
    function multiply(num1, num2) {
        return num1 * num2;
    }
    // Função Dividir
    function divide(num1, num2) {
        return num1 / num2;
    }

    return {
        sum,
        subtract,
        multiply,
        divide
    }

})();

module.exports = calculator;