export const RECEIVE_ALL_TODOS = "RECEIVE_ALL_TODOS";
export const RECEIVE_TODO = "RECEIVE_TODO";

export const receiveAllTodos = todos => ({
    type: RECEIVE_ALL_TODOS,
    todos
});

export const receiveTodo = todo => ({
    type: RECEIVE_TODO,
    todo
});