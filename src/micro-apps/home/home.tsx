import { Row, Col } from 'react-bootstrap';
import { LayoutPage } from '../../components/v-layout/v-layout';
import { homeApp } from './home-app';
import "./projects.css";
export const HomePage = (props: any) => {
  const goSomewhere = () => {
    window.location.href = "./#/home-app/work"
  }
  return (
    <LayoutPage microApp={homeApp}>
      <div className="home-page">
        <div className="v-container">
          <Row className="v-page">
            <Col id="home-title" sm={7}>
              <div className="text-box">
                <span className="headline-content">
                  Hi! I'm Sarah,<br /> a UX/UI Designer from the Bay Area
                </span>
                <span className="blurb-content">
                  I love working on diverse projects that are innovative and bring about real change in communities.
                </span>
              </div>
            </Col>
            <Col id="home-text" className="text-box" sm={5}>
              picture here later
            </Col>
          </Row>
          <div className="v-page">
            <div className="v-projects-header">Projects</div>
            <Row>
              <Col sm={7}>
              <div id="p1" className="v-project" onClick={goSomewhere}>
                <Row>
                  <Col sm={7}>
                    <div className="v-project-title">
                      WeddingWhisk
                    </div>
                  </Col>
                  <Col sm={5}>
                    <div className="v-project-tags">
                      <div className="v-tag">Event Planning</div>
                      <div className="v-tag">Product Design</div>
                    </div>
                  </Col>
                </Row>
                <Row>
                  <Col sm={9}>
                    <span className="v-project-summary">
                      Helping people organize all things food related for their wedding
                    </span>
                  </Col>
                  <Col sm={3}>
                  </Col>
                </Row>
              </div>
              </Col>
              <Col sm={5}>
              <div id="viridium" className="v-project" onClick={goSomewhere}>
                <Row>
                  <Col sm={7}>
                    <div className="v-project-title">
                      Viridium
                    </div>
                  </Col>
                  <Col sm={5}>
                    <div className="v-project-tags">
                      <img className="v-project-image" src="/portfolio/resources/viridiumhomepage.png" alt="abc" />
                    </div>
                  </Col>
                </Row>
                <Row>
                  <Col sm={9}>
                    <span className="v-project-summary">
                      Reimagining the way companies understand and track their carbon emissions
                    </span>
                  </Col>
                  <Col sm={3}>
                  </Col>
                </Row>
              </div>
              </Col>
            </Row>
            <Row>
              <Col sm={5}>
                <div id="p2" className="v-project" onClick={goSomewhere}>
                  <Row>
                    <Col sm={7}>
                      <div className="v-project-title">
                        Investify.ai
                      </div>
                    </Col>
                    <Col sm={5}>
                      <div className="v-project-tags">
                        <div className="v-tag">Finance</div>
                        <div className="v-tag">Product Design</div>
                      </div>
                    </Col>
                  </Row>
                  <Row>
                    <Col sm={9}>
                      <span className="v-project-summary">
                        Managing your finances on-the-go
                      </span>
                    </Col>
                    <Col sm={3}>
                    </Col>
                  </Row>
                </div>
              </Col>
              <Col sm={7}>
                <div id="p3" className="v-project" onClick={goSomewhere}>
                  <Row>
                    <Col sm={7}>
                      <div className="v-project-title">
                        Digital Portfolio
                      </div>
                    </Col>
                    <Col sm={5}>
                      <div className="v-project-tags">
                        <div className="v-tag">Design</div>
                        <div className="v-tag">Development</div>
                      </div>
                    </Col>
                  </Row>
                  <Row>
                    <Col sm={9}>
                      <span className="v-project-summary">
                        Behind the scenes of conceptualizing and creating this website
                      </span>
                    </Col>
                    <Col sm={3}>
                    </Col>
                  </Row>
                </div>
              </Col>
            </Row>
          </div>
          <Row className="divider"><Col> </Col></Row>
        </div>
      </div>
    </LayoutPage>
  );
}
