let tablero = '';
for (let i = 0; i < 8; i++) {
    let fila = '';
    for (let a = 0; a < 8; a++) {
        if ((i + a) % 2 === 0) {
            fila += '#';
        } else {
            fila += ' ';
        }
    }
    tablero += fila + '\n';
}
console.log(tablero);
