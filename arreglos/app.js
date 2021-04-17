//1. Arreglo
let cajonera=["Carne","Queso","Lechuga"];
/*console.log(cajonera[0]);*/

let cajonera2=Array("Carne","Queso","Leche");


//2. objeto
let bolsa={
    Proteinas:["Carne","Queso"],
    Vegetales:["Lechuga","Tomate"],
    Acompañante:["Salsa"],
    Carboidratos:["Pan"],
};

/*console.log(bolsa.Proteinas);*/

let hoteles=[
    {id:"hot001",nombre:"Hilton Garden", region:"caribe",costoNoche:250000,disponible:true,estrellas:5},
    {id:"hot002",nombre:"Hotel madre selva", region:"Amazonas",costoNoche:85000,disponible:true,estrellas:3},
    {id:"hot003",nombre:"Mercure Santa marta", region:"caribe",costoNoche:227000,disponible:true,estrellas:4},
    {id:"hot004",nombre:"Hotel Nuquimar", region:"pacifico",costoNoche:100000,disponible:true,estrellas:3},
    {id:"hot005",nombre:"Cabaña la marea", region:"pacifico",costoNoche:15000,disponible:true,estrellas:3},
    {id:"hot006",nombre:"Reserva natural Tanimboca", region:"Amazonas",costoNoche:30000,disponible:true,estrellas:3}
];

//Cree un nuevo arreglo con los hoteles de la region caribe

let resultado;
//Esta recorriendo la variable HOTELES
//BUSCAR VARIOS
/*resultado = hoteles.filter(function(hotel){
    return (hotel.region=="caribe");
});
console.log(resultado);*/


//Esta recorriendo la variable HOTELES
//BUSCA UNO EN ESPECIFICO
resultado = hoteles.find(function(hotel){
    return (hotel.id=="hot005");
});

console.log(resultado);


//Esta recorriendo la variable HOTELES
/*let resultado = hoteles.filter((hotel)=>hotel.region=="caribe");

console.log(resultado);*/

