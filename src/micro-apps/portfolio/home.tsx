import { Row, Col } from 'react-bootstrap';
import { LayoutPage } from '../../components/v-layout/v-layout';
import { portfolioApp } from './portfolio-app';
import "./home.css";
import { PureComponent } from 'react';

export class HomePage extends PureComponent {
  goToProject = (event: any) => {
    window.location.href = "./#/" + event.currentTarget.id;
  }
  componentDidMount(): void {
    window.addEventListener("scroll", this.onScroll);
  }
  componentWillUnmount(): void {
    window.removeEventListener("scroll", this.onScroll);
  }
  onScroll = (event: any) => {
    let top = event.currentTarget.scrollY as number;
    let nav = document.getElementById("portfolio-app-nav") as any;
    nav.style.opacity = 100 / ((2 * top) + 1);
    if (nav.style.opacity < 0.1) {
      nav.style.opacity = 0;
    }
  }
  render = () => (
    <LayoutPage microApp={portfolioApp} pageName="home-page">
      <div className="v-container">
        <Row className="v-page">
          <Col id="home-title" sm={7}>
            <div className="text-box">
              <div className="headline-content">
                Hi! I'm Sarah,<br /> a UX/UI Designer
              </div>
              <div className="blurb-content">
                A California enthusiast and a retired swimmer, I enjoy working on diverse projects
                that have a tangible impact on communities and drive positive change. I draw inspiration from the
                vibrant natural world that surrounds us.
              </div>
            </div>
          </Col>
          <Col id="home-text" className="image-box" sm={5}>
            <img src="./resources/pebbles.png" alt="pebbles" className="home-image" />
          </Col>
        </Row>
        <div className="v-page">
          <div className="v-projects-header">Projects</div>
          <Row>
            <Col sm={7}>
              <div id="wedding-whisk" className="v-project" onClick={this.goToProject}>
                <Row>
                  <Col sm={7}>
                    <div className="v-project-title">
                      WeddingWhisk
                    </div>
                  </Col>
                  <Col sm={5}>
                    <img className="v-project-image" src="/portfolio/resources/viridiumhomepage.png" alt="abc" />
                  </Col>
                </Row>
                <Row>
                  <Col sm={9}>
                    <div className="v-project-summary">
                      Helping people organize all things food related for their wedding
                    </div>
                  </Col>
                  <Col sm={3}>
                  </Col>
                </Row>
              </div>
            </Col>
            <Col sm={5}>
              <div id="viridium" className="v-project" onClick={this.goToProject}>
                <Row>
                  <Col sm={7}>
                    <div className="v-project-title">
                      Viridium
                    </div>
                  </Col>
                  <Col sm={5}>
                    <img className="v-project-image" src="/portfolio/resources/viridiumhomepage.png" alt="abc" />
                  </Col>
                </Row>
                <Row>
                  <Col sm={10}>
                    <div className="v-project-summary">
                      Reimagining the way companies understand and track their carbon emissions
                    </div>
                  </Col>
                </Row>
              </div>
            </Col>
          </Row>
          <Row>
            <Col sm={5}>
              <div id="aimss" className="v-project" onClick={this.goToProject}>
                <Row>
                  <Col sm={7}>
                    <div className="v-project-title">
                      AIMSS
                    </div>
                  </Col>
                  <Col sm={5}>
                    <img className="v-project-image" src="/portfolio/resources/viridiumhomepage.png" alt="abc" />
                  </Col>
                </Row>
                <Row>
                  <Col sm={9}>
                    <div className="v-project-summary">
                      Streamlining EMS intervention time with an AI-based Mobile Stroke Scale
                    </div>
                  </Col>
                  <Col sm={3}>
                  </Col>
                </Row>
              </div>
            </Col>
            <Col sm={7}>
              <div id="digital-portfolio" className="v-project" onClick={this.goToProject}>
                <Row>
                  <Col sm={7}>
                    <div className="v-project-title">
                      Digital Portfolio
                    </div>
                  </Col>
                  <Col sm={5}>
                    <img className="v-project-image" src="/portfolio/resources/viridiumhomepage.png" alt="abc" />
                  </Col>
                </Row>
                <Row>
                  <Col sm={9}>
                    <div className="v-project-summary">
                      Behind the scenes of conceptualizing and creating this website
                    </div>
                  </Col>
                  <Col sm={3}>
                  </Col>
                </Row>
              </div>
            </Col>
          </Row>
        </div>
        <Row className="divider"><Col> </Col></Row>
        <ul className='todo-list'>
          <li>
            Better pictures
          </li>
          <li>
            Better animation on hover
          </li>
        </ul>
      </div>
    </LayoutPage>
  );
}
