import React, {Component} from 'react'
import Header from '../header/header'
import  Sidemenu from '../sidemenu/sidemenu'
import Footer from '../footer/footer'
class massage extends Component{
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
                            <li><a href="#"> Chat </a></li>
                            <li>All Message</li>
                        </ul>
                    </nav>
                </div>



                <div class="chats-container margin-top-0">

                    <div class="chats-container-inner">

                     
                        <div class="chats-inbox">
                            <div class="chats-headline">
                                <div class="input-with-icon">
                                    <input id="autocomplete-input" type="text" placeholder="Search"/>
                                    <i class="icon-material-outline-search"></i>
                                </div>
                            </div>

                            <ul>
                                <li>
                                    <a href="#">
                                        <div class="message-avatar"><i class="status-icon status-online"></i><img
                                                src="../assets/images/avatars/avatar-1.jpg" alt="" /></div>

                                        <div class="message-by">
                                            <div class="message-by-headline">
                                                <h5>Jonathan Madano </h5>
                                                <span>4 hours ago</span>
                                            </div>
                                            <p>You: Yes, in an organization stature, this is a must</p>
                                            <span class="message-readed uil-check"> </span>
                                        </div>
                                    </a>
                                </li>

                                <li class="active-message">
                                    <a href="#">
                                        <div class="message-avatar"><i class="status-icon status-online"></i><img
                                                src="../assets/images/avatars/avatar-2.jpg" alt="" /></div>

                                        <div class="message-by">
                                            <div class="message-by-headline">
                                                <h5>Stella Johnson </h5>
                                                <span>Yesterday</span>
                                            </div>
                                            <p>What are you doing?</p>
                                        </div>
                                    </a>
                                </li>

                                <li>
                                    <a href="#">
                                        <div class="message-avatar"><i class="status-icon status-offline"></i><img
                                                src="../assets/images/avatars/avatar-3.jpg" alt="" /></div>

                                        <div class="message-by">
                                            <div class="message-by-headline">
                                                <h5> Alex Dolgove</h5>
                                                <span>2 days ago</span>
                                            </div>
                                            <p>Hello, I want to talk about my project if you don't mind!</p>
                                        </div>
                                    </a>
                                </li>

                                <li>
                                    <a href="#">
                                        <div class="message-avatar"><i class="status-icon status-offline"></i><img
                                                src="../assets/images/avatars/avatar-4.jpg" alt="" /></div>

                                        <div class="message-by">
                                            <div class="message-by-headline">
                                                <h5>Marcin Kowalski</h5>
                                                <span>2 days ago</span>
                                            </div>
                                            <p>Hello</p>
                                            <span class="message-readed uil-check"> </span>
                                        </div>
                                    </a>
                                </li>

                                <li class="active-message">
                                    <a href="#">
                                        <div class="message-avatar"><i class="status-icon status-online"></i><img
                                                src="../assets/images/avatars/avatar-2.jpg" alt="" /></div>

                                        <div class="message-by">
                                            <div class="message-by-headline">
                                                <h5>Adrian Mohani</h5>
                                                <span>Yesterday</span>
                                            </div>
                                            <p>How are you?</p>
                                        </div>
                                    </a>
                                </li>

                                <li>
                                    <a href="#">
                                        <div class="message-avatar"><i class="status-icon status-offline"></i><img
                                                src="../assets/images/avatars/avatar-4.jpg" alt="" /></div>

                                        <div class="message-by">
                                            <div class="message-by-headline">
                                                <h5>Stella Johnson </h5>
                                                <span>Yesterday</span>
                                            </div>
                                            <p>Say hi to your new friend</p>
                                            <span class="message-readed uil-check"> </span>
                                        </div>
                                    </a>
                                </li>

                                <li>
                                    <a href="#">
                                        <div class="message-avatar"><i class="status-icon status-offline"></i><img
                                                src="../assets/images/avatars/avatar-1.jpg" alt="" /></div>

                                        <div class="message-by">
                                            <div class="message-by-headline">
                                                <h5>Alex Dolgove</h5>
                                                <span>Yesterday</span>
                                            </div>
                                            <p>Hi Tom! Hate to break it to you but I'm actually on vacation</p>
                                        </div>
                                    </a>
                                </li>

                                <li>
                                    <a href="#">
                                        <div class="message-avatar"><i class="status-icon status-offline"></i><img
                                                src="../assets/images/avatars/avatar-2.jpg" alt="" /></div>

                                        <div class="message-by">
                                            <div class="message-by-headline">
                                                <h5>Adrian Mohani</h5>
                                                <span>Yesterday</span>
                                            </div>
                                            <p>You: Yes, in an organization stature, this is a must</p>
                                        </div>
                                    </a>
                                </li>

                                <li>
                                    <a href="#">
                                        <div class="message-avatar"><i class="status-icon status-offline"></i><img
                                                src="../assets/images/avatars/avatar-4.jpg" alt="" /></div>

                                        <div class="message-by">
                                            <div class="message-by-headline">
                                                <h5>Jonathan Madano </h5>
                                                <span>2 days ago</span>
                                            </div>
                                            <p>Yes, I received payment. Thanks for cooperation!</p>
                                            <span class="message-readed uil-check"> </span>
                                        </div>
                                    </a>
                                </li>
                            </ul>
                        </div>
                       
                        <div class="message-content">

                            <div class="chats-headline">

                                <div class="d-flex">
                                    <div class="avatar-parent-child">
                                        <img alt="Image placeholder" src="../assets/images/avatars/avatar-1.jpg"
                                            class="avatar  rounded-circle avatar-sm"/>
                                        <span class="avatar-child avatar-badge bg-success"></span>
                                    </div>
                                    <h4 class="ml-2"> Alex Dolgove <span>Online</span> </h4>
                                </div>

                                <div class="message-action">
                                    <a href="#" class="btn btn-icon btn-hover  btn-circle" uk-tooltip="filter">
                                        <i class="uil-outgoing-call"></i>
                                    </a>
                                    <a href="#" class="btn btn-icon btn-hover  btn-circle" uk-tooltip="filter">
                                        <i class="uil-video"></i>
                                    </a>
                                    <a href="#" class="btn btn-icon btn-hover  btn-circle" uk-tooltip="More">
                                        <i class="uil-ellipsis-h"></i>
                                    </a>
                                    <div
                                        uk-dropdown="pos: left ; mode: click ;animation: uk-animation-slide-bottom-small">
                                        <ul class="uk-nav uk-dropdown-nav">
                                            <li><a href="#"> Refresh </a></li>
                                            <li><a href="#"> Manage</a></li>
                                            <li><a href="#"> Setting</a></li>
                                        </ul>
                                    </div>
                                </div>

                            </div>

                          
                            <div class="message-content-inner">

                             
                                <div class="message-time-sign">
                                    <span>28 June, 2018</span>
                                </div>

                                <div class="message-bubble me">
                                    <div class="message-bubble-inner">
                                        <div class="message-avatar"><img src="../assets/images/avatars/avatar-1.jpg"
                                                alt="" />
                                        </div>
                                        <div class="message-text">
                                            <p>How likely are you to recommend our company
                                                to your friends and family?</p>
                                        </div>
                                    </div>
                                    <div class="clearfix"></div>
                                </div>

                                <div class="message-bubble">
                                    <div class="message-bubble-inner">
                                        <div class="message-avatar"><img src="../assets/images/avatars/avatar-2.jpg"
                                                alt="" />
                                        </div>
                                        <div class="message-text">
                                            <p>Hey there, we’re just writing to let you know 👍</p>
                                        </div>
                                    </div>
                                    <div class="clearfix"></div>
                                </div>

                                <div class="message-bubble me">
                                    <div class="message-bubble-inner">
                                        <div class="message-avatar"><img src="../assets/images/avatars/avatar-1.jpg"
                                                alt="" />
                                        </div>
                                        <div class="message-text">
                                            <p>Ok, Understood! 😉</p>
                                        </div>
                                    </div>
                                    <div class="clearfix"></div>
                                </div>


                            
                                <div class="message-time-sign">
                                    <span>Yesterday</span>
                                </div>

                                <div class="message-bubble me">
                                    <div class="message-bubble-inner">
                                        <div class="message-avatar"><img src="../assets/images/avatars/avatar-1.jpg"
                                                alt="" />
                                        </div>
                                        <div class="message-text">
                                            <p> I just wanted to let you know You’ll receive notifications for all
                                                issues, pull requests!.</p>
                                        </div>
                                    </div>
                                    <div class="clearfix"></div>
                                </div>

                                <div class="message-bubble">
                                    <div class="message-bubble-inner">
                                        <div class="message-avatar"><img src="../assets/images/avatars/avatar-2.jpg"
                                                alt="" />
                                        </div>
                                        <div class="message-text">
                                            <p>You were automatically subscribed
                                                because you’ve been given access to the repository 😎</p>
                                        </div>
                                    </div>
                                    <div class="clearfix"></div>
                                </div>

                                <div class="message-bubble me">
                                    <div class="message-bubble-inner">
                                        <div class="message-avatar"><img src="../assets/images/avatars/avatar-1.jpg"
                                                alt="" />
                                        </div>
                                        <div class="message-text">
                                            <p>Ok But don't forget about last payment. 🙂</p>
                                        </div>
                                    </div>
                                    <div class="clearfix"></div>
                                </div>

                                <div class="message-bubble">
                                    <div class="message-bubble-inner">
                                        <div class="message-avatar"><img src="../assets/images/avatars/avatar-2.jpg"
                                                alt="" />
                                        </div>
                                        <div class="message-text w-auto">
                                           
                                            <div class="typing-indicator">
                                                <span></span>
                                                <span></span>
                                                <span></span>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="clearfix"></div>
                                </div>
                            </div>
                            
                            <div class="message-reply">

                                <form class="d-flex align-items-center w-100">
                                    <div class="btn-box d-flex align-items-center mr-3">
                                        <a href="#" class="btn btn-icon  btn-default btn-circle d-inline-block mr-2"
                                            uk-tooltip="filter" title="" aria-expanded="false">
                                            <i class="uil-smile-wink"></i>
                                        </a>
                                        <a href="#" class="btn btn-icon  btn-default btn-circle d-inline-block  "
                                            uk-tooltip="filter" title="" aria-expanded="false">
                                            <i class="uil-link-alt"></i>
                                        </a>
                                    </div>

                                    <textarea cols="1" rows="1" placeholder="Your Message" data-autoresize></textarea>

                                    <button type="submit" class="send-btn d-inline-block btn btn-default">Send <i
                                            class="bx bx-paper-plane"></i></button>
                                </form>

                            </div>

                       


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

export default massage