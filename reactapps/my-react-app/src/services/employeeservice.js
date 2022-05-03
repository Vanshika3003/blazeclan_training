import axios from 'axios';

class EmployeeService {
    constructor() {
        this.url = 'http://localhost:7013'
    }

    async getData() {
        let response = await axios.get(`${this.url}/api/employee`);
        return response;
    }

    async getDataById(id) {
        let response = await axios.get(`${this.url}/api/employee/${id}`);
        return response;
    }
    async postData(emp) {
        let response = await axios.post(`${this.url}/api/employee`, emp, {
            headers: {
                'Content-Type': 'application/json'
            }
        });
        return response;
    }
    async putData(emp) {
        let response = await axios.put(`${this.url}/api/employee/${emp.empno}`, emp, {
            headers: {
                'Content-Type': 'application/json'
            }
        });
        return response;
    }

    async deleteData(id) {
        let response = await axios.delete(`${this.url}/api/employee/${id}`);
        return response;
    }
}

export default EmployeeService;