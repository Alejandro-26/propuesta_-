const Sibtn = document.querySelector("#Sibtn");

Sibtn.addEventListener("click", function(){
    alert("bendito sea el Año, el Punto, el Dia, La Estacion, el Lugar, el Mes, la hora y el Pais, en el cual tu encantadora mirada encendio la luz del alma miaaa.")
});

const Nobtn = document.querySelector("#Nobtn");

Nobtn.addEventListener("mouseover", function(){

    const randomX = parseInt(Math.random()*50);
    const randomY = parseInt(Math.random()*50);

    Nobtn.style.setProperty("top",randomY + "%")
    Nobtn.style.setProperty("left",randomX + "%")
    Nobtn.style.setProperty("transform", "translate(-${randomX}%,-${randomY}%)");
})