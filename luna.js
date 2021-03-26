let temperaturaM=50;
let temperaturam=50;


function calcularLuna(temM,temm){

    let suma=temM+temm;
    let media=suma/2;
    return(media);
}

console.log(calcularLuna(temperaturaM,temperaturam));

let calcularLuna2=(temM,temm)=>((temM+temm)/2);
console.log(calcularLuna2(50,50)) ;