
import { PureComponent } from 'react';
import { Row, Col } from 'react-bootstrap';
import { LayoutPage } from '../../components/v-layout/v-layout'

import { homeApp } from './home-app';
import "./about.css";
import { AiOutlineMail } from 'react-icons/ai';
import { VscGithub } from 'react-icons/vsc';
import { BsLinkedin } from 'react-icons/bs';

export class About extends PureComponent<any, { selected: string }> {
    manualScolling = false;
    constructor(props: any) {
        super(props);
        this.state = { selected: "Background" };
    }

    onChange = (value: string) => {

    }
    onScroll = (evt: any) => {

    }
    render = () => (
        <>
            <LayoutPage microApp={homeApp} >
                <div id="about-page" className="about-page">
                    <div className="v-about v-container">
                        <Row>
                            <Col sm="7" className="v-img-container">
                                <img className="v-path-img" src="./resources/path.png" alt="Test" />
                            </Col>
                            <Col sm="5" >
                                <div className="v-header">
                                    Hello! I’m Sarah.
                                </div>
                                <div className="v-summary">

                                    In the past few years, I’ve been a history major in college, interned at the Smithsonian,
                                    and re-designed websites for two start-ups. Most recently, I worked as a tech bro/data analyst
                                    at Tesla. While this may seem chaotic, these experiences have all bridged the gap between art
                                    and technology—one of my favorite intersections to explore. I hope to continue working on
                                    projects that tackle the complex problems that will define our future.

                                    In my free time, you can find me taking my dog on walks and trying to become a runner.
                                    (Emphasis on trying. I’m running a 12k in May and praying I don’t get wheeled out on a stretcher.)

                                </div>

                            </Col>
                        </Row>
                        <Row>
                            <Col sm="7" className="v-project-item">
                                <div className="v-header">
                                    How we got here:
                                </div>
                                <div className="v-summary">
                                    <div className="v-about-summary">About a year ago, in the middle of one of those “what on earth am I going to do with my life”
                                        conversations, one of my good friends introduced me to UX as they thought it was a potential
                                        career path that I might enjoy. Having never heard the term before (combined with zero design
                                        experience), I laughed off the idea. My curiosity eventually won out—the more I read about
                                        and started to understand the key concepts that define UX, the more I realized it was exactly
                                        what I was looking for.</div>
                                    <div className="v-about-summary">I began to self-teach myself the fundamentals of UX/UI design during the pandemic,
                                        and I’m still learning new things everyday! What I love most about design is how it can
                                        evoke feelings and communicate universal ideas to people in mere seconds.</div>
                                </div>
                            </Col>
                            <Col sm="5" className="v-img-container">
                                <img className="v-about-img" src="./resources/about.png" alt="Test" />
                                <div className="v-fun-facts">
                                    <span >Retired swimmer</span>
                                    <span >LOTR fan</span>
                                    <span >Appreciates classical music</span>
                                    <span >INFP</span>
                                </div>
                            </Col>
                        </Row>
                        <Row className="about-items" id="about-skills">
                            <Col sm="4" className="v-project-item">
                                <div className="v-header">Skills</div>
                                <ul className="v-skills">
                                    <li>
                                        User research
                                    </li>
                                    <li>
                                        Wireframing
                                    </li>
                                    <li>
                                        Prototyping
                                    </li>
                                    <li>
                                        Usability testing
                                    </li>
                                    <li>
                                        Sketching
                                    </li>
                                    <li>
                                        Writing
                                    </li>
                                    <li>
                                        Research
                                    </li>
                                </ul>
                            </Col>
                            <Col sm="4" className="v-project-item">
                                <div className="v-header">Tools</div>
                                <ul className="v-skills">
                                    <li>
                                        Figma
                                    </li>
                                    <li>
                                        Adobe XD
                                    </li>
                                    <li>
                                        HTML/CSS
                                    </li>
                                    <li>
                                        PowerPoint/Excel
                                    </li>
                                    <li>
                                        Photoshop
                                    </li>
                                    <li>
                                        Illustrator
                                    </li>
                                    <li>
                                        InDesign
                                    </li>
                                </ul>
                            </Col>
                            <Col sm="4" className="v-project-item">
                                <div className="v-header">In Progress</div>
                                <ul className="v-skills">
                                    <li>
                                        JavaScript
                                    </li>
                                    <li>
                                        TypeScript
                                    </li>
                                    <li>
                                        GitHub
                                    </li>
                                </ul>
                            </Col>
                        </Row>
                        <Row className="about-items" id="about-edu">
                            <Col sm="4" className="v-project-item">
                                <div className="v-header">Education</div>
                                <ul className="v-skills">
                                    <li>
                                        Amherst College
                                        <p>B.A. History, cum laude</p>
                                    </li>
                                    <li>
                                        Google UX Certificate
                                    </li>
                                </ul>
                            </Col>
                            <Col sm="7" className="v-project-item">
                                <div className="v-header">Other Work</div>
                                <ul className="v-skills">
                                    <li>
                                        Senior Honors Thesis: ‘Being Excluded from America Then and Now:
                                        Implications and Effects of the 1965 Hart-Celler Act and the Yellow
                                        Power Movement on Asian Americans and Anti-Immigrant Rhetoric Today’
                                    </li>
                                </ul>
                            </Col>
                        </Row>
                        <Row className="about-items" id="about-professional">
                            <Col sm="4" className="v-project-item">
                                <div className="v-header">Professional</div>
                                <ul className="v-skills">
                                    <li>
                                        Tesla
                                        <p>Data Annotation Specialist</p>
                                    </li>
                                    <li>
                                        Amherst College Admissions Office
                                        <p>Telementor</p>
                                    </li>
                                    <li>
                                        Smithsonian
                                        <p>Research and Curatorial Intern</p>
                                    </li>
                                    <li>
                                        Maker Studio SF
                                        <p>Content Developer and Marketing Intern</p>
                                    </li>
                                </ul>
                            </Col>
                            <Col sm="7" className="v-project-item">
                                <div className="v-header">&nbsp;</div>
                                <ul className="v-skills">
                                    <li>
                                        Autopilot team
                                    </li>
                                    <li>
                                        Mentored high school seniors selected through QuestBridge through 
                                        the full college application cycle
                                    </li>
                                    <li>
                                        National Museum of American History, Division of Medicine and Science
                                    </li>
                                    <li>
                                        Created social media content and re-designed the website
                                    </li>
                                </ul>
                            </Col>
                        </Row>
                        <Row className="last-about-items" id="about-contact">
                            <Col sm="4" className="v-project-item">
                                <div className="v-header">Contact</div>
                                <ul className="v-skills">
                                    <li>
                                        <AiOutlineMail /> <a href="mailto:sarah.wang.nz@gmail.com">Email</a>
                                    </li>
                                </ul>
                            </Col>
                            <Col sm="4" className="v-project-item">
                                <div className="v-header">&nbsp;</div>
                                <ul className="v-skills">
                                    <li>
                                        <VscGithub /> <a href="https://sarahwangnz@github.io">GitHub</a>
                                    </li>
                                </ul>
                            </Col>
                            <Col sm="4" className="v-project-item">
                                <div className="v-header">&nbsp;</div>
                                <ul className="v-skills">
                                    <li>
                                        <BsLinkedin /> <a href="https://sarahwangnz@linkedin.com">LinkedIn</a>
                                    </li>
                                </ul>
                            </Col>
                        </Row>
                        <div className="bottom-space">
                        </div>
                    </div>
                </div>
            </LayoutPage>
        </>
    )
}