import MenuBar from "../component/MenuBar";
import SaveTodoForm from "../component/SaveTodoForm";
import TodoCard from "../component/TodoCard";

export default function Home(props) {

    let propsMail = "barisseckin0@gmail.com";

    return (
        <div>
            <MenuBar/>
            <SaveTodoForm mail={propsMail}/>
            <TodoCard mail={propsMail}/>
        </div>
    );
}