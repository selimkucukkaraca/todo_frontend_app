import {Button, Form, Grid} from "semantic-ui-react";
import UserService from "../service/UserService";

export default function LoginForm(){

    let userService = new UserService();

    let login = () => {
        let inputMail = document.getElementById("mail").value;
        let inputPassword = document.getElementById("password").value;

        return userService.login(inputMail, inputPassword);
    }

    return (
        <Grid celled>
            <Grid.Row>
                <Grid.Column width={3}>

                    <Form>
                        <Form.Field>
                            <label>Mail</label>
                            <input id="mail" type='email'/>
                        </Form.Field>
                        <Form.Field>
                            <label>Password</label>
                            <input id="password" type='password'/>
                        </Form.Field>

                        <Button color='blue' onClick={() => login()}
                                type='submit'>Login</Button>

                    </Form>
                </Grid.Column>
            </Grid.Row>
        </Grid>

    );

}