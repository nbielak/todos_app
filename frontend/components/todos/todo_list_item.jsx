import React from 'react';

const todoListItem = ({todo}) => {

    return(
        <div>
            <div>
                {todo.title}
            </div>
            <div>
                {todo.body}
            </div>
        </div>
    )
}

export default todoListItem;