
import { PureComponent } from 'react';
import { Row, Col } from 'react-bootstrap';
import { LayoutPage } from '../../components/v-layout/v-layout'

import { portfolioApp } from './portfolio-app';
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

    componentDidMount(): void {
        //window.addEventListener("scroll", this.onScroll);
        document.title = "About — Sarah Wang"
    }

    onChange = (value: string) => {

    }
    onScroll = (evt: any) => {

    }
    render = () => (
        <>
            <LayoutPage microApp={portfolioApp} pageName="about-page" >
                <div id="about-page">
                    <div className="v-about v-container">
                        <Row>
                            <Col sm="5" className="v-img-container">
                                <img className="profile-img" src="./resources/digital-art-profile.png" alt="Digital art profile" />
                            </Col>
                            <Col sm="7" >
                                <div className="v-header">
                                    Hello! I'm <span style={{ color: "#80AF3A" }}>Sarah.</span>
                                </div>
                                <div className="v-summary">
                                    <p>
                                        In the past few years, I’ve been a history major in college, interned at the Smithsonian,
                                        and redesigned websites for two start-ups. Most recently, I was a tech bro/data analyst
                                        at Tesla.
                                    </p>
                                    <p>
                                        I'm currently a content designer at Dewey. We're an ed-tech start-up that creates 
                                        innovative educational solutions for schools and families! 
                                    </p>
                                    <p> 
                                        In my free time, you can find me taking my dog on walks and trying to become a runner.
                                        (Emphasis on trying. I’m running a 12k in May and praying I don’t get wheeled out on a stretcher.)
                                    </p>
                                </div>
                                <div className="v-fun-facts">
                                    <span>Retired swimmer</span>
                                    <span>LOTR fan</span>
                                    <span>Appreciates classical music</span>
                                    <span>INFP</span>
                                </div>
                            </Col>
                        </Row>
                        <div id="skills-container">
                            <Row className="about-items" id="about-skills">
                                <Col sm="4" className="v-project-item">
                                    <div className="v-header-skills">Skills</div>
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
                                    <div className="v-header-skills">Tools</div>
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
                                    <div className="v-header-skills">In Progress</div>
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
                                <Col sm="12" className="v-project-item">
                                    <Row>
                                        <Col sm="4"><div className="v-header-skills">Education</div></Col>
                                        <Col sm="6"><div className="v-header-skills">Other Work</div></Col>
                                    </Row>
                                    <Row className="v-skills">
                                        <Col sm="4">
                                            <li>
                                                Amherst College
                                                <div>B.A. History, cum laude</div>
                                            </li>
                                            <li>
                                                Google UX Certificate
                                            </li>
                                        </Col>
                                        <Col sm="6">
                                            <li>
                                                Senior Honors Thesis: ‘Being Excluded from America Then and Now:
                                                Implications and Effects of the 1965 Hart-Celler Act and the Yellow
                                                Power Movement on Asian Americans and Anti-Immigrant Rhetoric Today’
                                            </li>
                                        </Col>
                                    </Row>
                                </Col>
                            </Row>
                            <Row className="about-items" id="about-professional">
                                <Col sm="12" className="v-project-item">
                                    <div className="v-header-skills">Professional</div>
                                    <Row className="v-skills">
                                        <Col sm="4">
                                            <li>
                                                Dewey
                                                <div className="p-italic">Content Designer</div>
                                            </li>
                                        </Col>
                                        <Col sm="6">
                                            <li>
                                                Design, format, and quality control educational math content for teachers
                                            </li>
                                        </Col>
                                    </Row>
                                    <Row className="v-skills">
                                        <Col sm="4">
                                            <li>
                                                Tesla
                                                <div className="p-italic">Data Annotation Specialist</div>
                                            </li>
                                        </Col>
                                        <Col sm="6">
                                            <li>
                                                Autopilot team
                                            </li>
                                        </Col>
                                    </Row>
                                    <Row className="v-skills">
                                        <Col sm="4">
                                            <li>
                                                Amherst College Admissions Office
                                                <div className="p-italic">Telementor</div>
                                            </li>
                                        </Col>
                                        <Col sm="6">
                                            <li>
                                                Mentored high school seniors selected through QuestBridge
                                                and guided them through the college application process
                                            </li>
                                        </Col>
                                    </Row>
                                    <Row className="v-skills">
                                        <Col sm="4">
                                            <li>
                                                Smithsonian
                                                <div className="p-italic">Division of Medicine and Science Intern</div>
                                            </li>
                                        </Col>
                                        <Col sm="6">
                                            <li>
                                                Researched and curated at the National Museum of American History
                                            </li>
                                        </Col>
                                    </Row>
                                    <Row className="v-skills">
                                        <Col sm="4">
                                            <li>
                                                Maker Studio SF
                                                <div className="p-italic">Content Developer and Marketing Intern</div>
                                            </li>
                                        </Col>
                                        <Col sm="6">
                                            <li>
                                                Created social media content and redesigned the website
                                            </li>
                                        </Col>
                                    </Row>
                                </Col>
                            </Row>
                            <Row className="last-about-items" id="about-contact">
                                <Col sm="4" className="v-project-item">
                                    <div className="v-header-skills">Contact</div>
                                    <div className="v-link">
                                        <AiOutlineMail /> <a href="mailto:sarah.wang.nz@gmail.com">Email</a>
                                    </div>
                                </Col>
                                <Col sm="4" className="v-project-item">
                                    <div className="v-header-skills">&nbsp;</div>
                                    <div className="v-link">
                                        <BsLinkedin /> <a href="https://sarahwangnz@linkedin.com">LinkedIn</a>
                                    </div>
                                </Col>
                                <Col sm="4" className="v-project-item">
                                    <div className="v-header-skills">&nbsp;</div>
                                    <div className="v-link">
                                        <VscGithub /> <a href="https://github.com/sarahwangnz">GitHub</a>
                                    </div>
                                </Col>
                            </Row>
                        </div>
                        <div className="bottom-space"></div>
                    </div>
                </div>
            </LayoutPage>
        </>
    )
}