//Infredientes == velocidad en KM /H
function TranformarVelocidad(velocidadInicial,calcularaltura){

    let velocidadTransformada= (velocidadInicial *1000)/3600;
    calcularaltura=(velocidadTransformada,calculo,gravedad);

}

TranformarVelocidad(100,function(){

    let velocidadCuadrado=Math.pow(velocidadInicial,2);
    let anguloCuadrado=(Math.pow(Math.sin(PI/3),2)); 
    let gravedaDoble=2*50;

    let alturaMaxima=(velocidadCuadrado*anguloCuadrado)/gravedaDoble;
    console.log("La altura maxima es de " + alturaMaxima);
});


TranformarVelocidad(100,function(){   
    let alturaMaxima=(Math.pow(velocidadInicial,2)*Math.pow(Math.sin(PI/3),2))/2*50;//100
    console.log("La altura maxima es de " + alturaMaxima);
});

