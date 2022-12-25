import {Button, Card, Checkbox, Icon, Image, Input, Label} from 'semantic-ui-react'
import {useEffect, useState} from "react";
import TodoService from "../service/TodoService";
import {Link} from "react-router-dom";

export default function TodoCard(props) {

    const [todos, setTodos] = useState([]);

    let todoService = new TodoService();

    useEffect(() => {
        todoService.getTodoByUser(props.mail).then((result) => setTodos(result.data));
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

    let cloneTodo = (publicId) => {
        return todoService.cloneTodo(publicId);
    }

    return (

        todos.map((todo) => (

            <Card>
                <Image src={todo.imageUrl} wrapped ui={false}/>
                <Card.Content>
                    <Link to={{pathname: '/todo-details/' + todo.publicId}}>
                        <Card.Header>{todo.title}</Card.Header>
                    </Link>
                    <Card.Meta>
                        <span className='date'>{todo.createDate}</span>
                    </Card.Meta>
                    <Card.Description>
                        {todo.body}
                    </Card.Description>
                </Card.Content>
                <Card.Content extra>
                    <a>
                        <Button color='red' onClick={() => todoService.deleteTodo(todo.publicId)}><Icon
                            name='trash alternate'/></Button>
                        <Label color='blue'>
                            <Checkbox checked={todo.done} label="Is It Done"
                                      onChange={() => updateTodoDoneStatus(todo.done, todo.publicId)}></Checkbox>
                        </Label>
                        {/*TODO fix checked*/}
                        <Button icon='clone' color='blue' onClick={() => cloneTodo(todo.publicId)}></Button>

                    </a>
                </Card.Content>
            </Card>
        ))
    );
}
