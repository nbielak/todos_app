import React from 'react';
import {uniqueId} from '../../util/util';

class TodoForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: "",
            body: "",
            done: false
        }
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        let todo = Object.assign({}, this.state, {id: uniqueId()});
        this.props.receiveTodo(todo);
        this.setState({
            title: "",
            body: "",
            done: false
        })
    }

    update(field) {
        return (e) => {
            this.setState({[field]: e.target.value})
        }
    }

    render() {
        return (
            <div className="todo-form">
                <form className="form" onSubmit={this.handleSubmit}>
                    <input className="form-input" type="text" 
                        value={this.state.title} 
                        onChange={this.update("title")}
                        placeholder="Title"/>
                    <input className="form-input" type="body" 
                        value={this.state.body} 
                        onChange={this.update("body")}
                        placeholder="Body"/>

                    <input className="submit" type="submit" value="Submit"/>
                </form>
            </div>
        )
    }
}

export default TodoForm;