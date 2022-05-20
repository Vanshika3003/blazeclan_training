import axios from 'axios';

class AuthService {
    constructor() {
        this.url = 'http://localhost:7012'
    }


    async postRegisterUser(user) {
        let response = await axios.post(`${this.url}/api/myregister`, user, {
            headers: {
                'Content-Type': 'application/json'
            }
        });
        return response;
    }
    async postloginUser(user) {
        let response = await axios.post(`${this.url}/api/authuser`, user, {
            headers: {
                'Content-Type': 'application/json'
            }
        });
        return response;
    }

}
export default AuthService;