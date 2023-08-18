import { AboutContainer } from "./style";
import aboutImg from "../../assets/coding.svg";

const About = () => {
    return (
        <div>
            <AboutContainer>
                <img src={aboutImg} alt="" />
                <h2>About Front-End Developer <span className="myName">David</span></h2>
                <div className="introduceContainer">
                    <h3>Hi, I'm David</h3>
                    <h4>I am currently taking Front-End Development course</h4>
                    <h4>I know JS, ReactJS, PHP, Redux, MariaDB, SQL, WordPress, and Joomla.</h4>
                    <h3><a href="mailto:dhk10003@gmail.com" className="sendEmail">Send email</a> : dhk10003@gmail.com</h3>
                </div>
            </AboutContainer>
        </div>
    )
};

export default About;