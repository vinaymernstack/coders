import React, { Component } from 'react'
import {Link} from 'react-router-dom'
class sidemenu extends Component{
    render(){
        return(
            <div class="page-menu">
           
            <span class="btn-menu-close" uk-toggle="target: #wrapper ; cls: mobile-active"></span>
           
            <span class="btn-menu-trigger" uk-toggle="target: .page-menu ; cls: menu-large"></span>

         
            <div class="logo uk-visible@s">
                <a href="dashboard.html"> <i class=" uil-graduation-hat"></i> <span> Courseplus</span> </a>
            </div>
            <div class="page-menu-inner" data-simplebar>
                <ul class="mt-0">
                
                    <li><Link to="/admin"><i class="uil-home-alt"></i> <span> Dashboard</span></Link> </li>
                    <li><Link to="/catagories"><i class="uil-tag-alt"></i> <span> Catagories</span></Link> </li>
                    <li><Link to="/course"><i class="uil-tag-alt"></i> <span> Courses</span></Link> </li>
                    <li><Link to="/course"><i class="uil-tag-alt"></i> <h4> Chapters</h4></Link></li>
                    
                </ul>

                {/* <ul data-submenu-title="Setting">
                    <li><Link to="/settings"><i class="uil-cog"></i> <span> General </span></Link> </li>
                    <li><a href="setting.html"><i class="uil-edit-alt"></i> <span> Site </span></a> </li>
                    <li class="#"><a href="#"><i class="uil-layers"></i> <span> simple link
                            </span></a>
                        <ul>
                            <li><a href="#"> simple link <span class="nav-tag">3</span></a>
                            </li>
                            <li><a href="#"> simple link </a></li>
                        </ul>
                    </li>
                    <li><a href="login.html"><i class="uil-sign-out-alt"></i> <span> Sign-out</span></a> </li>
                </ul> */}

            </div>
           
        </div>



        )
    }
}

export default sidemenu