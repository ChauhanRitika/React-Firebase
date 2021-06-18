import React from 'react';
import "./Home.css";
import { useHistory } from "react-router-dom";

export default function Home() {
    const history = useHistory();
    const handleClick = () => {
        history.push("./blogs");
    }

    return (
        <>
            <div className="main_container">
                <div className="container">
                    <div className="header">

                        <div className="heading_name">Ritika Chauhan</div>
                        <div className="heading_info">
                            <p>+918920981747</p>
                            <p>chauhanritika149@gmail.com</p>
                        </div>
                        <div className="blog-btn-home">
                            <button onClick={handleClick}>Blogs</button>
                        </div>
                    </div>
                    <div className="resume_content">
                        <div className="person_data">
                            <div className="education">EDUCATION</div>
                            <div className="about_edu">
                                <h3>Bachelor of Technology (B.Tech), Information Technology</h3>
                                <p>Bhagwan Parshuram Institute of Technology</p>
                                <p>2018-2022</p>
                            </div>
                        </div>
                        <div className="person_data">
                            <div className="education">INTERNSHIPS</div>
                            <div className="about_edu">
                                <div>
                                    <h3>Full-Stack Developer</h3>
                                    <p>Metaorigin Labs, Gurgaon</p>
                                    <p>Nov 2020 - Mar 2021</p>
                                    <p>As a Full-stack developer, my responsibilities include, working on the frontend
                                        which is based on react js, and on the backend ( Node.js).
                                        I have worked on a PWA ( progressive web app ), using MERN stack technology.
                                    </p>
                                </div>
                                <div className="pt-14">
                                    <h3>Front-end Web Developer</h3>
                                    <p>My Tour Guru Online Pvt Ltd., Virtual</p>
                                    <p>Jun 2020 - Aug 2021</p>
                                    <p>I worked here as a front-end developer Intern. The website contains the
                                        company's packages and offers for the Andaman tour along with company detail
                                        and terms and services.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="person_data">
                            <div className="education">SKILLS</div>
                            <div className="about_edu">
                                <div className="about_skills">
                                    <div className="skills">
                                        <h3 className="pt-14">HTML</h3>
                                        <p>Advanced</p>
                                        <h3 className="pt-14">CSS</h3>
                                        <p>Intermediate</p>
                                        <h3 className="pt-14">MongoDB</h3>
                                        <p>Intermediate</p>
                                        <h3 className="pt-14">Express.js</h3>
                                        <p>Intermediate</p>
                                        <h3 className="pt-14">SQL</h3>
                                        <p>Intermediate</p>
                                    </div>
                                    <div className="skills">
                                        <h3 className="pt-14">JavaScript</h3>
                                        <p>Intermediate</p>
                                        <h3 className="pt-14">Node.js</h3>
                                        <p>Intermediate</p>
                                        <h3 className="pt-14">Angular 8.0</h3>
                                        <p>Intermediate</p>
                                        <h3 className="pt-14">Bootstrap</h3>
                                        <p>Intermediate</p>
                                        <h3 className="pt-14">ReactJs</h3>
                                        <p>Beginner</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="person_data">
                            <div className="education">TRAININGS</div>
                            <div className="about_edu">
                                <h3>Machine Learning</h3>
                                <p>Internshala Trainings, Online</p>
                                <p>Jun 2020 - Jul 2020</p>
                                <p>Successfully completed six weeks of online certified training on Machine Learning. The training consisted of Introduction to Machine Learning, Python for Machine Learning, and more. I scored 100% in the final assessment and was a top performer in the training.</p>
                            </div>
                        </div>
                        <div className="person_data">
                            <div className="education">PROJECTS</div>
                            <div className="about_edu">
                                <div className="projects">
                                    <h3>Cloutcube</h3>
                                    <p>Nov 2020 - Jan 2021</p>
                                    <p>http://cloutcube.com/</p>
                                    <p>A project that transcript the audio and video into text using Artificial Intelligence. I have worked as a front-end and JavaScript developer on this project. It supports multiple languages and also provides the text file in different formats.</p>
                                </div>
                                <div className="projects">
                                    <h3 className="pt-14">Andaman Tours</h3>
                                    <p>Jun 2020 - Aug 2020</p>
                                    <p>http://andamantours.in/</p>
                                    <p>A project, based on HTML, CSS, javascript, bootstrap, jquery. I have worked on it
                                        as a frontend developer. This is a website that allows users to book Andaman
                                        packages. It contains various travel packages at Andaman in detail.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="person_data">
                            <div className="education">POSITION OF RESPONSIBILITY</div>
                            <div className="about_edu">
                                <p>I am a member of the Poster Making team
                                    in "girl-up she united", a non-profit organization.
                                    Here I got a chance to showcase my designing skills
                                    by creating and designing posters for the girl-up page.
                                </p>
                                <p className="pt-14">
                                    I am a part of an Organization, named BOSC (BPIT Open Source Community). I
                                    have worked on my college's website as a frontend developer which is based on
                                    the angular2 framework.
                                </p>
                            </div>
                        </div>
                        <div className="person_data">
                            <div className="education">WORK SAMPLES</div>
                            <div className="about_edu">
                                <h3 className="pt-14">Github Profile</h3>
                                <p>https://github.com/ChauhanRitika</p>
                                <h3 className="pt-14">LinkedIn Profile</h3>
                                <p>https://www.linkedin.com/in/ritika-chauhan-1413ba1b1/</p>
                                <h3 className="pt-14">Portfolio</h3>
                                <p>https://chauhanritika.github.io/Portfolio/</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}