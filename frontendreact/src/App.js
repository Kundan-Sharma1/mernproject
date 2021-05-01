import React from 'react';
import './App.css';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Home from './components/Home';
import Registration from './components/Registration_Hooks';
import UserLogin from './components/UserLogin_Hooks';
import UserAfterLogin from './components/UserAfterLogin'
import AboutUs from './components/AboutUs';
import ContactUs from './components/ContactUs';
import NoMatch from './components/NoMatch';
import AdminLogin from './components/AdminLogin_Hooks';
import AdminAfterLogin from './components/AdminAfterLogin';
import Delete from './components/Delete_Hooks';
import DisplayAll from './components/DisplayAll_Hooks'
import AvlIns from './components/AvlIns'
import Search from './components/Search_Hooks'
import ViewProfile from './components/ViewProfile'
import Logout from './components/Logout'
import ManageEmp from './components/ManageEmp_Hooks'
import ManageIns from './components/ManageIns_Hooks'
import UpdateProfile from './components/UpdateProfile_Hooks'
import UpdateInstrument from './components/UpdateInstrument_Hooks'
import Add from './components/Add_Hooks'
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div className="App">
      <br /><br />
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/reg" component={Registration} />
          <Route path="/login" component={UserLogin} />
          <Route path="/userafterlogin" component={UserAfterLogin} />
          <Route path="/about" component={AboutUs} />
          <Route path="/contact" component={ContactUs} />
          <Route path="/adminlogin" component={AdminLogin} />
          <Route path="/adminafterlogin" component={AdminAfterLogin} />
          <Route path="/displayall" component={DisplayAll} />
          <Route path="/delete" component={Delete} />
          <Route path="/search" component={Search} />
          <Route path="/logout" component={Logout} />
          <Route path="/viewprofile" component= {ViewProfile} />
          <Route path="/manageemp" component= {ManageEmp} />
          <Route path="/updateprofile" component= {UpdateProfile} />
          <Route path="/manageins" component= {ManageIns} />
          <Route path="/updateinstrument" component= {UpdateInstrument} />
          <Route path="/add" component={Add} />
          <Route path="/avlins" component={AvlIns}/>
          <Route component={NoMatch} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
