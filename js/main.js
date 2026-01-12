const switchButton = document.getElementById("switch");
console.log(switchButton);

const lightUp = document.getElementById("lightbulb");
console.log(lightUp);

const main = document.querySelector(".text-center");

let counterClick = 0;

switchButton.addEventListener("click", function () {
  counterClick++;
  console.log("counterClick:", counterClick);

  if (switchButton.innerHTML === "Accendi") {
    lightUp.src = "./img/yellow_lamp.png";
    switchButton.innerHTML = "Spegni";
  } else {
    lightUp.src = "./img/white_lamp.png";
    switchButton.innerHTML = "Accendi";
  }

  if (counterClick === 20) {
    lightUp.src = "";
    lightUp.alt = "";
    main.innerHTML = "Si è fulminata :(";

    switchButton.addEventListener("click", function () {
      alert(
        "E' inutile che continui a cliccare, non vedi che la lampadina si è fulminata?!?!"
      );
    });
  }
});
