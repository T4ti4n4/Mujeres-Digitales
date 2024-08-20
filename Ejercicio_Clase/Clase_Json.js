const libro = {
    nombre: "Nosotros en la luna",
    autor: "Alice Kellen",
    publi: 2020
};

const libroJson = JSON.stringify(libro);
console.log(libroJson);

const libroObjeto = JSON.parse(libroJson);
console.log(libroObjeto);