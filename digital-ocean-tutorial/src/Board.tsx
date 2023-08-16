import {ReactElement, useState} from "react";
import {BoardState, Piece, Position} from "./model";
import styled from "styled-components";

type BoardProps = {
    board: BoardState
}

const squareIsBlack = ({x, y}: Position): boolean => ((x+y)%2 === 0)

export const Board = ({board}: BoardProps): ReactElement => {
    const [selectedPiece, setSelectedPiece] = useState<Piece|null>(null)

    const indexes = [0,1,2,3,4,5,6,7]

    return (
        <GridContainer>
            {indexes.map(x =>
                indexes.map(y =>
                    <BoardPiece
                        key={8*x+y}
                        x={x}
                        y={y}
                    />
                )
            )}
        </GridContainer>
    )
}

const BoardPiece = styled.button<Position>`
  display: grid;
  
  grid-column-start: ${props => props.x+1};
  grid-row-start: ${props => props.y+1};
  
  width: 100%;
  height: 100%;

  background-color: ${props => squareIsBlack(props) ? "#000" : "#fff"};
`

const GridContainer = styled.div`
  display: grid;
  grid-template-rows: repeat(8, fr1);
  grid-template-columns: repeat(8, fr1);
`