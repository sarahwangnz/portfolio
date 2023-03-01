
import { LayoutPage } from '../../components/v-layout/v-layout'
import { Row, Col } from 'react-bootstrap';
import { homeApp } from './home-app';
import { NavSlider } from '../../components/v-nav-slider/v-nav-slider';
import { PureComponent } from 'react';
import "./work.css";

export class Work extends PureComponent<any, { selected: string }> {
    manualScolling = false;
    constructor(props: any) {
        super(props);
        this.state = { selected: "Background" };
        //
    }

    componentDidMount(): void {
        //window.addEventListener("scroll", this.onScroll);
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
            <LayoutPage microApp={homeApp} >
                <div id="work-page" className="work-page">
                    <div className="v-container">
                        <Row>
                            <Col sm="7">
                                <div className="v-header">
                                    Viridium
                                </div>
                                <div className="v-summary">Viridium is an environmental data cloud platform that 
                                creates personalized carbon reports to help companies better understand and reduce 
                                their environmental impact.
                                </div>
                            </Col>
                            <Col sm="5" className="v-work-img-container">
                                <img className="v-work-img" src="./resources/viridium.png" alt="Test" />
                            </Col>
                        </Row>
                        <Row>
                            <Col sm="2" className="v-project-item">
                                <span>Team</span>
                                <ul>
                                    <li>Solo UX Designer working with 2 stakeholders</li>

                                </ul>
                            </Col>
                            <Col sm="2" className="v-project-item">
                                <span>Tools</span>
                                <ul>
                                    <li>Figma</li>
                                    <li>UI/UX</li>
                                    <li>User testing</li>
                                </ul>
                            </Col >
                            <Col sm="2" className="v-project-item">
                                <span>Duration</span>
                                <ul>
                                    <li>2 Months</li>

                                </ul>
                            </Col>
                            <Col sm="1">
                            </Col>
                        </Row>
                        <Row>
                            <Col sm="8" className="v-project-item">
                                <h2>Problem</h2>
                                <ul>
                                    <li>
                                    In the wake of climate change, large companies are responsible for over 50% of the world’s 
                                    greenhouse gas emissions. Many want to make changes but either don’t know how or where to start. 
                                    There’s too much data to analyze in order to generate an accurate carbon emissions report—even then, 
                                    the reports that are currently available are not easily understood or easy to act upon. 
                                    </li>
                                </ul>
                            </Col>
                            <Col sm="4" >

                            </Col>
                        </Row>
                        <Row>
                            <Col sm="8" className="v-project-item">
                                <h2>Solution</h2>
                                <ul>
                                    <li>
                                    Viridium aims to solve this problem by providing a platform where companies can easily 
                                    aggregate the necessary data needed in order to generate an accurate carbon emissions report. 
                                    It will also indicate specific areas in the supply chain where companies can simultaneously 
                                    cut costs as well as their overall greenhouse gas emissions. 
                                    </li>
                                </ul>
                            </Col>
                            <Col sm="4" >

                            </Col>
                        </Row>
                        <Row>
                            <Col sm="8" className="v-project-item">
                                <h2>Ideation</h2>
                                <ul>
                                    <li>
                                    Where are we going to collect data from and how are we going to present it in a way 
                                    that’s accurate and easy to understand?
                                    </li>
                                </ul>
                            </Col>
                            <Col sm="4" >

                            </Col>
                        </Row>
                        <Row>
                            <Col sm="8" className="v-project-item">
                                <h2>Product</h2>
                                <ul>
                                    <li>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                                        magna aliqua. Ut enim ad minim veniam, quis nostrud
                                        exercitation ullamco laboris nisi ut aliquip ex ea commodo c
                                        onsequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                                        cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                                        sunt in culpa qui officia deserunt mollit anim id est laborum.
                                    </li>
                                </ul>
                            </Col>
                            <Col sm="4" >

                            </Col>
                        </Row>
                        <Row>
                            <Col sm="8" className="v-project-item">
                                <h2>Outcome</h2>
                                <ul>
                                    <li>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                                        magna aliqua. Ut enim ad minim veniam, quis nostrud
                                        exercitation ullamco laboris nisi ut aliquip ex ea commodo c
                                        onsequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                                        cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                                        sunt in culpa qui officia deserunt mollit anim id est laborum.
                                    </li>
                                </ul>
                            </Col>
                            <Col sm="4" >

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