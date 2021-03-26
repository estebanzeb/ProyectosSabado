let temperaturaMaxima=5489561;
let temperaturaminima=5014;


function calcularLuna(temM,temm){

    let suma=temM+temm;
    let media=suma/2;
    return(media);
}

console.log(calcularLuna(temperaturaMaxima,temperaturaminima));

let calcularLuna2=(temM,temm)=>((temM+temm)/2); let temperaturaMedia= calcularLuna2(temperaturaMaxima,temperaturaminima); console.log(`La temperatura de la luna es de ${temperaturaMedia}`);



