const calculator = require('../components/calculator');

test('should sum the numbers correctly', () => {
    // Arrange (Preparar o teste)
    let num1 = 3;
    let num2 = 2;

    // Act (Rodar o teste)
    result = calculator.sum(num1, num2);

    // Assert (Verificar as asserções)
    expect(result).toBe(5);
});

test('should subtract the numbers correctly', () => {
    let num1 = 4;
    let num2 = 2;

    result = calculator.subtract(num1, num2);

    expect(result).toBe(2);
});

test("should multiply the numbers correctly", () => {
    expect(calculator.multiply(6, 2)).toEqual(12);
});

test("should divide the numbers correctly", () => {
    expect(calculator.divide(20, 2)).toEqual(10);
});