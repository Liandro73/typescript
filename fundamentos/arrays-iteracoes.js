var notasAlunos = [10, 8, 8.5, 7];
// valores
// índices - in
for (var i in notasAlunos) {
    console.log(i);
}
// valores - of
for (var _i = 0, notasAlunos_1 = notasAlunos; _i < notasAlunos_1.length; _i++) {
    var notasAluno = notasAlunos_1[_i];
    console.log(notasAluno);
}