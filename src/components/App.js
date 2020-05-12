import React from 'react';
import { Router, Route } from 'react-router-dom';
import { connect } from 'react-redux';

import '../App.css';
import Header from './Header';
import Login from './Login';
import Dashboard from './Dashboard';
import history from '../history';
import SidebarMenu from './SidebarMenu';

const App = (props) => {
    return (
        <div>
            <Router history={ history }>
            <Header />
            <SidebarMenu />
            
            <div className="ui fluid container">
                <Route path='/' exact component={props.isLoggedIn === true ? Dashboard : Login} /> 
                <Route path='/login' exact component={Login} />
                <Route path='/dashboard' exact component={Dashboard} />
            </div>
            </Router>
        </div>
    )
}

const mapStateToProps = (state) => {
    return { isLoggedIn: state.auth.isSignedIn };
}

export default connect(mapStateToProps, {})(App);
