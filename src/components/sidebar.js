import React, {Component} from 'react';
import {Link, Redirect} from 'react-router-dom';

export default class Sidebar extends Component {

    renderRedirect = () => {
        return <Redirect to="/" />
    }
    
    render() {
        return (
            <div id="wrapper text-left">
                <ul className="sidebar navbar-nav">
                   <br></br>
                   
                    <li className="nav-item">
                        <Link to={'/screening'} className="nav-link"><i className="fas fa-fw fa-chart-area"></i>
                            <span>&nbsp;Screening</span></Link>
                    </li>
                    <li className="nav-item">
                        <Link to={'/MyLocation'} className="nav-link"><i className="fas fa-fw fa-file-archive"></i>
                            <span>&nbsp;My Location</span></Link>
                    </li>
                    <li className="nav-item">
                        <Link to={'/resources'} className="nav-link"><i className="fas fa-fw fa-file-archive"></i>
                            <span>&nbsp;Resources</span></Link>
                    </li>
                    <li className="nav-item">
                        <Link to={'/'} className="nav-link"><i className="fas fa-fw fa-file-archive"></i>
                            <span>&nbsp;Logout</span></Link>
                    </li>
                </ul>
            </div>
            
        );
    }
}