
import { PureComponent } from 'react';
import { Row, Col } from 'react-bootstrap';
import { LayoutPage } from '../../components/v-layout/v-layout'

import { homeApp } from './home-app';
import "./about.css";
import { AiOutlineMail } from 'react-icons/ai';
import { VscGithub } from 'react-icons/vsc';
import { BsLinkedin } from 'react-icons/bs';

export class Blog extends PureComponent<any, { selected: string }> {
    manualScolling = false;
    constructor(props: any) {
        super(props);
        this.state = { selected: "Background" };
    }

    onChange = (value: string) => {

    }
    onScroll = (evt: any) => {

    }
    render = () => (
        <>
            <LayoutPage microApp={homeApp} >
                <div id="about-page" className="about-page">
                    <div className="v-about v-container">
                       coding sucks a lot
                        <div className="bottom-space">
                        </div>
                    </div>
                </div>
            </LayoutPage>
        </>
    )
}