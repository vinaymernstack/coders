import React, {Component} from 'react'
import Header from '../header/header'
import  Sidemenu from '../sidemenu/sidemenu'
import Footer from '../footer/footer'
import {Link} from 'react-router-dom'
import $ from 'jquery'
import Axios from 'axios'
var Baseurl = "http://localhost/coders/api/index.php";
class course extends Component{
    state={
        coursedata:[],
        courselength:''
    }
     getchapters=(event)=>{
        let cid = event.target.getAttribute("data-id");
        localStorage.setItem("cid",cid)
        this.props.history.push("/coders/chapters")
    }
    componentDidMount(){

        const formdata = new FormData()
        formdata.append('option',"allcourses")

      Axios.post("http://localhost/coders/api/index.php",formdata).then((response)=>{
          console.log("response",response.data)
          this.setState({
            coursedata:response.data,
            courselength:response.data.length
          })
      }).catch((error)=>{alert(error)})
    }
    render(){
        let course = this.state.coursedata.map((data)=>{
            
            return  <div>
              
                <div class="card animate-this uk-inline-clip" >
                    <img src={data.course_pic} alt="" data-id={data.courseid} onClick={this.getchapters.bind(this)}/>
                    <div class="card-body text-center pb-3">
                        <h6 class=" mb-0">{data.course_description} </h6>
                    </div>
                    <div class="card-footer py-0 border-top-0">
                        
                    </div>
                </div>
               
        </div>
        })
        return(
            <div id="wrapper" class="admin-panel">
            <Sidemenu/>
            <Header/>

            <div class="page-content">
            <div class="page-content-inner">


                <nav id="breadcrumbs" class="mb-3">
                    <ul>
                        <li><a href="#"> <i class="uil-home-alt"></i> </a></li>
                        <li> Courses </li>

                    </ul>
                </nav>

                <div class="d-flex justify-content-between mb-3">
                    <h3> Courses ({this.state.courselength}) </h3>

                    <div>
                        <Link to="/coders/addcourse" class="btn btn-default">
                            <i class="uil-plus"> </i> New course
                        </Link>
                    </div>
                </div>

                <div class="uk-child-width-1-3@m uk-grid" 
                    uk-scrollspy="cls: uk-animation-slide-bottom-small; target: > div ; delay: 200">

                    

                    {course}

                
                </div>

                <div class="footer">
                    <div class="uk-grid-collapse uk-grid" >
                        <div class="uk-width-expand@s uk-first-column">
                            <p>© 2019 <strong>Courseplus</strong>. All Rights Reserved. </p>
                        </div>
                        <div class="uk-width-auto@s">
                            <nav class="footer-nav-icon">
                                <ul>
                                    <li><a href="#"><i class="icon-brand-facebook"></i></a></li>
                                    <li><a href="#"><i class="icon-brand-dribbble"></i></a></li>
                                    <li><a href="#"><i class="icon-brand-youtube"></i></a></li>
                                    <li><a href="#"><i class="icon-brand-twitter"></i></a></li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>

            </div>
           

            </div>
                

           </div>
        )
    }
}

export default course