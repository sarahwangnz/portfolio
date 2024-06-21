
import { PureComponent } from 'react';
import { LayoutPage } from '../../components/v-layout/v-layout'

import { portfolioApp } from './portfolio-app';
import "./blog.css";
import { Row, Col } from 'react-bootstrap';

export class Blog extends PureComponent<any, { selected: string }> {
    manualScolling = false;
    constructor(props: any) {
        super(props);
        this.state = { selected: "Background" };
    }

    componentDidMount(): void {
        //window.addEventListener("scroll", this.onScroll);
        document.title = "Blog — Sarah Wang"
    }

    onChange = (value: string) => {

    }
    onScroll = (evt: any) => {

    }
    render = () => (
        <>
            <LayoutPage microApp={portfolioApp} pageName="blog-page">
                <div id="blog-page">
                    <div className="v-container">
                        <Row>
                            <Col sm="7" className="v-project-item">
                                {/* <div className="v-header">
                                    How we got here:
                                </div> */}
                                <div className="v-summary">
                                    <p className="v-about-summary">About a year ago, in the middle of one of those “what on earth am I going to do with my life”
                                        conversations, one of my good friends introduced me to UX as they thought it was a potential
                                        career path that I might enjoy. Having never heard the term before (combined with zero design
                                        experience), I laughed off the idea. My curiosity eventually won out—the more I read about
                                        and started to understand the key concepts that define UX, the more I realized it was exactly
                                        what I was looking for.</p>
                                    <p className="v-about-summary">I began to self-teach myself the fundamentals of UX/UI design during the pandemic,
                                        and I’m still learning new things everyday! What I love most about design is how it can
                                        evoke feelings and communicate universal ideas to people in mere seconds.</p>
                                    <p>(More coming soon!)</p>
                                </div>
                            </Col>
                            <Col sm="5" className="v-img-container">
                                <img className="v-about-img" src="./resources/for-blog.png" alt="Image of Sarah hiking with her dog" />
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