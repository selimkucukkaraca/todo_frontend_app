import axios from "axios";

export default class TodoService{

    getTodoByUser(mail) {
        return axios.get("http://localhost:8080/api/v1/todo/" + mail);
    }

    deleteTodo(publicId) {
        return axios.delete("http://localhost:8080/api/v1/todo?publicId=" + publicId);
    }

    saveTodo(title, body, userMail) {
        return axios.post("http://localhost:8080/api/v1/todo", {
            title: title,
            body: body,
            userMail: userMail
        })
    }
}
