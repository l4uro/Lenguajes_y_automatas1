const saludar =() =>{
return "hola a todos";
}

let persona = {
    nombre: "juan",
    apellido: "perez",
    edad: 25,
    peso: 60.5,
    hobbies: ["musica", "futbol", "internet"],
    saludar
};

persona.apellido = "perez sosa";
console.log(persona.nombre + " "+ persona.apellido);
console.log(persona.hobbies);
console.log(persona.saludar);

//arreglo de objetos
let frutas =[
    {
    nombre: "grosella",
    familia: "saxi fragaceas",
    calorias: 29.3
},
{
    nombre: "limon",
    familia: "rutaceas",
    calorias: 40.2
},
{
    nombre: "piña",
    familia: "Bromeliaceas",
    calorias: 46
}
];

for (let i=0; i<frutas.length; i+=1){
    console.log(frutas[i]);
}

