import {Button, Form, Grid} from 'semantic-ui-react'
import TodoService from "../service/TodoService";


export default function SaveTodoForm(props) {

    const todoService = new TodoService();

    const save = (userMail) => {
        const inputTitle = document.getElementById("title").value;
        const inputBody = document.getElementById("body").value;
        const inputImageUrl = document.getElementById("imageUrl").value;
        const completionDate = document.getElementById('completionDate').value;

        todoService.saveTodo(inputTitle, inputBody, userMail, inputImageUrl, completionDate);
    }

    return (
        <Grid celled>
            <Grid.Row>
                <Grid.Column width={3}>

                    <Form>
                        <Form.Field>
                            <label>Title</label>
                            <input id="title" placeholder='Title'/>
                        </Form.Field>
                        <Form.Field>
                            <label>Body</label>
                            <input id="body" placeholder='Body'/>
                        </Form.Field>
                        <Form.Field>
                            <label>Image Url</label>
                            <input id="imageUrl" placeholder='Image Url'/>
                        </Form.Field>
                        <Form.Field>
                            <label>Completion Date</label>
                            <input id="completionDate" placeholder='Completion Date'/>
                        </Form.Field>

                         <Button className="save-button" color='blue' onClick={() => save(props.mail)}
                                    type='submit'>Save</Button>

                    </Form>
                </Grid.Column>
            </Grid.Row>
        </Grid>

    );


}