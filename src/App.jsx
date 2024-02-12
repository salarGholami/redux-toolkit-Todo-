import "bootstrap/dist/css/bootstrap.min.css";
import AddTodoForm from "./components/Todos/AddTodoForm";
import TodoList from "./components/Todos/TodoList";
import "./App.css";
import { useSelector } from "react-redux";

function App() {
  const todos = useSelector((state) => state.todos);
  console.log(todos);
  
  return (
    <div className="container pt-3">
      <h1 className="text-center text-light">TodoApp with RTK</h1>
      <AddTodoForm />
      <TodoList />
    </div>
  );
}

export default App;
