do {
	nome = prompt("Digite um nome:");
	if (nome.length <= 3) {
		alert("O Nome deve conter mais de 3 caracteres!");
	} else {
		break;
	}
} while (nome.length <= 3);

do {
	idade = parseInt(prompt("Digite uma idade:"));
	if ((idade <= 0) || (idade >= 150)) {
		alert("A idade precisa estar entre 0 e 150!");
	} else {
		break;
	}
} while (idade <= 0 || idade >= 150);

do {
	salario = parseFloat(prompt("Digite qualquer salário:"));
	if (salario <= 0) {
		alert("O salário precisa ser maior que zero!");
	} else {
		break;
	}
} while (salario <= 0);

do {
	sexo = prompt("Digite seu gênero:").toUpperCase()[0];
	if ((sexo != "F") && (sexo != "M")) {
		alert("O gênero está inválido");
	} else {
		if (sexo == "F") {
			sexo = "feminino";
		} else {
			sexo = "masculino";
		}
		break;
	}
} while (sexo != "F" && sexo != "M");

do {
	civil = prompt("Digite seu estado civil:").toUpperCase()[0];
	if (civil != "C" && civil != "S" && civil != "V" && civil != "D") {
		alert("O estado civil está inválido!");
	} else {
		if (civil == "C") {
			civil = "casado(a)";
		} else if (civil == "S") {
			civil = "solteiro(a)";
		} else if (civil == "V") {
			civil = "viúvo(a)";
		} else if (civil == "D") {
			civil = "divorciado(a)";
		}
		break;
	}
} while (civil != "C" && civil != "S" && civil != "V" && civil != "D");

alert(`Seu nome é ${nome}, você tem ${idade} anos, é do gênero ${sexo}, fatura R$${salario} por mês e está ${civil}.`);