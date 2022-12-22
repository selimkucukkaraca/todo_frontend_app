import { Button, Form } from 'semantic-ui-react'
import TodoService from "../service/TodoService";


export default function SaveTodoForm() {

    let todoService = new TodoService();

    let save = (userMail) => {
        let inputTitle = document.getElementById("title").value;
        let inputBody = document.getElementById("body").value;
        let inputImageUrl = document.getElementById("imageUrl").value;

        todoService.saveTodo(inputTitle, inputBody, userMail, inputImageUrl);
    }


    return(

        <Form>
            <Form.Field>
                <label>Title</label>
                <input id="title" placeholder='Title' />
            </Form.Field>
            <Form.Field>
                <label>Body</label>
                <input id="body" placeholder='Body' />
            </Form.Field>
            <Form.Field>
                <label>Image Url</label>
                <input id="imageUrl" placeholder='Image Url' />
            </Form.Field>
            <Button onClick={() => save("selimkkkaraca@hotmail.com")} type='submit'>Save</Button>
        </Form>


    );

}