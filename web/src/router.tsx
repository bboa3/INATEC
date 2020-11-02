import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Inatec from './pages/Inatec';
import SignUp from './pages/SignUp';
import Login from './pages/Login';
import AllClass from './pages/AllClass';
import Class from './pages/Class';
import Chats from './pages/Chats';

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Inatec}/>
            <Route path="/sign-up" component={SignUp}/>
            <Route path="/login" component={Login}/>
            <Route path="/in/all-class/" component={AllClass}/>
            <Route path="/in/class/:id" component={Class}/>
            <Route path="/in/chats/:title/:id" component={Chats}/>
        </Switch>
    </BrowserRouter>
)

export default Routes;