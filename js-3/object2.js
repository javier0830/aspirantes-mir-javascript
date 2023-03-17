const persona = {
    nombre: "Sandra",
    edad: 25,
    ciudad: "Armenia",
    profesion: "Psicologa"
}

console.log(persona)

function presentacion(object) {    
    return ("nombre "+object.nombre+", edad "+object.edad+", ciudad "+object.ciudad);
}       

mensaje = presentacion(persona);

console.log(mensaje);

persona.hobbies = ["leer", "yoga", "musica", "pintar"];

console.log(persona.hobbies);

for (let i = 0; i < persona.hobbies.length; i ++) {
    let frase = "";
    frase += persona.hobbies[i];
    console.log(frase);
}