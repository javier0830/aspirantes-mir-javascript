const receta = {}

receta.nombre = "Sandwich";

receta.ingredientes = [];

receta.ingredientes.ingre1 = {    
        nombre: "Pan",
        cantidad: 2    
}
receta.ingredientes.ingre2 = {
        nombre: "Queso",
        cantidad: 1
    }

console.log(receta.ingredientes.ingre1);

function sumaDeIngredientes (object) {
    return  object.ingredientes.ingre1.cantidad + object.ingredientes.ingre2.cantidad
}

console.log(sumaDeIngredientes(receta));

