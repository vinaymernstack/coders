import React, {Component} from 'react'
import Header from '../header/header'
import  Sidemenu from '../sidemenu/sidemenu'

class settings extends Component{
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
                            <li><a href="#"> Setting </a></li>
                            <li>Account Setting</li>
                        </ul>
                    </nav>
                </div>



                <div class="uk-grid">
                    <div class="uk-width-1-4@m uk-flex-last@m">

                        <nav class="responsive-tab style-3 setting-menu card"
                            uk-sticky="top:30 ; offset:100; media:@m ;bottom:true; animation: uk-animation-slide-top">

                            <ul>
                                <li class="uk-active"><a href="#"> <i class="uil-cog"></i> General </a></li>
                                <li><a href="#"> <i class="uil-user"></i> Profile </a></li>
                                <li><a href="#"> <i class="uil-usd-circle"></i> Monetization</a></li>
                                <li><a href="#"> <i class="uil-unlock-alt"></i> Password </a></li>
                                <li><a href="#"> <i class="uil-dollar-alt"></i> Earning</a></li>
                                <li><a href="#"> <i class="uil-scenery"></i> Avatar & Cover</a></li>
                                <li><a href="#"> <i class="uil-shield-check"></i> Security</a></li>
                                <li><a href="#"> <i class="uil-bolt"></i> Membarship</a></li>
                                <li><a href="#"> <i class="uil-history"></i> Manage Sessions</a></li>
                                <li><a href="#"> <i class="uil-trash-alt"></i> Delete account</a></li>
                            </ul>
                        </nav>

                    </div>

                    <div class="uk-width-2-3@m">

                        <div class="card rounded">
                            <div class="p-3">
                                <h5 class="mb-0"> Contact info </h5>
                            </div>
                            <hr class="m-0"/>
                            <form class="uk-child-width-1-2@s uk-grid-small p-4 uk-grid" >
                                <div>
                                    <h5 class="uk-text-bold mb-2"> First Name </h5>
                                    <input type="text" class="uk-input" placeholder="Your name"/>
                                </div>
                                <div>
                                    <h5 class="uk-text-bold mb-2"> Seccond Name </h5>
                                    <input type="text" class="uk-input" placeholder="Your seccond"/>
                                </div>
                                <div>
                                    <h5 class="uk-text-bold mb-2"> Your email address </h5>
                                    <input type="text" class="uk-input" placeholder="eliedaniels@gmail.com"/>
                                </div>
                                <div>
                                    <h5 class="uk-text-bold mb-2"> Phone </h5>
                                    <input type="text" class="uk-input" placeholder="+1 555 623 568 "/>
                                </div>
                            </form>

                            <div class="uk-flex uk-flex-right p-4">
                                <button class="btn  btn-light mr-2">Cancle</button>
                                <button class="btn btn-default">Save Changes</button>
                            </div>
                        </div>

                        <div class="card rounded mt-4">
                            <div class="p-3">
                                <h5 class="mb-0"> Billing address </h5>
                            </div>
                            <hr class="m-0"/>
                            <form class="uk-child-width-1-2@s uk-grid-small p-4 uk-grid" >
                                <div>
                                    <h5 class="uk-text-bold mb-2"> Number </h5>
                                    <input type="text" class="uk-input" placeholder="23, Block C2 "/>
                                </div>
                                <div>
                                    <h5 class="uk-text-bold mb-2"> Street </h5>
                                    <input type="text" class="uk-input" placeholder="Street Number"/>
                                </div>
                                <div>
                                    <h5 class="uk-text-bold mb-2"> City </h5>
                                    <input type="text" class="uk-input" placeholder="City Name"/>
                                </div>
                                <div>
                                    <h5 class="uk-text-bold mb-2"> Postal Code </h5>
                                    <input type="text" class="uk-input" placeholder="Postal Code"/>
                                </div>
                                <div>
                                    <h5 class="uk-text-bold mb-2"> State </h5>
                                    <input type="text" class="uk-input" placeholder="State"/>
                                </div>
                                <div>
                                    <h5 class="uk-text-bold mb-2"> Country </h5>
                                    <input type="text" class="uk-input" placeholder="Your Country"/>
                                </div>
                                <div>
                                    <h5 class="uk-text-bold mb-2"> Gender </h5>
                                    <select class="uk-select">
                                        <option>Male</option>
                                        <option>Female</option>
                                    </select>
                                </div>

                            </form>
                            <div class="uk-flex uk-flex-right p-4">
                                <button class="btn  btn-light mr-2">Cancle</button>
                                <button class="btn btn-default">Save Changes</button>
                            </div>
                        </div>

                    </div>
                    </div>
                     </div>



                </div>


            </div>
        )
    }
}

export default settings