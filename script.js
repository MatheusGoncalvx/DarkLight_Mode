function doDemo() {
  var square = document.getElementById("square");
  var button = document.querySelector(".dark-mode-button");
  if (square.style.backgroundColor === "black") {
    square.style.backgroundColor = "rgb(191, 239, 255)"; // Volta para a cor original
    button.innerText = "ESCURO"; // Muda o texto do botão de volta para ESCURO
  } else {
    square.style.backgroundColor = "black"; // Define a cor para preto (modo escuro)
    button.innerText = "CLARO"; // Muda o texto do botão para CLARO
  }
}
