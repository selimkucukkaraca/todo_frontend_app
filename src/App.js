import './App.css';
import TodoCard from "./component/TodoCard";
import MenuBar from "./component/MenuBar";
import SaveTodoForm from "./component/SaveTodoForm";

function App() {


  return (
      <div>
          <MenuBar/>
          <SaveTodoForm/>
          <TodoCard/>
      </div>
  );
}

export default App;
