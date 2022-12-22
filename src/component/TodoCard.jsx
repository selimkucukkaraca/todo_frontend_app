import {Button, Card, Icon, Image} from 'semantic-ui-react'
import {useEffect, useState} from "react";
import TodoService from "../service/TodoService";

export default function TodoCard () {

    const [todos, setTodos] = useState([]);

    let todoService = new TodoService();

    useEffect(() =>{
        todoService.getTodoByUser("selimkkkaraca@hotmail.com").then((result) => setTodos(result.data));
    }, []);


    return(

        todos.map((todo) => (
                <Card>
                    <Image src='https://www.mediaclick.com.tr/uploads/2018/08/java.png' wrapped ui={false} />
                    <Card.Content>
                        <Card.Header>{todo.title}</Card.Header>
                        <Card.Meta>
                            <span className='date'>{todo.createDate}</span>
                        </Card.Meta>
                        <Card.Description>
                            {todo.body}
                        </Card.Description>
                    </Card.Content>
                    <Card.Content extra>
                        <a>
                            <Button onClick={() => todoService.deleteTodo(todo.publicId)}><Icon name='trash alternate' /></Button>
                        </a>
                    </Card.Content>
                </Card>
            ))
    );
}