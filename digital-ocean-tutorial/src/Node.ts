import { find_available_moves, check_moves} from "./MinimaxAlgorithm";


class GameHelper {

    set parent(value) {
        this._parent = value;
    }
    get value() {
        return this._value;
    }
    get parent() {
        return this._parent;
    }
    get move() {
        return this._move;
    }
    get board(): number[][] {
        return this._board;
    }

    private _board: number[][]
    private _move: null | number[]
    private _parent
    private _value

    constructor(board, move, parent, value) {
        this._board = board
        this._move = null
        this._value = null
        this._parent = null
    }

    get_children = (minimizing_player) => {
        const current_state = structuredClone(this.board)
        const available_moves = []
        const children_states = []
        if(minimizing_player) {
        }
    }

}


/*


current_state = deepcopy(self.board)

big_letter = ""
queen_row = 0
if minimizing_player is True:
    available_moves = Checkers.find_available_moves(current_state, mandatory_jumping)
big_letter = "C"
queen_row = 7
else:
available_moves = Checkers.find_player_available_moves(current_state, mandatory_jumping)
big_letter = "B"
queen_row = 0
for i in range(len(available_moves)):
old_i = available_moves[i][0]
old_j = available_moves[i][1]
new_i = available_moves[i][2]
new_j = available_moves[i][3]
state = deepcopy(current_state)
Checkers.make_a_move(state, old_i, old_j, new_i, new_j, big_letter, queen_row)
children_states.append(Node(state, [old_i, old_j, new_i, new_j]))
return children_states

def set_value(self, value):
self.value = value

def get_value(self):
return self.value

def get_board(self):
return self.board

def get_parent(self):
return self.parent

def set_parent(self, parent):
self.parent = parent
*/
