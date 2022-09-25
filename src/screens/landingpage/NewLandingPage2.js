import React, { Component } from 'react';
import './NewLandingPage2.css';
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link, Element , Events, animateScroll as scroll, scroller } from 'react-scroll';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import {FaPencilAlt, FaFacebook, FaLinkedin, FaInstagram, FaGithub} from 'react-icons/fa';
import Collapse from 'rc-collapse';
import HamburgerMenu from 'react-hamburger-menu';
import { push as Menu } from 'react-burger-menu';
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
            {name: 'About', stts: ''},
            {name: 'Experience', stts: ''},
            {name: 'Education', stts: ''},
            {name: 'Skills', stts: ''},
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
        element.href = 'Yusuf-Eko-Anggoro-ATS-Resume.pdf'
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
                            <span className="position"><a href="#">Backend Dev</a> at Telkom ID</span>
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
                            <span className="position"><a href="#">Backend Dev</a> at Telkom ID</span>
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
                            <h2 className="heading-meta">About Us</h2>
                            <div className='desc'>
                                <p style={{textAlign: 'justify', textJustify: 'inter-word'}}>
                                    <strong>Hi, I'm Yusuf Eko Anggoro</strong> or commonly called Ucup.
                                    I am a back-end developer with 3+ years of experience building, developing, implementing <strong>Test Driven Development</strong>, and maintaining.
                                    I love everything about code, I really enjoy learning new things, especially about the latest technology.
                                    My current back-end language is <strong>PHP</strong>, <strong>JavaScript</strong> and <strong>Golang</strong>.
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
                                    date="August 2019 - Present"
                                    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                                    icon={<FaPencilAlt/>}
                                >
                                    <h5 className="vertical-timeline-element-title">Back-End Developer at Telkom Indonesia</h5>
                                    <p>
                                        <ul className="ul-vertical-timeline-content">
                                            <li>
                                                Building, developing, implementing Test Driven Development, analysis and maintaining microservices architecture such as gamification service, ticket service, notification service, user service and worker service. RESTful APIs or Apache Kafka function as the glue that integrates the microservices into application.
                                            </li>
                                            <li>
                                                Skill in reading technical documentation and back-end integration with third-parties.
                                            </li>
                                            <li>Utilitized OpenShift to configure and deploy applications.</li>
                                            <li>Worked on NoSQL and SQL databases like MongoDB and Oracle.</li>
                                            <li>Experience with container-based deployment using Jenkins and Docker.</li>
                                            <li>Used Apache Kafka for Publish/Subscribe pattern in applications dealing with messaging.</li>
                                            <li>Used GIT for version control.</li>
                                            <li>Experience in Agile Development process with Atlassian Jira.</li>
                                            <li>Implementing best practices way.</li>
                                            <li>With caching (Redis), ELK stack (Elasticsearch, Logstash, Kibana).</li>
                                            <li>Used MinIO for enterprise file storage.</li>
                                            <li>Used FCM for notifications.</li>
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
                                    <p className="p-vertical-timeline-content">Arkademy is a software engineering program that provides a 6 weeks hands-on coding curriculum that focuses on mobile development with react native and node JS.</p>
                                </VerticalTimelineElement>
                            </VerticalTimeline>
                        </Element>
                        <Element name="Education" className="education-wrap">
                            <h2 className="heading-meta">Education</h2>
                            <Collapse defaultActiveKey="0" style={{marginBottom: '7px'}} accordion={true}>
                                <Panel className="panel-education-content" header="Indraprasta PGRI University (2020-2024)" headerClass="my-header-class">Bachelor of Information Technology</Panel>
                            </Collapse>
                            <Collapse defaultActiveKey="0" accordion={true}>
                                <Panel className="panel-education-content" header="Vocational High School 24 Jakarta (2017-2019)" headerClass="my-header-class">
                                    Learn and explore all the ways of software development including making software, maintenance, software development organization management and quality management. Not only that, I also learned computer software from making websites, applications and everything related to programming by mastering the programming language.
                                </Panel>
                            </Collapse>
                        </Element>
                        <Element name="Skills" className="skills-wrap">
                            <h2 className="heading-meta">My Skills</h2>
                            <Collapse defaultActiveKey="0" accordion={true} style={{marginBottom: '7px'}}>
                                <Panel header="Back-End" headerClass="my-header-class backend">
                                    <p>
                                        <ul className='ul-skills-content'>
                                            <li>Programming Languages: PHP, Javascript, Golang</li>
                                            <li>Back-end Technologies: Express.js, Golang, Laravel</li>
                                            <li>Development Tools (IDEs): Visual Studio Code</li>
                                            <li>Version Control: GIT</li>
                                            <li>RDBMS: MySQL, Oracle, PostgreSQL</li>
                                            <li>NoSQL: MongoDB</li>
                                            <li>Platforms: Windows, Linux</li>
                                            <li>Methodologies: Agile and Waterfall Methodology</li>
                                            <li>Build Tools: Jenkins CI/CD</li>
                                        </ul>
                                    </p>
                                </Panel>
                            </Collapse>
                        </Element>
                        <Element name="Contact" className="contact-wrap">
                            <div className='contact'>
                                <a target="_blank" rel="noopener noreferrer" href="https://web.facebook.com/yusuf.e.3591">
                                    <FaFacebook color='#385898' size={35} />
                                </a>
                            </div>
                            <div className='contact'>
                                <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/yousufe24/"><FaLinkedin className='linkedin' color='#0077B5' size={35} /></a>
                            </div>
                            <div className='contact'>
                                <a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/yousufe24/"><FaInstagram className='ig' color='red' size={35} /></a>
                            </div>
                            <div className='contact'>
                                <a target="_blank" rel="noopener noreferrer" href="https://github.com/yusufekoanggoro"><FaGithub color="black" size={35} /></a>
                            </div>
                        </Element>
                    </main>
                </div>
            </div>
        )
    }
}

export default NewLandingPage;