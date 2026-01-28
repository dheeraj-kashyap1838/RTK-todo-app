import { createSlice, nanoid } from "@reduxjs/toolkit";

const todoSlice = createSlice({
  name: "todo",
  initialState: {
    items: [],
  },
  reducers: {
    addTodo: {
      reducer(state, action) {
        state.items.push(action.payload);
      },
      prepare(text) {
        return {
          payload: {
            id: nanoid(),
            text,
            completed: false,
          },
        };
      },
    },
    removeTodo: {
      reducer(state, action) {
        state.items = state.items.filter((item) => item.id !== action.payload);
      },
    },
    updateTodo: {
      reducer(state, action) {
        const { id, text } = action.payload;
        const todo = state.items.find((item) => item.id === id);
        if (todo) {
          todo.text = text;
        }
      },
    },
  },
});

export const { addTodo, removeTodo, updateTodo } = todoSlice.actions;
export default todoSlice.reducer;
