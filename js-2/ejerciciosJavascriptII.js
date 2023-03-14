function sum(array) {
    let sumador = 0;
    for (let i = 0; i < array.length; i ++) {
        sumador += array[i];
    }
    return sumador
}
console.log(sum([1, 2, 3])) // 6
console.log(sum([10, 8, 12, 5])) // 35
console.log(sum([])) // 0

function max (array) {
    let maxNum = array[0];
    for (let i = 0; i < array.length; i ++) {      
        if (array[i] > maxNum) {
            maxNum = array[i];
        }         
    }
    return maxNum    
}
console.log(max([1, 3, 2])) // 3
console.log(max([10, 9, 8, 7, 6, 5, 4])) // 10
console.log(max([])) // 0

function maxIndex (array) {
    let maxNum = array[0];
    let posicion = 0;
    if (array.length == 0) {
        posicion = -1
    }else
        for (let i = 0; i < array.length; i ++) {      
            if (array[i] > maxNum) {
                maxNum = array[i];
                posicion = i;
            }         
        }
    return posicion    
}
console.log(maxIndex([1, 3, 2])) // 1
console.log(maxIndex([10, 9, 8, 7, 6, 5, 4])) // 0
console.log(maxIndex([])) // -1

function join (array) {
    let frase = "";
    for (let i = 0; i < array.length; i ++) {
        frase += array[i] + " ";
    }
    return frase
}
console.log(join([1, "Manzana", true]))
console.log(join([]))
console.log(join(["El", "perro", "juega", "con", "la", "pelota"]))