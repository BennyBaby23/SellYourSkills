import React from "react";
import Home from '../Pages/Home';
import Topbar from "../components/common/Topbar";
import "../Sass/HomeLayout.scss";
// layout of the home page
export default function HomeLayout(){
    return(
        <div>
        <div className="home-layout">
            <Topbar />
            <Home />
            </div></div>
    )
}