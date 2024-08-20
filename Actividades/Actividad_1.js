// Primera parate para mostrar los números hasta el 10
for (let i = 1; i <= 10; i++) {
    console.log(i);
} 
// Segunda parte del código, para mostar los números mayores a 5
let contador = 0;
for (let i = 1; i <= 10; i++) {
    if (i > 5) {
        contador++;
    }
}
console.log(`Números mayores que 5: ${contador}`);

