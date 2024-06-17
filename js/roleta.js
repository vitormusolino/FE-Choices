
//Spin-Wheel

let container = document.querySelector(".spin-container");
let btn = document.getElementById("spin");
let number = Math.ceil(Math.random() * 10000);
console.log(number);

let options = [
  "10 pontos", //0
  "Palpites grátis", //1
  "Sem recompensa", //2
  "20 pontos", //3
  "15 pontos", //4
  "Sem recompensa" //5
];

let sectionAngle = 360 / options.length;

btn.addEventListener('click', () => {
    let rotation = number % 360;
    let selectedIndex = Math.floor((rotation + sectionAngle / 2) / sectionAngle) % options.length;
    let selectedOption = options[selectedIndex];
    console.log(selectedOption)

    container.style.transform = "rotate(-" + number + "deg)";
    
    setTimeout(() => {
        if (selectedOption == "Sem recompensa") {
          alert("Voce ficou sem recompensa, tente novamente amanha!")
        }
        else {
          alert(`Parabéns, você ganhou: ${selectedOption}`);
        }
    }, 3500);  // Espera 3 segundos antes de exibir o alerta

    number += Math.ceil(Math.random() * 10000);
    console.log(number);
});