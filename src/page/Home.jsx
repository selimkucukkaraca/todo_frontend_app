import MenuBar from "../component/MenuBar";
import SaveTodoForm from "../component/SaveTodoForm";
import TodoCard from "../component/TodoCard";

export default function Home() {

    return (
        <div>
            <MenuBar/>
            <SaveTodoForm/>
            <TodoCard/>
        </div>

    );
}