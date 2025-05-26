// Seleciona o formulário pelo ID 'form'
const form = document.getElementById('form');

// Adiciona um listener para o evento de submit do formulário
form.addEventListener('submit', function(event){
    event.preventDefault(); // Impede o envio padrão do formulário

    // Obtém os valores de peso e altura dos inputs
    const weight = document.getElementById('weight').value;
    const height = document.getElementById('height').value;

    // Calcula o IMC e limita a duas casas decimais
    const bmi = (weight / (height * height)).toFixed(2);

    // Seleciona o elemento onde o valor do IMC será exibido
    const value = document.getElementById('value');
    let description = '';

    // Adiciona a classe de atenção ao valor do IMC
    value.classList.add('attention');
    // Remove a classe 'hidden' para mostrar as informações
    document.getElementById('infos').classList.remove('hidden');

    // Define a descrição de acordo com o valor do IMC
    if (bmi < 18.5 ) {
        description = 'Cuidado! Você está abaixo do peso!';
    } else if ( bmi >= 18.5 && bmi <= 25) {
        description = 'Você está no peso ideal!';
        value.classList.remove('attention');
        value.classList.add('normal');
    } else if ( bmi > 25 && bmi <= 30) {
        description = 'Cuidado! Você está com sobrepeso';
    } else if (bmi > 30 && bmi <= 35) {
        description = 'Cuidado! Você está com obesidade moderada!';
    } else if (bmi > 35 && bmi <= 40) {
        description =  'Cuidado! Você está com obesidade severa!';
    } else {
        description = 'Cuidado! Você está com obesidade morbida!';
    }

    // Exibe o valor do IMC (trocando ponto por vírgula)
    value.textContent = bmi.replace('.', ',');
    // Exibe a descrição correspondente
    document.getElementById('description').textContent = description;
})