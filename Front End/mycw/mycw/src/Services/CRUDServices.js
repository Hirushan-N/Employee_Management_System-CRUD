import axios from 'axios'

const USERS_REST_API_URL = 'http://localhost:8080/api/all';
const INSERT_REST_API_URL = 'http://localhost:8080/api/insert';
const GETBYID_REST_API_URL = 'http://localhost:8080/api/find';
const UPDATE_REST_API_URL = 'http://localhost:8080/api/update';
const DELETE_REST_API_URL = 'http://localhost:8080/api/delete';

class CRUDServices {

    getAllDetails(){
        return axios.get(USERS_REST_API_URL);
    }

    InsertEmployee(student){
        return axios.post(INSERT_REST_API_URL,student);
    }

    getById(id){
        return axios.get(GETBYID_REST_API_URL+"/"+id);
    }
    updateEmployee(student, id){
        return axios.put(UPDATE_REST_API_URL + '/' + id, student);
    }

    deleteEmployee(id){
        return axios.delete(DELETE_REST_API_URL + '/' + id);
    }
  
}

export default new CRUDServices();