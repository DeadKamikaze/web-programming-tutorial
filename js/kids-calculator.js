
function countTo(n) {
    var i = 1
    for (; i <= n; i++) {
        console.info(i);
    }
}
function addNumbers(a, b) {
    console.info('primul numar este ' + a);
    console.info('al doilea numar este ' + b)

    for (; b > 0;) {
        b--; //luam un deget de la b
        a++; //il punem la a
        console.info (a + ' - au mai ramas ' + b + ' degetele ')
    }
    console.info('suma este: ' + a);
}

var count = addNumbers (3, 7);