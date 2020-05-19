import React, { Component } from 'react'
import $ from 'jquery'
import './signup.css'
var file_data = "";
var form_data = "";
var filename = "";
class signup extends Component{
    
     upload=()=>{      
    $("#uploadpic").click();
    $("#uploadpic").change(function(event){
         filename = event.target.files.item(0).name;
        $(".avatar-pic").fadeIn("fast").attr('src',URL.createObjectURL(event.target.files[0]));
    
        file_data = $(this).prop('files')[0];   
        form_data = new FormData();                  
        form_data.append('file', file_data);
    });




}

submitdata=()=>{

    $.ajax({
        url: "http://localhost/courstage/api/upload.php",
        type: "POST",
        data: form_data,
        contentType: false,
        cache: false,
        processData:false,
        success: function(data){
            console.log(data)
        },
        error:(data)=>{
            console.log(data)
        }
    });
   
    let logindata= {
        option: "postusers",
        fullname:$("#fullname").val(),
        qualification:$("#qualification").val(),
        email:$("#email").val(),
        fburl:$("#fburl").val(),
        linkedinurl: $("#linkedin").val(),
        mobile: $("#mobile").val(),
        password: $("#password").val(),
        picname: filename
    }

    $.ajax({
        url: "http://localhost/courstage/api/index.php",
        type: "POST",
        data: logindata,
        success: function(data){
            alert("success")
        },
        error:()=>{
            alert("error")
        }
    });

    

}

     componentWillMount(){
       
     }
     render(){

        
         return(
            <div uk-height-viewport="expand: true" class="uk-flex uk-flex-middle" class="mt-4">
            <div class="uk-width-1-3@m uk-width-1-2@s m-auto">
                <div class="uk-card-default p-5 rounded">
                    <div class="mb-4 uk-text-center">
                        <h3 class="mb-0"> Welcome</h3>
                        <p class="my-2">signup to manage your account.</p>
                    </div>
                   
            <div class="file-field">
                <div class="mb-4">
                <img src="https://mdbootstrap.com/img/Photos/Others/placeholder-avatar.jpg"
                    class="rounded-circle z-depth-1-half avatar-pic" alt="example placeholder avatar" />
                </div>
                <div class="d-flex justify-content-center">
               
                    <span class="btn btn-mdb-color btn-rounded float-left" onClick={this.upload}>Add photo</span>
                
                </div>
                
            </div>
           
            <input type="file"  id="uploadpic" />

                    
                        <div class="uk-form-group">
                            <label class="uk-form-label"> Full Name</label>
    
                            <div class="uk-position-relative w-100">
                                <span class="uk-form-icon">
                                    <i class="icon-feather-mail"></i>
                                </span>
                                <input class="uk-input" type="text" placeholder="name@example.com" id="fullname"/>
                            </div>
    
                        </div>

                        <div class="uk-form-group">
                            <label class="uk-form-label"> Qualification</label>
    
                            <div class="uk-position-relative w-100">
                                <span class="uk-form-icon">
                                    <i class="icon-feather-mail"></i>
                                </span>
                                <input class="uk-input" type="text" placeholder="name@example.com" id="qualification"/>
                            </div>
    
                        </div>

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
                            <label class="uk-form-label"> FB URL</label>
    
                            <div class="uk-position-relative w-100">
                                <span class="uk-form-icon">
                                    <i class="icon-feather-mail"></i>
                                </span>
                                <input class="uk-input" type="text" placeholder="name@example.com" id="fburl"/>
                            </div>
    
                        </div>

                        <div class="uk-form-group">
                            <label class="uk-form-label"> Linkedin URL</label>
    
                            <div class="uk-position-relative w-100">
                                <span class="uk-form-icon">
                                    <i class="icon-feather-mail"></i>
                                </span>
                                <input class="uk-input" type="text" placeholder="name@example.com" id="linkedin"/>
                            </div>
    
                        </div>

                        <div class="uk-form-group">
                            <label class="uk-form-label"> Mobile</label>
    
                            <div class="uk-position-relative w-100">
                                <span class="uk-form-icon">
                                    <i class="icon-feather-mail"></i>
                                </span>
                                <input class="uk-input" type="number" placeholder="name@example.com" id="mobile"/>
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
                                <p> Dont have account <a href="page-register.html">Sign up</a></p>
                            </div>
                            <div class="uk-width-auto@s">
                                <button type="submit" class="btn btn-default" onClick={this.submitdata}>Get Started</button>
                            </div>
                        </div>
    
                 
                </div>
            </div>
        </div>
    
         )
     }
 }

export default signup