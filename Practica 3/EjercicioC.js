function simularPeticionAPI(){
    return new Promise((resolve => {
        setTimeout(() => {
            resolve("Datos recibidos correctamente");
        },5000);
    }));
}

async function obtenerDatos(){
    console.log("Solicitando datos...");
    try {
        const resultado = await simularPeticionAPI(); // Espera el resultado de la promesa
        console.log(resultado); // Muestra "Datos recibidos correctamente"
    } catch (error) {
        console.error("Error al obtener los datos:", error);
    }
}

obtenerDatos(); // Llama a la función para iniciar la solicitud de datos