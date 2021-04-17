function robarPlanos(idplano,despegar){

     if (idplano>0 && idplano<=10){

        let mensaje = "El plano que se consiguio fue "+idplano;
        despegar(null,mensaje);
     }else{
        let error ="Pilas!! no te has robado un plano real ";
        despegar(error,null);
    }
}

robarPlanos(1,function(error,mensajeOK){

    if (error){
        console.log(error);
        console.log("Nos quedamos camellando");
    }else{
        console.log(mensajeOK);
        console.log("Estamos despegando");
    }  
});