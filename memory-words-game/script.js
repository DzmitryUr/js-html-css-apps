const words = [
  "apple",
  "banana",
  "orange",
  "grape",
  "strawberry",
  "melon",
  "peach",
  "pear",
  "kiwi",
  "pineapple",
  "blueberry",
  "cherry",
  "mango",
  "lemon",
  "lime",
  "coconut",
];

const gameField = document.getElementById("gameField");

function createCard(word) {
  const card = document.createElement("div");
  card.classList.add("card");
  card.innerHTML = `<div class="word visible">${word}</div>`;
  return card;
}

function resetGame() {
  gameField.innerHTML = "";
  const randomWords = [...words].sort(() => Math.random() - 0.5);
  randomWords.forEach((word) => {
    const card = createCard(word);
    gameField.appendChild(card);
  });
}

function hideWords() {
  getWords().forEach((word) => word.classList.remove("visible"));
}

function showWords() {
  getWords().forEach((word) => word.classList.add("visible"));
}

function getWords() {
  return document.querySelectorAll(".word");
}

resetGame();

document.getElementById("btnReset").addEventListener("click", resetGame);
document.getElementById("btnHideWords").addEventListener("click", hideWords);
document.getElementById("btnShowWords").addEventListener("click", showWords);
