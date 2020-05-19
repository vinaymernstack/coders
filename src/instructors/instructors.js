import React, {Component} from 'react'
import Header from '../header/header'
import  Sidemenu from '../sidemenu/sidemenu'
import Footer from '../footer/footer'

class instuctors extends Component{
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
                            <li><a href="#"> Instucture </a></li>
                            <li>Veiw Instuctures</li>
                        </ul>
                    </nav>
                </div>

                <div class="section-header mb-lg-2 border-0 uk-flex-middle">
                    <div class="section-header-left">
                        <h2 class="uk-heading-line text-left"><span> Instuctures </span></h2>
                    </div>
                    <div class="section-header-right">

                        <a href="#" uk-tooltip="title: Veiw as list; pos: top-right" title="" aria-expanded="false">
                            <i class="icon-feather-list"></i>
                        </a>
                        <div class="display-as">
                            <a href="your-laked-videos.html" class="active"
                                uk-tooltip="title: Veiw as Grid; pos: top-right" title="" aria-expanded="false">
                                <i class="icon-feather-grid"></i>
                            </a>
                        </div>

                        <a href="#" class="btn btn-default uk-visible@s"> <i class="uil-plus"></i> Add instuctures</a>

                    </div>
                </div>



                <div class="uk-child-width-1-4@m uk-child-width-1-2@s uk-grid" 
                    uk-scrollspy="cls: uk-animation-slide-bottom-small; target: > div ; delay: 200">
                    <div>

                        <div class="card animate-this mb-2">
                            <div class="card-body text-center">
                                <div class="avatar-parent-child">
                                    <img alt="Image placeholder" src="../assets/images/avatars/avatar-2.jpg"
                                        class="avatar  rounded-circle avatar-lg"/>
                                    <span class="avatar-child avatar-badge bg-success"></span>
                                </div>
                                <h5 class="h6 mt-4 mb-0"> Stella Johnson </h5>
                                <a href="#" class="d-block text-sm text-muted mb-3">@john.sullivan</a>

                                <div class="d-flex justify-content-between px-4">
                                    <a href="#" class="btn btn-icon btn-hover btn-circle" uk-tooltip="Edit">
                                        <i class="uil-edit-alt"></i> </a>
                                    <a href="#" class="btn btn-icon btn-hover btn-circle" uk-tooltip="Send Message">
                                        <i class="uil-envelope"></i>
                                    </a>
                                    <a href="#" class="btn btn-icon btn-hover btn-circle" uk-tooltip="Delete">
                                        <i class="uil-trash-alt"></i> </a>
                                </div>
                            </div>
                            <div class="card-footer text-center py-2">

                                <a href="#" class="text-muted uk-text-small"> 13 Courses </a>

                            </div>

                        </div>
                    </div>
                    <div>

                        <div class="card animate-this">
                            <div class="card-body text-center">
                                <div class="avatar-parent-child">
                                    <img alt="Image placeholder" src="../assets/images/avatars/avatar-1.jpg"
                                        class="avatar  rounded-circle avatar-lg"/>
                                    <span class="avatar-child avatar-badge bg-success"></span>
                                </div>
                                <h5 class="h6 mt-4 mb-0"> Alex Dolgove</h5>
                                <a href="#" class="d-block text-sm text-muted mb-3">@Alex.Dolgove</a>

                                <div class="d-flex justify-content-between px-4">
                                    <a href="#" class="btn btn-icon btn-hover btn-circle" uk-tooltip="Edit">
                                        <i class="uil-edit-alt"></i> </a>
                                    <a href="#" class="btn btn-icon btn-hover btn-circle" uk-tooltip="Send Message">
                                        <i class="uil-envelope"></i>
                                    </a>
                                    <a href="#" class="btn btn-icon btn-hover btn-circle" uk-tooltip="Delete">
                                        <i class="uil-trash-alt"></i> </a>
                                </div>
                            </div>
                            <div class="card-footer text-center py-2">

                                <a href="#" class="text-muted uk-text-small"> 21 Courses </a>

                            </div>

                        </div>
                    </div>
                    <div>

                        <div class="card animate-this">
                            <div class="card-body text-center">
                                <div class="avatar-parent-child">
                                    <img alt="Image placeholder" src="../assets/images/avatars/avatar-3.jpg"
                                        class="avatar  rounded-circle avatar-lg"/>
                                    <span class="avatar-child avatar-badge bg-success"></span>
                                </div>
                                <h5 class="h6 mt-4 mb-0">Adrian Mohani</h5>
                                <a href="#" class="d-block text-sm text-muted mb-3">@Adrian.Mohani</a>

                                <div class="d-flex justify-content-between px-4">
                                    <a href="#" class="btn btn-icon btn-hover btn-circle" uk-tooltip="Edit">
                                        <i class="uil-edit-alt"></i> </a>
                                    <a href="#" class="btn btn-icon btn-hover btn-circle" uk-tooltip="Send Message">
                                        <i class="uil-envelope"></i>
                                    </a>
                                    <a href="#" class="btn btn-icon btn-hover btn-circle" uk-tooltip="Delete">
                                        <i class="uil-trash-alt"></i> </a>
                                </div>
                            </div>
                            <div class="card-footer text-center py-2">

                                <a href="#" class="text-muted uk-text-small"> 25 Courses </a>

                            </div>

                        </div>
                    </div>
                    <div>

                        <div class="card animate-this">
                            <div class="card-body text-center">
                                <div class="avatar-parent-child">
                                    <img alt="Image placeholder" src="../assets/images/avatars/avatar-4.jpg"
                                        class="avatar  rounded-circle avatar-lg"/>
                                    <span class="avatar-child avatar-badge bg-success"></span>
                                </div>
                                <h5 class="h6 mt-4 mb-0"> Stella Johnson</h5>
                                <a href="#" class="d-block text-sm text-muted mb-3">@john.Johnson</a>

                                <div class="d-flex justify-content-between px-4">
                                    <a href="#" class="btn btn-icon btn-hover btn-circle" uk-tooltip="Edit">
                                        <i class="uil-edit-alt"></i> </a>
                                    <a href="#" class="btn btn-icon btn-hover btn-circle" uk-tooltip="Send Message">
                                        <i class="uil-envelope"></i>
                                    </a>
                                    <a href="#" class="btn btn-icon btn-hover btn-circle" uk-tooltip="Delete">
                                        <i class="uil-trash-alt"></i> </a>
                                </div>
                            </div>
                            <div class="card-footer text-center py-2">

                                <a href="#" class="text-muted uk-text-small"> 8 Courses </a>

                            </div>

                        </div>
                    </div>
                    <div>

                        <div class="card animate-this">
                            <div class="card-body text-center">
                                <div class="avatar-parent-child">
                                    <img alt="Image placeholder" src="../assets/images/avatars/avatar-3.jpg"
                                        class="avatar  rounded-circle avatar-lg"/>
                                    <span class="avatar-child avatar-badge bg-success"></span>
                                </div>
                                <h5 class="h6 mt-4 mb-0"> Richard Ali </h5>
                                <a href="#" class="d-block text-sm text-muted mb-3">@Richard.Ali</a>

                                <div class="d-flex justify-content-between px-4">
                                    <a href="#" class="btn btn-icon btn-hover btn-circle" uk-tooltip="Edit">
                                        <i class="uil-edit-alt"></i> </a>
                                    <a href="#" class="btn btn-icon btn-hover btn-circle" uk-tooltip="Send Message">
                                        <i class="uil-envelope"></i>
                                    </a>
                                    <a href="#" class="btn btn-icon btn-hover btn-circle" uk-tooltip="Delete">
                                        <i class="uil-trash-alt"></i> </a>
                                </div>
                            </div>
                            <div class="card-footer text-center py-2">

                                <a href="#" class="text-muted uk-text-small"> 13 Courses </a>

                            </div>

                        </div>
                    </div>
                    <div>

                        <div class="card animate-this">
                            <div class="card-body text-center">
                                <div class="avatar-parent-child">
                                    <img alt="Image placeholder" src="../assets/images/avatars/avatar-2.jpg"
                                        class="avatar  rounded-circle avatar-lg"/>
                                    <span class="avatar-child avatar-badge bg-success"></span>
                                </div>
                                <h5 class="h6 mt-4 mb-0"> Stella Johnson </h5>
                                <a href="#" class="d-block text-sm text-muted mb-3">@john.sullivan</a>

                                <div class="d-flex justify-content-between px-4">
                                    <a href="#" class="btn btn-icon btn-hover btn-circle" uk-tooltip="Edit">
                                        <i class="uil-edit-alt"></i> </a>
                                    <a href="#" class="btn btn-icon btn-hover btn-circle" uk-tooltip="Send Message">
                                        <i class="uil-envelope"></i>
                                    </a>
                                    <a href="#" class="btn btn-icon btn-hover btn-circle" uk-tooltip="Delete">
                                        <i class="uil-trash-alt"></i> </a>
                                </div>
                            </div>
                            <div class="card-footer text-center py-2">

                                <a href="#" class="text-muted uk-text-small"> 13 Courses </a>

                            </div>

                        </div>
                    </div>
                    <div>

                        <div class="card animate-this">
                            <div class="card-body text-center">
                                <div class="avatar-parent-child">
                                    <img alt="Image placeholder" src="../assets/images/avatars/avatar-1.jpg"
                                        class="avatar  rounded-circle avatar-lg"/>
                                    <span class="avatar-child avatar-badge bg-success"></span>
                                </div>
                                <h5 class="h6 mt-4 mb-0"> Alex Dolgove</h5>
                                <a href="#" class="d-block text-sm text-muted mb-3">@Alex.Dolgove</a>

                                <div class="d-flex justify-content-between px-4">
                                    <a href="#" class="btn btn-icon btn-hover btn-circle" uk-tooltip="Edit">
                                        <i class="uil-edit-alt"></i> </a>
                                    <a href="#" class="btn btn-icon btn-hover btn-circle" uk-tooltip="Send Message">
                                        <i class="uil-envelope"></i>
                                    </a>
                                    <a href="#" class="btn btn-icon btn-hover btn-circle" uk-tooltip="Delete">
                                        <i class="uil-trash-alt"></i> </a>
                                </div>
                            </div>
                            <div class="card-footer text-center py-2">

                                <a href="#" class="text-muted uk-text-small"> 21 Courses </a>

                            </div>

                        </div>
                    </div>
                    <div>

                        <div class="card animate-this">
                            <div class="card-body text-center">
                                <div class="avatar-parent-child">
                                    <img alt="Image placeholder" src="../assets/images/avatars/avatar-3.jpg"
                                        class="avatar  rounded-circle avatar-lg"/>
                                    <span class="avatar-child avatar-badge bg-success"></span>
                                </div>
                                <h5 class="h6 mt-4 mb-0">Adrian Mohani</h5>
                                <a href="#" class="d-block text-sm text-muted mb-3">@Adrian.Mohani</a>

                                <div class="d-flex justify-content-between px-4">
                                    <a href="#" class="btn btn-icon btn-hover btn-circle" uk-tooltip="Edit">
                                        <i class="uil-edit-alt"></i> </a>
                                    <a href="#" class="btn btn-icon btn-hover btn-circle" uk-tooltip="Send Message">
                                        <i class="uil-envelope"></i>
                                    </a>
                                    <a href="#" class="btn btn-icon btn-hover btn-circle" uk-tooltip="Delete">
                                        <i class="uil-trash-alt"></i> </a>
                                </div>
                            </div>
                            <div class="card-footer text-center py-2">

                                <a href="#" class="text-muted uk-text-small"> 25 Courses </a>

                            </div>

                        </div>
                    </div>
                </div>


                <ul class="uk-pagination my-5 uk-flex-center uk-margin" uk-margin>
                    <li class="uk-active"><span>1</span></li>
                    <li><a href="#">2</a></li>
                    <li><a href="#">3</a></li>
                    <li class="uk-disabled"><span>...</span></li>
                    <li><a href="#"><span uk-pagination-next></span></a></li>
                </ul>


            </div>
            <Footer/>
            </div>
            
            </div>

        )
    }
}

export default instuctors