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
        element.href = 'Yusuf Eko Anggoro - Resume - EN.pdf'
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
                                    I'm <strong>Yusuf Eko Anggoro</strong>, a <strong>Backend Developer</strong> with over <strong>5 years of experience</strong> developing and optimizing <strong> microservices architecture</strong>. I specialize in <strong>Node.js</strong>, <strong>TypeScript</strong>, and <strong>Golang</strong> with a focus on <strong>performance</strong>, <strong>reliability</strong>, and <strong>maintainability</strong>. Passionate about <strong>problem-solving</strong> and continuously learning the latest technologies to drive impactful solutions.
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
                                        Project: MyTEnS - Internal CRM<br></br>
                                        Services: User, Catalog, Lead, Buying, Notification, Gamification, Ticket, Worker, Dashboard
                                        {/* <ul className="ul-vertical-timeline-content">
                                            <li>Designed and developed a RESTful API to support 20+ web and mobile features, enhancing system efficiency and maintainability.</li>
                                            <li>Developed a backend system for Ticket Management, improving automation, real-time tracking, and API integration.</li>
                                            <li>Developed a backend system for User Management with RBAC authentication using JWT to enhance security and access control.</li>
                                            <li>Developed a backend system for Attendance Management, enabling real-time tracking and attendance report analysis.</li>
                                            <li>Developed a backend system for Lead Management, enabling the sales team to track and analyze prospects to improve sales conversion.</li>
                                            <li>Contributed to developing CRM automation and personalization features, enhancing customer retention and experience.</li>
                                            <li>Developed and optimized backend services in collaboration with a 10+ member team, ensuring high performance and reliability for thousands of daily active users.</li>
                                            <li>Resolved bugs from helpdesk reports, performed troubleshooting and debugging, and refactored code to enhance system performance and stability.</li>
                                            <li>Developed and maintained backend services using Node.js, TypeScript, and Golang within a microservices architecture.</li>
                                            <li>Worked closely with cross-functional teams (Product Owners, Developers, DevOps, QA, UI/UX, Scrum Masters) to accelerate software delivery and improve user experience.</li>
                                            <li>Collaborated in Agile teams, actively contributing to sprint planning, daily stand-ups, backlog refinement, sprint reviews, and retrospectives to enhance project execution.</li>
                                            <li>Integrated backend services with multiple external systems, ensuring seamless data flow and operational efficiency.</li>
                                            <li>Designed, optimized, and maintained databases (MongoDB, PostgreSQL, Oracle, MySQL) to ensure high performance and reliability.</li>
                                            <li>Optimized API performance, reducing response time by 40% through indexing and Redis caching.</li>
                                            <li>Applied Clean Architecture, Domain-Driven Design (DDD), CQRS, SOLID Principles, and Design Patterns to enhance code structure and maintainability.</li>
                                            <li>Protected sensitive data by implementing encryption techniques.</li>
                                            <li>Optimized data processing efficiency using background jobs with Bull.</li>
                                            <li>Collaborated with DevOps to implement and optimize CI/CD pipelines for automated backend deployment and testing.</li>
                                            <li>Monitored and analyzed system logs using the ELK Stack (Elasticsearch, Logstash, Kibana) to improve performance and troubleshooting.</li>
                                            <li>Optimized data search and retrieval performance using Elasticsearch.</li>
                                            <li>Implemented Event-Driven Architecture with Kafka to enable real-time communication between services.</li>
                                            <li>Ensured high-quality, stable codebase with automated tests in Mocha, Chai, and Jest.</li>
                                            <li>Implemented cloud storage solutions using Minio and AWS S3 to enhance data availability and reliability.</li>
                                            <li>Integrated Firebase Cloud Messaging (FCM) to enable real-time push notifications.</li>
                                            <li>Implemented API security best practices, including Basic Authentication, JWT, Rate Limiting, and CORS, to enhance data protection and prevent unauthorized access.</li>
                                            <li>Automated task scheduling with Node Cron to streamline data updates and improve system efficiency.</li>
                                            <li>Led backend development in a squad, driving the design, implementation, and performance optimization of backend solutions.</li>
                                        </ul> */}
                                        <ul className="ul-vertical-timeline-content">
                                            <li>Designed and developed 25+ RESTful APIs using Go, Node.js & TypeScript, supporting 20+ web & mobile features.</li>
                                            <li>Created custom job schedulers for background tasks such as automated report generation, email notifications, and data synchronization.</li>
                                            <li>Responsible for production environments to ensure high availability.</li>
                                            <li>Enhanced API performance by reducing response time from 700ms to 100ms through indexing and Redis caching, improving data processing speed and user experience.</li>
                                            <li>Integrated with third-party services to extend system capabilities and automate workflows.</li>
                                            <li>Revamped the microservices architecture by integrating Kafka for asynchronous communication, cutting inter-service latency by 60ms, and enhancing overall system responsiveness.</li>
                                            <li>Collaborated with 6+ cross-functional teams (Product Owners, Developers, DevOps, QA, UI/UX, and Scrum Masters) to enhance development efficiency, accelerating software delivery by 25%.</li>
                                            <li>Created and customized dashboards in Kibana to visualize application logs, metrics, and performance indicators, enabling faster issue diagnosis and better decision-making.</li>
                                            <li>Applied Clean Architecture, SOLID Principles, and Design Patterns, reducing code complexity by 30% and improving maintainability.</li>
                                            <li>Ensured code quality and stability through 100+ automated tests using Mocha, Chai, Sinon, and Jest. Reducing bugs by 60%, improving system reliability, and accelerating development.</li>
                                            <li>Resolved 50+ critical bugs from helpdesk reports by debugging, refactoring code, and maintaining legacy systems, improving system performance, stability, and reliability.</li>
                                            <li>Implemented API security best practices, including Basic Authentication, JWT, Rate Limiting, CORS, and SQL Injection prevention techniques, reducing security vulnerabilities by 70%.</li>
                                            <li>Led backend development initiatives by creating and assigning subtasks to team members, ensuring efficient project execution and collaboration.</li>
                                            <li>Acted as a maintainer by reviewing 50+ pull requests, ensuring code quality, enforcing best practices, and mentoring team members to maintain high development standards.</li>
                                            <li>Monitored and analyzed system logs using the ELK Stack (Elasticsearch, Logstash, Kibana), reducing issue resolution time by 50%.</li>
                                            <li>Designed MongoDB schema to support efficient data access and performance optimization; wrote SQL queries in PostgreSQL and Oracle to support backend APIs and business dashboards.</li>
                                            <li>Collaborated with the DevOps team to troubleshoot and resolve CI/CD pipeline failures, ensuring deployment stability.</li>
                                            <li>Integrated encryption techniques to protect sensitive data, preventing unauthorized access and ensuring 100% compliance with security standards.</li>
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
                                    <h5 className="vertical-timeline-element-title">Full Stack Developer at Pijar Camp</h5>
                                    <p className="p-vertical-timeline-content">Pijar Camp is a software engineering program that provides a 6-week hands-on coding curriculum that focuses on mobile development with React Native and Node.js</p>
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
                                            <li><strong>Programming Languages</strong>
                                                <ul>
                                                <li>JavaScript</li>
                                                <li>Go</li>
                                                <li>Java</li>
                                                <li>TypeScript</li>
                                                <li>PHP</li>
                                                <li>Python</li>
                                                </ul>
                                            </li>
                                            <li><strong>API Development</strong>
                                                <ul>
                                                <li>REST API</li>
                                                <li>gRPC</li>
                                                <li>GraphQL</li>
                                                </ul>
                                            </li>
                                            <li><strong>Databases</strong>
                                                <ul>
                                                <li>PostgreSQL</li>
                                                <li>MongoDB</li>
                                                <li>Oracle</li>
                                                <li>MySQL</li>
                                                </ul>
                                            </li>
                                            <li><strong>Software Architecture</strong>
                                                <ul>
                                                <li>Microservices</li>
                                                <li>Event-Driven Architecture</li>
                                                <li>Clean Architecture</li>
                                                </ul>
                                            </li>
                                            <li><strong>Monitoring and Logging</strong>
                                                <ul>
                                                <li>Datadog</li>
                                                <li>ELK Stack (Elasticsearch, Logstash, Kibana)</li>
                                                <li>Prometheus + Grafana</li>
                                                </ul>
                                            </li>
                                            <li><strong>Frameworks</strong>
                                                <ul>
                                                <li>Express.js</li>
                                                <li>Gin</li>
                                                <li>Echo</li>
                                                <li>Fiber</li>
                                                <li>Laravel</li>
                                                </ul>
                                            </li>
                                            <li><strong>API Documentation</strong>
                                                <ul>
                                                <li>Swagger</li>
                                                <li>Postman</li>
                                                </ul>
                                            </li>
                                            <li><strong>Testing Frameworks</strong>
                                                <ul>
                                                <li>Mocha</li>
                                                <li>Chai (assertion)</li>
                                                <li>Sinon (mock)</li>
                                                <li>Jest</li>
                                                </ul>
                                            </li>
                                            <li><strong>Software Design</strong>
                                                <ul>
                                                <li>SOLID Principles</li>
                                                <li>Design Patterns</li>
                                                <li>Object-Oriented Programming (OOP)</li>
                                                </ul>
                                            </li>
                                            <li><strong>DevOps and Tools</strong>
                                                <ul>
                                                <li>Git</li>
                                                <li>Docker</li>
                                                <li>Kubernetes</li>
                                                <li>Jenkins</li>
                                                </ul>
                                            </li>
                                            <li><strong>Messaging</strong>
                                                <ul>
                                                <li>Kafka (Producer, Consumer)</li>
                                                <li>Redis Pub/Sub</li>
                                                </ul>
                                            </li>
                                            <li><strong>Security</strong>
                                                <ul>
                                                <li>Encryption</li>
                                                <li>Rate Limiting</li>
                                                <li>Input Validation</li>
                                                <li>SQL Injection Prevention</li>
                                                <li>CORS</li>
                                                </ul>
                                            </li>
                                            <li><strong>Authentication</strong>
                                                <ul>
                                                <li>Basic Authentication</li>
                                                <li>JWT Authentication</li>
                                                <li>OAuth 2.0</li>
                                                <li>Role-Based Access Control (RBAC)</li>
                                                </ul>
                                            </li>
                                            <li><strong>Cloud Services</strong>
                                                <ul>
                                                <li>AWS S3</li>
                                                <li>AWS EC2</li>
                                                </ul>
                                            </li>
                                            <li><strong>Search and Indexing</strong>
                                                <ul>
                                                <li>Elasticsearch (Full-Text Search, Search Engine)</li>
                                                <li>Kibana (Data Visualization)</li>
                                                </ul>
                                            </li>
                                            <li><strong>Caching Systems</strong>
                                                <ul>
                                                <li>Redis</li>
                                                </ul>
                                            </li>
                                            <li><strong>Push Notification</strong>
                                                <ul>
                                                <li>Firebase Cloud Messaging (FCM)</li>
                                                </ul>
                                            </li>
                                            <li><strong>Task Queues and Scheduling</strong>
                                                <ul>
                                                <li>BullMQ</li>
                                                <li>Node Cron</li>
                                                </ul>
                                            </li>

                                        </ul>
                                    </p>
                                </Panel>
                            </Collapse>
                            <Collapse defaultActiveKey="0" accordion={true} style={{marginBottom: '7px'}}>
                                <Panel header="Soft Skills" headerClass="my-header-class backend">
                                    <p>
                                        <ul className='ul-skills-content'>
                                            <li>Problem Solving</li>
                                            <li>Critical Thinking</li>
                                            <li>Agile and Scrum Methodology</li>
                                            <li>Communication and Collaboration</li>
                                            <li>Adaptability</li>
                                            <li>Time Management</li>
                                            <li>Attention to Detail</li>
                                            <li>Decision Making</li>
                                            <li>Self-Learning and Continuous Improvement</li>
                                            <li>Resilience and Patience</li>
                                            <li>Security Awareness</li>
                                            <li>Leadership</li>
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