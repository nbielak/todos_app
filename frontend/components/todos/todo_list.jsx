import React from 'react';
import TodoListItem from './todo_list_item';
import TodoForm from './todo_form';

class TodoList extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return(
            <div className="todo-list-page">
                <div className="todo-list-title">
                    <h1>Todos</h1>
                </div>
                <div className="todo-list-content">
                    <div className="todo-form-wrapper">
                        <TodoForm receiveTodo={this.props.receiveTodo} />
                    </div>

                    <div className="todo-list-wrapper">
                        <div className="todo-list">
                            {this.props.todos.map(todo => {
                                return (<TodoListItem key={todo.id}
                                    todo={todo}
                                    receiveTodo={this.props.receiveTodo}
                                    removeTodo={this.props.removeTodo} />)
                            })}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default TodoList;