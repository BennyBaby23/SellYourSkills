import React from "react";
import './index.scss'
import SellYourSkillsLogo from "../../../assets/sellyourskillslogo1.png"

export default function Topbar(){
    return(
        <div className="topbar-main">
            <img className="SellYourSkills-logo" src={SellYourSkillsLogo} alt="SellYourSkillsLogo" />
        </div>
    );
}