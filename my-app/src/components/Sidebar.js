import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "../App.css";
import Home from "./loginPages/Home";
import Updates from "./loginPages/Updates";
import Contactme from "./loginPages/Contactme";
import Media from "./loginPages/Media";
import News from "./loginPages/News";
import Morepages from "./loginPages/Morepages";
import Allpages from "./loginPages/Allpages";
import image from '../assets/images/logo-791027083.png'
import '../components/Sidebar.css'
import FarmLandProjects from "./loginPages/PathLand";
import SignIn from "./loginPages/SignIn.js";




function Sidebar() {
  const navigate = useNavigate();

  return (
    <div className="Header" grid={{gutter:16,xs:1,sm:2,md:6,lg:3,xl:3,xxl:3}}>
      <div className="Header-left">
        <img src={image} alt="" style={{width:"163.46px",height:"63px"}} /><br/>
        <h3 style={{fontSize:"18px",textAlign:"center"}}>SRI GURU INFRA BUILDERS PVT LTD</h3>
      </div>
      <div className="Header-right">
        <ul>
          <li>
            <Link to="/" style={{ textDecoration: "none" }}>
              <Home/>
            </Link>
          </li>
          <li>
            <Link to="/updates" style={{ textDecoration: "none" }}>
              <Updates/>
            </Link>
          </li>
          <li>
            <Link to="/pathland" style={{ textDecoration: "none" }}>
              <FarmLandProjects/>
            </Link>
          </li>
          <li>
            <Link to="/contactme" style={{ textDecoration: "none" }}>
              <Contactme/>
            </Link>
          </li>
          <li>
            <Link to="/media" style={{ textDecoration: "none" }}>
              <Media/>
            </Link>
          </li>
          <li>
            <Link to="/news" style={{ textDecoration: "none" }}>
              <News/>
            </Link>
          </li>
          <li>
            <Link to="/morepages" style={{ textDecoration: "none" }}>
              <Morepages/>
            </Link>
          </li>
          <li>
            <Link to="/allpages" style={{ textDecoration: "none" }}>
              <Allpages/>
            </Link>
          </li>
          <li>
            <Link to="/SignIn" style={{ textDecoration: "none" }}>
            <button className="btn-log">SignIn</button>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}


export default Sidebar;