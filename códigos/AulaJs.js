let pessoas = [];

for (let i = 0; i < 15; i++) {
  let altura = parseFloat(prompt(`Informe a altura da pessoa ${i + 1}:`));
  let genero = prompt(`Informe o gênero da pessoa ${i + 1} (M ou F):`);

  pessoas.push({ altura, genero });
}

let maiorAltura = Math.max(...pessoas.map((pessoa) => pessoa.altura));
let menorAltura = Math.min(...pessoas.map((pessoa) => pessoa.altura));

let pessoasMasculinas = pessoas.filter((pessoa) => pessoa.genero === "M");
let mediaAlturaMasculina =
  pessoasMasculinas.reduce((acc, pessoa) => acc + pessoa.altura, 0) /
  pessoasMasculinas.length;

let numeroPessoasFemininas = pessoas.filter((pessoa) => pessoa.genero === "F").length;

console.log(`A maior altura do grupo é: ${maiorAltura}`);
console.log(`A menor altura do grupo é: ${menorAltura}`);
console.log(`A média de altura do gênero masculino é: ${mediaAlturaMasculina.toFixed(2)}`);
console.log(`O número de pessoas do gênero feminino é: ${numeroPessoasFemininas}`);
