import React, {Component} from 'react'
import Header from '../header/header'
import  Sidemenu from '../sidemenu/sidemenu'
import Footer from '../footer/footer'
class students extends Component{
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
                            <li><a href="#"> Sutdents </a></li>
                            <li>Sutdents list</li>
                        </ul>
                    </nav>
                </div>




                <div class="card">
                   
                    <div class="card-header actions-toolbar border-0">
                        <div class="d-flex justify-content-between align-items-center">
                            <h4 class="d-inline-block mb-0">Sutdents</h4>
                            <div class="d-flex">

                                <a href="#" class="btn btn-icon btn-hover  btn-circle" uk-tooltip="Search product">
                                    <i class="uil-search"></i>
                                </a>
                                <div class="uk-drop" uk-drop="mode: click; pos: left-center; offset: 0">
                                    <form class="uk-search uk-search-navbar uk-width-1-1">
                                        <input class="uk-search-input shadow-0 uk-form-small" type="search"
                                            placeholder="Search..." autofocus/>
                                    </form>
                                </div>

                                <a href="#" class="btn btn-icon btn-hover  btn-circle" uk-tooltip="filter">
                                    <i class="uil-filter"></i>
                                </a>
                                <div uk-dropdown="pos: bottom-right ; mode: click ;animation: uk-animation-scale-up">
                                    <ul class="uk-nav uk-dropdown-nav">
                                        <li class="uk-active"><a href="#"> Newest </a></li>
                                        <li><a href="#">From A-Z</a></li>
                                        <li><a href="#">From Z-A</a></li>
                                    </ul>
                                </div>


                                <a href="#" class="btn btn-icon btn-hover  btn-circle" uk-tooltip="More">
                                    <i class="uil-ellipsis-h"></i>
                                </a>
                                <div uk-dropdown="pos: bottom-right ; mode: click ;animation: uk-animation-scale-up">
                                    <ul class="uk-nav uk-dropdown-nav">
                                        <li><a href="#"> Refresh </a></li>
                                        <li><a href="#">Manage</a></li>
                                        <li><a href="#">Setting</a></li>
                                    </ul>
                                </div>


                            </div>
                        </div>
                    </div>
                    
                    <div class="table-responsive">
                        <table class="table align-items-center">
                            <thead>
                                <tr>
                                    <th scope="col">Name</th>
                                    <th scope="col">Joined at</th>
                                    <th scope="col">Enerolled</th>
                                    <th scope="col">Total payments</th>
                                    <th scope="col">Activity</th>
                                    <th scope="col"> </th>
                                </tr>
                            </thead>
                            <tbody class="list">
                                <tr>
                                    <th scope="row">
                                        <div class="media align-items-center">
                                            <div>
                                                <div class="avatar-parent-child" style={{"width":"max-content"}}>
                                                    <img alt="Image placeholder"
                                                        src="../assets/images/avatars/avatar-2.jpg"
                                                        class="avatar  rounded-circle"/>
                                                    <span class="avatar-child avatar-badge bg-success"></span>
                                                </div>
                                            </div>
                                            <div class="media-body ml-4">
                                                <a href="#" class="name h6 mb-0 text-sm">Stella Johnson</a>
                                                <small class="d-block font-weight-bold">#1001</small>
                                            </div>
                                        </div>
                                    </th>
                                    <td> 10/09/2018 </td>
                                    <td> 15 </td>
                                    <td> $1035,00 </td>
                                    <td>
                                        <div class="progress" style={{"height": "7px"}}>
                                            <div class="progress-bar" role="progressbar" style={{"width": "45%"}}></div>
                                        </div>
                                    </td>
                                    <td class="text-right">
                                       
                                        <div class="actions ml-3">
                                            <a href="#" class="btn btn-icon btn-hover btn-sm btn-circle"
                                                uk-tooltip="Quick view">
                                                <i class="uil-external-link-alt "></i> </a>
                                            <a href="#" class="btn btn-icon btn-hover btn-sm btn-circle"
                                                uk-tooltip="Edit">
                                                <i class="uil-pen "></i> </a>
                                            <a href="#" class="btn btn-icon btn-hover btn-sm btn-circle"
                                                uk-tooltip="Delete user">
                                                <i class="uil-trash-alt text-danger"></i> </a>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <th scope="row">
                                        <div class="media align-items-center">
                                            <div>
                                                <div class="avatar-parent-child">
                                                    <img alt="Image placeholder"
                                                        src="../assets/images/avatars/avatar-3.jpg"
                                                        class="avatar  rounded-circle"/>
                                                    <span class="avatar-child avatar-badge bg-light"></span>
                                                </div>
                                            </div>
                                            <div class="media-body ml-4">
                                                <a href="#" class="name h6 mb-0 text-sm">Jonathan Madano</a>
                                                <small class="d-block font-weight-bold">#1002</small>
                                            </div>
                                        </div>
                                    </th>
                                    <td> 31/09/2018 </td>
                                    <td> 17 </td>
                                    <td> $3010,00 </td>
                                    <td>
                                        <div class="progress" style={{"height": "7px"}}>
                                            <div class="progress-bar" role="progressbar" style={{"width": "25%"}}></div>
                                        </div>
                                    </td>
                                    <td class="text-right">
                                       
                                        <div class="actions ml-3">
                                            <a href="#" class="btn btn-icon btn-hover btn-sm btn-circle"
                                                uk-tooltip="Quick view">
                                                <i class="uil-external-link-alt "></i> </a>
                                            <a href="#" class="btn btn-icon btn-hover btn-sm btn-circle"
                                                uk-tooltip="Edit">
                                                <i class="uil-pen "></i> </a>
                                            <a href="#" class="btn btn-icon btn-hover btn-sm btn-circle"
                                                uk-tooltip="Delete user">
                                                <i class="uil-trash-alt text-danger"></i> </a>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <th scope="row">
                                        <div class="media align-items-center">
                                            <div>
                                                <div class="avatar-parent-child">
                                                    <img alt="Image placeholder"
                                                        src="../assets/images/avatars/avatar-4.jpg"
                                                        class="avatar  rounded-circle"/>
                                                    <span class="avatar-child avatar-badge bg-light"></span>
                                                </div>
                                            </div>
                                            <div class="media-body ml-4">
                                                <a href="#" class="name h6 mb-0 text-sm">Alex Dolgove</a>
                                                <small class="d-block font-weight-bold">#1003</small>
                                            </div>
                                        </div>
                                    </th>
                                    <td> 31/09/2018 </td>
                                    <td> 35 </td>
                                    <td> $1340,00 </td>
                                    <td>
                                        <div class="progress" style={{"height": "7px"}}>
                                            <div class="progress-bar" role="progressbar" style={{"width": "55%"}}></div>
                                        </div>
                                    </td>
                                    <td class="text-right">
                                      
                                        <div class="actions ml-3">
                                            <a href="#" class="btn btn-icon btn-hover btn-sm btn-circle"
                                                uk-tooltip="Quick view">
                                                <i class="uil-external-link-alt "></i> </a>
                                            <a href="#" class="btn btn-icon btn-hover btn-sm btn-circle"
                                                uk-tooltip="Edit">
                                                <i class="uil-pen "></i> </a>
                                            <a href="#" class="btn btn-icon btn-hover btn-sm btn-circle"
                                                uk-tooltip="Delete user">
                                                <i class="uil-trash-alt text-danger"></i> </a>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <th scope="row">
                                        <div class="media align-items-center">
                                            <div>
                                                <div class="avatar-parent-child">
                                                    <img alt="Image placeholder"
                                                        src="../assets/images/avatars/avatar-1.jpg"
                                                        class="avatar  rounded-circle"/>
                                                    <span class="avatar-child avatar-badge bg-success"></span>
                                                </div>
                                            </div>
                                            <div class="media-body ml-4">
                                                <a href="#" class="name h6 mb-0 text-sm">Adrian Mohani</a>
                                                <small class="d-block font-weight-bold">#1004</small>
                                            </div>
                                        </div>
                                    </th>
                                    <td> 31/09/2018 </td>
                                    <td> 22 </td>
                                    <td> $3010,00 </td>
                                    <td>
                                        <div class="progress" style={{"height": "7px"}}>
                                            <div class="progress-bar" role="progressbar" style={{"width": "25%"}}></div>
                                        </div>
                                    </td>
                                    <td class="text-right">
                                        
                                        <div class="actions ml-3">
                                            <a href="#" class="btn btn-icon btn-hover btn-sm btn-circle"
                                                uk-tooltip="Quick view">
                                                <i class="uil-external-link-alt "></i> </a>
                                            <a href="#" class="btn btn-icon btn-hover btn-sm btn-circle"
                                                uk-tooltip="Edit">
                                                <i class="uil-pen "></i> </a>
                                            <a href="#" class="btn btn-icon btn-hover btn-sm btn-circle"
                                                uk-tooltip="Delete user">
                                                <i class="uil-trash-alt text-danger"></i> </a>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <th scope="row">
                                        <div class="media align-items-center">
                                            <div>
                                                <div class="avatar-parent-child">
                                                    <img alt="Image placeholder"
                                                        src="../assets/images/avatars/avatar-2.jpg"
                                                        class="avatar  rounded-circle"/>
                                                    <span class="avatar-child avatar-badge bg-success"></span>
                                                </div>
                                            </div>
                                            <div class="media-body ml-4">
                                                <a href="#" class="name h6 mb-0 text-sm"> John Sullivan</a>
                                                <small class="d-block font-weight-bold">#1005</small>
                                            </div>
                                        </div>
                                    </th>
                                    <td> 31/02/2018 </td>
                                    <td> 253 </td>
                                    <td> $2310,00 </td>
                                    <td>
                                        <div class="progress" style={{"height": "7px"}}>
                                            <div class="progress-bar" role="progressbar" style={{"width": "65%"}}></div>
                                        </div>
                                    </td>
                                    <td class="text-right">
                                       
                                        <div class="actions ml-3">
                                            <a href="#" class="btn btn-icon btn-hover btn-sm btn-circle"
                                                uk-tooltip="Quick view">
                                                <i class="uil-external-link-alt "></i> </a>
                                            <a href="#" class="btn btn-icon btn-hover btn-sm btn-circle"
                                                uk-tooltip="Edit">
                                                <i class="uil-pen "></i> </a>
                                            <a href="#" class="btn btn-icon btn-hover btn-sm btn-circle"
                                                uk-tooltip="Delete user">
                                                <i class="uil-trash-alt text-danger"></i> </a>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <th scope="row">
                                        <div class="media align-items-center">
                                            <div>
                                                <div class="avatar-parent-child">
                                                    <img alt="Image placeholder"
                                                        src="../assets/images/avatars/avatar-3.jpg"
                                                        class="avatar  rounded-circle"/>
                                                    <span class="avatar-child avatar-badge bg-success"></span>
                                                </div>
                                            </div>
                                            <div class="media-body ml-4">
                                                <a href="#" class="name h6 mb-0 text-sm">Stella Johnson</a>
                                                <small class="d-block font-weight-bold">#1001</small>
                                            </div>
                                        </div>
                                    </th>
                                    <td> 10/09/2018 </td>
                                    <td> 15 </td>
                                    <td> $1035,00 </td>
                                    <td>
                                        <div class="progress" style={{"height": "7px"}}>
                                            <div class="progress-bar" role="progressbar" style={{"width": "45%"}}></div>
                                        </div>
                                    </td>
                                    <td class="text-right">
                                        
                                        <div class="actions ml-3">
                                            <a href="#" class="btn btn-icon btn-hover btn-sm btn-circle"
                                                uk-tooltip="Quick view">
                                                <i class="uil-external-link-alt "></i> </a>
                                            <a href="#" class="btn btn-icon btn-hover btn-sm btn-circle"
                                                uk-tooltip="Edit">
                                                <i class="uil-pen "></i> </a>
                                            <a href="#" class="btn btn-icon btn-hover btn-sm btn-circle"
                                                uk-tooltip="Delete user">
                                                <i class="uil-trash-alt text-danger"></i> </a>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <th scope="row">
                                        <div class="media align-items-center">
                                            <div>
                                                <div class="avatar-parent-child">
                                                    <img alt="Image placeholder"
                                                        src="../assets/images/avatars/avatar-4.jpg"
                                                        class="avatar  rounded-circle"/>
                                                    <span class="avatar-child avatar-badge bg-light"></span>
                                                </div>
                                            </div>
                                            <div class="media-body ml-4">
                                                <a href="#" class="name h6 mb-0 text-sm">Jonathan Madano</a>
                                                <small class="d-block font-weight-bold">#1002</small>
                                            </div>
                                        </div>
                                    </th>
                                    <td> 31/09/2018 </td>
                                    <td> 17 </td>
                                    <td> $3010,00 </td>
                                    <td>
                                        <div class="progress" style={{"height": "7px"}}>
                                            <div class="progress-bar" role="progressbar" style={{"width": "25%"}}></div>
                                        </div>
                                    </td>
                                    <td class="text-right">
                                        
                                        <div class="actions ml-3">
                                            <a href="#" class="btn btn-icon btn-hover btn-sm btn-circle"
                                                uk-tooltip="Quick view">
                                                <i class="uil-external-link-alt "></i> </a>
                                            <a href="#" class="btn btn-icon btn-hover btn-sm btn-circle"
                                                uk-tooltip="Edit">
                                                <i class="uil-pen "></i> </a>
                                            <a href="#" class="btn btn-icon btn-hover btn-sm btn-circle"
                                                uk-tooltip="Delete user">
                                                <i class="uil-trash-alt text-danger"></i> </a>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <th scope="row">
                                        <div class="media align-items-center">
                                            <div>
                                                <div class="avatar-parent-child">
                                                    <img alt="Image placeholder"
                                                        src="../assets/images/avatars/avatar-1.jpg"
                                                        class="avatar  rounded-circle"/>
                                                    <span class="avatar-child avatar-badge bg-light"></span>
                                                </div>
                                            </div>
                                            <div class="media-body ml-4">
                                                <a href="#" class="name h6 mb-0 text-sm">Alex Dolgove</a>
                                                <small class="d-block font-weight-bold">#1003</small>
                                            </div>
                                        </div>
                                    </th>
                                    <td> 31/09/2018 </td>
                                    <td> 35 </td>
                                    <td> $1340,00 </td>
                                    <td>
                                        <div class="progress" style={{"height": "7px"}}>
                                            <div class="progress-bar" role="progressbar" style={{"width": "55%"}}></div>
                                        </div>
                                    </td>
                                    <td class="text-right">
                                       
                                        <div class="actions ml-3">
                                            <a href="#" class="btn btn-icon btn-hover btn-sm btn-circle"
                                                uk-tooltip="Quick view">
                                                <i class="uil-external-link-alt "></i> </a>
                                            <a href="#" class="btn btn-icon btn-hover btn-sm btn-circle"
                                                uk-tooltip="Edit">
                                                <i class="uil-pen "></i> </a>
                                            <a href="#" class="btn btn-icon btn-hover btn-sm btn-circle"
                                                uk-tooltip="Delete user">
                                                <i class="uil-trash-alt text-danger"></i> </a>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <th scope="row">
                                        <div class="media align-items-center">
                                            <div>
                                                <div class="avatar-parent-child">
                                                    <img alt="Image placeholder"
                                                        src="../assets/images/avatars/avatar-3.jpg"
                                                        class="avatar  rounded-circle"/>
                                                    <span class="avatar-child avatar-badge bg-success"></span>
                                                </div>
                                            </div>
                                            <div class="media-body ml-4">
                                                <a href="#" class="name h6 mb-0 text-sm">Adrian Mohani</a>
                                                <small class="d-block font-weight-bold">#1004</small>
                                            </div>
                                        </div>
                                    </th>
                                    <td> 31/09/2018 </td>
                                    <td> 22 </td>
                                    <td> $3010,00 </td>
                                    <td>
                                        <div class="progress" style={{"height": "7px"}}>
                                            <div class="progress-bar" role="progressbar" style={{"width": "25%"}}></div>
                                        </div>
                                    </td>
                                    <td class="text-right">
                                      
                                        <div class="actions ml-3">
                                            <a href="#" class="btn btn-icon btn-hover btn-sm btn-circle"
                                                uk-tooltip="Quick view">
                                                <i class="uil-external-link-alt "></i> </a>
                                            <a href="#" class="btn btn-icon btn-hover btn-sm btn-circle"
                                                uk-tooltip="Edit">
                                                <i class="uil-pen "></i> </a>
                                            <a href="#" class="btn btn-icon btn-hover btn-sm btn-circle"
                                                uk-tooltip="Delete user">
                                                <i class="uil-trash-alt text-danger"></i> </a>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <th scope="row">
                                        <div class="media align-items-center">
                                            <div>
                                                <div class="avatar-parent-child">
                                                    <img alt="Image placeholder"
                                                        src="../assets/images/avatars/avatar-1.jpg"
                                                        class="avatar  rounded-circle"/>
                                                    <span class="avatar-child avatar-badge bg-success"></span>
                                                </div>
                                            </div>
                                            <div class="media-body ml-4">
                                                <a href="#" class="name h6 mb-0 text-sm"> John Sullivan</a>
                                                <small class="d-block font-weight-bold">#1005</small>
                                            </div>
                                        </div>
                                    </th>
                                    <td> 31/02/2018 </td>
                                    <td> 253 </td>
                                    <td> $2310,00 </td>
                                    <td>
                                        <div class="progress" style={{"height": "7px"}}>
                                            <div class="progress-bar" role="progressbar" style={{"width": "65%"}}></div>
                                        </div>
                                    </td>
                                    <td class="text-right">
                                     
                                        <div class="actions ml-3">
                                            <a href="#" class="btn btn-icon btn-hover btn-sm btn-circle"
                                                uk-tooltip="Quick view">
                                                <i class="uil-external-link-alt "></i> </a>
                                            <a href="#" class="btn btn-icon btn-hover btn-sm btn-circle"
                                                uk-tooltip="Edit">
                                                <i class="uil-pen "></i> </a>
                                            <a href="#" class="btn btn-icon btn-hover btn-sm btn-circle"
                                                uk-tooltip="Delete user">
                                                <i class="uil-trash-alt text-danger"></i> </a>
                                        </div>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                </div>
                <Footer/>
                </div> </div>
                



            
        )
    }
}

export default students