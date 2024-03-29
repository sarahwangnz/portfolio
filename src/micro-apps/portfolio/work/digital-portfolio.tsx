
import { LayoutPage } from '../../../components/v-layout/v-layout'
import { Row, Col } from 'react-bootstrap';
import { portfolioApp } from '../portfolio-app';
import "./digital-portfolio.css";
import { Project } from './project';

export class DigitalPortfolio extends Project {
    getOptions () {
        return [
            {
                value: "Concept", label: "Concept"
            },
            {
                value: "Design", label: "Design"
            },
            {
                value: "Code", label: "Code"
            },
            {
                value: "Takeaways", label: "Takeaways"
            },
        ]
    }
    getTitle() {
        return "Digital Portfolio — Sarah Wang";
    }
    renderContent = () => (
        <>
            <LayoutPage microApp={portfolioApp} pageName="digital-portfolio-page">
                <div id="digital-portfolio-page">
                    <div className="v-container">
                        <Row>
                            <Col sm="7">
                                <div className="v-header">
                                    Digital Portfolio
                                </div>
                                <div className="v-summary">Documenting my learning process through the creation, design,
                                    and development of this website.
                                </div>
                            </Col>
                            {/* <Col sm="5" className="v-work-img-container">
                                <img className="v-work-img" src="./resources/viridium.png" alt="Test" />
                            </Col> */}
                        </Row>
                        <Row>
                            <Col sm="3" className="v-project-item">
                                <div id="v-project-item-title">Tools</div>
                                <div>
                                    <div>Figma</div>
                                    <div>Adobe Color Wheel</div>
                                    <div>Coolors</div>
                                    <div>HTML/CSS</div>
                                    <div>TypeScript/React</div>
                                    <div>Visual Studio Code</div>
                                </div>
                            </Col>
                            <Col sm="2" className="v-project-item">
                                <div id="v-project-item-title">Duration</div>
                                <div>
                                    <div>3 Months</div>
                                </div>
                            </Col>
                        </Row>
                        <Row>
                            <Col sm="8" className="v-project-item">
                                <h2 id="Concept">The Concept</h2>
                                <div>
                                    <p>I've always wanted to create my own website, but never had a reason to until I was trying to figure
                                        out a way to present my UX projects together in one place. The initial step was to see what was
                                        currently out there—how did other people present their work?
                                    </p>
                                    <p>After looking at a multitude of great digital portfolios, I took concepts and styles that I liked
                                        from each one and meshed them together to form the design of my own page. (Yes, shamelessly copy
                                        from the internet.)
                                    </p>
                                    <p>As for the color palette, it was inspired by the vibrant nature of Northern California.
                                    </p>
                                </div>
                            </Col>
                        </Row>
                        {/* <Col sm="8" className="v-work-img-container">
                            <img className="v-work-img" src="./resources/viridium.png" alt="Photos for color palette inspiration" />
                        </Col> */}
                        <Row>
                            <Col sm="8" className="v-project-item">
                                <h2 id="Design">The Design</h2>
                                <div>
                                    <p>Now that the initial design was sketched out on paper, I transferred the wireframes to
                                        Figma and played around with the design there. After a few iterations (along with many
                                        long walks and lots of snacks), I decided on the current layout: a home page with a projects 
                                        section when you scroll down, an about page, and a blog page where I could publish random stuff
                                        in the future.
                                    </p>
                                    <p>While every project doesn't always follow the 5 step design process, I still wanted the pages
                                        to look cohesive. The header and body copy styles are the same, but the focus and process for each
                                        project is different.
                                    </p>
                                </div>
                            </Col>
                        </Row>
                        <Row>
                            <Col sm="8" className="v-project-item">
                                <h2 id="Code">The Code</h2>
                                <div>
                                    <p>
                                        The real kicker was learning how to transfer this vision into reality.
                                        In order to do so, I had to face what I was lowkey terrified of: learning 
                                        the basics of front-end development.
                                        Trust me, there were days when I wanted to throw my computer out the window (and cursed bloody
                                        murder at the screen either due to a bug or the learning curve being a bit too steep). HTML is
                                        straightforward enough once you understand the basics of tags and what they all mean, but CSS
                                        quickly became a lot more complicated the more I dove into it.
                                    </p>
                                </div>
                            </Col>
                        </Row>
                        <Row>
                            <Col sm="8" className="v-project-item">
                                <div>Third eye opening moments:</div>
                                <ul className="project-bullet-list">
                                    <li><span style={{ color: "#4254CA" }}>CSS variables:</span> you can use these to set a
                                        certain style and then reference that variable throughout the rest of the pages
                                        instead of typing it all out every time
                                    </li>
                                    <li><span style={{ color: "#4254CA" }}>Animation:</span> Want a fading navigation bar? Two-second delay before paragraphs
                                        show up? All of this is possible with CSS animation, wild cards, and keyframes
                                    </li>
                                    <li><span style={{ color: "#4254CA" }}>Margins & Padding:</span> It was hard for me to understand these concepts 
                                        as it's difficult to visualize what's happening with invisible boxes on a computer screen. 
                                        Here's a real life example that helped me a lot: 
                                        <p>
                                            Think of a picture frame. Usually, there's white space around the picture between the image
                                            and the frame itself. That's the padding. The actual frame is the box your content is in, such 
                                            as a div tag or span. Now imagine two pictures hanging next to each other on the wall. The 
                                            margin is the space between those two items. 
                                        </p>
                                    </li>
                                </ul>
                            </Col>
                        </Row>
                        <Row>
                            <Col sm="8" className="v-project-item">
                                <h2 id="Takeaways">The Takeaways</h2>
                                <div>
                                    <p>
                                        Google is your best friend. So is copying things from the internet. I know what
                                        you're thinking—isn't design supposed to be original? Yes, it is, but I made a 
                                        mistake at the beginning believing I needed to reinvent the wheel. Instead, we're here to 
                                        use existing wheels to create something new that fits our needs. Throughout this 
                                        process, I learned that you have to understand the fundamentals of design before 
                                        you can break the rules in your own designs. As for coding, I started with the 
                                        misconception that you had to write everything on your own, from scratch.
                                        (I couldn't have been more wrong.) Similar to design, there are tons of libraries,
                                        frameworks, and code already written to help you—all you have to do is know how to 
                                        search for what you want, copy it, and integrate it into your own project. 
                                    </p>
                                </div>
                            </Col>
                        </Row>
                        <div className="bottom-space"></div>
                    </div>
                </div>
            </LayoutPage >
        </>
    )
}