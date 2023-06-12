const Ship = (length, sunk, hitNumber) => {
  const hit = () => {
    hitNumber += 1;
  };

  const isSunk = () => {
    if (hitNumber === length) {
      sunk = true;
    }
  };

  return {
    length,
    isSunk,
    hitNumber,
    hit,
    sunk,
  };
};

const Player = (name, turn) => {
  return { name, turn };
};

const GameBoard = (() => {
  let boardArrayOne = Array(10)
    .fill(null)
    .map((x) => Array(10).fill(null));

  let boardArrayTwo = Array(10)
    .fill(null)
    .map((x) => Array(10).fill(null));

  const createBoard = () => {
    const gameBoardOne = document.querySelector(".player-one-board");
    gameBoardOne.innerHTML = "";

    const gameBoardTwo = document.querySelector(".player-two-board");
    gameBoardTwo.innerHTML = "";

    for (let i = 0; i < 100; i++) {
      const box = document.createElement("div");
      box.id = `${i}`;
      gameBoardOne.appendChild(box);
      box.addEventListener("click", () => ReceiveAttack(i));
    }

    for (let i = 0; i < 100; i++) {
      const box = document.createElement("div");
      box.id = `${i}`;
      gameBoardTwo.appendChild(box);
      box.addEventListener("click", () => ReceiveAttack(i));
    }
  };

  const ReceiveAttack = (i) => {
    const hitArray = [];
    hitArray.push(i);
    console.log("a");
  };

  const placeShip = (length, x, y, alignment) => {
    let ships = [];
    Ship(length, false, 0);
    ships.push(Ship);
  };

  const createShips = () => {
    let ships = [];
    for (let i = 0; i < 4; i++) {
      const shipOne = Ship(1, false, 0);
      ships.push(shipOne);
    }

    for (let i = 0; i < 3; i++) {
      const shipTwo = Ship(2, false, 0);
      ships.push(shipTwo);
    }

    for (let i = 0; i < 2; i++) {
      const shipThree = Ship(3, false, 0);
      ships.push(shipThree);
    }

    const shipFour = Ship(4, false, 0);
    ships.push(shipFour);
    console.log(ships);

    return ships;
  };

  return {
    ReceiveAttack,
    createShips,
    createBoard,
    // /boardArray,
  };
})();

const Game = () => {
  GameBoard.createBoard();
};

Game();

export { GameBoard };
