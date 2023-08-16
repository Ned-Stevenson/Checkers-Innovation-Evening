



// -1 for c piece, -2 for C king

export const find_available_moves = (board: Array<Array<number>>) => {
    const available_moves: Array<Array<number>> = []
    const available_jumps = []
    for (var row = 0; row < 8; row++) {
        for (var column = 0; column < 8; column++) {
            if(board[row][column] === -1) {
                if (check_moves(board, row, column, row + 1, column + 1)){
                    available_moves.push([row, column, row + 1, column + 1])
                }
                if (check_moves(board, row, column, row + 1, column - 1)){
                    available_moves.push([row, column, row + 1, column - 1])
                }
                if (check_jumps(board, row, column, row + 1, column - 1, row + 2, column - 2)){
                    available_jumps.push([row, column, row + 2, column - 2])
                }
                if (check_jumps(board, row, column, row + 1, column + 1, row + 2, column + 2)){
                    available_jumps.push([row, column, row + 2, column + 2])
                }
            }
            else if(board[row][column] === -2) {
                if (check_moves(board, row, column, row + 1, column + 1)){
                    available_moves.push([row, column, row + 1, column + 1])
                }
                if (check_moves(board, row, column, row + 1, column - 1)){
                    available_moves.push([row, column, row + 1, column - 1])
                }
                if (check_moves(board, row, column, row - 1, column - 1)){
                    available_moves.push([row, column, row - 1, column - 1])
                }
                if (check_moves(board, row, column, row - 1, column - 1)){
                    available_moves.push([row, column, row - 1, column - 1])
                }
                if (check_jumps(board, row, column, row + 1, column - 1, row + 2, column - 2)){
                    available_jumps.push([row, column, row + 2, column - 2])
                }
                if (check_jumps(board, row, column, row + 1, column + 1, row + 2, column + 2)){
                    available_jumps.push([row, column, row + 2, column + 2])
                }
                if (check_jumps(board, row, column, row + 1, column - 1, row + 2, column - 2)){
                    available_jumps.push([row, column, row + 2, column - 2])
                }
                if (check_jumps(board, row, column, row + 1, column + 1, row + 2, column + 2)){
                    available_jumps.push([row, column, row + 2, column + 2])
                }
            }

        }
    }
    if(available_jumps.length == 0)
        return available_jumps
    else
        return available_moves

}

export const check_moves = (board, rowFrom, columnFrom, rowTo, columnTo) => {
    if (rowTo > 7 || rowTo < 0) {
        return false
    }
    if (columnTo > 7 || columnTo < 0) {
        return false
    }
    if(board[rowFrom][columnFrom] == 0) {
        return false
    }
    if(board[rowTo][columnTo] != 0) {
        return false
    }
    if(board[rowFrom][columnFrom] == 1 || board[rowFrom][columnFrom] == 2) {
        return false
    }
    if(board[rowTo][columnTo] == 0) {
        return true
    }
}

export const check_jumps = (board, rowFrom, columnFrom, rowVia, columnVia, rowTo, columnTo) => {
    if(rowTo > 7 || rowTo < 0)
        return false
    if(columnTo > 7 || columnTo < 0)
        return false
    if(board[rowVia][columnVia] == 0)
        return false
    if(board[rowVia][columnVia] == -2 || board[rowVia][columnVia] == -1)
        return false
    if(board[rowTo][columnTo] != 0)
        return false
    if(board[rowFrom][columnFrom] == 0)
        return false
    if(board[rowFrom][columnFrom] == 1 || board[rowFrom][columnFrom] == 2)
        return false
    return true
}


const minimax = (board, depth, alpha, beta, maximizing_player, mandatory_jumping) => {
    if(depth == 0) {
        return calculateHeuristics(board)
    }
    const currentStates = structuredClone(board)
}


const calculateHeuristics = (board) => {

}


   /* current_state = Node(deepcopy(board))
    if maximizing_player is True:
        max_eval = -math.inf
    for child in current_state.get_children(True, mandatory_jumping):
    ev = Checkers.minimax(child.get_board(), depth - 1, alpha, beta, False, mandatory_jumping)
    max_eval = max(max_eval, ev)
    alpha = max(alpha, ev)
    if beta <= alpha:
    break
    current_state.set_value(max_eval)
    return max_eval
    else:
    min_eval = math.inf
    for child in current_state.get_children(False, mandatory_jumping):
    ev = Checkers.minimax(child.get_board(), depth - 1, alpha, beta, True, mandatory_jumping)
    min_eval = min(min_eval, ev)
    beta = min(beta, ev)
    if beta <= alpha:
    break
    current_state.set_value(min_eval)
    return min_eval*/
