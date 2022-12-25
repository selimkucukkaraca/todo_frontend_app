import './App.css';
import Home from "./page/Home";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import LoginForm from "./component/LoginForm";
import TodoDetails from "./page/TodoDetails";

function App() {


    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route exact path='/home' element={<Home/>}/>
                    <Route exact path='/todo-details/:publicId' element={<TodoDetails/>}/>
                </Routes>
                {/*<LoginForm/>*/}
            </BrowserRouter>
        </div>
    );
}

export default App;
