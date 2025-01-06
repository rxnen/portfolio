import './App.css';
import { useRef, useEffect } from 'react';
import Typed from "typed.js";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDown, faMedal, faLaptopCode, faHeadphones, faHandshake, faGuitar, faDog, faBaseball} from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin, faInstagram, faDiscord } from '@fortawesome/free-brands-svg-icons';


function App() {

  const el = useRef(null); 
  const typed = useRef(null); 

  useEffect(() => {
    typed.current = new Typed(el.current, {
      strings: [
        "High School Student",
        "Developer",
        "Tech Enthusiast",
        "Volunteer",
        "Metalhead",
        "Tennis Player",
      ],
      typeSpeed: 120,
      backSpeed: 50, 
      backDelay: 2000,
      loop: true,
    });

    return () => {
      typed.current.destroy();
    };

  }, []);
  
  const scrollDown = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth'
    });
  }
  
  return (
    <div className="App">
      <header className="App-header">
        <div className="hero"> 
          <div className="hero-text">
            <h1 className="hero-name">Hey, I'm <span>Ronen</span></h1>
            <div class="typing-container">
              <span ref={el}></span>
            </div>
          </div>
          <img src={"/assets/PersonalVector-2.png"} alt="Ronen" className="hero-image" />
        </div>

        <button className="down-arrow-button" onClick={scrollDown}>
          <FontAwesomeIcon icon={faArrowDown} className="down-arrow" />
        </button>


        <div id="about-me" className="about-me">
          <h1>About Me</h1>
          <div className="about-me-content">
            <div className="about-me-skills">
              <div className="skills-graph">
                <div className="skill">
                  <h2 className="skill-name">Python</h2>
                  <div className="skill-bar">
                    <div className="skill-progress" style={{width: "90%"}}></div>
                  </div>
                </div>
                <div className="skill">
                  <h2 className="skill-name">HTML/CSS</h2>
                  <div className="skill-bar">
                    <div className="skill-progress" style={{width: "85%"}}></div>
                  </div>
                </div>
                <div className="skill">
                  <h2 className="skill-name">JavaScript</h2>
                  <div className="skill-bar">
                    <div className="skill-progress" style={{width: "80%"}}></div>
                  </div>
                </div>
                <div className="skill">
                  <h2 className="skill-name">React</h2>
                  <div className="skill-bar">
                    <div className="skill-progress" style={{width: "80%"}}></div>
                  </div>
                </div>
                <div className="skill">
                  <h2 className="skill-name">Java</h2>
                  <div className="skill-bar">
                    <div className="skill-progress" style={{width: "60%"}}></div>
                  </div>
                </div>
                <div className="skill">
                  <h2 className="skill-name">SQL</h2>
                  <div className="skill-bar">
                    <div className="skill-progress" style={{width: "60%"}}></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="about-me-info">
              <p>
              I enjoy programming web, software, and mobile applications to solve genuine problems or (most of the time) for no reason at all.<br /><br />
              I'm also a full-time high school student, a tennis player, an avid rock and metal listener, and love volunteer work.<br /><br />
              I've been programming since 7th grade, have interned with the Philadelphia Phillies R&D department, developed an award-winning app, and am currently interested in coding for positive-impact businesses and organizations.<br /><br />
              </p>
            </div>
          </div>
          <div className="about-me-icons">
            <FontAwesomeIcon icon={faMedal} className="about-me-icon" />
            <a href="https://github.com/rxnen" target="_blank" rel="noreferrer">
              <FontAwesomeIcon icon={faLaptopCode} className="about-me-icon" />
            </a>
            <a href="https://open.spotify.com/user/eszcqv55x8d9h5w80xa2ricls?si=8f0cf1d04ed64953" target="_blank" rel="noreferrer">
              <FontAwesomeIcon icon={faHeadphones} className="about-me-icon" />
            </a>
            <FontAwesomeIcon icon={faHandshake} className="about-me-icon" />
            <FontAwesomeIcon icon={faGuitar} className="about-me-icon" />
            <FontAwesomeIcon icon={faDog} className="about-me-icon" />
            <FontAwesomeIcon icon={faBaseball} className="about-me-icon" />
          </div>
        </div>

        <div id="projects" className="projects">
          <h1>Projects</h1>
          <div className="project-showcase">

            <img src={"/assets/coming-soon.jpg"} alt="Stealth Startup" className="project-image image-top" />
            <div className="project-text">
              <h2 className="project-name">Stealth Project</h2>
              <p className="project-tools">React · AWS · Python</p>
              <p className="project-description">Collaborating closely with the founder, UX designer, and artist, I serve as the lead (and solo) developer for an e-commerce platform dedicated to providing emotional support to families grieving the loss of a child.</p>
              <a href="/" target="_blank" rel="noreferrer" className="project-button">Coming Soon</a>
            </div>
          </div>
          <div className="project-showcase">
              <div className="project-text">
                <h2 className="project-name">Tiny Village Spirit</h2>
                <p className="project-tools">HTML/CSS · Javascript</p>
                <p className="project-description">Designed, built, and currently manage the website for Tiny Village Spirit, a Bay Area nonprofit working to end the homeless crisis.</p>
                <a href="https://tinyvillagespirit.org" target="_blank" rel="noreferrer" className="project-button">View Project</a>
              </div>
              <img src={"/assets/tiny-village-spirit.png"} alt="Tiny Village Spirit Website" className="project-image image-bottom" />
          </div>

          <div className="project-showcase">
              <img src={"/assets/eldersafe.png"} alt="Tiny Village Spirit Website" className="project-image image-top" />
              <div className="project-text">
                <h2 className="project-name">ElderSafe</h2>
                <p className="project-tools">React Native · Javascript · CSS</p>
                <p className="project-description">Developed ElderSafe, a mobile app that allows seniors to improve the safety of their homes through room evaluations and personalized product suggestions.</p>
                <a href="https://eldersafe.ronenjain.com" target="_blank" rel="noreferrer" className="project-button">View Project</a>
              </div>
          </div>


          <div className="project-list">
            <div className="project">
              <a href="https://sheets.ronenjain.com" target="_blank" rel="noreferrer" className="project-name">Sheet2Feed</a>
              <p className="project-tools">React · Firebase · Google Sheets API</p>
              <p className="project-description">Developed a web app that allows users to create and manage web feeds by connecting their Google Sheets.</p>
            </div>
            <div className="project">
                <a href="https://aiheadlines.web.app" target="_blank" rel="noreferrer" className="project-name">Headline or Headlie</a>
                <p className="project-tools">React · ChatGPT API</p>
                <p className="project-description">Developed a Wordle-like game where users guess whether news headlines are real or generated by ChatGPT.</p>
            </div>
            <div className="project">
                <a href="https://vinyl.ronenjain.com" target="_blank" rel="noreferrer" className="project-name">Record Player Visualizer</a>
                <p className="project-tools">Python Flask · HTML/CSS · Spotify API</p>
                <p className="project-description">
                  Developed a web app that connects to a user's Spotify account and displays the currently playing song on a record player.
                </p>
            </div>
         
            <div className="project">
                <a href="https://pitcher.ronenjain.com" target="_blank" rel="noreferrer" className="project-name">Pitcher Predictor</a>
                <p className="project-tools">Python Flask · MLB Stats API</p>
                <p className="project-description">
                  Developed a web app that predicts the starting pitchers of upcoming baseball games based on previous games.
                </p>
            </div>

          </div>
        </div>

        <div id="contact" className="contact">

          <h1>Contact Me</h1>

          <p>
            I'm always open to new opportunities and collaborations. If you are in need of a developer for any positive-impact projects, I would love to help out (for free, of course). Don't hesitate to ask!
          </p>

          <div className="contact-info">
            <div className="contact-email">
              <h2>Email</h2>
              <a href="mailto:ronen@ronenjain.com" className="contact-link">
                ronen@ronenjain.com
              </a>
            </div>
            <div className="contact-socials">
              <h2>Socials</h2>
              <div className="contact-socials-icons">
                <a href="https://www.instagram.com/ronen.j" target="_blank" rel="noreferrer" className="contact-link">
                  <FontAwesomeIcon icon={faInstagram} />
                </a>
                <a href="https://www.linkedin.com/in/ronen-jain-8a2860290/" target="_blank" rel="noreferrer" className="contact-link">
                  <FontAwesomeIcon icon={faLinkedin} />
                </a>
                <a href="https://discord.com/users/893939197537288265" target="_blank" rel="noreferrer" className="contact-link">
                  <FontAwesomeIcon icon={faDiscord} />
                </a>
              </div>
            </div>
            <div className="contact-github">
              <h2>GitHub</h2>
              <a href="https://www.github.com/rxnen" target="_blank" rel="noreferrer" className="contact-link">
                rxnen
              </a>
            </div>

          </div>

        </div>

        <footer>

          <div className="footer-content">

            <div className="footer-left">
              <h1>Ronen Jain</h1>
              <p>© 2024-2025 Ronen Jain</p>
            </div>

            <div className="footer-right">
              <div className="footer-links">
                <p>Quick Links</p>
                <a href="#about-me" className="footer-link">About Me</a>
                <a href="#projects" className="footer-link">Projects</a>
                {/* <a href="#advocacy" className="footer-link">Advocacy</a> */}
                <a href="#contact" className="footer-link">Contact</a>
              </div>
            </div>

          </div>

          <div className="footer-icons">
            <a href="https://www.instagram.com/ronen.j" target="_blank" rel="noreferrer" className="footer-icon">
              <FontAwesomeIcon icon={faInstagram} />
            </a>
            <a href="https://www.linkedin.com/in/ronen-jain-8a2860290/" target="_blank" rel="noreferrer" className="footer-icon">
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
            <a href="https://www.github.com/rxnen" target="_blank" rel="noreferrer" className="footer-icon">
              <FontAwesomeIcon icon={faGithub} />
            </a>
          </div>

        </footer>

      </header>
    </div>
  );
}

export default App;