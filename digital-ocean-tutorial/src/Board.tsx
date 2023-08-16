import { ReactElement, useState } from "react";
import { BoardState, Piece, Position } from "./model";
import styled from "styled-components";

type BoardProps = {
  board: BoardState;
};

type PieceAlignment = "Player" | "AI" | null;

export const squareIsBlack = ({ x, y }: Position): boolean => (x + y) % 2 === 0;

const isPieceAtPosition = (piece: Piece, position: Position): boolean =>
  piece.position.x === position.x && piece.position.y === position.y;

const isValidMove = (
  from: Position,
  to: Position,
  board: BoardState,
): boolean => {
  if (to.x < 0 || to.x >= 8) return false;
  if (to.y < 0 || to.y >= 8) return false;
  if (squareIsBlack(to)) return false;
  if (Math.abs(to.x - from.x) === 1 && Math.abs(to.y - from.y) === 1)
    return (
      board.playerPieces
        .concat(board.aiPieces)
        .find((piece) => isPieceAtPosition(piece, to)) === undefined
    );
  if (Math.abs(to.x - from.x) === 2 && Math.abs(to.y - from.y) === 2) {
    const midpoint: Position = {
      x: (to.x + from.x) / 2,
      y: (to.x + from.x) / 2,
    };
    return (
      board.aiPieces.find((piece) => isPieceAtPosition(piece, midpoint)) !==
      undefined
    );
  }
  return false;
};

const isPieceAt = (board: BoardState, position: Position): PieceAlignment => {
  if (board.playerPieces.find((piece) => isPieceAtPosition(piece, position)))
    return "Player";
  if (board.aiPieces.find((piece) => isPieceAtPosition(piece, position)))
    return "AI";
  return null;
};

export const indexes = [0, 1, 2, 3, 4, 5, 6, 7];

export const Board = ({ board }: BoardProps): ReactElement => {
  const [selectedPiece, setSelectedPiece] = useState<Piece | null>(null);

  return (
    <GridContainer>
      {indexes.map((x) =>
        indexes.map((y) => (
          <BoardTile
            key={8 * x + y}
            position={{ x, y }}
            onClick={() => {
              const piece = board.playerPieces.find((piece) =>
                isPieceAtPosition(piece, { x, y }),
              );
              if (piece) setSelectedPiece(piece);
              else if (
                selectedPiece &&
                isValidMove(selectedPiece.position, { x, y }, board)
              ) {
              }
            }}
            highlight={
              selectedPiece === null
                ? false
                : isValidMove(selectedPiece.position, { x, y }, board)
            }
          >
            <PieceIcon colour={isPieceAt(board, { x, y })} />
          </BoardTile>
        )),
      )}
    </GridContainer>
  );
};

const BoardTile = styled.button<{ position: Position; highlight: boolean }>`
  display: grid;

  grid-column-start: ${(props) => props.position.x + 1};
  grid-row-start: ${(props) => props.position.y + 1};

  width: 100%;
  height: 100%;

  background-color: ${(props) =>
    squareIsBlack(props.position) ? "#000" : props.highlight ? "#ccf" : "#fff"};

  padding: 0;
  border: 0;
`;

const GridContainer = styled.div`
  display: grid;
  grid-template-rows: repeat(8, fr1);
  grid-template-columns: repeat(8, fr1);

  width: 800px;
  height: 800px;
`;

const PieceIcon = styled.div<{ colour: PieceAlignment }>`
  width: 75px;
  height: 75px;

  border-radius: 50%;

  background-color: ${(props) => (props.colour === "Player" ? "#a33" : "#000")};

  visibility: ${(props) => (props.colour === null ? "hidden" : "visible")};

  align-self: center;
  justify-self: center;
`;
