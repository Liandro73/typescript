// boolean
let estaPago: boolean = true;

// number
let idade: number = 29;
let valor: number = 29.99;

// string
let empresa: string = 'AlgarWorks';

let nome: string = 'Dernival';
console.log(`Olá, meu nome é ${nome} e tenho ${idade} anos`);
// 'Olá, meu nome é ' + nome + ' e tenho ' + idade + ' anos'

// arrays
let notas: number[] = [8, 6, 7, 9];

// tuple
let alunos: [string, number, string] = ['Dernival', 10, 'Matemática'];
console.log(alunos[0]);
console.log(alunos[1]);

// Enum
enum Cor {Verde, Amarelo, Azul, Branco};
let corFundo: Cor = Cor.Verde;

// Any
let algumValor: any = 4;
algumValor = 'Agora é uma string';
algumValor = true;
// Biblioteca de terceiros...
// Migração de JavaScript para TypeScript...
// Outro exemplo: Array com vários tipos de dados

// void
function alerta(): void {
    //... alert('Operação não permitida);
}

// null e undefined -> Não faz muito sentido!
let u: undefined = undefined;
let n: null = null;
// null e undefined são subtipos dos outros tipos

nome = undefined;
nome = null;