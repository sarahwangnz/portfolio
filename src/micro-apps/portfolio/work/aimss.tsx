import { LayoutPage } from '../../../components/v-layout/v-layout'
import { Row, Col } from 'react-bootstrap';
import { portfolioApp } from '../portfolio-app';
import "./aimss.css";
import { Project } from './project';

export class Aimss extends Project {
    getOptions () {
        return [
            {
                value: "Problem", label: "Problem"
            },
            {
                value: "Solution", label: "Solution"
            },
            {
                value: "Market", label: "Market"
            },
            {
                value: "Prototyping", label: "Prototyping"
            },
            {
                value: "Impact", label: "Impact"
            },
        ]
    }
    getTitle() {
        return "AIMSS — Sarah Wang";
    }
    renderContent = () => (
        <>
            <LayoutPage microApp={portfolioApp} pageName="aimss-page">
                <div className="v-container">
                    <Row>
                        <Col sm="7">
                            <div className="v-header">
                                AIMSS
                            </div>
                            <div className="v-summary">
                                An AI-based Mobile Stroke Scale that helps EMS responders and hospitals work
                                together to reduce intervention time—and thus save more lives.
                            </div>
                        </Col>
                        <Col sm="5" className="v-work-img-container">
                            <img className="v-work-img" src="./resources/viridium.png" alt="Test" />
                        </Col>
                    </Row>
                    <Row>
                        <Col sm="3" className="v-project-item">
                            <div id="v-project-item-title">Team</div>
                            <div>
                                <div>2 UX Designers</div>
                                <div>1 Project Manager</div>
                                <div>2 P.I.'s</div>
                                <div>Front-end & Back-end teams</div>
                            </div>
                        </Col>
                        <Col sm="3" className="v-project-item">
                            <div id="v-project-item-title">Tools</div>
                            <div>
                                <div>Figma</div>
                                <div>User Research</div>
                                <div>User flows</div>
                                <div>Business Strategy</div>
                            </div>
                        </Col>
                        <Col sm="2" className="v-project-item">
                            <div id="v-project-item-title">Duration</div>
                            <div>
                                <div>2 Months</div>
                            </div>
                        </Col>
                        <Col sm="1">
                        </Col>
                    </Row>
                    <Row>
                        <Col sm="8" className="v-project-item">
                            <h2 id="Problem">Problem</h2>
                            <div>
                                <div>
                                    There are currently 800,000 strokes yearly in the U.S. In a stroke, time is brain—32,000 brain cells
                                    are lost every second. The<span style={{ color: "#6fafe8" }}> current intervention time is around
                                        2 hours and 15 minutes. </span>
                                    Time wasted going from the wrong hospital to the right hospital that has the necessary medicine and equipment
                                    to treat the patient's specific type of stroke could be prevented if there was better communication between EMS,
                                    hospitals, and doctors.
                                </div>
                            </div>
                        </Col>
                        <Col sm="4">
                        </Col>
                    </Row>
                    <Row>
                        <Col sm="8" className="v-project-item">
                            <h2 id="Solution">Solution</h2>
                            <div>
                                <div>
                                    AIMSS is an AI-based mobile stroke scale that uses machine learning technology to identify strokes, noting
                                    key signs such as eye deviation, face/arm/leg weakness, and speaking changes. Then, the app calculates and sends
                                    the stroke scale to the nearest hospital so they can prepare immediately. AIMSS will then redirect
                                    to Apple Maps so EMS can navigate to the hospital as quickly as possible.
                                    With AIMSS, intervention time drastically shortens to 45 minutes or less—a
                                    <span style={{ color: "#6fafe8" }}> 66% decrease from current times.</span>
                                </div>
                            </div>
                        </Col>
                        <Col sm="4">
                        </Col>
                    </Row>
                    <Row>
                        <Col sm="8" className="v-project-item">
                            <h2 id="Market">Market Potential</h2>
                            <div>
                                <p>Due to the pandemic, there has been a huge rise in telemedicine and <span style={{ color: "#6fafe8" }}>
                                    integrating medical practices with technology.</span> After the release of ChatGPT, AI is becoming part
                                    of our daily lives—why not harness this technology for strokes?
                                </p>
                                <div>
                                    <ul>
                                        <li><span style={{ color: "#6fafe8" }}>$8.5 billion </span>Stroke Market (2021)</li>
                                        <li><span style={{ color: "#6fafe8" }}>$17 billion </span>AI-Diagnostics Market (2021-2025)</li>
                                        <li><span style={{ color: "#6fafe8" }}>$33 billion </span>Digital Health Market (2020)</li>
                                    </ul>
                                </div>
                            </div>
                        </Col>
                        <Col sm="4">
                        </Col>
                    </Row>
                    <Row>
                        <Col sm="8" className="v-project-item">
                            <h2 id="Prototyping">From Idea to Reality</h2>
                            <div>
                                <div>
                                    How can we <span style={{ color: "#6fafe8" }}>identify </span>and
                                    <span style={{ color: "#6fafe8" }}> classify </span>stroke symptoms so EMT's can
                                    easily select relevant information to send to the hospital?
                                </div>
                            </div>
                        </Col>
                        <Col sm="4">
                        </Col>
                    </Row>
                    <Row>
                        <Col sm="8" className="v-project-item">
                            <h2 id="Impact">Broader Access & Faster Intervention</h2>
                            <div>
                                <div>
                                    <p>Due to budget constraints and technological limitations, we were not able to move forward with this app.
                                        Ideally, we would have wanted to include <span style={{ color: "#6fafe8" }}>voice recognition software </span>
                                        to help EMT's identify aphasia. We also would have wanted to improve the current
                                        machine learning technology with <span style={{ color: "#6fafe8" }}>larger training sets.</span> Since the backend portion
                                        of the app deals with personal medical information, this opens up a multitude of legal <span style={{ color: "#6fafe8" }}>complications
                                            involving patient confidentiality </span> and HIPAA laws.
                                    </p>
                                    <p>Currently, the idea is being rolled out in a few hospitals nationwide with great responses.
                                        While AIMSS was a great project to work on and was founded on a life-changing idea, there's still
                                        a long way to go until it reaches its full potential.
                                    </p>
                                </div>
                            </div>
                        </Col>
                        <Col sm="4">
                        </Col>
                    </Row>
                    <div className="bottom-space"></div>
                </div>
            </LayoutPage>
        </>
    )
}