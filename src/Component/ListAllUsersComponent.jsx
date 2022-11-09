import React, { Component } from "react";
import UserServices from "../Services/UserServices.Js";
import { Link } from "react-router-dom";
export class ListUserComponent extends Component{
    constructor(props){
        super(props);
        this.state = {
            users: []
        }
        
    }
    
    componentDidMount(){
        UserServices.getAllUsers().then ((res) =>{
            console.log(res.data);
            this.setState({users : res.data});
        })
    }
    deleteUser(userId){
        console.log(userId);
        UserServices.deleteUser(userId).then(res =>{

            this.setState({users:this.state.users.filter(user => user.userId !== userId)});
            alert("user deleted successfully")
        })
    }
    updateuser(userId){

    }
    
    render(){
        return(
            <div>
                <h2 className =  "text-center">Users</h2>
                <div className="row">
                    <table className="table table-striped table-inverse">
                        <thead >
                            <tr>
                                <th>fName</th>
                                <th>lName</th>
                                <th>userName</th>
                                <th>pan</th>
                                <th>email</th>
                                <th>dob</th>
                                <th>pNumber</th>
                                <th>salary</th>
                                <th>userid</th>
                            </tr>
                            </thead>
                            <tbody>
                              {
                                this.state.users.map(
                                    user =>
                                    <tr key={user.pan}>
                                    <td>{user.fname}</td>
                                    <td>{user.lName}</td>
                                    <td>{user.userName}</td>
                                    <td>{user.email}</td>
                                    <td>{user.dob}</td>
                                    <td>{user.pNumber}</td>
                                    <td>{user.salary}</td>
                                    <td>{user.userId}</td>
                                       
                                        <td >
                                        <button type="button" className="btn btn-success" style={{marginRight:"10px"}}>
                                           <Link to={"/updateuser/" + user.userId} className="stylelink">
                                                update
                                            </Link>
                                        </button>            
                                        <button className="btn btn-danger" onClick={()=>this.deleteuser(user.userId)}>Delete</button>
                                        </td>
                                    </tr>
                                )
                              }
                            </tbody>
                    </table>
                </div>
            </div>
        )
    }

}