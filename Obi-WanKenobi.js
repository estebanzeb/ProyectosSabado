

let PilotoNave1 = "ARQ2555: Sara Bel-Sun";
let PilotoNave2 = "ARQ2556: Nodin Chavdri";
let PilotoNave3 = "ARQ2557: Finn";

separador = " ", 
limite1   = 3,
limite2   = 2,

arregloSeparador1 = PilotoNave1.split(separador, limite1);
arregloSeparador2 = PilotoNave2.split(separador, limite1);
arregloSeparador3 = PilotoNave3.split(separador, limite2);


console.log(arregloSeparador1[1],arregloSeparador1[2]); 
console.log(arregloSeparador2[1],arregloSeparador2[2]);
console.log(arregloSeparador3[1]);


let arregloSeparadorFlecha =(PilotoNave1,PilotoNave2,PilotoNave3)=>PilotoNave1.split(separador, limite1) = PilotoNave2.split(separador, limite1)= PilotoNave3.split(separador, limite1);
console.log(arregloSeparador1[1],arregloSeparador1[2]); 