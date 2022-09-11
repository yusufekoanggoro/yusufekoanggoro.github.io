import React, { Component } from 'react';
import './NewLandingPage.css';
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link, Element , Events, animateScroll as scroll, scroller } from 'react-scroll';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import { DiJavascript1, DiPhp, DiMysql, DiMongodb, DiRedis, DiLinux, DiGit, DiLaravel, DiGo, DiVisualstudio, DiHtml5, DiCss3, DiBootstrap, DiDocker, DiNodejs, DiReact, DiNpm, DiDatabase, DiStackoverflow } from 'react-icons/di';
import {FaPencilAlt, FaFacebook, FaLinkedin, FaInstagram, FaGithub} from 'react-icons/fa';
import Collapse from 'rc-collapse';
import HamburgerMenu from 'react-hamburger-menu';
import { push as Menu } from 'react-burger-menu';
import { useSwipeable, Swipeable } from 'react-swipeable'
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
                {name: 'Skills', stts: ''},
                {name: 'Portfolio', stts: ''},
                {name: 'Education', stts: ''},
                {name: 'Experience', stts: ''},
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
            {name: "About", stts: ""},
            {name: "Skills", stts: ""},
            {name: "Portfolio", stts: ""},
            {name: "Education", stts: ""},
            {name: "Experience", stts: ""},
            {name: "Contact", stts: ""},
        ];
        if(arg === "About"){
            menu[0].stts = "active"
        }else if(arg === "Skills"){
            menu[1].stts = "active"
        }else if(arg === "Portfolio"){
            menu[2].stts = "active"
        }else if(arg === "Education"){
            menu[3].stts = "active"
        }else if(arg === "Experience"){
            menu[4].stts = "active"
        }else if(arg === "Contact"){
            menu[5].stts = "active"
        }
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
                            <span className="position"><a href="#">Backend Dev</a> at Telkom Ind</span>
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
                        <span className="position"><a href="#">Backend Dev</a> at Telkom Ind</span>
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
                    <Element name="About" className="element1">
                        <h2 className="heading-meta">About Us</h2>
                        <div className='desc'>
                            <p>
                                <strong>Hi, I'm Yusuf Eko Anggoro</strong> or commonly called Ucup.
                                I am a back-end developer with 3+ years of experience building, developing, implementing <strong>Testing Driven Development</strong>, and maintaining.
                                I love everything about code, i am really enjoy learning new things, especialy about latest techology.
                                My current back-end language is <strong>PHP</strong>, <strong>JavaScript</strong> and <strong>Golang</strong>.
                            </p>
                        </div>
                    </Element>
                    <Element name="Skills" className="element2">
                        <h2 className="heading-meta">My Skills</h2>
                        <div className='my-skills'>
                            <DiPhp size={150} />
                            <DiMysql size={150} />
                            <DiMongodb size={150} />
                            <DiRedis size={150} />
                            <DiGit size={150} />
                            <DiGo size={150} />
                            <DiLaravel size={150} />
                            <DiNodejs size={150} />
                            <DiLinux size={150} />
                            <DiReact size={150} />
                            <DiHtml5 size={150} />
                            <DiCss3 size={150} />
                            <DiDocker size={150} />
                            <DiBootstrap size={150} />
                            <DiStackoverflow size={150} />
                        </div>
                    </Element>
                    <Element name="Portfolio" className="element3">
                        <h2 className="heading-meta">Portfolio</h2>
                        <Collapse style={{marginBottom: '7px'}} accordion={true}>
                            <Panel header="WhatsApp Bot" headerClass="my-header-class">
                                Here's the web demo <a rel="noopener noreferrer" target="_blank" href="https://wa-chat-bot-js.herokuapp.com/public">WhatsApp Bot</a>
                            </Panel>
                        </Collapse>
                        <Collapse accordion={true}>
                            <Panel header="Api Downloader Youtube to Mp3" headerClass="my-header-class">
                                Here's the web demo <a rel="noopener noreferrer" target="_blank" href="http://converter-yt-mp3.herokuapp.com/">Youtube to Mp3</a>
                            </Panel>
                        </Collapse>
                    </Element>
                    <Element name="Education" className="element4">
                        <h2 className="heading-meta">Education</h2>
                        <Collapse style={{marginBottom: '7px'}} accordion={true}>
                            <Panel header="Indraprasta PGRI University" headerClass="my-header-class">Coming Soon</Panel>
                        </Collapse>
                        <Collapse accordion={true}>
                            <Panel header="[Graduated] Vocational High School 24 Jakarta" headerClass="my-header-class">
                                Learn and explore all the ways of software development including making software, maintenance, software development organization management and quality management. Not only that, I also learned computer software from making websites, applications and everything related to programming by mastering the programming language.
                            </Panel>
                        </Collapse>
                    </Element>
                    <Element name="Experience" className="element5">
                        <h2 className="heading-meta">Experience</h2>
                        <VerticalTimeline lineColor="#f2f3f7" layout="1-column-left">
                            <VerticalTimelineElement
                                className="vertical-timeline-element--work"
                                contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                                contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                                date="2019 - present"
                                iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                                icon={<FaPencilAlt/>}
                            >
                                <h3 className="vertical-timeline-element-title">Backend Developer</h3>
                                <h4 className="vertical-timeline-element-subtitle">At Telkom Indonesia</h4>
                                <p>
                                    Stack Node.js, Golang, Mongo, Oracle, Redis, Firebase etc.
                                </p>
                            </VerticalTimelineElement>
                            <VerticalTimelineElement
                                className="vertical-timeline-element--work"
                                contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                                contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                                date="2019"
                                iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                                icon={<FaPencilAlt/>}
                            >
                                <h3 className="vertical-timeline-element-title">Graduated as Full Stack Developer</h3>
                                <h4 className="vertical-timeline-element-subtitle">At Arkademy</h4>
                                <p>
                                    Focus on mobile development with react native and node JS.
                                </p>
                            </VerticalTimelineElement>
                        </VerticalTimeline>
                    </Element>
                    <Element name="Contact" className="element6">
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