import { Route } from "react-router-dom";
import { HomePage } from "./home";
import './portfolio-app.css';
import { v_map } from "../../components/v-layout/v-layout";
import { MicroApp, RouteItem } from "../../components/v-common/v-app";
import { About } from "./about";
import { Blog } from "./blog";
import { WeddingWhisk } from "./work/wedding-whisk";
import { Viridium } from "./work/viridium";
import { Aimss } from "./work/aimss";
import { DigitalPortfolio } from "./work/digital-portfolio";

class PortfolioApp extends MicroApp {
  getTitle = (): string => {
    return "Portfolio";
  }
  public getName = () => {
    return "portfolio-app";
  }
  public isSecure = () => false; 

  public getRouteItems = () => {
    return [
      new RouteItem().init("Work", "About", "2", "/"),
      new RouteItem().init("About", "About", "2", "/about"),
      new RouteItem().init("Blog", "About", "2", "/blog"),
    ];
  }

  public getRoutes = () => {
    return (
      <>
        <Route path={v_map("/")} element={<HomePage />} />
        <Route path={v_map("/about")} element={<About />} />
        <Route path={v_map("/blog")} element={<Blog />} />
        <Route path={v_map("/wedding-whisk")} element={<WeddingWhisk />} />
        <Route path={v_map("/viridium")} element={<Viridium />} />
        <Route path={v_map("/aimss")} element={<Aimss />} />
        <Route path={v_map("/digital-portfolio")} element={<DigitalPortfolio />} />
      </>
    );
  }
}

export const portfolioApp: PortfolioApp = new PortfolioApp();