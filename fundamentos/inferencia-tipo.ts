let quantidade = 20;
// quantidade = 'qualquer'; -> não compila!

let x = [1, 2, null];
// x[0] = true; -> Não copila!

// Contestual Typing
window.onmousedown = function(evento) {
    console.log(evento.button);
}