import React from 'react';
import firebase from 'firebase';
import "./Cards.css";

export default function Cards(props) {
 
    const deleteBlog = (blogId) => {
        const blogRef = firebase.database().ref("blogText").child(blogId);
        blogRef.remove();
    }

    return (
        <div className="text-cards">
            <p>Name : {props.blogs.Name}</p>
            <p>Text : {props.blogs.blogText}</p>
            <div className="options-card">
            <div onClick = {(e) => {deleteBlog(props.blogs.id)}} className="delete-card"><i class="fas fa-trash-alt"></i></div>
            </div>
        </div>
    )
}