(function () {
  let pantalla = document.querySelector(".pantalla");
  let botones = document.querySelectorAll(".btn");
  let borrar = document.querySelector(".btn-borrar");
  let igual = document.querySelector(".btn-igual");

  botones.forEach(function (boton) {
    boton.addEventListener("click", function (e) {
      let valor = e.target.dataset.num;
      pantalla.value += valor;
    });
  });

  igual.addEventListener("click", function (e) {
    if (pantalla.value === "") {
      pantalla.value = "porfavor ingresa un valor";
    } else {
      let resultado = eval(pantalla.value);
      pantalla.value = resultado;
    }
  });

  borrar.addEventListener("click", function (e) {
    pantalla.value = "";
  });
})();
