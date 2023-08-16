import {Board} from "./Board";
import {useState} from "react";
import {BoardState} from "./model";

export const App = () => {
    const startingBoard: BoardState = {
        playerPieces: [],
        aiPieces: [],
    }
    const [board, setBoard] = useState(startingBoard)

    return (
        <Board board={board} />
    )
}

export default App