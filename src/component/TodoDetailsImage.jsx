import {useParams} from "react-router-dom";
import TodoService from "../service/TodoService";
import {useEffect, useState} from "react";
import {Segment, Image} from 'semantic-ui-react'


export default function TodoDetailsImage() {

    const {publicId} = useParams();
    const [todo, setTodo] = useState([]);

    let todoService = new TodoService();

    useEffect(() => {
        todoService.getByPublicId(publicId).then((result) => setTodo(result.data))
    }, []);

    return (
        <Segment>
            <Image src={todo.imageUrl} size='large' centered/>
            <p style={{fontSize: '30px'}}>
                {todo.body}
            </p>
        </Segment>
    );
}