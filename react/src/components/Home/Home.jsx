import React from 'react'
import './home.css'
import profileImg from "../../../src/assets/aliza.jpeg";

const Home = () => {
    return (
        <div>
            <selection className="home">
                <div className="home-content">
                    <h1> HI, I am Aliza Adhikari</h1>
                    <h2> IT Student</h2>
                    <p>
                        I am passionate to learn new things. I enjoy coding and exploring new technologies.
                        WELCOME TO MY Portfolio!

                    </p>
                    <button className="home-btn">Download CV</button>

                </div>
                <div className="home-img">
                    <img src={profileImg} alt="Aliza Adhikari" />
                </div>

            </selection>
        </div>
    );
};

export default Home