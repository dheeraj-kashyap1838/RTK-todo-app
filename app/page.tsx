import Image from "next/image";
import TodoInput from "../components/TodoInput";
import TodoList from "../components/TodoList";

export default function Home() {
  return (
    <div className=" min-h-screen items-center bg-zinc-50 font-sans dark:bg-black mx-auto grid justify-center max-w-6xl">
      <div className=" border p-6 grid gap-2">
        <h2>Add Todo </h2>
        <TodoInput />
        <TodoList />
      </div>
    </div>
  );
}
