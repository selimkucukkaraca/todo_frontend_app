import axios from "axios";

export default class UserService{

    getUserByMail(mail) {
        return axios.get("http://localhost:8080/api/v1/user/" + mail);
    }

    deleteByMail(mail) {
        return axios.delete("http://localhost:8080/api/v1/user?mail=" + mail);
    }

    save(username, password, mail, imageUrl) {
        return axios.post("http://localhost:8080/api/v1/user", {
            username: username,
            password: password,
            mail: mail,
            imageUrl: imageUrl
        })
    }

    sendConfirmCode(mail) {
        return axios.post("http://localhost:8080/api/v1/user/send-confirm-code?mail=" + mail);
    }

    activateUser(mail, code) {
        return axios.patch("http://localhost:8080/api/v1/user/activate-user?mail=" + mail + "&code=" + code);
    }

    deactivateUser(mail){
        return axios.patch("http://localhost:8080/api/v1/user/deactivate-user?mail=" + mail);
    }

    login(mail, password){
        return axios.post("http://localhost:8080/api/v1/user/login", {
            mail: mail,
            password: password
        })
    }

}