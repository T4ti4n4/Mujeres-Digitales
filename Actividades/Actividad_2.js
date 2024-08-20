const libro = {
    nombre: "Nosotros en la luna",
    autor: "Alice Kellen",
    publi: 2020
};

const libroJson = JSON.stringify(libro);
console.log(libroJson);

const libroObjeto = JSON.parse(libroJson);
console.log(libroObjeto);

// Llamo a localStorage y llamo la constante

localStorage.setItem("libro", JSON.stringify(libro));

const libroGuardado = JSON.parse(localStorage.getItem("libro"));
console.log(libroGuardado);


