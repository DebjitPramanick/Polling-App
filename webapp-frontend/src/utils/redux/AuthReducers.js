import { SET_CURRENT_USER } from "./Constants"

const userState = {
    isAuth: false,
    user: {}
}

export default (state = userState, action) => {
    switch (action.type) {
        case SET_CURRENT_USER:
            return {
                isAuth: !!Object.keys(action.user).length,
                user: action.user
            }
        default:
            return state
    }
}