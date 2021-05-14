const mostrar_arreglo = () => {
    let miarreglo = [25,88,100,11];
    console.log(miarreglo[3]);
}

const boton = document.querySelector("#btn_mostrar_arreglo");
boton.addEventListener("click", mostrar_arreglo );

