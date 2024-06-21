import { Row, Col } from 'react-bootstrap';
import { LayoutPage } from '../../components/v-layout/v-layout';
import { portfolioApp } from './portfolio-app';
import "./home.css";
import { PureComponent } from 'react';
import { FaChevronDown, FaRegLightbulb, FaSeedling } from 'react-icons/fa';
import { IoMdMedical } from 'react-icons/io';
import { GiForkKnifeSpoon } from 'react-icons/gi';

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
    let chevron = document.getElementById("chevron-down") as any;
    if (window.scrollY < 100) {
      chevron.style.visibility = "visible";
    } else {
      chevron.style.visibility = "hidden";
    }
  }
  viewMore = (event: any) => {
    let nav = document.getElementById("projects") as any;
    let rect = nav.getBoundingClientRect();
    window.scrollTo({
        top: rect.top,
        left: 0,
        behavior: 'smooth'
    });
  }
  render = () => (
    <LayoutPage microApp={portfolioApp} pageName="home-page">
      <div className="v-container">
        <div className="v-page" id="home">
          <Col id="home-title" sm={7}>
            <div className="text-box">
              <div className="headline-content">
                Hi! I'm <span className="headline-name">Sarah,</span><br /> a UX/UI Designer
              </div>
              <div className="blurb-content">
                A California enthusiast and a retired swimmer, I enjoy working on diverse projects
                that have a tangible impact on communities and drive positive change. I draw inspiration from the
                vibrant natural world that surrounds us.
              </div>
              <div className="home-view-more" id="chevron-down">
                <FaChevronDown onClick={this.viewMore}/>
              </div>
            </div>
          </Col>
          <Col id="home-text" className="image-box" sm={5}>
          </Col>
        </div>
        <div className="v-page" id="projects">
          <div className="v-projects-header">Curious? Explore my portfolio:</div>
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
                    <GiForkKnifeSpoon className="home-icon" />
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
                    <FaSeedling className="home-icon" />
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
                    <IoMdMedical className="home-icon" />
                  </Col>
                </Row>
                <Row>
                  <Col sm={9}>
                    <div className="v-project-summary">
                      Reducing EMS intervention time with an AI-based Mobile Stroke Scale
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
                    <FaRegLightbulb className="home-icon" />
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
        <div className="bottom-space"></div>
      </div>
    </LayoutPage>
  );
}
