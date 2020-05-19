import React from 'react';
import logo from './logo.svg';
import './App.css';
import Admindashbord from './admindashbord/admindashbord'
import Demo from './demo/demo'
import Course from './course/course'
import Massage from './massegs/massegs'
import Students from './students/students'
import Instructor from './instructors/instructors'
import Catagories from './catagories/catagories'
import Settings from './settings/settings'
import Addcourse from './addcourse/addcourse'
import Login from './login/login'
import Signup from './signup/signup'
import Chapter from './courselession1/courselession1'
import {BrowserRouter, Route} from 'react-router-dom'
function App() {
  return (
    <BrowserRouter>
      <Route path="/coders" exact component={Login}/>
      
      <Route path="/coders/signup"  component={Signup}/>
      <Route path="/coders/admin"  component={Admindashbord}/>
      <Route path="/coders/course" component={Course}/>
      <Route path="/coders/massage" component={Massage}/>
      <Route path="/coders/students" component={Students}/>
      <Route path="/coders/instructor" component={Instructor}/>
      <Route path="/coders/catagories" component={Catagories}/>
      <Route path="/coders/settings" component={Settings}/>
      <Route path="/coders/addcourse" component={Addcourse}/>
      <Route path="/coders/chapters" component={Chapter}/>
    </BrowserRouter>
     
  );
}

export default App;
