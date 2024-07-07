const squares = document.querySelectorAll('.square');
const statusText = document.getElementById('status');
const restartBtn = document.getElementById('restartBtn');

let board = Array(9).fill('');
let currentPlayer = 'X';
let isGameActive = true;

const TIE = 'TIE';

const calculateWinner = (board) => {
  const winningConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (const [a, b, c] of winningConditions) {
    if (board[a] && board[a] === board[b] && board[a] === board[c]) {
      return board[a];
    }
  }

  if (!board.includes('')) {
    return TIE;
  }

  return null;
};

const announceWinner = (winner) => {
  if (winner === TIE) {
    statusText.innerText = TIE;
  } else {
    statusText.innerText = `Winner: ${winner}`;
  }
};

const changePlayer = () => {
  currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
  setStatusText();
};

const setStatusText = () => {
  statusText.innerText = `Next Player: ${currentPlayer}`;
};

const updateBoard = (index) => {
  board[index] = currentPlayer;
};

const isValidAction = (square) => {
  if (square.innerText) {
    return false;
  }
  return true;
};

const makeAction = (square, index) => {
  if (isGameActive && isValidAction(square)) {
    square.innerText = currentPlayer;
    square.classList.add(`player${currentPlayer}`);
    updateBoard(index);
    const winner = calculateWinner([...board]);
    console.log(winner);
    if (winner) {
      isGameActive = false;
      announceWinner(winner);
    } else {
      changePlayer();
    }
  }
};

const restartGame = () => {
  board = Array(9).fill('');
  isGameActive = true;

  if (currentPlayer === 'O') {
    changePlayer();
  } else {
    setStatusText();
  }

  squares.forEach((square) => {
    square.innerText = '';
    square.classList.remove('playerX');
    square.classList.remove('playerO');
  });
};

squares.forEach((square, index) => {
  square.addEventListener('click', () => makeAction(square, index));
});

restartBtn.addEventListener('click', restartGame);

setStatusText();
