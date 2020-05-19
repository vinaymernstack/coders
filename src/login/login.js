import React, { Component } from 'react'
import $ from 'jquery'
import Axios from 'axios'
import {Link} from "react-router-dom"
var Baseurl = "http://localhost/coders/api/index.php";
 class login extends Component{
    login=()=>{
        
         let logindata={
             option:"login",
             username:$("#email").val(),
             password:$("#password").val()
         }
         let username 
         let password
         const formdata = new FormData()
        formdata.append('option',"login")
        formdata.append(username,$("#email").val())
        formdata.append(password,$("#password").val())

        Axios.post("http://localhost/coders/api/index.php",formdata).then((response)=>{
            console.log("response",response.data)
            if(response.data.length > 0){
                this.props.history.push("/coders/admin")
             }
        }).catch((error)=>{alert(error)})


     }
     render(){

        
         return(
            <div uk-height-viewport="expand: true" class="uk-flex uk-flex-middle">
            <div class="uk-width-1-3@m uk-width-1-2@s m-auto">
                <div class="uk-card-default p-5 rounded">
                    <div class="mb-4 uk-text-center">
                        <h3 class="mb-0"> Welcome back</h3>
                        <p class="my-2">Login to manage your account.</p>
                    </div>
                    <form>
    
                        <div class="uk-form-group">
                            <label class="uk-form-label"> Email</label>
    
                            <div class="uk-position-relative w-100">
                                <span class="uk-form-icon">
                                    <i class="icon-feather-mail"></i>
                                </span>
                                <input class="uk-input" type="email" placeholder="name@example.com" id="email"/>
                            </div>
    
                        </div>
    
                        <div class="uk-form-group">
                            <label class="uk-form-label"> Password</label>
    
                            <div class="uk-position-relative w-100">
                                <span class="uk-form-icon">
                                    <i class="icon-feather-lock"></i>
                                </span>
                                <input class="uk-input" type="password" placeholder="********" id="password"/>
                            </div>
    
                        </div>
    
                       
    
                        <div class="mt-4 uk-flex-middle uk-grid-small uk-grid" >
                            <div class="uk-width-expand@s">
                                <p> Dont have account <Link to="/coders/signup">Sign up</Link></p>
                            </div>
                            <div class="uk-width-auto@s">
                                <button type="submit" class="btn btn-default" onClick={this.login}>Get Started</button>
                            </div>
                        </div>
    
                    </form>
                </div>
            </div>
        </div>
    
         )
     }
 }

export default login