import "../App.css";
import icon from "../images/EagleM.png";
import mukilan from "../images/Mukilan.jpg";
import mukilanimg from "../images/mukilanprofile.jpeg";
import capstone from "../images/capstone.png";
import github from "../images/github.png";
import deploy from "../images/deploy.png";
import certificate from "../images/HDFD.jpeg";
import GitHubProfile from "./GitHubProfile";
import GithubLogo from "../images/GitHubLogo.png";
import phone from "../images/phone.png";
import mail from "../images/mail.png";
import linkedin from "../images/linkedin.png";
import React, { useEffect,useState } from 'react';
import {Link} from "react-router-dom";
import axios from "axios";
export default function Portfolio() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post('https://porfolio-hs0e.onrender.com/send', {
                name,
                email,
                message,
            });
            alert(response.data); // Show success message
            // Clear form fields after submission
            setName('');
            setEmail('');
            setMessage('');
        } catch (error) {
            alert('Error sending message!'); // Show error message
            console.error('Error:', error);
        }
    };
    const SkillsSection = () => {
        useEffect(() => {
            const handleScroll = () => {
                const skills = document.querySelectorAll('.skill li');
    
                skills.forEach((skill, index) => {
                    const delay = index * 100; 
                    skill.classList.add('animate');
                    skill.style.animationDelay = `${delay}ms`;
                });
            };
    
            window.addEventListener('scroll', handleScroll);
    
            return () => {
                window.removeEventListener('scroll', handleScroll);
            };
        }, []);

        return (
            <section className="normal-section" id="skills">
            <h2>Skills</h2>
            <div className="skill">
            <br/>
            <h1>Frontend:</h1>
              <br/>
                <ul>
                    <li><img src="https://img.icons8.com/color/40/html-5--v1.png" alt="" />Html</li>
                    <li><img src="https://img.icons8.com/color/40/css3.png" alt="" />Css</li>
                    <li><img src="https://img.icons8.com/fluency/40/javascript.png" alt="" />Js</li>
                    <li><img src="https://img.icons8.com/color/40/react-native.png" alt="" />React</li>
                    <li><img src="https://img.icons8.com/color/40/tailwind_css.png" alt="" />Tailwind</li>
                    <li><img src="https://img.icons8.com/color/40/redux.png" alt="" />Redux</li>
                    
                </ul>
                <br/>
                <h1>Backend + Database:</h1>
                <br/>
                <ul>
                    <li><img src="https://img.icons8.com/fluency/40/node-js.png" alt="" />Node.js</li>
                    <li><img src="https://img.icons8.com/nolan/40/express-js.png" alt="" />Express.js</li>
                    <li><img src="https://img.icons8.com/color/40/mongoose.png" alt="" />Mongoose</li>
                    <li><img src="https://img.icons8.com/color/40/mongodb.png" alt="" />MongoDB</li>
                    <li><img src="https://img.icons8.com/color/40/firebase.png" alt="" />Firebase</li>
                    <li><img src="https://img.icons8.com/color/48/mysql-logo.png" alt=""/>Mysql</li>
                </ul>
                    <br/>
                    <h1>Tolls:</h1>
                    <br/>
                 <ul>  
                    <li><img src="https://img.icons8.com/fluency/40/docker.png" alt="" />Docker</li>
                    <li><img src="https://img.icons8.com/color/48/git.png" alt="" />Git</li>
                    <li><img src="https://img.icons8.com/nolan/64/github.png" alt="" />GitHub</li>
                    <li><img src="https://img.icons8.com/color/48/npm.png" alt="" />NPM</li>
                    <li><img src="https://img.icons8.com/color/48/java-web-token.png" alt="" />JWT</li>
                    <li><img src="https://vitejs.dev/logo-with-shadow.png" alt="" />Vite</li>
                    <li><img src="https://docs.vendure.io/assets/images/deploy-to-render-b2b7fbd4d3153076c1e91c3d9969a719.webp" alt="" />Render</li>
                    <li><img src="https://img.icons8.com/external-tal-revivo-shadow-tal-revivo/40/external-netlify-a-cloud-computing-company-that-offers-hosting-and-serverless-backend-services-for-static-websites-logo-shadow-tal-revivo.png" alt="" />Netlify</li>
                    <li><img src="https://voyager.postman.com/logo/postman-logo-icon-orange.svg" alt="" />Postman</li>
                    <li><img src="https://testdev.tools/images/resources/usebruno.png" alt="" />Bruno</li>
                    <li><img src="https://cdn.worldvectorlogo.com/logos/cloudinary-2.svg" alt="" />Cloudinary</li>
                    <li><img src="https://img.icons8.com/color/48/figma--v1.png" alt="" />Figma</li>
                </ul> 
                <br/>
                <h1>Languages:</h1>
                <br/>
                <ul>
                    <li><img src="https://img.icons8.com/nolan/64/c-plus-plus.png" alt="" />C++</li>
                    <li><img src="https://img.icons8.com/color/48/python--v1.png" alt="" />Python</li>
                    <li><img src="https://img.icons8.com/fluency/48/java-coffee-cup-logo.png" alt="" />Java</li>
                    <li><img src="https://img.icons8.com/color/48/javascript--v1.png" alt="" />Javascript</li>
                    <li><img src="https://img.icons8.com/arcade/64/sql.png" alt="" />SQL</li>
                </ul>
                
            
            </div>
        </section>
        );
    };

    return (
        <div className="Background" id="home">
            {/* Navigation Bar */}
            <div className="Nav_Bar">
                <img src={icon} alt="Icon" className="Icon" />
                <ul>
                    <li><a href="#home">HOME</a></li>
                    <li><a href="#about-me">ABOUT ME</a></li>
                    <li><a href="#skills">SKILLS</a></li>
                    <li><a href="#capstone">CAPSTONE</a></li>
                    <li><a href="#contact">CONTACT</a></li>
                    <li><a href="https://docs.google.com/document/d/1-2EjqCQzZV1ypcW-82n7eUt8G5V7HQBVjV4g7SbT2PI/edit?usp=sharing">RESUME</a></li>
                </ul>
            </div>

            {/* Main Section */}
            <div className="main">
                <div className="developer">
                    <h1>Hi, I'm</h1>
                    <h1>Mukilan</h1>
                    <h2>A Full Stack Developer</h2>
                    <br />
                    <a href="https://docs.google.com/document/d/1-2EjqCQzZV1ypcW-82n7eUt8G5V7HQBVjV4g7SbT2PI/edit?usp=sharing"><button>Resume</button></a>
                </div>
                <div>
                    <img src={mukilan} alt="Background" className="bgimage" />
                </div>
            </div>

            {/* Parallax Section */}
            <div className="parallax-section">
                {/* About Me Section */}
                <section className="normal-section" id="about-me">
                    <div className="about">
                        <img src={mukilanimg} alt="Mukilan Profile" className="profile" />
                        <div className="profilediv">
                            <h1>About Me</h1>
                            <p>
                                A passionate technology enthusiast constantly exploring the 
                                ever-evolving computer landscape. My primary focus is full-stack 
                                development, with strong expertise in programming languages like 
                                JavaScript, Python, and C++. In addition to development, I have a 
                                keen interest in cybersecurity and networking, areas where I continue 
                                to deepen my knowledge and skills.
                            </p>
                            <p>Over the years, I've gained hands-on experience with a wide range of technologies:</p>
                            <ul>
                                <li><strong>Frontend:</strong> HTML, CSS, JavaScript, React.js, Tailwind CSS</li>
                                <li><strong>Backend:</strong> Node.js, Express</li>
                                <li><strong>Databases:</strong> MongoDB, MySQL</li>
                                <li><strong>Tools:</strong> Docker</li>
                            </ul>
                            <p>
                                I am always eager to learn, stay up-to-date with the latest technological 
                                advancements, and continuously enhance my development skills, while also 
                                exploring my interests in cybersecurity and networking.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Skills Section */}
                <SkillsSection />

                {/* Projects Section */}
                <section className="normal-section-2" id="capstone">
                    <h1>Capstone</h1>
                    <div className="capstonediv">
                        <div className="projectdiv">
                            <img src={capstone} alt="" />
                            <h2>QUERULOUS</h2>
                            <p>A Website of solving people's daily life problems in real-time.</p>
                        </div>
                        <div className="downBox">
                            <a href="https://github.com/kalviumcommunity/s60_mukilan_capstone_querulous">  <img src={github} alt="" /> GitHub Link</a>
                            <a href="https://statuesque-maamoul-4a9521.netlify.app/">  <img src={deploy} alt="" /> Deployed Link</a>
                        </div>
                    </div>
                </section>

                <br />
                <div className="github">
                    <h1>Github Statistics</h1>
                    <GitHubProfile />
                </div>

                <br />
                <div className="certification">
                    <h1>Honors Diploma in Full Stack Development (HDFD)</h1>
                    <div className="flex-certificate">
                        <div className="certificateImage">
                            <img src={certificate} alt="" className="HDFD" />
                        </div>
                        <div>
                            <p>
                                I am always eager to engage my mind in activities within the ever-evolving landscape of technology. 
                                I recently completed an <strong>Honors Diploma in Full Stack Development (HDFD)</strong> at <strong>CSC COMPUTER EDUCATION  (P) LTD. </strong>, 
                                reflecting my dedication to acquiring new skills and staying at the forefront of the industry. 
                                This experience has not only deepened my technical expertise but also fueled my passion for creating innovative solutions.
                            </p>
                            <p>
                                Additionally, I completed this diploma mutually alongside my first-year studies, demonstrating my ability to balance multiple commitments effectively. 
                                This experience showcases my potential and commitment towards work and continuous learning.
                            </p>
                            <p>
                                Embracing challenges and transforming ideas into reality drives my commitment to continuous learning and growth in the tech world.
                            </p>
                        </div>
                    </div>   
                </div>

                <br />
                <section className="contact" id="contact">
                    <div className="contactlist">
                        <h1 className="contactme">Contact Me</h1>
                        <div className="mail">
                            <img src={mail} alt="" />
                            <p>mukilan.p@kalvium.community</p>
                        </div>
                        <div className="phone">
                            <img src={phone} alt="" />
                            <p>+91 6382767198</p>
                        </div>
                        <div className="call">
                            <a href="https://github.com/MUKILAN019"><img src={GithubLogo} alt="" /></a>
                            <a href="https://www.linkedin.com/in/mukilan-p-/"><img src={linkedin} alt="" /></a>
                        </div>
                        <a href="https://docs.google.com/document/d/1-2EjqCQzZV1ypcW-82n7eUt8G5V7HQBVjV4g7SbT2PI/edit?usp=sharing"><button className="resume">Resume</button></a>
                    </div>
                    <div>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    className="textbox"
                    placeholder="Your Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                />
                <input
                    type="email"
                    className="email"
                    placeholder="Your Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                <textarea
                    id="message"
                    name="Message"
                    rows="6"
                    placeholder="Your Message"
                    className="box"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    required
                ></textarea>
                <button type="submit" className="button">Send</button>
            </form>
        </div>
                </section>
            </div>
        </div>
    );
}
