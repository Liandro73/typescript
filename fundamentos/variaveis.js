// var, let e const
// var
function iniciarTime(iniciaJogo) {
    var nome = 'Messi e amigos';
    if (iniciaJogo) {
        var cidade = 'em Uberlândia';
    }
    console.log(nome + " v\u00E3o jogar " + cidade);
}
iniciarTime(true);
// let
function iniciarTime1(iniciaJogo1) {
    var nome1 = 'Messi e amigos';
    var cidade1 = 'em São Paulo';
    if (iniciaJogo1) {
        cidade1 = 'em Uberlândia';
    }
    console.log(nome1 + " v\u00E3o jogar " + cidade1);
}
iniciarTime1(false);
// const
function iniciarTime2(iniciaJogo2) {
    var nome2 = 'Messi e amigos';
    var cidade2 = 'em Brasília';
    if (iniciaJogo2) {
        cidade2 = 'em Rio de Janeiro';
    }
    // Não é possível atribuir outro valor a 'nome2' porque é uma constante.
    // nome2 = 'Ronaldo e amigos';
    console.log(nome2 + " v\u00E3o jogar " + cidade2);
}
iniciarTime2(false);
