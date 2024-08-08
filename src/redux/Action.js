import { ADD_NOTE, REMOVE_NOTE, UPDATE_NOTE } from "./Constant";

export function addNote(item) {
    return {
        type: ADD_NOTE,
        data: item
    }
}

export function removeNote(item) {
    return {
        type: REMOVE_NOTE,
        data: item
    }
}

export function updateNote(item) {
 
    
    return {
        type: UPDATE_NOTE,
        data:  item
    }
}