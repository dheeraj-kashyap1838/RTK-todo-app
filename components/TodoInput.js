"use client";
import { useState } from "react";
import { addTodo } from "../store/todoSlice";
import { useDispatch } from "react-redux";

function TodoInput() {
  const [text, setText] = useState("")
  const dispatch = useDispatch();
    const addHandler = () => {
        if(!text.trim()) return;
        dispatch(addTodo(text))
        setText("")
    }
  return (
    <div>
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Enter todo"
      />
      <button onClick={addHandler}>Add</button>
    </div>
  );
}

export default TodoInput;
