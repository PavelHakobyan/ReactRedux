import React from "react";
import './AboutPage.css'
import galactic from "./1.jpg"
import Title from "../../Components/Title/Title";
import Likes from "../../Components/Likes/Likes";
import Comments from "../../Components/Comments/Comments";

// const About = () => {
//     return (
//         <div>
//             <h1 className="h1">AboutPage</h1>
//         </div>
//     )
// }
// export default About;

const About = () => {
    return (
        <div className="about">
            <div className="wrap">
                <div className="card">
                    <div className="card-image">
                        <img src={galactic}/>
                        <Title/>
                        <Likes/>
                    </div>
                    <Comments/>
                </div>
            </div>
        </div>
    )
}
export default About