function usuario(nome, senha) {
    this.nome = nome
    this.senha = senha
} 

const usuario1 = new usuario("nenhun", "0")
const nome = prompt("qual seu nome de usuario?")
const senha = prompt("qual sua senha?")
  
usuario1['nome'] = nome
usuario1['senha'] = senha

console.log( senha.includes("12345"))



