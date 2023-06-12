import { GameBoard } from "../index";

test("ship array", () => {
  const shipArray = GameBoard.createShips();
  expect(shipArray.length).toBe(10);
});

test("board array", () => {
  const boardArray = GameBoard.createBoard();
  expect(boardArray.length).toBe(100);
});
