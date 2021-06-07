import React from 'react';
import {BrowserRouter as Router,Redirect,Route,Switch,useParams} from 'react-router-dom'
import Home from './Home';
import RouteB from './RouteB';
import RouteA from './RouteA';
const Test = () => {

    return (
        <div>
            <Router>
                <Switch>
                <Route path="/routeA/:id" component = {RouteA}/>
                <Route path ="/" component = {Home}/>
                <Route path ="/luminio" component ={RouteB}/>
                <Redirect from ="/test" to="/luminio"/>
                </Switch>
            </Router>
           
        </div>
    );
};

export default Test;