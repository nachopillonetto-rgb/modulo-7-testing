console.log("FUNCIONA");

const carta = document.getElementById("carta");
const imagen = document.getElementById("imagen");

carta.addEventListener("click", () => {
  imagen.src = "https://picsum.photos/80";
});