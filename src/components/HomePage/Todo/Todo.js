import React from 'react';
import TodoDetail from '../TodoDetail/TodoDetail';
import './Todo.css'


const todoData = [
    {
        title: 'Wineries Tour',
        id: 1,
        description: 'Im a paragraph. Click here to add your own text and edit me.'
    },
    {
        title: 'Wineries Tour',
        id: 2,
        description: 'Im a paragraph. Click here to add your own text and edit me.'
    },
    {
        title: 'Wineries Tour',
        id: 3,
        description: 'Im a paragraph. Click here to add your own text and edit me.'
    },
    {
        title: 'Wineries Tour',
        id: 4,
        description: 'Im a paragraph. Click here to add your own text and edit me.'
    },
    {
        title: 'Wineries Tour',
        id: 5,
        description: 'Im a paragraph. Click here to add your own text and edit me.'
    },
    {
        title: 'Wineries Tour',
        id: 6,
        description: 'Im a paragraph. Click here to add your own text and edit me.'
    }
]

const Todo = () => {
    return (
        <div className="container pt-5">
            <h1 className="text-secondary todo">THINGS TO DO</h1>
            <div className="row justify-content-center">
                {
                    todoData.map( todo => <TodoDetail key={todo.id} todo={todo}></TodoDetail>)
                }
            </div>
        </div>
    );
};

export default Todo;