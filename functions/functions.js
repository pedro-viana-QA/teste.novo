var nameList = [
    "João", "Maria", "José", "Ana", "Francisco", "Antônio", "Carlos", "Paulo", "Lucas", "Pedro",
    "Marcos", "Rafael", "Gabriel", "Gustavo", "Thiago", "Fernando", "Ricardo", "Fábio", "Rodrigo", "Bruno",
    "Vinícius", "Luís", "Felipe", "Eduardo", "Henrique", "Júlio", "Vitor", "Diego", "André", "Leandro",
    "Marcelo", "Daniel", "Alexandre", "Leonardo", "César", "Roberto", "Sérgio", "Maurício", "Rogério", "Renato",
    "Mário", "Osvaldo", "Gilberto", "Davi", "Hugo", "Márcio", "Alberto", "Wesley", "Rui", "Samuel",
    "Luciano", "Ivan", "Otávio", "Ronaldo", "Aline", "Camila", "Juliana", "Bruna", "Letícia", "Fernanda",
    "Patrícia", "Carla", "Carolina", "Daniele", "Andréia", "Michele", "Renata", "Gabriela", "Débora", "Larissa",
    "Isabela", "Cláudia", "Sandra", "Elaine", "Roberta", "Tatiane", "Cristiane", "Simone", "Adriana", "Viviane",
    "Tatiana", "Jéssica", "Priscila", "Paula", "Vanessa", "Mariana", "Marta", "Vera", "Sônia", "Rita",
    "Helena", "Luciana", "Mônica", "Regina", "Eliane", "Rosana", "Silvana", "Susana", "Sueli", "Márcia",
    "Tereza", "Graça", "Neusa", "Edna", "Alessandra", "Solange", "Ivone", "Joana", "Zilda", "Lúcia"
  ];

  

let i = Math.floor(Math.random()* 100)
console.log(i)

nome = nameList[i]


const retornaNome = (nome) =>{ return `O nome do usuário é ${nome} `}  

console.log(retornaNome(nome))