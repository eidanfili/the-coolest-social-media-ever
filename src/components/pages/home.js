import React, { Component } from 'react';
import kraken from './../images/kraken.png';
import krakenIcon from './../images/krakenIcon.png'

export default class Home extends Component{
    render() {
    return(
        <div className='Home'>
            <div className="header">
                <div className="leftSection">
                    <div className="icon"><img src={kraken}/></div>
                    <div className="krakenTitle">
                    <h1>Kraken</h1>
                    </div>            
                </div>            
            </div>
            <div className="pageArea">
                <p>descriptiom=hn]90zegruyaets</p>
                <div className="iconLarge"><img src={krakenIcon}/></div>
                <p>enter kraken</p>
            </div>
        </div>
        
        )
    }
}