import React, { Component } from 'react'
import $ from 'jquery'

class header extends Component{
       render(){
        return(


        

<header class="header uk-light">

<div class="container">
<nav uk-navbar class='uk-navbar'>


<div class="uk-navbar-left">






<a href="dashboard.html" class="logo">
    <img src="../assets/images/logo-dark.svg" alt=""/>
    <span> Courseplus</span>
</a>

<div class="searchbox uk-visible@s">

    <input class="uk-search-input" type="search" placeholder="Search..."/>
    <button class="btn-searchbox"> </button>

</div>

<div uk-dropdown="pos: top;mode:click;animation: uk-animation-slide-bottom-small"
    class="dropdown-search">
    <div class="erh BR9 MIw"
        style={{"top": "-26px", "position": "absolute" , "left": "24px","fill": "currentColor","height": "24px","pointerEvents": "none","color": "#f5f5f5"}}>
        <svg width="22" height="22">
            <path d="M0 24 L12 12 L24 24"></path>
        </svg></div>
  

    <ul class="dropdown-search-list">
        <li class="list-title">
            Recent Searches
        </li>
        <li>
            <a href="course-intro.html">
                Ultimate Web Designer And Developer Course</a>
        </li>
        <li><a href="course-intro.html">
                The Complete Ruby on Rails Developer Course </a>
        </li>
        <li><a href="course-intro.html">
                Bootstrap 4 From Scratch With 5 Real Projects </a>
        </li>
        <li> <a href="course-intro.html">
                The Complete 2020 Web Development Bootcamp </a>
        </li>
        <li class="menu-divider"> </li>
        <li><a href="course-intro.html">
                Bootstrap 4 From Scratch With 5 Real Projects </a>
        </li>
        <li> <a href="course-intro.html">
                The Complete 2020 Web Development Bootcamp </a>
        </li>
       
    </ul>

</div>
</div>




<div class="uk-navbar-right">



<div class="header-widget">

 
    <a href="#" class="header-widget-icon"
        uk-tooltip="title: Notificiation ; pos: bottom ;offset:21">
        <i class="uil-bell"></i>
        <span>4</span>
    </a>

    
    <div uk-dropdown="pos: top-right;mode:click ; animation: uk-animation-slide-bottom-small"
        class="dropdown-notifications">

       
        <div class="dropdown-notifications-headline">
            <h4>Notifications </h4>
            <a href="#">
                <i class="icon-feather-settings"
                    uk-tooltip="title: Notifications settings ; pos: left"></i>
            </a>
        </div>

       
        <div class="dropdown-notifications-content" data-simplebar>

           
            <ul>
                <li class="notifications-not-read">
                    <a href="#">
                        <span class="notification-icon btn btn-soft-danger disabled">
                            <i class="icon-feather-thumbs-up"></i></span>
                        <span class="notification-text">
                            <strong>Adrian Mohani</strong> Like Your Comment On Course
                            <span class="text-primary">Javascript Introduction </span>
                            <br/> <span class="time-ago"> 9 hours ago </span>
                        </span>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <span class="notification-icon btn btn-soft-primary disabled">
                            <i class="icon-feather-message-circle"></i></span>
                        <span class="notification-text">
                            <strong>Stella Johnson</strong> Replay Your Comments in
                            <span class="text-primary">Programming for Games</span>
                            <br/> <span class="time-ago"> 12 hours ago </span>
                        </span>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <span class="notification-icon btn btn-soft-success disabled">
                            <i class="icon-feather-star"></i></span>
                        <span class="notification-text">
                            <strong>Alex Dolgove</strong> Added New Review In Course
                            <span class="text-primary">Full Stack PHP Developer</span>
                            <br/> <span class="time-ago"> 19 hours ago </span>
                        </span>
                    </a>
                </li>
                <li class="notifications-not-read">
                    <a href="#">
                        <span class="notification-icon btn btn-soft-danger disabled">
                            <i class="icon-feather-share-2"></i></span>
                        <span class="notification-text">
                            <strong>Jonathan Madano</strong> Shared Your Discussion On Course
                            <span class="text-primary">Css Flex Box </span>
                            <br/> <span class="time-ago"> Yesterday </span>
                        </span>
                    </a>
                </li>
            </ul>

        </div>


    </div>


   

    <a href="#" class="header-widget-icon" uk-tooltip="title: Message ; pos: bottom ;offset:21">
        <i class="uil-envelope-alt"></i>
        <span>1</span>
    </a>

   
    <div uk-dropdown=" pos: top-right;mode:click" class="dropdown-notifications">

       
        <div class="dropdown-notifications-headline">
            <h4>Messages</h4>
            <a href="#">
                <i class="icon-feather-settings"
                    uk-tooltip="title: Message settings ; pos: left"></i>
            </a>
        </div>

        
        <div class="dropdown-notifications-content" data-simplebar>

          
            <ul>
                <li class="notifications-not-read">
                    <a href="#">
                        <span class="notification-avatar">
                            <img src="../assets/images/avatars/avatar-2.jpg" alt=""/>
                        </span>
                        <div class="notification-text notification-msg-text">
                            <strong>Jonathan Madano</strong>
                            <p>Okay.. Thanks for The Answer I will be waiting for your...
                            </p>
                            <span class="time-ago"> 2 hours ago </span>
                        </div>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <span class="notification-avatar">
                            <img src="../assets/images/avatars/avatar-3.jpg" alt=""/>
                        </span>
                        <div class="notification-text notification-msg-text">
                            <strong>Stella Johnson</strong>
                            <p> Alex will explain you how to keep the HTML structure and all
                                that...</p>
                            <span class="time-ago"> 7 hours ago </span>
                        </div>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <span class="notification-avatar">
                            <img src="../assets/images/avatars/avatar-1.jpg" alt=""/>
                        </span>
                        <div class="notification-text notification-msg-text">
                            <strong>Alex Dolgove</strong>
                            <p> Alia Joseph just joined Messenger! Be the first to send a
                                welcome message..</p>
                            <span class="time-ago"> 19 hours ago </span>
                        </div>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <span class="notification-avatar">
                            <img src="../assets/images/avatars/avatar-4.jpg" alt=""/>
                        </span>
                        <div class="notification-text notification-msg-text">
                            <strong>Adrian Mohani</strong>
                            <p> Okay.. Thanks for The Answer I will be waiting for your...
                            </p>
                            <span class="time-ago"> Yesterday </span>
                        </div>
                    </a>
                </li>
            </ul>

        </div>
        <div class="dropdown-notifications-footer">
            <a href="#"> sell all <i class="icon-line-awesome-long-arrow-right"></i> </a>
        </div>
    </div>


 
    <div class="dropdown-user-details">
        <div class="dropdown-user-avatar">
            <img src="../assets/images/avatars/avatar-2.jpg" alt=""/>
        </div>
        <div class="dropdown-user-name">
            Richard Ali <span>Adminstrator</span>
        </div>
    </div>


    <div uk-dropdown="pos: top-right ;mode:click" class="dropdown-notifications small">

      

        <ul class="dropdown-user-menu">
            <li>
                <a href="#">
                    <i class="icon-material-outline-dashboard"></i> Dashboard</a>
            </li>
            <li><a href="#">
                    <i class="icon-feather-bookmark"></i> Bookmark </a>
            </li>
            <li><a href="profile-edit.html">
                    <i class="icon-feather-settings"></i> Account Settings</a>
            </li>
            <li><a href="#" style={{"color":"#62d76b"}}>
                    <i class="icon-feather-star"></i> Upgrade To Premium</a>
            </li>
            <li>
                <a href="#" id="night-mode" class="btn-night-mode">
                    <i class="icon-feather-moon"></i> Night mode
                    <span class="btn-night-mode-switch">
                        <span class="uk-switch-button"></span>
                    </span>
                </a>
            </li>
            </ul>
            <ul class="menu-divider">
                <li><a href="#">
                        <i class="icon-feather-help-circle"></i> Help</a>
                </li>
                <li><a href="page-login.html">
                        <i class="icon-feather-log-out"></i> Sing Out</a>
                </li>
            </ul>


    </div>


</div>




<a class="uk-navbar-toggle uk-hidden@s"
    uk-toggle="target: .nav-overlay; animation: uk-animation-fade" href="#">
    <i class="uil-search icon-small"></i>
</a>

<span class="uil-user icon-small uk-hidden@s"
    uk-toggle="target: .header-widget ; cls: is-active">
    </span>

</div>



</nav>

</div>


</header>
   
       

        )
    }
}

export default header
