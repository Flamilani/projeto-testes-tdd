const message = require('../components/message');
const validateEmail = require('../helpers/validate');

test("should check the email if it's true", () => {
    expect(message.email(validateEmail('flaviomilani@gmail.com'))).toBeTruthy();
});

describe('Check the message box', () => {
    it('Should check the name is filled', () => {

        const result = message.name('Flavio');
        expect(result).toBeTruthy();
    });

    it('Should check the email is correct', () => {

        const result = message.email('flaviomilani@gmail.com');
        expect(result).toEqual('flaviomilani@gmail.com');
    });

    it('Should check the subject is filled', () => {

        const result = message.subject('título de mensagem');
        expect(result).toBeTruthy();
    });

    it('Should call correct with console.log: "Mensagem enviada com sucesso"', () => {
        const consoleSpy = jest.spyOn(console, 'log');
        message.sendMessage();
        expect(consoleSpy).toHaveBeenCalledWith('Mensagem enviada com sucesso');
    });
})