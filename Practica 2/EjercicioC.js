const personas = [
    {nombre: "Ana", edad: 22},
    {nombre: "Luis", edad: 35},
    {nombre: "Maria", edad: 28},
];

const personaLuis = personas.find(persona => persona.nombre === "Luis");

personas.forEach(persona => {
    console.log(`Nombre: ${persona.nombre}, Edad: ${persona.edad}`);
});

const totalEdades = personas.reduce((total, persona) => total + persona.edad, 0);
console.log(`Suma total de edades: ${totalEdades}`);