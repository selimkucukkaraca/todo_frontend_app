import {Button, Card, Checkbox, Icon, Image, Input, Label} from 'semantic-ui-react'
import {useEffect, useState} from "react";
import TodoService from "../service/TodoService";

export default function TodoCard () {

    const [todos, setTodos] = useState([]);

    let todoService = new TodoService();

    useEffect(() =>{
        todoService.getTodoByUser("selimkkkaraca@hotmail.com").then((result) => setTodos(result.data));
    }, []);

    let updateTodoDoneStatus = (status, publicId) => {

        if (status) {
            status = false;
            todoService.updateTodoDoneStatus(publicId, status);
        } else {
            status = true;
            todoService.updateTodoDoneStatus(publicId, status);
        }

    }

    return(

        todos.map((todo) => (

                <Card>
                    <Image src={todo.imageUrl} wrapped ui={false} />
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
                            <Button color='red' onClick={() => todoService.deleteTodo(todo.publicId)}><Icon name='trash alternate'/></Button>
                            <Label color='blue'>
                                <Checkbox checked={todo.done} label="Is It Done" onChange={() => updateTodoDoneStatus(todo.done, todo.publicId)}></Checkbox>
                            </Label>
                            <Button icon="clone" onClick={() => todoService.clone(todo.publicId)}></Button>

                        </a>
                    </Card.Content>
                </Card>
            ))
    );
}
