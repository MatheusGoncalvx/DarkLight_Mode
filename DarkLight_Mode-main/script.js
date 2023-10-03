function doDemo() {
  var square = document.getElementById("square");
  var button = document.querySelector(".dark-mode-button");
  var interface = document.getElementById("interface");

  if (square.style.backgroundColor == "black") {
    square.style.backgroundColor = "rgb(191, 239, 255)"; // Volta para a cor original
    button.innerText = "ESCURO"; // Muda o texto do botão de volta para ESCURO
    interface.style.backgroundColor = "white";
    interface.style.color = "black";

  } else {
      square.style.backgroundColor = "black"; // Define a cor para preto (modo escuro)
      button.innerText = "CLARO"; // Muda o texto do botão para CLARO

    // Altera a cor de fundo da div#interface para cinza escuro
    interface.style.backgroundColor = "#444";
    interface.style.color = "white";
  }
}