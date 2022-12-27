import SaveTodoForm from "../component/SaveTodoForm";
import TodoCard from "../component/TodoCard";

export default function Home(props) {

    let propsMail = "selimkkkaraca@hotmail.com";

    return (
        <div>
            <SaveTodoForm mail={propsMail}/>
            <TodoCard mail={propsMail}/>
        </div>
    );
}