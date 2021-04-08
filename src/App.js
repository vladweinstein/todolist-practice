import "./index.css";
import Input from "./js/components/input";
import TodoItem from "./js/components/ToDoItem";

import { useSelector } from "react-redux";
import { selectTodoList } from "./js/slices/toDoSlice";

function App() {
  const todoList = useSelector(selectTodoList);

  return (
    <div className="app">
      <div className="app__container">
        <div className="app__todoContainer">
          {todoList.map((item) => (
            <TodoItem name={item.item} done={item.done} id={item.id} />
          ))}
        </div>
              
        <Input />
      </div>
    </div>
  );
}

export default App;
