import {Button, Form, Grid} from "semantic-ui-react";
import UserService from "../service/UserService";
import {useState} from "react";
import {Link} from "react-router-dom";
import Home from "../page/Home";

export default function LoginForm() {

    const [loginUser, setUser] = useState("");

    let userService = new UserService();

    let login = () => {
        let inputMail = document.getElementById("mail").value;
        let inputPassword = document.getElementById("password").value;

        let user = userService.login(inputMail, inputPassword);

        user.then((result) => setUser(result.data));

        console.warn(loginUser);
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