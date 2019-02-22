import React from 'react';

export default function PostComponent(props){
    return(
        <div className='PostComponent'>
            <h3 className="PostTitle">{props.title}</h3>
            <div className="ImageContainer">
                <img src={props.src} />
            </div>
        </div>
    )
}