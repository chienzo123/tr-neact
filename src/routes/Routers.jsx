
import React, {useState } from 'react';
import Header from 'components/Header/Header';
import Login from '../screens/UserLogin/UserLogin';
import Task from '../screens/TaskContact/TaskContact';
import CreateTask from '../screens/CreateTask/CreateTask';
import EditTask from '../screens/EditTask/EditTask';
import CurrentUser from '../screens/CurentUser/CurrentUser';
import EditUser from '../screens/EditUser/EditUser';
import {HashRouter as Router, Route, Switch} from 'react-router-dom';

function Routers(){
    const [isSignedIn, setIsSignedIn] = useState(false);
    if (!isSignedIn) {
        return (
          <div>
              <Login setToken={setIsSignedIn}/>             
           </div>
        );
        
      }
      return (
            <Router basename={process.env.PUBLIC_URL}>
              <Header setToken={setIsSignedIn}/>
              <Switch>
              <Route exact path="/" component={Task} />
              <Route exact path="/CreateTask" component={CreateTask} />
              <Route exact path="/EditTask/:id" component={EditTask} />
              <Route exact path="/InfoUser/:id" component={CurrentUser} />
              <Route exact path="/EditUser/:id" component={EditUser} />
              </Switch>
              </Router> 
      );
    }

export default Routers