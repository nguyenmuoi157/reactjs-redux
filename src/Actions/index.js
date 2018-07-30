import * as types from '../Constants/ActionTypes';
export const deletetask = (id) => {
    return {
        type: types.DELETE_TASK,
        id: id
    }
}
export const additem = (item) => {
    return {
        type: types.ADD_NEW_TASK,
        task: item
    }
}

export const toggleTask = () => {
    return {
        type: types.TOGGLE_NEW_TASK
    }
}

export const editItem = (id) => {
    return {
        type: types.EDIT_ITEM,
        id:id
    }
}