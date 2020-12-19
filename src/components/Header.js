import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';

export default class Header extends Component {

    constructor(){
        super()
       var userDetils = JSON.parse(localStorage.getItem('User'));
       this.state.loggedInUser = userDetils;
    }
    state = {
        loggedInUser : ''
    };
    renderRedirect = () => {
        return <Redirect to="/" />;
    };

    render() {
        return (
            
            <nav className="navbar navbar-dark fixed-top bg-dark flex-md-nowrap p-0 shadow">
               
                <div className="navbar-brand col-sm-1 col-md-2 mr-1 text-left">
                    Welcome {this.state.loggedInUser}
                    </div>
                    <div className="navbar-brand col-sm-3 col-md-2 mr-0">
                </div>
                <div className="navbar-nav px-3">
                    <Link className="nav-item text-nowrap nav-link" to={''} onClick={this.renderRedirect}>Logout</Link>
                </div>
             </nav>
        );
    }
}
