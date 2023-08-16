import { Board, indexes, squareIsBlack } from "./Board";
import { useState } from "react";
import { BoardState } from "./model";

export const App = () => {
  const startingBoard: BoardState = {
    playerPieces: indexes.flatMap((x) =>
      [0, 1, 2]
        .map((y) => ({ isCrowned: false, position: { x, y } }))
        .filter((piece) => !squareIsBlack(piece.position)),
    ),
    aiPieces: indexes.flatMap((x) =>
      [5, 6, 7]
        .map((y) => ({ isCrowned: false, position: { x, y } }))
        .filter((piece) => !squareIsBlack(piece.position)),
    ),
  };
  const [board, setBoard] = useState(startingBoard);

  return <Board board={board} setBoard={setBoard} />;
};
