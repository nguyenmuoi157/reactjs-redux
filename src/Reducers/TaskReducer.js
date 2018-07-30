import * as types from '../Constants/ActionTypes';
var data = {
    isnewtask: true,
    data: JSON.parse(localStorage.getItem('tasks')),
};

const initstate = data.data ? data : { isnewtask: false, data: [] };

var fineIndex = (tasks, id) => {
    var result = -1;
    console.log('task data', tasks);
    tasks.forEach((item, index) => {
        if (item.id === id) {
            result = index;
        }
    });
    return result;
}

var TaskReducer = (state = initstate, action) => {
    switch (action.type) {
        case types.LIST_ALL:
            state = { ...state };
            break;
        case types.DELETE_TASK:
            console.log(state);
            let id = action.id;
            let index = fineIndex(state.data, id);
            if (index !== -1) {
                state.data.splice(index, 1);
            }
            localStorage.setItem('tasks', JSON.stringify(state.data));
            console.log('del task- state', state);
            state = { ...state };
            break;
        case types.ADD_NEW_TASK:

            if (action.task) {
                let data = [...state.data, action.task];
                state = { ...state, data: data };
                localStorage.setItem('tasks', JSON.stringify(state.data));
            }
            console.log('add task- state', state);
            break;

        case types.TOGGLE_NEW_TASK:
            state = { ...state, isnewtask: !state.isnewtask }
            break;
        case types.EDIT_ITEM:
            var a = state.data.map((item) => {
                return item.id==action.id ? item : { ...item, onEdit: true };
            });
            console.log('a', a);
            state.data.forEach((item) => {
                // console.log('item',item,'action.id',action.id);
                if (item.id === action.id) {
                    item.onEdit = true;
                    console.log('item', state);
                }
            });

            state = { ...state };
            console.log('state', state);
            break;
        default:
            state = { ...state };
            break;



    }
    return state;
}


export default TaskReducer;