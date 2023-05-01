
import { LayoutPage } from '../../../components/v-layout/v-layout'
import { Row, Col } from 'react-bootstrap';
import { portfolioApp } from '../portfolio-app';
import "./viridium.css";
import { Project } from './project';

export class Viridium extends Project {
    getOptions() {
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
                value: "Brainstorm", label: "Brainstorm"
            },
            {
                value: "Product", label: "Product"
            },
            {
                value: "Reflection", label: "Reflection"
            },
        ]
    }
    getTitle() {
        return "Viridium — Sarah Wang";
    }
    renderContent = () => (
        <>
            <LayoutPage microApp={portfolioApp} pageName="viridium-page">
                <div id="viridium-page">
                    <div className="v-container">
                        <Row>
                            <Col sm="7">
                                <div className="v-header">
                                    Viridium
                                </div>
                                <div className="v-summary">An environmental data cloud platform that
                                    creates personalized carbon reports to help companies better understand and reduce
                                    their environmental impact.
                                </div>
                            </Col>
                            {/* <Col sm="5" className="v-work-img-container">
                                <img className="v-work-img" src="./resources/viridium.png" alt="Test" />
                            </Col> */}
                        </Row>
                        <Row>
                            <Col sm="3" className="v-project-item">
                                <div id="v-project-item-title">Team</div>
                                <div>
                                    <div>UX Designer working with 3 stakeholders</div>
                                </div>
                            </Col>
                            <Col sm="3" className="v-project-item">
                                <div id="v-project-item-title">Tools</div>
                                <div>
                                    <div>Figma</div>
                                    <div>UX/UI on web</div>
                                    <div>User flows</div>
                                </div>
                            </Col>
                            <Col sm="2" className="v-project-item">
                                <div id="v-project-item-title">Duration</div>
                                <div>
                                    <div>3 months</div>
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
                                        In the wake of climate change, large companies are responsible for over 50% of the world’s
                                        greenhouse gas emissions. Many want to make changes but either don’t know how or where to start.
                                        There’s too much data to analyze in order to generate an accurate carbon emissions report—even then,
                                        the reports that are currently available are not easily understood to be actionable.
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
                                        Viridium aims to solve this problem by providing a platform where companies can easily
                                        aggregate the necessary data needed in order to generate an accurate carbon emissions report.
                                        By narrowing our scope to manufacturing, we are able to distill a complex carbon data report
                                        into a more manageable one that companies can understand and take immediate action on.
                                    </div>
                                </div>
                            </Col>
                            <Col sm="4">
                            </Col>
                        </Row>
                        <Row>
                            <Col sm="8" className="v-project-item">
                                <h2 id="Market">Market Opportunity</h2>
                                <div>
                                    <p>
                                        Out of the many companies that are tackling climate change and bringing innovative solutions
                                        to the table, we needed to choose an area to target. Manufacturing alone is responsible for
                                        over 70% of the 40 gigatons of carbon dioxide emitted into the atmosphere yearly. Therefore,
                                        we chose to focus on process manufacturing. Our goal is to reduce the overall amount of water and
                                        waste that is produced while helping companies exceed regulation standards.
                                    </p>
                                    <div>
                                        <ul>
                                            <li><span style={{ color: "#389CCE" }}>Target Users: </span>Potential Enterprise Customers (~5,000-7,000)</li>
                                            <li><span style={{ color: "#389CCE" }}>Target Area: </span>Airports</li>
                                            <li><span style={{ color: "#389CCE" }}>$10 billion </span>Global Carbon Management Software Market (2021)</li>
                                        </ul>
                                    </div>
                                </div>
                            </Col>
                            <Col sm="4">
                            </Col>
                        </Row>
                        <Row>
                            <Col sm="8" className="v-project-item">
                                <h2 id="Brainstorm">Brainstorm</h2>
                                <div>
                                    <div id="v-project-item-title-color">01</div>
                                    <div id="v-project-item-title">Concepts</div>
                                    <p>
                                        There are certain perceptions of "green" companies—color usage is extremely important in order to
                                        convey the right message.
                                    </p>
                                    <div id="v-project-item-title-color">02</div>
                                    <div id="v-project-item-title">Themes</div>
                                    <p>
                                        Viridian is a greenish-blue pigment primarily made up of green. Both the color and Viridium
                                        take inspiration from viridis, which is Latin for green. Following a 60/30/10 ratio, an off-white
                                        and lighter green will be the primary body colors, a darker green will be the secondary color for copy,
                                        followed by neutral blue and grey colors for accents.
                                    </p>
                                    <div id="v-project-item-title-color">03</div>
                                    <div id="v-project-item-title">User Flow</div>
                                    <p>
                                        Guide the user through manually inputting data while cross-referencing with industry standards.
                                        Home dashboard should clearly show insights from the data and possible next steps. Could potentially
                                        include some sort of "game" or interactive aspect to motivate the user to complete actionable recommendations.
                                    </p>
                                </div>
                            </Col>
                            <Col sm="4">
                            </Col>
                        </Row>
                        <Row>
                            <Col sm="8" className="v-project-item">
                                <h2 id="Product">Product</h2>
                                <div>
                                    <div>
                                        <div>Dashboard:</div>
                                        <ul>
                                            <li>After completing the initial onboarding, the user will be directed to
                                                a personalized dashboard to help visualize key information</li>
                                            <li>View data breakdowns for water, carbon, and waste (icons will turn
                                                orange/dark grey/red colors to signal negative overall health)</li>
                                            <li>View insights summary in quick view, user can choose to explore full
                                                insights information further </li>
                                            <li>Easily see critical action items & delegate tasks to team members </li>
                                        </ul>
                                    </div>
                                </div>
                            </Col>
                            <Col sm="10" className="v-work-img-container">
                                <img className="v-work-img" src="./resources/viridium-prototype.png" alt="Viridium Prototype" />
                            </Col>
                        </Row>
                        <Row>
                            <Col sm="8" className="v-project-item">
                                <h2 id="Reflection">Reflection</h2>
                                <div>
                                    <div>
                                        <p>
                                            As a new start-up, Viridium is still in its early stages of development.
                                            Our next goal is to better understand the exact type and amount of data we will be
                                            dealing with so we can further refine our designs.
                                        </p>
                                        <p>
                                            I would love to talk more about Viridium, but we are currently in stealth mode.
                                            Please email me if you would like to discuss this project more in depth!
                                        </p>
                                    </div>
                                </div>
                            </Col>
                            <Col sm="4">
                            </Col>
                        </Row>
                        <div className="bottom-space"></div>
                    </div>
                </div>
            </LayoutPage>
        </>
    )
}