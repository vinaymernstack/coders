import React, { Component } from 'react'
import Header from '../header/header'
import  Sidemenu from '../sidemenu/sidemenu'
import Footer from '../footer/footer'
import {Link} from 'react-router-dom'
import $ from "jquery"
import Axios from "axios"
var Baseurl = "http://localhost/coders/api/index.php";
class addcourse extends Component{
    setcategoey=()=>{
        if($("#category_title").val()!=""){
        
        let formdata = new FormData()
        formdata.append("option", "insertcategory")
        formdata.append("categoryname",$("#category_title").val() )
       
      Axios.post(Baseurl,formdata).then(res=>{
        alert("success")
      })
    }
    }
    render(){
        return(
            <div id="wrapper" class="admin-panel">
            <Sidemenu/>
           <Header/>

           <div class="page-content">
            <div class="page-content-inner">

                <div class="d-flex">
                    <nav id="breadcrumbs" class="mb-3">
                        <ul>
                            <li><a href="#"> <i class="uil-home-alt"></i> </a></li>
                            <li><a href="#"> Course </a></li>
                            <li>Create New Course</li>
                        </ul>
                    </nav>
                </div>



                <div class="card">
                    <div class="card-header border-bottom-0 py-4">
                        <h5> Course Manager </h5>
                    </div>


                    <ul class="uk-child-width-expand uk-tab"
                        uk-switcher="connect: #course-edit-tab ; animation: uk-animation-slide-left-medium, uk-animation-slide-right-medium">
                        <li class="uk-active"><a href="#"> Category</a></li>
                        <li><a href="#"> course</a></li>
                        <li><a href="#">Chapters</a></li>
                        <li><a href="#">lessions</a></li>
                        <li><a href="#">content</a></li>
                        <li><a href="#">Pricing</a></li>
                        
                        
                    </ul>

                    <div class="card-body">

                        <ul class="uk-switcher uk-margin" id="course-edit-tab">

                            <li>

                                <div class="row">
                                    <div class="col-xl-9 m-auto">


                                        <div class="form-group row mb-3">
                                            <label class="col-md-3 col-form-label" for="course_title">Category title<span
                                                    class="required">*</span></label>
                                            <div class="col-md-9">
                                                <input type="text" class="form-control" id="category_title" name="title"
                                                    placeholder="Enter category title"
                                                    required="" />
                                            </div>
                                            <div style={{"marginLeft":"90%"}} onClick={this.setcategoey}>
                                                <span  class="btn btn-default" >
                                                    <i class=""> </i> submit
                                                </span>
                                            </div>
                                        </div>

                                       
                                       

                                    </div>
                                </div>


                            </li>

                            <li>


                                





                            </li>

                            <li>

                                


                            </li>

                            <li>


                       

                                
                            </li>

                            <li>

                                


                            </li>

                            <li>

                            <div class="row justify-content-center">

<div class="col-xl-9">

    <div class="form-group row mb-3">
        <label class="col-md-3 col-form-label">Course price ($)</label>
        <div class="col-md-9">
            <input type="number" class="form-control" placeholder="Enter  price"/>
        </div>
    </div>

</div>

<div class="col-xl-9">

    <div class="form-group row mb-3">
        <label class="col-md-3 col-form-label">Discounted
            price ($)</label>
        <div class="col-md-9">
            <input class="form-control"/>
            <small class="text-muted">This course has <span
                    class="text-danger">10%</span> </small>
        </div>
    </div>

</div>
</div>


                            </li>

                        </ul>

                    </div>
                    
                </div>
                </div>
                    
                </div>



           </div>

        )
    }
}

export default addcourse