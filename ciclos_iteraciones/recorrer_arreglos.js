const recorrer_arreglo = () => {
    let nombres = ['Pepe','Juan','José','Jaime'];

    nombres.forEach(element => {
        console.log(element);
    });
}

const boton2 = document.querySelector("#btn_recorrer_arreglo");
boton2.addEventListener("click", recorrer_arreglo);
