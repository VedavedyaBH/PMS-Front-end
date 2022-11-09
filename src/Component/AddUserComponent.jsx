import React, { Component } from "react";
import UserServices from "../Services/UserServices.Js";
 export class AddUserComponent extends Component {
    constructor(props){
        super(props);
        this.state={
            
            pan: '',
            fName: '',
            lName: '',
            userName: '',
            email: '',
            dob: '',
            pNumber: '',
            salary: '',
            userId: '',
           
        
        
        }
        
        this.changeUserPanHandler = this.changeUserPanHandler.bind(this);
        this.changeUserFnameHandler = this.changeUserFnameHandler.bind(this);
        this.changeUserLnameHandler = this.changeUserLnameHandler.bind(this);
        this.changeUserNameHandler = this.changeUserNameHandler.bind(this);
        this.changeUserEmailHandler = this.changeUserEmailHandler.bind(this);
        this.changeUserDobHandler = this.changeUserDobHandler.bind(this);
        this.changeUserPnumberHandler = this.changeUserPnumberHandler.bind(this);
        this.changeUserSalHandler = this.changeUserSalHandler.bind(this);
        this.changeUserIdHandler = this.changeUserIdHandler.bind(this);


        this.saveUser = this.saveUser.bind(this)
            }
        
            saveUser = (e) => {
                e.preventDefault();
                let user = {
                    pan: this.state.pan,
                    fName: this.state.fName,
                    lName: this.state.lName,
                    userName: this.state.userName,
                    email: this.state.email,
                    dob: this.state.dob,
                    pNumber: this.state.pNumber,
                    salary: this.state.salary,
                    userId: this.state.userId
                }
                console.log('user =>' + JSON.stringify(user))
                UserServices.createUser(user).then(res => {
                    alert("user added successfully....")
                })
                
            }
            cancel(){
                alert("leaving with out saving.....")
            }
        
           
    changeUserPanHandler(event){
        this.setState({pan:event.target.value})
    }
    changeUserFnameHandler(event){
        this.setState({fName:event.target.value})
    }
   
    changeUserLnameHandler(event){
        this.setState({lName:event.target.value})
    }
    changeUserNameHandler(event){
        this.setState({userName:event.target.value})
    }

    changeUserEmailHandler(event){
        this.setState({email:event.target.value})
    }

    changeUserDobHandler(event){
        this.setState({dob:event.target.value})
    }

    changeUserPnumberHandler(event){
        this.setState({pNumber:event.target.value})
    }

    changeUserSalHandler(event){
        this.setState({salary:event.target.value})
    }

    changeUserIdHandler(event){
        this.setState({userId:event.target.value})
    }

    render() {
        return (
            <div>
                <br ></br>
                <div className="container">
                    <div>
                        <div className="card col-md-6 offset-md-3 offset-md-3">
                            <h2>Add User</h2>
                        <div className="card-body">
                            <form>
                                <div className="form-group">
                                  <label >Pan</label>
                                  <input type="text" name="pan" id="" className="form-control" 
                                   value={this.state.pan} onChange={this.changeUserPanHandler} />
                                </div>
                                <div className="form-group">
                                  <label >First Name</label>
                                  <input type="text" name="fName" id="" className="form-control" 
                                   value={this.state.fName} onChange={this.changeUserFnameHandler} />
                                </div>
                                <div className="form-group">
                                  <label >Last Name</label>
                                  <input type="text" name="lName" id="" className="form-control" 
                                   value={this.state.lName} onChange={this.changeUserLnameHandler} />
                                </div>
                              
                                <div className="form-group">
                                  <label >User Name</label>
                                  <input type="text" name="userName" id="" className="form-control" 
                                   value={this.state.userName} onChange={this.changeUserNameHandler} />
                                </div>
                                <div className="form-group">
                                  <label >Email</label>
                                  <input type="text" name="email" id="" className="form-control"  
                                   value={this.state.email} onChange={this.changeUserEmailHandler} />
                                </div>
                                <div className="form-group">
                                  <label >Date of birth</label>
                                  <input type="text" name="date" id="" className="form-control" 
                                   value={this.state.dob} onChange={this.changeUserDobHandler} />
                                </div>
                                <div className="form-group">
                                  <label >Phone Number</label>
                                  <input type="text" name="pNumber" id="" className="form-control"  
                                   value={this.state.pNumber} onChange={this.changeUserPnumberHandler} />
                                </div>
                                <div className="form-group">
                                  <label >Salary</label>
                                  <input type="text" name="pNumber" id="" className="form-control"  
                                   value={this.state.salary} onChange={this.changeUserSalHandler} />
                                </div>
                                <div className="form-group">
                                  <label >User Id</label>
                                  <input type="number" name="userId" id="" className="form-control" 
                                   value={this.state.userId} onChange={this.changeUserIdHandler} />
                                </div>
                                <button type="button" className="btn btn-success" onClick={this.saveUser}>Add</button>
                                <button type="button" className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft:"10px"}}>Cancel</button>
                            </form>
                        </div>
                    </div>
                </div>
                </div>
            </div>
        )
    }

}