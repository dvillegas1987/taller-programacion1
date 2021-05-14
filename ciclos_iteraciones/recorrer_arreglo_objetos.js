const recorrer_objetos = () => {
    let misobjetos = [
        {
            nombre:'Pepe',
            apellido:'Argento'
        },
        {
            nombre:'Juan',
            apellido:'Perez'
        }
    ];

    miobjetos.forEach(element => {
        console.log(`
            Mi nombre es: ${element.nombre}
            Mi apellido es: ${element.apellido}
        `);
    });
}


//alternativa a document.querySelector()
document.getElementById("btn_recorrer_objetos");
