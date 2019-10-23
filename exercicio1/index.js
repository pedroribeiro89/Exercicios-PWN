const prompt = require("prompt");

prompt.start();

var schema = {
    properties: {
      name: {
        pattern: /^[a-zA-Z\s\-]+$/,
        message: 'Nome deve ser apenas letras, espacos ou dashes',
        required: true
      },
	  surname: {
        pattern: /^[a-zA-Z\s\-]+$/,
        message: 'Sobrenome deve ser apenas letras, espacos ou dashes',
        required: true
      },
	  endereco: {
        required: true
      },
	  email: {
        pattern: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,
        message: 'Email invalido'
      },
	  cpf: {
        pattern: /^([0-9]{2}[\.]?[0-9]{3}[\.]?[0-9]{3}[\/]?[0-9]{4}[-]?[0-9]{2})|([0-9]{3}[\.]?[0-9]{3}[\.]?[0-9]{3}[-]?[0-9]{2})$/,
        message: 'CPF invalido'
      },
    }
};


prompt.get(schema, function(_, result) {
		console.log("Nome: " + result.name);
		console.log("Sobrenome: " + result.surname);
		console.log("Email: " + result.email);
		console.log("CPF: " + result.cpf);
});