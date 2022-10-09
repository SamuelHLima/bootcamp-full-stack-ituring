// primeiro exercicio
let nome = "SamuelHenrique"
let email = "samuelhenrique89@hotmail.com"
let profissao = "analistatecnico"
let idade = 32
let Lugar = "maldivas"

const tipoNome = typeof(nome)
const tipoEmail = typeof(email)
const tipoProfissao = typeof(profissao)
const TipoIdade = typeof(idade)
const TipoLugar = typeof(Lugar)

let verdadeiro = nome != tipoNome
let verdadeiro1 = email != tipoEmail
let verdadeiro2 = profissao != tipoProfissao
let falso = idade == TipoLugar
let verdadeiro3 = Lugar != TipoLugar

console.log(verdadeiro)
console.log(verdadeiro1)
console.log(verdadeiro2)
console.log(falso)
console.log(verdadeiro3)

