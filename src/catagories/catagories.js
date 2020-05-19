import React, {Component} from 'react'
import Header from '../header/header'
import  Sidemenu from '../sidemenu/sidemenu'
import Footer from '../footer/footer'
import Axios from "axios"
import {Link} from "react-router-dom"
import $ from 'jquery'
import Button from '@material-ui/core/Button'
var Baseurl = "http://localhost/coders/api/index.php";
class catagories extends Component{
    state={
        categoryname:"",
        categiriousdata:[],
        coursedata:[],
        courselength:''
    }
S
    getchapters=(event)=>{
        let cid = event.target.getAttribute("data-id");
        localStorage.setItem("cid",cid)
        this.props.history.push("/coders/chapters")
    }

    categoryclick=(event)=>{
      let cid = event.target.getAttribute("data-id");
      this.setState({
        categoryname:event.target.id
    })
      
      let formdata = new FormData()
      formdata.append("option","getcourses")
      formdata.append("categoryid",cid)
      
    Axios.post(Baseurl,formdata).then((res)=>{
        console.log(res.data)
        this.setState({
            coursedata:res.data,
            courselength:res.data.length
        })
    }).catch(err=>alert(err))

    }

    deletecategory=()=>{
        
    }


    componentDidMount(){

        let formdata = new FormData()
        formdata.append("option","categories")

        Axios.post(Baseurl,formdata).then(res=>{
            this.setState({
                categiriousdata:res.data
            })
        })
    }

    
    render(){
      let coursedata =  this.state.coursedata.map((data,index)=>{
        
            return  <div>
            <hr class="m-0"/>
            <div class="uk-grid-small p-4 uk-grid" >
            <div class="uk-width-1-3@m">
                <img src={data.course_pic} class="rounded" data-id={data.courseid} onClick={this.getchapters.bind(this)} alt=""/>
            </div>
            <div class="uk-width-expand">
                <h5 class="mb-2">  {data.course_name}  </h5>
                <p class="uk-text-small mb-2"> {data.course_description} <a href="#">  </a>
                </p>
               
            </div>
            <span class="float-right"><button class="btn btn-primary btn-sm" >delete</button></span>
        </div>
        </div>
        
        })



        let catagories1 = this.state.categiriousdata.map((data)=>{
            
            return  <li class="uk-active">
            <a  data-id={data.categoryid} class="category" id={data.category_name} onClick={this.categoryclick.bind(this)}> <i class="uil-brush-alt "></i> {data.category_name}<span class="float-right"><Button size="small" variant="contained" color="primary"> delete</Button> 
            </span>
                </a>
        </li>
        })




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
                            <li><a href="#"> Categories </a></li>
                            <li> Web Development</li>
                        </ul>
                    </nav>

                    <Link to="/coders/addcourse" class="btn btn-default " style={{"marginLeft":"50%"}}>
                            <i class="uil-plus"> </i> New category
                        </Link>
                </div>

                


                <div class="uk-grid mt-2">
                    <div class="uk-width-1-3@m">

                        <nav class="responsive-tab style-3 setting-menu card"
                            uk-sticky="top:30 ; offset:100; media:@m ;bottom:true; animation: uk-animation-slide-top">
                            <h5 class="mb-0 p-3 uk-visible@m"> Categories </h5>
                            <hr class="m-0 uk-visible@m"/>
                            <ul>
                                {catagories1}
                                
                            </ul>
                        </nav>

                    </div>

                    <div class="uk-width-2-3@m">

                        <div class="card rounded">
                            <div class="p-3 d-flex align-items-center justify-content-between">
                                <h5 class="mb-0"> {this.state.categoryname} </h5> <span>{this.state.courselength} Courses </span>
                            </div>
                            {coursedata}

                            
                        </div>

                    </div>


                </div>





            </div>

            <Footer/>
            </div>
            </div>


         
        )
    }
}

export default catagories