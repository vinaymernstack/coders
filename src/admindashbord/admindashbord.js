import React, { Component } from 'react'
import $ from 'jquery'
import Header from '../header/header'
import  Sidemenu from '../sidemenu/sidemenu'
import Footer from '../footer/footer'
class admindashbord extends Component{
       render(){
        return(
     <div id="wrapper" class="admin-panel">
        <Sidemenu/>
       <Header/>

<div class="page-content">
<div class="page-content-inner pt-lg-0  pr-lg-0">



<div class="ro uk-grid" >
<div class="uk-width-expand@m">


<div class="section-small">

    <h3> Welcome Pivotal  ! </h3>

    <div class="uk-position-relative uk-visible-toggle " tabindex="-1" uk-slider="finite: true">

        <ul class="uk-slider-items uk-child-width-1-2@m uk-child-width-1-2@s uk-grid">

            <li>
                <div class="card">
                    <div class="card-body">
                        <div class="uk-flex-middle uk-grid" >
                            <div class="uk-width-auto">
                                <h5 class="mb-2"> Total sales </h5>
                                <h1> 220.9$</h1>
                                <span class="badge badge-soft-success mt-n1"> +12.9$</span>
                            </div>
                            <div class="uk-width-expand">
                                <img src="../assets/images/demos/d-sales.png" alt=""/>
                            </div>
                        </div>
                    </div>

                    <div class="card-footer d-flex justify-content-between py-2">
                        <p class="mb-0"> 124 total sales </p>
                        <a href="#" class=" "> Veiw report</a>
                    </div>
                </div>
            </li>
            <li>

                <div class="card">
                    <div class="card-body">
                        <div class="uk-flex-middle uk-grid" uk-grid>
                            <div class="uk-width-auto">
                                <h5 class="mb-2"> Total Students </h5>
                                <h1> 2900</h1>
                                <span class="badge badge-soft-primary mt-n1"> +56.6%</span>
                            </div>
                            <div class="uk-width-expand">
                                <img src="../assets/images/demos/d-student.png" alt=""/>
                            </div>
                        </div>
                    </div>

                    <div class="card-footer d-flex justify-content-between py-2">
                        <p class="mb-0"> 120 New Student </p>
                        <a href="#" class=" "> Veiw report</a>
                    </div>
                </div>
            </li>
            <li>

                <div class="card">
                    <div class="card-body">
                        <div class="uk-flex-middle uk-grid" uk-grid>
                            <div class="uk-width-auto">
                                <h5 class="mb-2"> Total Courses </h5>
                                <h1> 190</h1>
                                <span class="badge badge-soft-success mt-n1"> +16</span>
                            </div>
                            <div class="uk-width-expand">
                                <img src="../assets/images/demos/d-graduation.png" alt=""/>
                            </div>
                        </div>
                    </div>

                    <div class="card-footer d-flex justify-content-between py-2">
                        <p class="mb-0"> 230 total Courses </p>
                        <a href="#" class=" "> Veiw report</a>
                    </div>
                </div>
            </li>
        </ul>


        <ul class="uk-slider-nav uk-dotnav uk-flex-center mt-3"></ul>

    </div>

    <div class="uk-child-width-1-2@m uk-grid" uk-grid>

        <div>

        </div>

        <div>

        </div>



    </div>

</div>

<div class="uk-card-default uk-card-small rounded">
    <div class="uk-card-header py-3">
        <span class="uk-h5"> Recent Courses</span>
        <a href="courses.html" class="uk-float-right"> See all </a>
    </div>

    <div class="uk-height-large" data-simplebar>

        <div class="uk-grid-small p-4 uk-grid" uk-grid>
            <div class="uk-width-1-3@m">
                <img src="../assets/images/course/2.png" class="  rounded" alt=""/>
            </div>
            <div class="uk-width-expand">
                <h5 class="mb-2"> Learn Anglular Fonduments </h5>
                <p class="uk-text-small mb-2"> Created by <a href="#"> Jonathan Madano </a>
                </p>
                <p class="mb-0 uk-text-small mt-3">
                    <span class="mr-3 bg-light p-2 mt-1"> 16 Enerolled</span><span> Last updated
                        10/2019 </span>
                </p>
            </div>
        </div>

        <hr class="m-0"/>

        <div class="uk-grid-small p-4 uk-grid" uk-grid>
            <div class="uk-width-1-3@m">
                <img src="../assets/images/course/3.png" class="  rounded" alt=""/>
            </div>
            <div class="uk-width-expand">
                <h5 class="mb-2"> The Complete JavaScript </h5>
                <p class="uk-text-small mb-2"> Created by <a href="#"> Jonathan Madano </a>
                </p>
                <p class="mb-0 uk-text-small mt-3">
                    <span class="mr-3 bg-light p-2 mt-1"> 16 Enerolled</span><span> Last updated
                        10/2019 </span>
                </p>
            </div>
        </div>

        <hr class="m-0"/>


        <div class="uk-grid-small p-4 uk-grid" uk-grid>
            <div class="uk-width-1-3@m">
                <img src="../assets/images/course/1.png" class="  rounded" alt=""/>
            </div>
            <div class="uk-width-expand">
                <h5 class="mb-2"> Ultimate Web Developer Course </h5>
                <p class="uk-text-small mb-2"> Created by <a href="#"> Jonathan Madano </a>
                </p>
                <p class="mb-0 uk-text-small mt-3">
                    <span class="mr-3 bg-light p-2 mt-1"> 16 Enerolled</span><span> Last updated
                        10/2019 </span>
                </p>
            </div>
        </div>

        <hr class="m-0"/>


        <div class="uk-grid-small p-4 uk-grid" uk-grid>
            <div class="uk-width-1-3@m">
                <img src="../assets/images/course/2.png" class="  rounded" alt=""/>
            </div>
            <div class="uk-width-expand">
                <h5 class="mb-2"> Learn Anglular Fonduments </h5>
                <p class="uk-text-small mb-2"> Created by <a href="#"> Jonathan Madano </a>
                </p>
                <p class="mb-0 uk-text-small mt-3">
                    <span class="mr-3 bg-light p-2 mt-1"> 16 Enerolled</span><span> Last updated
                        10/2019 </span>
                </p>
            </div>
        </div>

    </div>


</div>


<div class="section-small">

    <div class="uk-position-relative uk-visible-toggle " tabindex="-1" uk-slider="finite: true">

        <div class="grid-slider-header">
            <h4> Popular Instructers </h4>
            <div class="grid-slider-header-link">

                <a href="browse-channals.html" class="btn uk-visible@m"> View all </a>
                <a href="#" class="slide-nav-prev" uk-slider-item="previous"></a>
                <a href="#" class="slide-nav-next" uk-slider-item="next"></a>

            </div>
        </div>

        <ul class="uk-slider-items uk-child-width-1-3@m uk-child-width-1-2@s pb-3 uk-grid">

         
            <li>
                    <div class="card">

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
    
                    </li>
                    <li>
                            <div class="card">
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
    
                    </li>
                    <li>
                            <div class="card">
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
    
                    </li>
                    <li>
                            <div class="card">
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
    
                    </li>
                    <li>
                            <div class="card">
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
    
                </li>
            

        </ul>

    </div>

</div>


</div>
<div class="uk-width-1-3@m">

<div class="bg-white uk-card-default uk-height-1-1" data-simplebar
    uk-sticky="offset:70; bottom:true">
    <div class="p-3 row align-items-center">

        <div class="col-auto">
         <p class="mb-0"> View data on </p>

        </div>
        <div class="col">

        <select class="selectpicker">
            <option value=""> Today </option>
            <option value="1"> This week </option>
            <option value="2"> Last week</option>
        </select>


    </div>
    </div>

    <hr class="m-0"/>

    <div class="p-3">
        <h5> Total Sales</h5>
        <h2> 830.98$</h2>
        <canvas id="cjs-linechart" style={{"display": "block", "width": "304px", "height": "152px"}} width="304" height="152" class="chartjs-render-monitor"></canvas>
    </div>

    <hr class="m-0"/>

    <div class="p-3">
        <h5> Latest Enrolled</h5>

        <div class="uk-grid-small uk-flex-middle uk-grid" uk-grid>
            <div class="uk-width-auto"> <img class="rounded border border-200"
                    src="../assets/images/course/2.png" width="60" alt=""/> </div>
            <div class="uk-width-expand">
                <p class="uk-text-truncate mb-0"> Javascript for Begginers</p>
            </div>
            <div class="uk-width-auto"> <span class="badge badge-soft-success mt-n1">
                    +12.9$</span>
            </div>
        </div>

        <div class="uk-grid-small uk-flex-middle uk-grid" uk-grid>
            <div class="uk-width-auto"> <img class="rounded border border-200"
                    src="../assets/images/course/2.png" width="60" alt=""/> </div>
            <div class="uk-width-expand">
                <p class="uk-text-truncate mb-0"> Javascript for Begginers</p>
            </div>
            <div class="uk-width-auto"> <span class="badge badge-soft-success mt-n1">
                    +12.9$</span>
            </div>
        </div>

        <div class="uk-grid-small  uk-flex-middle uk-grid" uk-grid>
            <div class="uk-width-auto"> <img class="rounded border border-200"
                    src="../assets/images/course/3.png" width="60" alt=""/> </div>
            <div class="uk-width-expand">
                <p class="uk-text-small uk-text-truncate mb-0"> Learn Bootstrap framework</p>
            </div>
            <div class="uk-width-auto"> <span class="badge badge-soft-success mt-n1">
                    +10.9$</span>
            </div>
        </div>





        <a href="#">
            <p class="uk-heading-line uk-text-center mt-2 uk-text-small"><span> Veiw more
                </span>
            </p>
        </a>


        <h5> Top Sales</h5>

        <div class="uk-grid-small uk-flex-middle uk-grid" uk-grid>
            <div class="uk-width-auto"> <img class="rounded border border-200"
                    src="../assets/images/course/2.png" width="80" alt=""/> </div>
            <div class="uk-width-expand">
                <p class="uk-text-truncate mb-0"> Javascript for Begginers</p>
                <span class="badge badge-soft-secondary mt-n1"> 5 enrolled</span>
            </div>

        </div>

        <div class="uk-grid-small uk-flex-middle uk-grid" uk-grid>
            <div class="uk-width-auto"> <img class="rounded border border-200"
                    src="../assets/images/course/2.png" width="80" alt=""/> </div>
            <div class="uk-width-expand">
                <p class="uk-text-truncate mb-0"> Javascript for Begginers</p>
                <span class="badge badge-soft-secondary mt-n1"> 5 enrolled</span>
            </div>

        </div>

        <div class="uk-grid-small  uk-flex-middle uk-grid" uk-grid>
            <div class="uk-width-auto"> 
            <img class="rounded border border-200"
                    src="../assets/images/course/3.png" width="60" alt=""/> </div>
            <div class="uk-width-expand">
                <p class="uk-text-small uk-text-truncate mb-0"> Learn Bootstrap framework</p>
            </div>
            <div class="uk-width-auto"> <span class="badge badge-soft-secondary mt-n1"> 1
                    enrolled</span>
            </div>
        </div>





        <a href="#">
            <p class="uk-heading-line uk-text-center mt-2 uk-text-small">
                <span> Veiw more </span>
            </p>
        </a>

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

export default admindashbord
