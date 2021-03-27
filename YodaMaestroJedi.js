let coordenadaFinalX=70;
let coordenadaFinalY=-50;
let coordenadaInicialX=0;
let coordenadaInicialY=0;


function calcularDistancia(xinicial,xfinal,yinicial,yfinal){
    let distancia=Math.sqrt(Math.pow(xfinal-xinicial,2)+Math.pow(yfinal-yinicial,2));
    return(distancia);
}
console.log(calcularDistancia(coordenadaInicialX,coordenadaFinalX,coordenadaInicialY,coordenadaFinalY));


let calcularDistancia2=(xinicial,xfinal,yinicial,yfinal)=>Math.sqrt((Math.pow(xfinal-xinicial,2))+(Math.pow(yfinal-yinicial,2)));
console.log(calcularDistancia2(0,70,0,50));

