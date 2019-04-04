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

        let checkMark = (
            <div className="check-mark">
                <img src="https://img.icons8.com/color/48/000000/checkmark.png"></img>
            </div>
        );
        return (
            <div className="todo-list-item">
                {this.props.todo.done ? checkMark : null}
                <div className="info">
                    <div className="todo-info">
                        <div>
                            <h3 className="todo-title">{this.props.todo.title}</h3>
                        </div>
                        <div>
                            <p>{this.props.todo.body}</p>
                        </div>
                    </div>

                    <div className="todo-actions">
                        <button onClick={this.toggleTodo}>
                            {this.props.todo.done ? "Undo" : "Done"}
                        </button>
                        <button onClick={this.removeTodo}>
                            Delete
                    </button>
                    </div>
                </div>
            </div>
        )
    }
    
}

export default TodoListItem;