import { ADD_NOTE, REMOVE_NOTE, UPDATE_NOTE } from "./Constant";

const initialState = [];

export const reducer = (state = initialState, action) => {
    switch(action.type) {
        case ADD_NOTE:
            return [
                ...state,
                action.data
            ]
        
        case REMOVE_NOTE:
            let result = state.filter((item) => {
                return item.title != action.data
            })
            return [
                ...result
            ]
        
        case UPDATE_NOTE:
        
        return state.map(item =>
            item.id === action.data.id
              ? { ...item, ...action.data } 
              : item
          );

        default:
            return state
    }
};