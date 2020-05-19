import React, {Component} from 'react'
import Header from '../header/header'
import  Sidemenu from '../sidenavchapter/sidenavchapter'
import Footer from '../footer/footer'
import {Link} from 'react-router-dom'
import $ from "jquery";
var Baseurl = "http://localhost/coders/api/index.php";
class courselession extends Component{
    state={
        chapterdata:[],
        lessiondata:[],
        lessionvideo:[],
    }
   
    watchedvideo=(e)=>{
        let id = e.target.id
    }

    getlessions=(e)=>{
        $(".list").toggle()
        let cid = e.target.getAttribute("data-id");
        let coursedata = {
                    option : "getlessons",
                    chapterid:cid
                    
                }
                $.ajax({
                  url:Baseurl,
                  method:"POST",
                  dataType:"JSON",
                  data:coursedata,
                  success:(res)=>{   
                    console.log(res)
                    this.setState({
                        lessiondata:res
                    })
                  },
                  error:(err)=>{
                      alert("err")
                  }
              })
    }

    getlessionvideo=(e)=>{
        let cid = e.target.getAttribute("data-id");
        let coursedata = {
                    option : "getlessoncontent",
                    lessonid:cid
                    
                }
                $.ajax({
                  url:Baseurl,
                  method:"POST",
                  dataType:"JSON",
                  data:coursedata,
                  success:(res)=>{   
                    console.log(res)
                    this.setState({
                        lessionvideo:res
                    })
                  },
                  error:(err)=>{
                      alert("err")
                  }
              })
    }
    componentDidMount(){
        let cid = localStorage.getItem("cid")
        let coursedata = {
                    option : "getchapters",
                    courseid:cid      
                }
                $.ajax({
                  url:Baseurl,
                  method:"POST",
                  dataType:"JSON",
                  data:coursedata,
                  success:(res)=>{ 
                    this.setState({
                        chapterdata:res
                    })
                  },
                  error:(err)=>{
                      alert(cid)
                  }
              })
    }
    render(){
        
        


        let lessiondata = this.state.lessiondata.map((data)=>{
            return<li> <a href="#" data-id={data.lessonid} onClick={this.getlessionvideo.bind(this)}> {data.lessonname}</a>
            </li>
        })

        let lessionvideo = this.state.lessionvideo.map((data)=>{ 
            return    <iframe src={data.contenturl} frameborder="0"
            uk-video="automute: true" allowfullscreen uk-responsive></iframe>
        })

       let chapterdata= this.state.chapterdata.map((data)=>{
            return<li class="uk-close" >
            <a class="uk-accordion-title" href="#"  data-id={data.chapterid} onClick={this.getlessions.bind(this)}> {data.chaptername} </a>
            <div class="uk-accordion-content list" style={{"display":"none"}}>
          
                <ul class="course-video-list highlight-watched"
                    uk-switcher=" connect: #video-slider  ; animation: uk-animation-slide-right-small, uk-animation-slide-left-medium">
                        {lessiondata}
                </ul>

            </div>
        </li>
        })

       
        return(
            <div id="wrapper" class="admin-panel">

<div class="course-layouts">

<div class="course-content bg-dark">

    <div class="course-header">
        
        <a href="#" class="btn-back" uk-toggle="target: .course-layouts; cls: course-sidebar-collapse">
            <i class="icon-feather-chevron-left"></i>
        </a>

        <div class="float-left">
            <Link to="/coders/course" class="btn btn-default">
                <i class=""> </i> back to course
            </Link>
        </div>

        <div>
            <a href="#">
                <i class="icon-feather-help-circle btns"></i> </a>
            <div uk-drop="pos: bottom-right;mode : click">
                <div class="uk-card-default p-4">
                    <h4> Elementum tellus id mauris faucibuss soluta nobis </h4>
                    <p class="mt-2 mb-0">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                        diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
                        volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper
                        suscipit lobortis nisl ut aliquip ex ea commodo consequat. Nam liber tempor cum
                        soluta nobis eleifend option congue nihil imperdiet</p>
                </div>
            </div>

            <a hred="#">
                <i class="icon-feather-more-vertical btns"></i>
            </a>
            <div class="dropdown-option-nav " uk-dropdown="pos: bottom-right ;mode : click">
                <ul>

                    <li><a href="#">
                            <i class="icon-feather-bookmark"></i>
                            Add To Bookmarks</a></li>
                    <li><a href="#">
                            <i class="icon-feather-share-2"></i>
                            Share With Friend </a></li>

                    <li>
                        <a href="#" id="night-mode" class="btn-night-mode">
                            <i class="icon-line-awesome-lightbulb-o"></i> Night mode
                            <label class="btn-night-mode-switch">
                                <div class="uk-switch-button"></div>
                            </label>
                        </a>
                    </li>
                </ul>
            </div>
        </div>

    </div>

    <div class="course-content-inner">
        <ul id="video-slider" class="uk-switcher">
        <li>
              
              <div class="video-responsive">
              {lessionvideo}
              </div>
  
          </li>
            
            {/* <li>
              
                <div class="video-responsive">
                    <iframe src="https://www.youtube.com/embed/9gTw2EDkaDQ" frameborder="0"
                        uk-video="automute: true" allowfullscreen uk-responsive></iframe>
                </div>

            </li>
            <li>
                <div class="video-responsive">
                    <iframe src="https://www.youtube.com/embed/DFbhpQpqyuo" https://youtu.be/DFbhpQpqyuo frameborder="0"
                        allowfullscreen ></iframe>
                </div>

            </li>
            <li>
                <div class="video-responsive">
                    <iframe src="https://www.youtube.com/embed/CGSdK7FI9MY" frameborder="0"
                        allowfullscreen uk-responsive></iframe>
                </div>
            </li>
            <li>
                <div class="video-responsive">
                    <iframe src="https://www.youtube.com/embed/4I1WgJz_lmA" frameborder="0"
                        allowfullscreen uk-responsive></iframe>
                </div>
            </li>
            <li>
                <div class="video-responsive">
                    <iframe src="https://www.youtube.com/embed/dDn9uw7N9Xg" frameborder="0"
                        allowfullscreen uk-responsive></iframe>
                </div>
            </li>
            <li>
                <div class="video-responsive">
                    <iframe src="https://www.youtube.com/embed/CPcS4HtrUEU" frameborder="0"
                        allowfullscreen uk-responsive></iframe>
                </div>
            </li> */}

        </ul>

    </div>

</div>


<div class="course-sidebar">
    <div class="course-sidebar-title">
        <h3> Table of Contents </h3>
    </div>
    <div class="course-sidebar-container data-simplebar" >

        <ul class="course-video-list-section uk-accordion" >
            {chapterdata}
           
            {/* <li class="uk-close">
                <a class="uk-accordion-title" href="#" onClick={this.showvideolist}> Your First webpage </a>
                <div class="uk-accordion-content list" style={{"display":"none"}}>
              
                    <ul class="course-video-list highlight-watched"
                        uk-switcher=" connect: #video-slider  ; animation: uk-animation-slide-right-small, uk-animation-slide-left-medium">
                        <li class="watched"> <a href="#"> Creating First Page <span> 23 min </span> </a>
                        </li>
                        <li> <a href="#"> Headings in HTML <span> 23 min </span> </a> </li>
                        <li> <a href="#"> The paragraph tag <span> 23 min </span> </a> </li>
                        <li> <a href="#"> Emphasis and Strong Tag <span> 23 min </span> </a> </li>
                        <li> <a href="#"> Text Formatting <span> 23 min </span> </a> </li>
                        <li> <a href="#"> Working with Images <span> 23 min </span> </a> </li>
                    </ul>

                </div>
            </li> */}
           
           
        </ul>

    </div>

</div>

</div>


               

</div>




       
    )
    }
}

export default courselession