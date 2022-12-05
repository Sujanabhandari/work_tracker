import React, { useState } from 'react'
import { Todo } from "../model";
import {AiFillEdit, AiFillDelete} from "react-icons/ai"
import {MdDone} from "react-icons/md"
import "./styles.css"
import TodoList from './TodoList';

type Props = {
    todo:Todo,
    todos: Todo[],
    setTodos:React.Dispatch<React.SetStateAction<Todo[]>>
}

const SingleTodo: React.FC<Props> = ({todo, todos, setTodos}) => {

    const [edit, setEdit] = useState<boolean>(false);
    const [editTodo, setEditTodo] = useState<string>(todo.todo)

    const handleDone = (id: number) => {
        setTodos(todos.map(todo => todo.id === id?{...todo, isDone:!todo.isDone} : todo))
    }
    const handleEdit = (id: number) => {
        setTodos(todos.map(todo => todo.id === id? {...todo, isDone:!todo.isDone} : todo))
    }
    const handleDelete = (id: number) => {
        setTodos(todos.filter(todo => todo.id! === id))
    }

    console.log(todos)
  return (
    <form action="" className="todos_single">
        {
            todo.isDone ? (
                <span className="todos_single_text">
                {todo.todo}
            </span>
            ):(
                <span className="todos_single_text">
                {todo.todo}
            </span>
            )
        }
        <div>
            <span className="icon" onClick={() => handleEdit(todo.id)}><AiFillEdit /></span>
            <span className="icon" onClick={() => handleDelete(todo.id)}><AiFillDelete /></span>
            <span className="icon" onClick={() => handleDone(todo.id)}><MdDone /></span>
        </div>
    </form>
  )
}

export default SingleTodo