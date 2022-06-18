import axios from 'axios';

const url = 'http://localhost:4000/';
let routePath = {
    addEmployeee: url + 'employees/addEmployee',
    getEmployeeList: url + 'employees/',
    deleteEmployee: url + 'employees/deleteEmployee/',
    getEmployeeById: url + 'employees/getEmployee/',
    updateEmployeeById: url + 'employees/updateEmployee/',
    login: url + 'auth/login',
    validateUser: url + 'auth/validate',
}
let api = {
    addEmployee(data) {
        return axios.post(routePath.addEmployeee, data);
    },
    updateEmployee(data, id) {
        return axios.post(routePath.updateEmployeeById + id, data);
    },
    getEmployeeList() {
        return axios.get(routePath.getEmployeeList);
    },
    deleteEmployee(id) {
        return axios.get(routePath.deleteEmployee + id);
    },
    getEmployeeById(id) {
        return axios.get(routePath.getEmployeeById + id);
    },
    login(data) {
        return axios.post(routePath.login, data);
    },
    validateUser() {
        return axios.get(routePath.validateUser, {
            headers: {
                'Authorization': 'Bearer ' + localStorage.getItem('token')
            }
        });
    }

}

export default api;