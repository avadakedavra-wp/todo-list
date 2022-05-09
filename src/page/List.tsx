import React, { useState } from "react";
import "../List.css";
import "../components/InpuFeild";
import InputFeild from "../components/InpuFeild";
import {Todo} from "../model"
import TodoList from "../components/TodoList";

const List: React.FC = () =>{

    const [todo, setTodo] = useState<string>("");
    const [todos, setTodos] = useState<Todo[]>([]);

    const handleAdd = (event: React.FormEvent) => {
        event.preventDefault();
        if(todo){
            setTodos([...todos,{ id: Date.now(), todo:todo, isDone:false}]);
            setTodo("")
        }

    };

    console.log(todo);

    return(
        <div className="List">
            <span className="header">todo-list App</span>
                <InputFeild todo={todo} setTodo={setTodo} handleAdd={handleAdd}/>
                <TodoList todos={todos} setTodos={setTodos} />
        </div>
    );
}

export default List;