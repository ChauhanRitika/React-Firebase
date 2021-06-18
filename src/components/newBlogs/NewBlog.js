import React, { useState } from 'react';
import firebase from "../firebase";
import "./NewBlog.css";
import { useHistory } from "react-router-dom";

export default function NewBlog() {
    const history = useHistory();
    const [values, setValues] = useState({ Name: "", blogText: "" });
    const handleChange = event => {
        const { name, value } = event.target
        setValues({
            ...values,
            [name]: value
        })
    }
    const handleClick = () => {
        history.push("/blogs");
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        try{
            let data = firebase.database().ref("blogText");
            data.push(values);
            alert("Saved Succesfully!!!")
        }
        catch(err){
            console.log(err);
        }
        finally{
            history.push("/blogs")
        }
    }

    return (
        <>
        <div className="main-content-newblog">
            <div className="form-div-newblog">
                <form onSubmit = {handleSubmit}>
                    <div className="form-group-newblog">
                        <div className="grey small_font" htmlFor="Name">Name</div>
                        <div className="input-newblog">
                            <input type="text" className="form-control" onChange={handleChange} name="Name" placeholder="Full Name" required />
                        </div>
                    </div>
                    <div className="form-group-newblog">
                        <label className="grey small_font" htmlFor="blogText">Blog Text</label>
                        <textarea type="text" onChange={handleChange} className="form-control" name="blogText" placeholder="Write here!!!" />
                    </div>
                    <div className="form-group-newblog">
                        <button className="saveblogbtn" type="submit">Save</button>
                    </div>
                    <div className="form-group-newblog">
                        <div className="saveblogbtn small_font text-center-newblog" onClick={handleClick}>Back</div>
                    </div>
                </form>
            </div>
            </div>
        </>
    )
}