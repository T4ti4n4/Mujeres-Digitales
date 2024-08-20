let hora = 13;

if (hora >= 6 && hora <= 12) {
    console.log("Buenos días");
}else if(hora > 12 && hora <=18){
    console.log("Buenas tardes");
}else if(hora > 18 && hora <= 24){
    console.log("Buenas noches");
}else{
    console.log("La hora está fuera del rango estimado...");
}