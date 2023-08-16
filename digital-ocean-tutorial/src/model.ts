export type Game = {
    isPlayerMove: boolean,
    board: BoardState,
}

export type BoardState = {
    playerPieces: Array<Piece>,
    aiPieces: Array<Piece>
}

export type Piece = {
    isCrowned: boolean,
    position: Position,
}

export type Position = {
    x: number,
    y: number,
}