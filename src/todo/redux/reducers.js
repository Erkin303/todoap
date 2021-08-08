const initialState = {
    value: "",
    tasks: [
        { main: "Task 1" },
        { main: "Task 2" },
        { main: "Task 3" }
    ]
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case "TYPING": return { ...state, value: action.payload };

        case "ADD_TASK": return { ...state, tasks: [...state.tasks, { main: action.payload }], value: "" };

        case "DELETE_TASK":
            let tasks = state.tasks;
            tasks.splice(action.payload, 1);
            return { ...state, tasks };


        default: return state;
    }


}
export default reducer;