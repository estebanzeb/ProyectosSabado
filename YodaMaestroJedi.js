
//entradas
let coordenadaFinalX=70;
let coordenadaFinalY=-50;
let coordenadaInicialX=0;
let coordenadaInicialY=0;

//Funcion
function calcularDistancia(xinicial,xfinal,yinicial,yfinal){

    //1.restando cantidades
    let coordenadasX=xfinal-xinicial;
    let coordenadasY=yfinal-yinicial;

    //2.Elevando al cuadrado cada resta
    let cuadradoX=Math.pow(coordenadasX,2);
    let cuadradoY=Math.pow(coordenadasY,2);

    //3.Sumando los cuadrados obtenidos
    let sumaTotal=cuadradoX+cuadradoY;

    //4. obtengo la raiz cuadrada de la suma total
    let distancia=Math.sqrt(sumaTotal);

    return(distancia);
    
}

console.log(calcularDistancia(coordenadaInicialX,coordenadaFinalX,coordenadaInicialY,coordenadaFinalY));


let calcularDistancia2=(xinicial,xfinal,yinicial,yfinal)=>Math.sqrt((Math.pow(xfinal-xinicial,2))+(Math.pow(yfinal-yinicial,2)));
console.log(calcularDistancia2(0,70,0,50));


let sumarNumeros2=(numero1,numero2,numero3,numero4)=>(numero1+numero2)+(numero3+numero4);
console.log(sumarNumeros2(1,1,2,1));