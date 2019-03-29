import React from 'react';
import TodoListItem from './todo_list_item';
import TodoForm from './todo_form';

class TodoList extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return(
            <div>
                I love Todos
                <TodoForm receiveTodo={this.props.receiveTodo}/>
                {this.props.todos.map(todo => {
                    return(<TodoListItem key={todo.id} todo={todo}/>)
                })}
            </div>
        )
    }
}

export default TodoList;