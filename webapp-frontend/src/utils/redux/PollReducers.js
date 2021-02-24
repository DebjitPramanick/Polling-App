import { SET_CURRENT_POLL, SET_POLLS, SET_USER_POLLS } from "./Constants";

export const polls = (state = [], action) => {
    switch(action.type){

        case SET_POLLS:
            return action.polls

        default:
            return state;
    }
}

export const userPolls = (state = [], action) => {
    switch (action.type) {

        case SET_USER_POLLS:
            return action.polls

        default:
            return state;
    }
}


export const curPoll = (state = {}, action) => {
    switch(action.type){
        case SET_CURRENT_POLL:
            return action.poll
        default:
            return state;
    }
}