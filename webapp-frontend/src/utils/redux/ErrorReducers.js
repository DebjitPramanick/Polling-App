import { ADD_ERROR, REMOVE_ERROR, SET_CURRENT_USER } from "./Constants"

export default(state={}, action) => {
    switch (action.type) {
        case ADD_ERROR:
            return {
                ...state,
                message: action.error
            }
        case REMOVE_ERROR:
            return {
                ...state,
                message: null
            }
        default:
            return state
    }
}