export type Game = {
    isPlayerMove: boolean,
    board: BoardState,
}

export type BoardState = {
    playerPieces: [Piece],
    aiPieces: [Piece]
}

export type Piece = {
    isCrowned: boolean,
    position: Position,
}

export type Position = {
    x: number,
    y: number,
}