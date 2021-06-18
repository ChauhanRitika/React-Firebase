import React, { useState, useEffect } from 'react';
import { useHistory } from "react-router-dom";
import Cards from '../cards/Cards';
import firebase from "../firebase";
import "./Blogs.css";

export default function Blogs() {
    const history = useHistory();
    const handleClick = () => {
        history.push("/blogs/newBlog");
    }
    const handleBack = () => {
        history.push("/");
    }
    const [blogTextsList, setblogTextsList] = useState();
    useEffect(() => {
        const data = firebase.database().ref("blogText");
        data.on("value", (snapshot) => {
            const blogTexts = snapshot.val();
            const blogTextsList = [];
            for (let id in blogTexts) {
                blogTextsList.push({ id, ...blogTexts[id] });
            }
            setblogTextsList(blogTextsList);
        });
    }, [])
    
    return (
        <>
            <div className="container-blog">
                <div className="header-blog">
                    <div className="content-blog">
                        <div className="heading-blog">You can find your blogs here :)</div>
                        <button className="add-blog" onClick={handleClick}>Add Blog</button>&nbsp;
                        <button className="add-blog" onClick={handleBack}>Home</button>
                    </div>
                </div>
                <div className="main_content-blog">
                    {blogTextsList ? blogTextsList.map((blogs, idx) =>
                        <Cards blogs={blogs} key={idx}></Cards>
                    ) : ""}
                </div>
            </div>
        </>
    )
}
