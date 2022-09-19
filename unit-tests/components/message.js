const message = (() => {

    function name(name) {
        return name;
    }

    function email(email) {
        return email;
    }

    function subject(subject) {
        return subject;
    }

    function sendMessage() {
        console.log('Mensagem enviada com sucesso');
    }

    return {
        name,
        email,
        subject,
        sendMessage
    }
})();

module.exports = message;