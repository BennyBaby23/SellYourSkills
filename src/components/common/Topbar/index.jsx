import React, { Component } from "react";
import './index.scss'
import SellYourSkillsLogo from "../../../assets/sellyourskillslogo1.png"
import { FaHome } from "react-icons/fa";
import { IoIosPeople } from "react-icons/io";
import { TbUserSearch } from "react-icons/tb";
import { IoNotificationsSharp } from "react-icons/io5";
import { MdConnectWithoutContact } from "react-icons/md";
import { useNavigate } from "react-router-dom";

//all the component in the topbar
export default function Topbar(){
    // variable to navigate to each Componentafter pressing
    let navigate = useNavigate()
    //const function to navigate to that route
    const redirectRoute = (route) => {
        navigate(route);

    };
    return(
        <div className="topbar-main">
            {/* top image sellyourskill icon */}
            <img className="SellYourSkills-logo" src={SellYourSkillsLogo} alt="SellYourSkillsLogo" />

            <div className="icons">
                {/* all the icon on the top bar and routing it to their pages */}
            <TbUserSearch size={35} className="react-icon" />
            <FaHome size={35} className="react-icon"  onClick={() => redirectRoute("/home") }/>
            <IoIosPeople size={35} className="react-icon"/>
            <MdConnectWithoutContact size={35} className="react-icon"/>
    
            <IoNotificationsSharp size={34} className="react-icon"/>
            </div>

            <img className="SellYourSkills-logo" src={SellYourSkillsLogo} alt="SellYourSkillsLogo" />
        </div>
    );
}