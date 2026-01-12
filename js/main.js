const switchButton = document.getElementById("switch");
console.log(switchButton);

const lightUp = document.getElementById("lightbulb");
console.log(lightUp);

switchButton.addEventListener("click", function () {
  if (switchButton.innerHTML === "Accendi") {
    lightUp.src = "./img/yellow_lamp.png";
    switchButton.innerHTML = "Spegni";
  } else {
    lightUp.src = "./img/white_lamp.png";
    switchButton.innerHTML = "Accendi";
  }
});
