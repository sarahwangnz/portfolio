import { PureComponent } from "react";
import { NavSlider } from "../../../components/v-nav-slider/v-nav-slider";
import "./project.css";

export class Project extends PureComponent<any, { selected: string }> {
    manualScolling = false;
    chapterHeight = 200;
    constructor(props: any) {
        super(props);
        this.state = { selected: this.getOptions()[0].value };
    }
    //lifecycle methods
    componentDidMount(): void {
        window.addEventListener("scroll", this.onScroll);
        document.title = this.getTitle();
        window.scrollTo(0, 0);
    }
    componentWillUnmount(): void {
        window.removeEventListener("scroll", this.onScroll);
    }
    //lifecycle ends
    getTop = (value: string) => {
        console.log(value);
        let h2 = document.getElementById(value);
        if (h2 === null){
            return 0;
        }
        var rect = h2!.getBoundingClientRect();
        console.log(rect);
        return rect.top+ window.scrollY;
    }
    onChange = (value: string) => {
        let element = window;

        let options = this.getOptions();
        let idx = options.map(opt=>opt.value).indexOf(value);

        let top = this.getTop(value) - 30;

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
        let notFound = true;
        this.getOptions().reverse().forEach((opt)=>{
            let top = this.getTop(opt.value) - 30;
            if (notFound && top - window.scrollY < 500) {
                this.setState({ selected: opt.value });
                notFound = false;
            }
        });
    }
    getTitle() {
        return "project title";
    }
    getOptions() {
        return [{value:"test", label:"test"}]
    }
    renderContent = () => {
        return <div>To be written </div>
    }
    render = () => (
        <>
            {
                this.renderContent()
            }
            <NavSlider onChange={this.onChange} value={this.state.selected} className="nav-slider" options={this.getOptions} />
        </>
    )
}