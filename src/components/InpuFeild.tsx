import React, { useRef } from "react";
import "./style.css"

interface Props{
    todo: string;
    setTodo: React.Dispatch<React.SetStateAction<string>>;
    handleAdd:(event: React.FormEvent) => void;
}


const InputFeild = ({todo, setTodo, handleAdd}: Props) => {
    
    const inputRef = useRef<HTMLInputElement>(null);

    return(
        <form 
        className="input" 
        onSubmit={(event) => {
            handleAdd(event);
            inputRef.current?.blur()
          }}
        >
            <input 
            ref={inputRef}
            type="input" 
            placeholder=" Enter List" 
            value={todo}
            onChange={(event) => setTodo(event.target.value)}
            className="input_style"
            />
            <button className="input_submit" type="submit">Add</button>
        </form>
    );
}

export default InputFeild;