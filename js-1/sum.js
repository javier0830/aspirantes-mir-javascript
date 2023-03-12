function suma (num) {
    let contador = 1;
    let sumador = 0;
    while (contador <= num) {
        sumador = sumador + contador;
        contador++;            
    }
    return sumador;
}

console.log(suma(4)) // 1 + 2 + 3 + 4 = 10
console.log(suma(10)) // 55
console.log(suma(15)) // 120