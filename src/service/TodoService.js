import axios from "axios";

export default class TodoService{

    getTodoByUser(mail) {
        return axios.get("http://localhost:8080/api/v1/todo/" + mail);
    }

    deleteTodo(publicId) {
        return axios.delete("http://localhost:8080/api/v1/todo?publicId=" + publicId);
    }

    saveTodo(title, body, userMail, imageUrl) {
        return axios.post("http://localhost:8080/api/v1/todo", {
            title: title,
            body: body,
            userMail: userMail,
            imageUrl: imageUrl
        })
    }

    updateTodoDoneStatus(publicId, status) {
        return axios.put("http://localhost:8080/api/v1/todo/update-done-status?publicId=" + publicId + "&status=" + status);
    }

    cloneTodo(publicId) {
        return axios.post("http://localhost:8080/api/v1/todo/clone?publicId=" + publicId)
    }

    getByPublicId(publicId) {
        return axios.get("http://localhost:8080/api/v1/todo/get-by-public-id/" + publicId);
    }
}
