
let aprendiz={
    nombre:"Liz",
    edad:15,
    estatura:1.99,
    planeta:"Sol"
}

function asignarAprendices(edad,asignar){

    if (edad<=15){

       let menor = "El  Padawans tiene "+edad+ " años";
       asignar(null,menor);
    }else{

        if(edad>15){
       let mayor = "El  Padawans tiene " +edad+ " años";
       asignar(mayor,null);
        }
   }
}

asignarAprendices(aprendiz.edad,function(mayor,menor){

   if (mayor){
       console.log(mayor);
       console.log("Se le asignara la actividad : Manejo del sable de luz");
   }else{
       console.log(menor);
       console.log("Se le asignara la actividad: Manejo de la fuerza");
   }  
});