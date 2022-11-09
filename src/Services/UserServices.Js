import axios from "axios";
class UserServices{

    getAllUsers(){
        return axios.get("http://localhost:8080/policy/pmsuser/listusers");
    }

    createUser(user){
        return axios.post("http://localhost:8080/policy/pmsuser/saveuser",user);
    }

    deleteUser(id){
        return axios.delete("http://localhost:8088/swaggerdemo/pmsuser/updateuser/"+id);
    }

    updateUser(user,id){
        return axios.put("http://localhost:8088/swaggerdemo/pmsuser/deleteuserid"+id,user);
    } 
}

export default new UserServices();


