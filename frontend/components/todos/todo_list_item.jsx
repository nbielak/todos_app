import React from 'react';
import merge from 'lodash/merge';

class TodoListItem extends React.Component {
    constructor(props) {
        super(props); 
        this.toggleTodo = this.toggleTodo.bind(this);
        this.removeTodo = this.removeTodo.bind(this);
    }

    toggleTodo(e) {
        e.preventDefault();
        const todo = merge(
            {},
            this.props.todo,
            {done: !this.props.todo.done}
        )
        this.props.receiveTodo(todo);
    }

    removeTodo(e) {
        e.preventDefault();
        this.props.removeTodo(this.props.todo);
    }
    render() {
        return (
            <div>
                <div>
                    {this.props.todo.title}
                </div>
                <div>
                    {this.props.todo.body}
                </div>
                <div>
                    <button onClick={this.toggleTodo}>
                        {this.props.todo.done ? "Undo" : "Done"}
                    </button>
                    <button onClick={this.removeTodo}>
                        Delete Todo
                    </button>
                </div>
            </div>
        )
    }
    
}

export default TodoListItem;