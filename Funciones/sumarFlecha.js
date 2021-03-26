//Tradiciional
function sumarNumero (numero1, numero2, numero3, numero4){
  
    return((numero1+numero2)+(numero3+numero4));
}

//Flecha
/*let sumarNumeros2=(numero1,numero2,numero3,numero4)=>{
    return((numero1+numero2)+(numero3+numero4));
}
console.log(sumarNumeros2(1,1,2,1)); */

let sumarNumeros2=(numero1,numero2,numero3,numero4)=>(numero1+numero2)+(numero3+numero4);
console.log(sumarNumeros2(1,1,2,1));

