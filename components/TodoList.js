"use client";
import { MdDelete } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";
import { removeTodo, updateTodo } from "@/store/todoSlice";
import { useState } from "react";

function TodoList() {
  const todos = useSelector((state) => state.todo.items);
  const dispatch = useDispatch();

  const [editId, setEditId] = useState(null);
  const [editTxt, setEditTxt] = useState("");

  const startEdit = (item) => {
    setEditId(item.id);
    setEditTxt(item.text);
  };

  const saveEdit = () => {
    if (!editTxt.trim()) return;
    dispatch(updateTodo({ id: editId, text: editTxt }));
    setEditId(null);
    setEditTxt("");
  };

  return (
    <ul className="grid gap-2">
      {todos.map((item) => (
        <li
          key={item.id}
          className="flex justify-between items-center border p-2 gap-2"
        >
          {editId === item.id ? (
            <>
              <input
                value={editTxt}
                onChange={(e) => setEditTxt(e.target.value)}
              />
              <button onClick={saveEdit}>Save</button>
            </>
          ) : (
            <span>{item.text}</span>
          )}

          <div className="flex gap-2">
            <FaEdit
              className="cursor-pointer"
              onClick={() => startEdit(item)}
            />
            <MdDelete
              className="cursor-pointer"
              onClick={() => dispatch(removeTodo(item.id))}
            />
          </div>
        </li>
      ))}
    </ul>
  );
}

export default TodoList;
