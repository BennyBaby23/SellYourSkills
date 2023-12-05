import React from "react";
import Home from '../Pages/Home';
import Topbar from "../components/common/Topbar";

// layout of the pages
export default function HomeLayout(){
    return(
        <div>
            <Topbar />
            <Home />
            </div>
    )
}