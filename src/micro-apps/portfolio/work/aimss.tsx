import { LayoutPage } from '../../../components/v-layout/v-layout'
import { Row, Col } from 'react-bootstrap';
import { portfolioApp } from '../portfolio-app';
import { NavSlider } from '../../../components/v-nav-slider/v-nav-slider';
import { PureComponent } from 'react';
import "./aimss.css";

export class Aimss extends PureComponent<any, { selected: string }> {
    manualScolling = false;
    constructor(props: any) {
        super(props);
        this.state = { selected: "Background" };
        //
    }

    componentDidMount(): void {
        //window.addEventListener("scroll", this.onScroll);
        document.title = "AIMSS — Sarah Wang"
    }
    onChange = (value: string) => {
        let element = window;
        let top = 0;
        switch (value) {
            case 'Background':
                top = 200;
                break;
            case 'Problem':
                top = 400;
                break;
            case 'Product':
                top = 600;
                break;
            case 'Conclusion':
                top = 800;
                break;
        }
        this.setState({ selected: value });
        this.manualScolling = true;
        element.scrollTo({
            top: top,
            left: 0,
            behavior: 'smooth'
        });
        setTimeout(() => {
            this.manualScolling = false;
        }, 500);
    }
    onScroll = (evt: any) => {
        if (this.manualScolling) {
            return;
        }
        console.log(evt);
        let top = evt.target.scrollTop;
        if (top >= 200 && top < 400) {
            this.setState({ selected: "Problem" });

        } else if (top >= 400 && top < 600) {
            this.setState({ selected: "Solution" });
        } else if (top >= 600 && top < 800) {
            this.setState({ selected: "Ideation" });
        } else if (top >= 800) {
            this.setState({ selected: "Product" });
        } else if (top >= 1000) {
            this.setState({ selected: "Outcome" });
        }
    }
    render = () => (
        <>
            <LayoutPage microApp={portfolioApp} pageName="aimss-page">
                <div id="aimss-page">
                    <div className="v-container">
                        <Row>
                            <Col sm="7">
                                <div className="v-header">
                                    AIMSS
                                </div>
                                <div className="v-summary">
                                    AIMSS is an AI-based mobile stroke scale that aims to efficiently identify strokes so
                                    EMS responders and hospitals can work together to reduce intervention time and thus
                                    save more lives.
                                </div>
                            </Col>
                            <Col sm="5" className="v-work-img-container">
                                <img className="v-work-img" src="./resources/viridium.png" alt="Test" />
                            </Col>
                        </Row>
                        <Row>
                            <Col sm="2" className="v-project-item">
                                <div id="v-project-item-title">Team</div>
                                <div>
                                    <div>2 UX Designers</div>
                                    <div>1 Project Manager</div>
                                    <div>2 P.I.'s</div>
                                    <div>Frontend & Backend teams</div>
                                </div>
                            </Col>
                            <Col sm="2" className="v-project-item">
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
                                <h2>Problem</h2>
                                <div>
                                    <div>
                                        There are currently 800,000 strokes yearly in the U.S. 32,000 brain cells are lost every second.
                                        It takes less than 4.5 hours for clot-busting medication, and less than 24 hours for a surgical clot
                                        removal. In a stroke, every second matters.
                                        The<span style={{ color: "#389CCE" }}> current intervention time is around 2 hours and 15 minutes. </span>
                                        Additionally, EMT's take the patient to the closest hospital, but the closest isn't always the right hospital.
                                        Time wasted going from the wrong hospital to the right hospital that has the necessary medicine and equipment
                                        to treat the patient's specific type of stroke could be prevented if there was better communication between EMT's,
                                        hospitals, and doctors.
                                    </div>
                                </div>
                            </Col>
                            <Col sm="4">
                            </Col>
                        </Row>
                        <Row>
                            <Col sm="8" className="v-project-item">
                                <h2>Solution</h2>
                                <div>
                                    <div>
                                        AIMSS is an AI-based mobile stroke scale that uses machine learning technology to identify strokes, noting
                                        key signs such as eye deviation, face/arm/leg weakness, and speaking changes. The app calculates and then sends
                                        the stroke scale to the nearest hospital so they can act immediately. AIMSS will then redirect
                                        to Apple Maps for EMS to navigate to the hospital as quickly as possible.
                                        With AIMSS, intervention time drastically shortens to 45 minutes or less—a
                                        <span style={{ color: "#389CCE" }}> 66% decrease from current times.</span>
                                    </div>
                                </div>
                            </Col>
                            <Col sm="4">
                            </Col>
                        </Row>
                        <Row>
                            <Col sm="8" className="v-project-item">
                                <h2>Broader Access & Faster Intervention</h2>
                                <div>
                                    <div>
                                        How can we <span style={{ color: "#389CCE" }}>identify </span>and
                                        <span style={{ color: "#389CCE" }}> classify </span>stroke symptoms so EMS responders can easily select relevant information to send to
                                        the hospital?
                                    </div>
                                </div>
                            </Col>
                            <Col sm="4">
                            </Col>
                        </Row>
                        <Row>
                            <Col sm="8" className="v-project-item">
                                <h2>Market Potential</h2>
                                <div>
                                    <p>Due to the pandemic, there has been a huge rise in telemedicine and integrating medical
                                        practices with technology. After the release of ChatGPT to the public, AI is only growing 
                                        in popularity and becoming part of our daily lives—why not harness this technology for strokes? 
                                    </p>
                                    <div>
                                        <ul>
                                            <li>$8.5 billion Stroke Market (2021)</li>
                                            <li>$17 billion AI-Diagnostics Market (2021-2025)</li>
                                            <li>$33 billion Digital Health Market (2020)</li>
                                        </ul>
                                    </div>
                                </div>
                            </Col>
                            <Col sm="4">
                            </Col>
                        </Row>
                        <Row>
                            <Col sm="8" className="v-project-item">
                                <h2>Reflection</h2>
                                <div>
                                    <div>
                                        Due to budget constraints and technological limitations, we were not able to move forward with this app.
                                        We would have wanted to include <span style={{ color: "#389CCE" }}>voice recognition software </span>
                                        for identifying aphasia to help EMS responders identify the stroke scale. Ideally, we also would have wanted to improve the current
                                        machine learning technology with <span style={{ color: "#389CCE" }}>larger training sets.</span> Also, since the backend portion of the app deals with
                                        personal medical information, this opens up a multitude of legal <span style={{ color: "#389CCE" }}>complications involving patient confidentiality </span>
                                        and HIPAA laws. Currently, the idea is being rolled out in a few hospitals nationwide with great responses.
                                        While AIMSS was a great project to work on and was founded on a life-changing idea, it still
                                        has a long ways to go to reach its full potential.
                                    </div>
                                </div>
                            </Col>
                            <Col sm="4">
                            </Col>
                        </Row>
                    </div>
                </div>
            </LayoutPage>
            <NavSlider onChange={this.onChange} value={this.state.selected} id="chapters" className="v-chapter-nav" options={[
                {
                    value: "Problem", label: "Problem"
                },
                {
                    value: "Solution", label: "Solution"
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
            ]} />
        </>

    )
}