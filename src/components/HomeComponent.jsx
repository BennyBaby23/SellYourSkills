import React from "react";
import "../Sass/HomeComponent.scss";
import PostStatus from "./common/PostUpdate";


// home component
export default function HomeComponent(){
    return <div className="home-component">
       {/* post component */}
        <PostStatus />

       
    </div>;
}