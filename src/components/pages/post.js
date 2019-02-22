import React, { Component } from 'react';
import PostComponent from './postComponent';

export default class Post extends Component{
    constructor() {
        super();

        this.state = {
            data: [
                {title: "another post", src: "static/assets/pepe2.jpeg"},
                {title: "another post", src: "static/assets/pepe2.jpeg"},
                {title: "another post", src: "static/assets/pepe2.jpeg"},
                {title: "another post", src: "static/assets/pepe2.jpeg"},
                {title: "another post", src: "static/assets/pepe2.jpeg"},
                {title: "another post", src: "static/assets/pepe2.jpeg"},
                {title: "another post", src: "static/assets/pepe2.jpeg"},
                {title: "another post", src: "static/assets/pepe2.jpeg"},
                {title: "another post", src: "static/assets/pepe2.jpeg"},
                {title: "another post", src: "static/assets/pepe2.jpeg"},
                {title: "another post", src: "static/assets/pepe2.jpeg"},
                {title: "first post", src: "static/assets/pepe2.jpeg"}
            ]
        };
        this.Posts = this.Posts.bind(this);
    }
    Posts() {
        return this.state.data.map(item => {
            return <PostComponent title={item.title} src={item.src}/>;
            
        })
    }
    render(){
    return(
        <div className='Post'>
            <div >
                {this.Posts()}
                <iframe width="560" height="315" src="https://www.youtube.com/embed/6n3pFFPSlW4?controls=0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
        </div>
        )
    }
}