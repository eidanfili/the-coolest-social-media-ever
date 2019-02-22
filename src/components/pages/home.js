import React, { Component } from 'react';
import kraken from './../images/kraken.png';
import Post from './post';

export default class Home extends Component{
    render() {
    return(
        <div className='Home'>
            <div className="header">
                <div className="leftSection">
                    <div className="icon"><img src={kraken}/></div>
                    <div className="krackenTitle"><h1>Kraken</h1></div>            
                </div>
                <div className="dropdownSection">
                
                </div>
                <div className="rightSection">
                    <div className="profileImage"></div>
                    <div className="profileBtn">
                        <p>username</p>
                    </div>
                </div>
            
        </div>
        <div className="pageArea">
            <Post/>
        </div>
        
        </div>
        )
    }
}