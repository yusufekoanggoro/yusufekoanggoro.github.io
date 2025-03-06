import React, { Component } from 'react';
import './NewLandingPage2.css';
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link, Element , Events, animateScroll as scroll, scroller } from 'react-scroll';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import {FaPencilAlt, FaFacebook, FaLinkedin, FaInstagram, FaGithub, FaWhatsapp} from 'react-icons/fa';
import Collapse from 'rc-collapse';
import HamburgerMenu from 'react-hamburger-menu';
import { push as Menu } from 'react-burger-menu';
import GithubRepos from '../../components/GithubRepos';
// import { useSwipeable, Swipeable } from 'react-swipeable'
import Moment from 'moment-timezone';
var Panel = Collapse.Panel;
require('rc-collapse/assets/index.css');
class NewLandingPage extends Component{
    constructor(props) {
        super(props);
        this.state = {
            date: Moment().format('YYYY'),
            menu: [
                {name: 'About', stts: 'active'},
                {name: 'Experience', stts: ''},
                {name: 'Education', stts: ''},
                {name: 'Skills', stts: ''},
                {name: 'Portfolio', stts: ''},
                {name: 'Contact', stts: ''}
            ],
            open: false,
            touchIdentifier: false
        };
        this.scrollToTop = this.scrollToTop();
    }

    componentWillUnmount() {
        Events.scrollEvent.remove('begin');
        Events.scrollEvent.remove('end');
    }

    scrollToTop = () => {
        scroll.scrollToTop();
    }

    scrollTo = (arg) => {
        scroller.scrollTo(arg, {
          duration: 800,
          delay: 0,
          smooth: 'easeInOutQuart'
        })
        this.handleClickMenu(arg);
    }

    scrollToWithContainer = () => {

        let goToContainer = new Promise((resolve, reject) => {
    
          Events.scrollEvent.register('end', () => {
            resolve();
            Events.scrollEvent.remove('end');
          });
    
          scroller.scrollTo('scroll-container', {
            duration: 800,
            delay: 0,
            smooth: 'easeInOutQuart'
          });
    
        });
    
        goToContainer.then(() =>
          scroller.scrollTo('scroll-container-second-element', {
            duration: 800,
            delay: 0,
            smooth: 'easeInOutQuart',
            containerId: 'scroll-container'
          }));
    }

    handleClickMenu = (arg) => { 
        const menu= [
            {name: 'About Me', stts: ''},
            {name: 'Experience', stts: ''},
            {name: 'Education', stts: ''},
            {name: 'Skills', stts: ''},
            {name: 'Portfolio', stts: ''},
            {name: 'Contact', stts: ''}
        ];
        const indexMenuSelected = menu.findIndex( (element) => element.name === arg);
        menu[indexMenuSelected] = 'Active'

        this.setState({menu,open: !this.state.open});
    }

    handleClick = () => {
        this.setState({
            open: !this.state.open
        });
        console.log(this.state.date)
    }
    overlayClicked = () => {
        this.setState({
            open: !this.state.open
        });
    }

    downloadCV = () => {
        const element = document.createElement("a");
        element.href = 'Yusuf Eko Anggoro - Resume.pdf'
        element.target = '_blank';
        element.download = ''

        document.body.appendChild(element); // Required for this to work in FireFox
        element.click();
        element.parentNode.removeChild(element);
    }
    

    render(){
        const closeAllMenusOnEsc = (e) => {
            e = e || window.event;
            if (e.key === 'Escape' || e.keyCode === 27) {
              this.setState({open: false});
            }
        };
        return (
            <div id="outer-container">
                <Menu disableOverlayClick={() => this.overlayClicked()} customOnKeyDown={closeAllMenusOnEsc} burgerButtonClassName={ "button-ganggu" } overlayClassName={'overlay-ganggu'} className={ "my-menu" }  isOpen={this.state.open} pageWrapId={ 'page-wrap' } outerContainerId={ "outer-container" }>
                    <aside>
                        <div className='text-center'>
                            <div className='author-img'></div>
                            <h1 className='full-name'>
                                <a>Yusuf Eko Anggoro</a>
                            </h1>
                            <span className="position"><a href="">Backend Developer</a></span>
                        </div>
                        <div className='nav'>
                            <ul>
                                {
                                    this.state.menu.map((object, index) => {
                                        return(
                                            <li>
                                                <Link onClick={() => this.handleClick()} className="anchor" to={object.name} spy={true} smooth={true} duration={500}>{object.name}</Link>
                                            </li>
                                        )
                                    })
                                }
                            </ul>
                        </div>
                        <div className='footer'>
                        <p>
                            <small>
                                &copy;Copyright {this.state.date} All rights reserved | This web is made with <FontAwesomeIcon icon={faHeart} /> by <a>Yusuf</a>
                            </small>
                        </p>
                    </div>
                    </aside>
                </Menu>
                <div className='my-container' id="page-wrap">
                    <aside>
                        <div className='text-center'>
                            <div className='author-img'></div>
                            <h1 className='full-name'>
                                <a>Yusuf Eko Anggoro</a>
                            </h1>
                            <span className="position"><a href="">Backend Developer</a></span>
                        </div>
                        <div className='nav'>
                            <ul>
                                {
                                    this.state.menu.map((object, index) => {
                                        return(
                                            <li>
                                                <Link  className="anchor" to={object.name} spy={true} smooth={true} duration={500}>{object.name}</Link>
                                            </li>
                                        )
                                    })
                                }
                            </ul>
                        </div>
                        <div className='footer'>
                            <p>
                                <small>
                                    &copy;Copyright {this.state.date} All rights reserved | This web is made with <FontAwesomeIcon icon={faHeart} /> by <a>Yusuf</a>
                                </small>
                            </p>
                        </div>
                    </aside>  
                    <main>
                        <div className='burger'>
                            <HamburgerMenu
                                isOpen={this.state.open}
                                menuClicked={() => this.handleClick()}
                                width={18}
                                height={15}
                                strokeWidth={1}
                                rotate={0}
                                color='black'
                                borderRadius={0}
                                animationDuration={0.5}
                            />
                        </div>
                        <Element name="About" className="about-wrap">
                            <h2 className="heading-meta">About Me</h2>
                            <div className='desc'>
                                <p style={{textAlign: 'justify', textJustify: 'inter-word'}}>
                                    I'm <strong>Yusuf Eko Anggoro</strong>, a <strong>Backend Developer</strong> with over <strong>5 years of experience</strong> building and optimizing <strong>scalable microservices architecture</strong>. I specialize in <strong>Node.js</strong>, <strong>TypeScript</strong>, and <strong>Golang</strong> with a focus on <strong>performance</strong>, <strong>reliability</strong>, and <strong>maintainability</strong>. Passionate about <strong>problem-solving</strong> and continuously learning the latest technologies to drive impactful solutions.
                                </p>
                            </div>
                            <div>
                            <button onClick={ () => this.downloadCV()}>Download CV</button>
                            </div>
                        </Element>
                        <Element name="Experience" className="experience-wrap">
                            <h2 className="heading-meta">Experience</h2>
                            <VerticalTimeline lineColor="#f2f3f7" layout="1-column-left">
                            <VerticalTimelineElement
                                    className="vertical-timeline-element--work"
                                    contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                                    contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                                    date="August 2019 - March 2025"
                                    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                                    icon={<FaPencilAlt/>}
                                >
                                    <h5 className="vertical-timeline-element-title">Backend Developer at Telkom Indonesia</h5>
                                    <p>
                                        <ul className="ul-vertical-timeline-content">
                                            <li>Developed a Ticket Management System for ticket tracking, automated notifications, and API integration with other platforms.</li>
                                            <li>Developed a User Management System with Role-Based Access Control (RBAC) authentication using JWT to enhance user access security.</li>
                                            <li>Developed an Attendance Management System for real-time attendance tracking and attendance report analysis.</li>
                                            <li>Developed a Lead Management System for the sales team to track and analyze prospects to improve sales conversion.</li>
                                            <li>Contributed to the development of a CRM with automation and personalization features to enhance customer retention.</li>
                                            <li>Fixed bugs from helpdesk reports, performed troubleshooting and debugging, and refactored code to ensure optimal system performance.</li>
                                            <li>Developed and maintained backend services using Node.js, TypeScript, and Golang within a microservices architecture.</li>
                                            <li>Collaborated with the Product Owner, Frontend and Mobile Developer, DevOps Engineer, Quality Assurance, Software Architect, UI/UX Designer, Scrum Master, and Document Engineer to develop and implement efficient and scalable backend solutions.</li>
                                            <li>Experienced as a Lead Backend Developer in a squad, leading the design, development, and implementation of efficient backend solutions.</li>
                                            <li>Integrated the backend with various external systems to ensure smooth data flow and efficiency.</li>
                                            <li>Implemented Clean Architecture, Domain-Driven Design (DDD), and SOLID Principles to ensure modular, scalable, and maintainable code.</li>
                                            <li>Designed and optimized databases (MongoDB, PostgreSQL, Oracle, MySQL, Redis) for high performance and scalability.</li>
                                            <li>Used design patterns like Repository Pattern, Factory Pattern, and Singleton to make the code more organized and easy to manage.</li>
                                            <li>Implemented cloud storage solutions with Minio, AWS S3, and integrated Firebase for push notifications.</li>
                                            <li>Ensured code quality and stability through automated testing with Mocha, Chai, and Jest.</li>
                                            <li>Used Event-Driven Architecture with Kafka for real-time communication between services.</li>
                                            <li>Used Elasticsearch to improve data search.</li>
                                            <li>Used the ELK Stack (Elasticsearch, Logstash, Kibana) to monitor and analyze logs.</li>
                                            <li>Used Jenkins for CI/CD processes that were set up by the DevOps team.</li>
                                            <li>Implemented API security best practices, including Basic Authentication, JWT, Rate Limiting, and CORS.</li>
                                            <li>Implemented encryption and decryption to protect sensitive data.</li>
                                            <li>Implemented automated task scheduling using Node Cron to streamline data updates.</li>
                                            <li>Optimized large-scale data processing by developing background jobs with Bull for improved efficiency.</li>
                                            <li>Collaborated within Agile development teams, actively participating in sprint planning, daily stand-ups, and retrospectives to drive continuous improvement and efficient project execution.</li>
                                            <li>Used Docker for containerization and Git for version control and collaboration.</li>
                                        </ul>
                                    </p>
                            </VerticalTimelineElement>
                                <VerticalTimelineElement
                                    className="vertical-timeline-element--work"
                                    contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                                    contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                                    date="July 2019 - August 2019"
                                    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                                    icon={<FaPencilAlt/>}
                                >
                                    <h5 className="vertical-timeline-element-title">Graduated as Full Stack Developer at Arkademy</h5>
                                    <p className="p-vertical-timeline-content">Arkademy is a software engineering program that provides a 6 weeks hands-on coding curriculum that focuses on mobile development with React Native and Node.js.</p>
                                </VerticalTimelineElement>
                            </VerticalTimeline>
                        </Element>
                        <Element name="Education" className="education-wrap">
                            <h2 className="heading-meta">Education</h2>
                            <Collapse defaultActiveKey="0" style={{marginBottom: '7px'}} accordion={true}>
                                <Panel className="panel-education-content" header="Indraprasta PGRI University (2020-2024)" headerClass="my-header-class">
                                    <p>Completed a final project research on the Decision Support System for Employee Recruitment at PT Telkom, implementing the AHP method to enhance objectivity and efficiency in the selection process, using Java (NetBeans) and MySQL as supporting technologies.</p>
                                    <p><strong>GPA: 3.5</strong></p>
                                </Panel>
                            </Collapse>
                            <Collapse defaultActiveKey="0" accordion={true}>
                                <Panel className="panel-education-content" header="Vocational High School 24 Jakarta (2016-2019)" headerClass="my-header-class">
                                I studied and explored programming, software development, and database management. Proficient in algorithms, data structures, and developing web and desktop applications, with experience in software development projects both individually and in teams.
                                </Panel>
                            </Collapse>
                        </Element>
                        <Element name="Skills" className="skills-wrap">
                            <h2 className="heading-meta">My Skills</h2>
                            <Collapse defaultActiveKey="0" accordion={true} style={{marginBottom: '7px'}}>
                                <Panel header="Backend Developer" headerClass="my-header-class backend">
                                    <p>
                                        <ul className='ul-skills-content'>
                                            <li>Programming Languages: JavaScript (Node.js), TypeScript, GO (Golang), Java, Laravel</li>
                                            <li>Databases: MongoDB, Oracle, PostgreSQL, MySQL, Redis</li>
                                            <li>Cloud & Storage: Minio, AWS S3, Firebase (Push Notification)</li>
                                            <li>Testing: Mocha, Chai, Jest</li>
                                            <li>Message Broker: Kafka</li>
                                            <li>Search & Indexing: Elasticsearch</li>
                                            <li>Monitoring & Logging: ELK Stack (Elasticsearch, Logstash, Kibana), Jenkins</li>
                                            <li>API Development: REST API, gRPC, GraphQL</li>
                                            <li>Authentication & Security: Basic Authentication, JWT (JSON Web Token), Rate Limiting, CORS, Encryption & Decryption</li>
                                            <li>Background Processing & Task Scheduling: Bull, Node Cron</li>
                                            <li>Software Architecture: Microservices, Domain-Driven Design (DDD), Clean Architecture, Event-Driven Architecture</li>
                                            <li>Software Design: SOLID Principles, Design Patterns</li>
                                            <li>Tools: Docker, Git</li>
                                        </ul>
                                    </p>
                                </Panel>
                            </Collapse>
                        </Element>
                        <Element name="Portfolio" className="portfolio-wrap">
                            <h2 className="heading-meta">My Portfolio</h2>
                            <GithubRepos />
                        </Element>
                        <Element name="Contact" className="contact-wrap">
                            <div className='contact'>
                                <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/yousufe24/"><FaLinkedin className='linkedin' color='#0077B5' size={35} /></a>
                            </div>
                            <div className='contact'>
                                <a target="_blank" rel="noopener noreferrer" href="https://github.com/yusufekoanggoro"><FaGithub color="black" size={35} /></a>
                            </div>
                            <div className='contact'>
                                <a target="_blank" rel="noopener noreferrer" href="https://wa.me/6285934531182"><FaWhatsapp size={35}  color='#25d366'/></a>
                            </div>
                        </Element>
                    </main>
                </div>
            </div>
        )
    }
}

export default NewLandingPage;