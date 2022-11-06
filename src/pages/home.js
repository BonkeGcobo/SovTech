import React from "react";
import myImage from '../image/bonke.jpg'
import gitHub from '../image/github.jpg'
import linkedIn from '../image/Linkedin.jpg'
import './styles/home.css'
const Home = () => (
    <div className="info">
        <div className="about-me">

            <img src={myImage} alt="showing me" className="myimage" />
            <div>
                <h2 className="home-title">A little about Me</h2>
                <p>Fullstack Development enthusiast from Cape Town, currently a final year student at the University of Cape Town I am passionate about software development</p>
            </div>
        </div>

        <div>
            <h2 className="home-title">Why SovTech?</h2>
            <p>The opportunity to be mentored by developers with years of experience
                appeals to me, I am attracted to being part of a positive environment where
                I will collaborate with other Developers and change the world through Tech.
            </p>
        </div>

        <div className="contact" id="contact">
            <p className="connect">LET'S CONNECT</p>

            <div className="social-media">
                <a href="https://www.linkedin.com/in/bonkegcobo/">
                    <img src={linkedIn} alt="linkedIn icon" />
                </a>

                <a href="https://github.com/BonkeGcobo">
                    <img src={gitHub} alt="github icon" />
                </a>
            </div>
        </div>
    </div>
)
export default Home