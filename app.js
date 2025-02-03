// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let friends = [];
const Button = document.querySelector("#draw-button");
const Input = document.querySelector("#friends-input");
const Reset = document.querySelector("#reset-button");
const Result = document.querySelector("#result");

// Función para ordenar amigos
function SortedFriends() {
  // Limpiamos los espacios y separamos por comas
  friends = Input.value.split(",").map(friend => friend.trim()).filter(friend => friend !== "");
  
  if (friends.length < 2) {
    alert("¡Ingresa al menos dos amigos para crear un amigo secreto!");
    return;
  }

  // Creamos un arreglo de amigos para no repetir resultados
  let remainingFriends = [...friends];
  let drawnFriends = {};

  // Realizamos el sorteo sin repeticiones
  const drawSecretFriend = (friend) => {
    const randomIndex = Math.floor(Math.random() * remainingFriends.length);
    const drawnFriend = remainingFriends[randomIndex];
    drawnFriends[friend] = drawnFriend;
    remainingFriends.splice(randomIndex, 1); // Eliminamos al amigo sorteado de la lista
  };

  // Sorteo para todos los amigos
  friends.forEach(drawSecretFriend);

  // Mostramos el resultado
  let resultText = "<ul>";
  for (let friend in drawnFriends) {
    resultText += `<li><strong>${friend}</strong> -> ${drawnFriends[friend]}</li>`;
  }
  resultText += "</ul>";

  Result.innerHTML = resultText;
  Result.classList.add("result-background");
}

// Función para resetear los valores
function ResetValues() {
  Input.value = "";
  friends = [];
  Result.innerHTML = "Tu amigo secreto es: [  ]";
  Result.classList.remove("result-background");
}

Button.addEventListener("click", SortedFriends);
Reset.addEventListener("click", ResetValues);
