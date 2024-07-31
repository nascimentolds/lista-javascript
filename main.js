// 1. Verificação de Número Par ou Ímpar:
// Crie um programa que peça ao usuário para inserir um número e, em seguida, determine se o número é par ou ímpar.
// Exiba uma mensagem correspondente na saída do console e em um parágrafo no documento HTML.

const parImpar = document.getElementById('parImpar');
const parImparResult = document.getElementById('parImparResult');

parImpar.addEventListener('input', () => {
  const valor = parseInt(parImpar.value, 10); 
  if (isNaN(valor)) {
    parImparResult.textContent = '';
    return;
  }
  
  const resultado = valor % 2 === 0;
  parImparResult.textContent = resultado ? 'Par' : 'Impar';
  console.log(resultado ? "Par" : "Impar");
});

// 2. Cálculo de Média de Notas:
// Crie um programa que solicite ao usuário 4 notas e, em seguida, calcule a média aritmética das notas. Adicione um parágrafo no documento HTML informando se o aluno foi aprovado (média maior ou igual a 7) ou reprovado (média menor que 7).

const notas = document.querySelectorAll('.notas');
const botaoMedia = document.getElementById('botaoMedia');
const mediaResult = document.getElementById('mediaResult');

botaoMedia.addEventListener('click', () => {
  let acc = 0;
  let count = 0;

  notas.forEach(nota => {
    let n = parseFloat(nota.value);
    if (!isNaN(n)) {
      acc += n;
      count++;
    }
  });

  if (count === 0) {
    mediaResult.textContent = 'Nenhuma nota válida';
    return;
  }

  const media = acc / count;
  mediaResult.textContent = (media < 7 ? 'Aluno Reprovado' : 'Aluno Aprovado');
});

// 3. Conversor de Notas em Letras:
// Crie um programa que solicite ao usuário uma nota de 0 a 100 e, em seguida, use um switch case para converter essa nota em uma letra correspondente (A, B, C, D ou F) com base em intervalos predefinidos. Onde:
// A >=90
// B >= 80
// C >= 70
// D > = 60
// F < 60

const nota = document.getElementById('nota');
const notaResult = document.getElementById('notaResult');

nota.addEventListener('input', () => {
  const valor = parseFloat(nota.value);
  if (isNaN(valor) || valor < 0 || valor > 100) {
    notaResult.textContent = 'Digite uma nota válida!';
    return;
  }

  switch (true) {
    case valor >= 90:
      notaResult.textContent = 'A';
      break;
    case valor >= 80:
      notaResult.textContent = 'B';
      break;
    case valor >= 70:
      notaResult.textContent = 'C';
      break;
    case valor >= 60:
      notaResult.textContent = 'D';
      break;
    default:
      notaResult.textContent = 'F';
  }
})

// 4. Tradutor de Cores
// Crie um programa que solicite ao usuário o nome de uma cor em inglês e, em seguida, use um switch case para traduzir essa cor para outra língua. Por exemplo, se o usuário inserir "red," o programa deve traduzir para "vermelho." Adicione algumas cores padrões e se a cor não for identificada, imprimir a mensagem “Cor desconhecida”.

const cor = document.getElementById('cor')
const botaoTraduzir = document.getElementById('botaoTraduzir')
const traduzirResult = document.getElementById('traduzirResult')


botaoTraduzir.addEventListener('click', () => {
  let tradCor = ''
  let color = cor.value.toLowerCase()

  switch (true) {
    case color === 'blue':
      tradCor = 'Azul';
      break;
    case color === 'yellow':
      tradCor = 'Amarelo';
      break;
    case color === 'red':
      tradCor = 'Vermelho';
      break;
    case color === 'green':
      tradCor = 'Verde';
      break;
    case color === 'pink':
      tradCor = 'Rosa';
      break;
    case color === 'purple':
      tradCor = 'Roxo';
      break;
    case color === 'brown':
      tradCor = 'Marrom';
      break;
    case color === 'orange':
      tradCor = 'Laranja';
      break;
    case color === 'grey':
      tradCor = 'Cinza';
      break;
    case color === 'white':
      tradCor = 'Branco';
      break;
    case color === 'black':
      tradCor = 'Preto';
      break;
    default:
      tradCor = 'Cor desconhecida';
  }

  traduzirResult.textContent = tradCor;
})

// 5. Soma dos 100 números pares:
// Crie um programa que calcule a soma de todos os números pares de 1 a 100 usando um loop for. Em seguida, exiba o resultado no console e no documento HTML.

const somaNumerosPares = document.getElementById('somaNumerosPares');
let total = 0

for(let i = 0; i < 101; i++) {
  if(i % 2 === 0) {
    total = total + i
  }
}

somaNumerosPares.textContent = total;

// 6. Tabuada de Multiplicação:

// Crie um programa que solicite ao usuário um número e, em seguida, use um loop for para exibir a tabuada de multiplicação desse número, indo de 1 até 10. Adicione os números no documento HTML.

const num = document.getElementById('num');
const gerarTabuada = document.getElementById('gerarTabuada');
let tabuadaResult = document.getElementById('tabuadaResult');

gerarTabuada.addEventListener('click', () => {
  const valor = parseInt(num.value, 10); 
  tabuadaResult.innerHTML = '';

  if (isNaN(valor)) {
    tabuadaResult.textContent = 'Por favor, insira um número válido.';
    return;
  }

  for(let i = 1; i < 11; i++) {
    tabuadaResult.innerHTML += i + ' * ' + valor + ' = ' + (i * valor) + '<br>';
  }
})

// 7. Fatorial de um Número:
// Crie um programa que solicite ao usuário um número e, em seguida, use um laço de repetição “for” para calcular e exibir o fatorial desse número. O fatorial de um número n é o produto de todos os inteiros de 1 a n. O usuário não pode entrar com um número maior que 10.

const fat = document.getElementById('fat');
const gerarFatorial = document.getElementById('gerarFatorial');
const fatorialResult = document.getElementById('fatorialResult');

gerarFatorial.addEventListener('click', () => {
  const valor = parseInt(fat.value, 10); 

  if (isNaN(valor) || valor < 1 || valor > 10) {
    fatorialResult.textContent = 'Por favor, insira um número válido.';
    return;
  }

  let acc = 1
  for(let i = 1; i < valor+1; i++) {
    acc *= i
  }

  fatorialResult.textContent = acc
})

// 8. Verificar formulário:
// Crie um formulário com os campos nome e e-mail e um botão de submit. Verifique se o nome e o e-mail estão vazios quando o usuário deixar os campos. Caso os campos estejam vazios, adicionar uma borda vermelha ao redor dos campos, indicando erro.

const dados = document.querySelectorAll('.dados')
const enviarDados = document.getElementById('enviarDados');

dados.forEach(dado => {
  dado.addEventListener('blur', () => {
    if (dado.value === '') {
      dado.classList.add('input-alerta')
    } else {
      dado.classList.remove('input-alerta')
    }
  })
})