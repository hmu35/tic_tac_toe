let currentPlayer = 'X';
const cells = document.querySelectorAll('.cell');

function makeMove(row, col) {
  const cell = cells[row * 3 + col];
  if (!cell.textContent) {
    cell.textContent = currentPlayer;
    checkWinner();
    currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
  }
}
function checkWinner() {
  const winningCombos = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
    [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
    [0, 4, 8], [2, 4, 6] // Diagonals
  ];

  for (const combo of winningCombos) {
    const [a, b, c] = combo;
    if (cells[a].textContent && cells[a].textContent === cells[b].textContent && cells[a].textContent === cells[c].textContent) {
      cells[a].style.backgroundColor = '#8ac';
      cells[b].style.backgroundColor = '#8ac';
      cells[c].style.backgroundColor = '#8ac';
      disableCells();
      return; 
    }
  }
}

function disableCells() {
  cells.forEach(cell => cell.removeEventListener('click', makeMove));
}

cells.forEach(cell => cell.addEventListener('click', makeMove));
