import React, { useState, createContext } from 'react';
import Login from '../screens/UserLoginScreen/UserLoginScreen';
import Task from '../screens/TaskContact/TaskContactScreen';
import CreateTask from '../screens/CreateTaskScreen/CreateTaskScreen';
import EditTask from '../screens/EditTaskScreen/EditTaskScreen';
import CurrentUser from '../screens/CurentUserScreen/CurrentUserScreen';
import EditUser from '../screens/EditUserScreen/EditUserScreen';
import MainLayout from '../layouts/MainLayout/MainLayout';
import { HashRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

export const TokenContext = createContext();

export default function Routers() {
  const [isSignedIn, setIsSignedIn] = useState();
  const token = window.localStorage.getItem('token');

  const RedirectComponent = (Component,Layout) => {
    if(!token)
    return isSignedIn ? <Layout><Component/></Layout> : <Redirect to='/Login' />
    else
    return <Layout><Component/></Layout>
  }
  return (
      <TokenContext.Provider value={{isSignedIn,setIsSignedIn}}>
      <Router basename={process.env.PUBLIC_URL}>
        <Switch>
          <Route exact path="/Login" component={Login} /> 
          <Route exact path="/" render={() => RedirectComponent(Task, MainLayout)} />
          <Route exact path="/CreateTask" render={() => RedirectComponent(CreateTask,MainLayout)} />
          <Route exact path="/EditTask/:id" render={() => RedirectComponent(EditTask,MainLayout)} />
          <Route exact path="/InfoUser/:id" render={() => RedirectComponent(CurrentUser,MainLayout)} />
          <Route exact path="/EditUser/:id" render={() => RedirectComponent(EditUser,MainLayout)} />
        </Switch>
      </Router>
      </TokenContext.Provider>
  );
}
