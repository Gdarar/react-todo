import { useState } from "react";
const initialState = [
  {
    id: 1,
    content: "shopping"
  },
  {
    id: 2,
    content: "wash car"
  },
  {
    id: 3,
    content: "homework"
  }
];
export default function App() {
  const [todos, setTodos] = useState(initialState);
  const [text, setText] = useState("");
  function addTodo() {
    const newTodo = {
      id: todos.length + 1,
      content: text
    };
    setTodos([...todos, newTodo]);
    setText("");
  }
  function deleteTodo(id) {
    const filtered = todos.filter((todo) => {
      return todo.id !== id;
    });
    setTodos(filtered);
  }
  return (
    <>
      <h1>Todos:</h1>
      <input
        onChange={(e) => setText(e.target.value)}
        type="text"
        value={text}
        placeholder="add new todo"
      />
      <button onClick={addTodo}>Add</button>
      <ul>
        {todos.map((todo) => {
          return (
            <div style={{ display: "flex" }}>
              <li key={todo.id}>{todo.content}</li>
              <button onClick={() => deleteTodo(todo.id)}>delete</button>
            </div>
          );
        })}
      </ul>
    </>
  );
}