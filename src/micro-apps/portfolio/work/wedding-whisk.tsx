
import { LayoutPage } from '../../../components/v-layout/v-layout'
import { Row, Col } from 'react-bootstrap';
import "./wedding-whisk.css";
import { portfolioApp } from '../portfolio-app';
import { Project } from './project';

export class WeddingWhisk extends Project {
    getOptions() {
        return [
            {
                value: "Background", label: "Background"
            },
            {
                value: "Problem", label: "Problem"
            },
            {
                value: "Solution", label: "Solution"
            },
            {
                value: "Research", label: "Research"
            },
            {
                value: "Ideation", label: "Ideation"
            },
            {
                value: "Product", label: "Product"
            },
            {
                value: "Outcome", label: "Outcome"
            },
        ]
    }
    getTitle() {
        return "Wedding Whisk — Sarah Wang";
    }
    renderContent = () => (
        <>
            <LayoutPage microApp={portfolioApp} pageName="wedding-whisk-page">
                <div id="work-page" className="work-page">
                    <div className="v-container">
                        <Row>
                            <Col sm="8">
                                <div className="v-header">
                                    WeddingWhisk
                                </div>
                                <div className="v-summary">A task oriented app that streamlines a key part
                                    of wedding planning—the food. Bringing together you, your guests, and your
                                    vendors for a smoother wedding experience.
                                </div>
                            </Col>
                            {/* <Col sm="4" className="v-work-img-container">
                                <img className="v-work-img" src="./resources/viridium.png" alt="Test" />
                            </Col> */}
                        </Row>
                        <Row>
                            <Col sm="8">
                                <Row>
                                    <Col sm="4" className="v-project-item">
                                        <div id="v-project-item-title">Team</div>
                                        <div>Solo Project</div>
                                    </Col>
                                    <Col sm="5" className="v-project-item">
                                        <div id="v-project-item-title">Tools</div>
                                        <div>
                                            <div>User Research</div>
                                            <div>Information Architecture</div>
                                            <div>Interaction Design</div>
                                            <div>Prototyping</div>
                                        </div>
                                    </Col>
                                    <Col sm="3" className="v-project-item">
                                        <div id="v-project-item-title">Duration</div>
                                        <div>2 Months</div>
                                    </Col>
                                </Row>
                            </Col>
                            <Col sm="4">
                            </Col>
                        </Row>
                        <Row>
                            <Col sm="8" className="v-project-item">
                                <h2 id="Background">Background</h2>
                                <div>
                                    <p className="v-paragraph">
                                        This app is a project I created while taking Google’s UX Design Certificate.
                                        After hearing about how stressful wedding planning was from multiple friends,
                                        I was interested in not only learning more about what the main stressors were,
                                        but also how the process could be improved.
                                    </p>
                                    <div id="v-project-item-title-color">Goal:</div>
                                    <p className="v-paragraph">
                                        Design a product that will help couples with wedding planning while offering
                                        a fresh, more intuitive approach.
                                    </p>
                                </div>
                            </Col>
                            <Col sm="4">
                            </Col>
                        </Row>
                        <Row>
                            <Col sm="8" className="v-project-item">
                                <h2 id="Problem">Problem</h2>
                                <div>
                                    <p> After interviewing friends who recently got married in
                                        places that fit the bill, there were three main themes:
                                    </p>
                                    <Row>
                                        <Col sm="4" className="v-project-item">
                                            <div id="v-project-item-title-color">01</div>
                                            <div id="v-project-item-title">Lack of organization</div>
                                            <p>Difficult to keep track of guest’s meal preferences/dietary needs—would
                                                like info in one place</p>
                                        </Col>
                                        <Col sm="4" className="v-project-item">
                                            <div id="v-project-item-title-color">02</div>
                                            <div id="v-project-item-title">Vendor quality</div>
                                            <p>Wants to make sure vendors are reputable and can deliver quality food, but has a busy schedule</p>
                                        </Col>
                                        <Col sm="4" className="v-project-item">
                                            <div id="v-project-item-title-color">03</div>
                                            <div id="v-project-item-title">Communication</div>
                                            <p>Many groups can be involved in planning and want to stay in the loop for all major decisions</p>
                                        </Col>
                                        <Col sm="1">
                                        </Col>
                                    </Row>
                                </div>
                            </Col>
                            <Col sm="4">
                            </Col>
                        </Row>
                        <Row>
                            <Col sm="8" className="v-project-item">
                                <h2 id="Solution">Solution</h2>
                                <p>
                                    I designed an app where couples can find, choose, and book catering vendors in once place.
                                    They can also simultaneously track their guests’ meal choices and note specific dietary requests.
                                    This information can be shared with all involved groups so everyone has access to the same info.
                                </p>
                            </Col>
                            <Col sm="4" >
                            </Col>
                        </Row>
                        <Row>
                            <Col sm="8" className="v-project-item">
                                <h2 id="Research">Research</h2>
                                <p>
                                    The wedding planning market already has a number of great applications that offer more well-rounded
                                    services, but there was still room for an app that just focused on getting the food right. (I'm looking
                                    at you, fellow food minded people.)
                                </p>
                                <div>I learned that wedding venues usually provide one of the following catering services:</div>
                                <ul className="project-bullet-list">
                                    <li>In-house catering. Venues offer their own catering services, which usually includes
                                        a range of options (e.g. plated dinners, food stations)</li>
                                    <li>Preferred vendors. Venues have a list of catering vendors that
                                        they have worked with before and vetted</li>
                                </ul>
                                <div>This app targets couples who are planning to get married at the second type of venue.</div>
                            </Col>
                            <Col sm="4" >
                            </Col>
                        </Row>
                        <Row>
                            <Col sm="8" className="v-project-item">
                                <h2 id="Ideation">Ideation</h2>
                                <p>
                                    How might we build a collaborative platform that <span style={{ color: "#88AD4D" }}>effectively organizes
                                        catering vendor options</span> and <span style={{ color: "#88AD4D" }}>creates smoother
                                            communication</span> between the couple, the guests, and the vendors?
                                </p>
                                <ul>
                                    <li>Save favorite vendors & have a chat feature to send them messages</li>
                                    <li>Guest list with specific tags for wedding events, meal choices, etc.</li>
                                    <li>Filter vendors based on: dietary needs, types of cuisine, location</li>
                                    <li>Multiple user accounts for collaboration between groups</li>
                                </ul>
                            </Col>
                            <Col sm="4" >
                            </Col>
                        </Row>
                        <Row>
                            <Col sm="8" className="v-project-item">
                                <h2 id="Product">Product</h2>
                                <div id="v-project-item-title"> Final Prototype: </div>
                            </Col>
                            <Col sm="10" className="v-work-img-container">
                                <img className="v-work-img" src="./resources/aimss-flowchart.png" alt="WeddingWhisk Prototype" />
                            </Col>
                        </Row>
                        <Row>
                            <Col sm="8" className="v-project-item">
                                <h2 id="Outcome">Outcome</h2>
                                <p>
                                    As this was a fictional project with no real stakes, it was a great learning experience
                                    to go through the 5 step design process sequentially. If I was designing this app under limited time and
                                    budget constraints, I would focus more on research in order to better understand the different aspects and situations
                                    users struggle with during wedding planning. Expanding from wedding planning to also include event planning could
                                    be a potential way to increase user retention if this app were to become a real life application in the future.
                                </p>
                            </Col>
                            <Col sm="4" >
                            </Col>
                        </Row>
                        <div className="bottom-space"></div>
                    </div>
                </div>
            </LayoutPage>
        </>
    )
}