import MenuBar from "../component/MenuBar";
import SaveTodoForm from "../component/SaveTodoForm";
import TodoCard from "../component/TodoCard";
import LoginForm from "../component/LoginForm";

export default function Home() {

    return (
        <div>
            <MenuBar/>
            <SaveTodoForm/>
            <TodoCard/>
        </div>

    );
}