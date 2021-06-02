import React, { Component } from 'react';
import {
    Container,
    Row,
    Col,
} from 'react-bootstrap';
import './landingpage.css';
import { faHeart, faNetworkWired } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link, Element , Events, animateScroll as scroll, scroller } from 'react-scroll';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import { DiJavascript1, DiPhp, DiMysql, DiMongodb, DiRedis, DiLinux, DiGit, DiLaravel, DiGo, DiVisualstudio, DiHtml5, DiCss3, DiBootstrap, DiDocker, DiNodejs, DiReact, DiNpm } from 'react-icons/di';

class LandingPage extends Component{
    constructor(props) {
        super(props);
        this.state = {
            date: new Date(),
            menu: [
                {name: 'About', stts: 'active'},
                {name: 'Skills', stts: ''},
                {name: 'Education', stts: ''},
                {name: 'Experience', stts: ''},
                {name: 'Contact', stts: ''}
            ]
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
            {name: "Education", stts: ""},
            {name: "Experience", stts: ""},
            {name: "Contact", stts: ""}
        ];
        if(arg === "About"){
            menu[0].stts = "active"
        }else if(arg === "Skills"){
            menu[1].stts = "active"
        }else if(arg === "Education"){
            menu[2].stts = "active"
        }else if(arg === "Experience"){
            menu[3].stts = "active"
        }else if(arg === "Contact"){
            menu[4].stts = "active"
        }
        this.setState({menu});
    }

    render(){
        return (
            <Container fluid>
                <Row>
                    <Col md={2} className='aside'>
                        <Row>
                            <Col className='text-center'>
                                <div className='author-img'></div>
                                <h1 className='full-name'>
                                    <a>Yusuf Eko Anggoro</a>
                                </h1>
                                <span className="position"><a href="#">Back-end Developer</a> at Telkom</span>
                            </Col>
                        </Row>
                        <Row>
                            <Col className='navbar'>
                                <ul>
                                    {
                                        this.state.menu.map((object, index) => {
                                            return(
                                                <li>
                                                    <Link className="anchor" to={object.name} spy={true} smooth={true} duration={500}>{object.name}</Link>
                                                </li>
                                            )
                                        })
                                    }
                                </ul>
                            </Col>
                        </Row>
                        <Row>
                            <Col className="footer">
                                <p>
                                    <small>
                                        &copy;Copyright 2020 All rights reserved | This template is made with <FontAwesomeIcon icon={faHeart} /> by <a href="https://colorlib.com">Yusuf Eko Anggoro</a>
                                    </small>
                                </p>
                            </Col>
                        </Row>
                    </Col>
                    <Col md={{span: 6,offset: 2}} className='content' style={{backgroundColor: '#fff'}}>
                        <Element name="About" className="element1">
                            <Col className='about'>
                                <h2 className="heading-meta">About Us</h2>
                                <div className='desc'>
                                    <p><strong>Hi I'm Yusuf Eko Anggoro</strong> On her way she met a copy. The copy warned the Little Blind Text, that where it came from it would have been rewritten a thousand times and everything that was left from its origin would be the word "and" and the Little Blind Text should turn around and return to its own, safe country.</p>
                                    <p>Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar.</p>
                                </div>
                            </Col>
                        </Element>
                        <Element name="Skills" className="element1">
                            <Col>
                                <h2 className="heading-meta">My Skills</h2>
                                <Row className='wrap'>
                                    <Col className='wrap-skill'>
                                        <h4 className='skill-head'>Javascript</h4>
                                        <DiJavascript1 size={100} />
                                    </Col>
                                    <Col className='wrap-skill'>
                                        <h4 className='skill-head'>PHP</h4>
                                        <DiPhp color='red' size={100} />
                                    </Col>
                                    <Col className='wrap-skill'>
                                        <h4 className='skill-head'>MySQL</h4>
                                        <DiMysql size={100} />
                                    </Col>
                                    <Col className='wrap-skill'>
                                        <h4 className='skill-head'>MongoDb</h4>
                                        <DiMongodb size={100} />
                                    </Col>
                                    <Col className='wrap-skill'>
                                        <h4 className='skill-head'>Redis</h4>
                                        <DiRedis color='red' size={100} />
                                    </Col>
                                </Row>
                                <Row className='wrap'>
                                    <Col className='wrap-skill'>
                                        <h4 className='skill-head'>Git</h4>
                                        <DiGit size={100} />
                                    </Col>
                                    <Col className='wrap-skill'>
                                        <h4 className='skill-head'>Laravel</h4>
                                        <DiLaravel color='red' size={100} />
                                    </Col>
                                    <Col className='wrap-skill'>
                                        <h4 className='skill-head'>Golang</h4>
                                        <DiGo size={100} />
                                    </Col>
                                    <Col className='wrap-skill'>
                                        <h4 className='skill-head'>VsCode</h4>
                                        <DiVisualstudio size={100} />
                                    </Col>
                                    <Col className='wrap-skill'>
                                        <h4 className='skill-head'>HTML</h4>
                                        <DiHtml5 size={100} />
                                    </Col>
                                </Row>
                                <Row className='wrap'>
                                    <Col className='wrap-skill'>
                                        <h4 className='skill-head'>Linux</h4>
                                        <DiLinux size={100} />
                                    </Col>
                                    <Col className='wrap-skill'>
                                        <h4 className='skill-head'>Bootstrap</h4>
                                        <DiBootstrap size={100} />
                                    </Col>
                                    <Col className='wrap-skill'>
                                        <h4 className='skill-head'>Docker</h4>
                                        <DiDocker size={100} />
                                    </Col>
                                    <Col className='wrap-skill'>
                                        <h4 className='skill-head'>Nodejs</h4>
                                        <DiNodejs size={100} />
                                    </Col>
                                    <Col className='wrap-skill'>
                                        <h4 className='skill-head'>React</h4>
                                        <DiReact size={100} />
                                    </Col>
                                </Row>
                                <Row>
                                    <Col className='wrap-skill'>
                                        <h4 className='skill-head'>NPM</h4>
                                        <DiNpm size={100} />
                                    </Col>
                                    <Col className='wrap-skill'>
                                        <h4 className='skill-head'>CSS</h4>
                                        <DiCss3 size={100} />
                                    </Col>
                                </Row>
                            </Col>
                        </Element>
                        <Element name="Experience" className="element1"> 
                        <Col className='experience'>
                                        <h2 className="heading-meta">Work Experience</h2>
                                        <VerticalTimeline>
                                            <VerticalTimelineElement
                                                className="vertical-timeline-element--work"
                                                contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                                                contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                                                date="2019 - present"
                                                iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                                                icon={<FontAwesomeIcon icon={faNetworkWired}/>}
                                            >
                                                <h3 className="vertical-timeline-element-title">Back-End Developer</h3>
                                                <h4 className="vertical-timeline-element-subtitle">Telkom Indonesia</h4>
                                                <p>
                                                Creative Direction, User Experience, Visual Design, Project Management, Team Leading
                                                </p>
                                            </VerticalTimelineElement>
                                            <VerticalTimelineElement
                                                className="vertical-timeline-element--work"
                                                contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                                                contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                                                date="2019 - present"
                                                iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                                                icon={<FontAwesomeIcon icon={faNetworkWired}/>}
                                            >
                                                <h3 className="vertical-timeline-element-title">Back-End Developer</h3>
                                                <h4 className="vertical-timeline-element-subtitle">Telkom Indonesia</h4>
                                                <p>
                                                Creative Direction, User Experience, Visual Design, Project Management, Team Leading
                                                </p>
                                            </VerticalTimelineElement>
                                        </VerticalTimeline>
                                    </Col>
                        </Element>
                    </Col>
                </Row>
                
            </Container>
        )
    }
}

export default LandingPage;