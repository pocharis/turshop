import React, { Component } from 'react';
import '../styles/welcomesection.css';
import welcomebanner from './img/welcomebanner.jpg';

class WelcomeSection extends Component {
    render() {
        return (
            <div className="contianer ViewHeight">

                <div className="searchformsection">
                <form className="form-inline">
                    <input className="form-control" type="search" placeholder="Search" aria-label="Search"/>
                    <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                </form>
                </div>

                <h2>Welcome to  TurStore, <br/><br/>Do Have a Convenience Adventure </h2>
                
                </div>
        );
    }
}

export default WelcomeSection;