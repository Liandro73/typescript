// boolean
var estaPago = true;
// number
var idade = 29;
var valor = 29.99;
// string
var empresa = 'AlgarWorks';
var nome = 'Dernival';
console.log("Ol\u00E1, meu nome \u00E9 " + nome + " e tenho " + idade + " anos");
// 'Olá, meu nome é ' + nome + ' e tenho ' + idade + ' anos'
// arrays
var notas = [8, 6, 7, 9];
// tuple
var alunos = ['Dernival', 10, 'Matemática'];
console.log(alunos[0]);
console.log(alunos[1]);
// Enum
var Cor;
(function (Cor) {
    Cor[Cor["Verde"] = 0] = "Verde";
    Cor[Cor["Amarelo"] = 1] = "Amarelo";
    Cor[Cor["Azul"] = 2] = "Azul";
    Cor[Cor["Branco"] = 3] = "Branco";
})(Cor || (Cor = {}));
;
var corFundo = Cor.Verde;
// Any
var algumValor = 4;
algumValor = 'Agora é uma string';
algumValor = true;
// Biblioteca de terceiros...
// Migração de JavaScript para TypeScript...
// Outro exemplo: Array com vários tipos de dados
// void
function alerta() {
    //... alert('Operação não permitida);
}
// null e undefined -> Não faz muito sentido!
var u = undefined;
var n = null;
// null e undefined são subtipos dos outros tipos
nome = undefined;
nome = null;
