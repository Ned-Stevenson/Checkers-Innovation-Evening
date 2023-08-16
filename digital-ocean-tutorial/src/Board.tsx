import {ReactElement, useState} from "react";
import {BoardState, Piece, Position} from "./model";
import styled from "styled-components";

type BoardProps = {
    board: BoardState
}

type PieceAlignment = "Player" | "AI" | null

export const squareIsBlack = ({x, y}: Position): boolean => ((x+y)%2 === 0)

const isPieceAt = (board: BoardState, position: Position): PieceAlignment => {
    if (board.playerPieces.find(piece => piece.position.x === position.x && piece.position.y === position.y)) return "Player"
    if (board.aiPieces.find(piece => piece.position.x === position.x && piece.position.y === position.y)) return "AI"
    return null
}

export const indexes = [0,1,2,3,4,5,6,7]

export const Board = ({board}: BoardProps): ReactElement => {
    const [selectedPiece, setSelectedPiece] = useState<Piece|null>(null)

    return (
        <GridContainer>
            {indexes.map(x =>
                indexes.map(y =>
                    <BoardTile
                        key={8*x+y}
                        x={x}
                        y={y}
                    >
                        <PieceIcon colour={isPieceAt(board, {x,y})} />
                    </BoardTile>
                )
            )}
        </GridContainer>
    )
}

const BoardTile = styled.button<Position>`
  display: grid;
  
  grid-column-start: ${props => props.x+1};
  grid-row-start: ${props => props.y+1};
  
  width: 100%;
  height: 100%;

  background-color: ${props => squareIsBlack(props) ? "#000" : "#fff"};
  
  align-content: center;
  font-size: xx-large;
  
  padding: 0;
  border: 0;
`

const GridContainer = styled.div`
  display: grid;
  grid-template-rows: repeat(8, fr1);
  grid-template-columns: repeat(8, fr1);
  
  width: 800px;
  height: 800px;
`

const PieceIcon = styled.div<{colour: PieceAlignment}>`
    width: 75px;
  height: 75px;
  
  border-radius: 50%;
  
  background-color: ${props => props.colour === "Player" ? "#a33" : "#000"};
  
  visibility: ${props => props.colour === null ? "hidden" : "visible"};
  
  align-self: center;
  justify-self: center;
`