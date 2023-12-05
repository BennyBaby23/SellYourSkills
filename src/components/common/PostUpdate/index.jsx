import React, { useState } from "react";  
import { PostStatusDB } from "../../../api/FirestoreAPIs.jsx";
import './index.scss';
import ModalComponent from "../Modal/index.jsx"

export default function PostStatus(){
    // seting the usestate model for new post
    const [modalOpen, setModalOpen] = useState(false);
    const [status, setStatus] = useState('')

    //after enter the post text close and clear the box and send data to firestorefb
    const sendStatus = async () => {
    await PostStatusDB(status);
    await setModalOpen(false);
    await setStatus("");

    };
    return(<div className="post-status-main">
        <div className="post-status">  
        {/* button to create a new post and open the modal */}
        <button className="open-post-modal" onClick={() => setModalOpen(true)}>New Post </button>
     
        </div>
      
      {/* calling the modal componenet and passing component needed for it */}
      < ModalComponent sendStatus ={sendStatus} setStatus={setStatus} status={status} modalOpen={modalOpen} setModalOpen={setModalOpen}/>

    </div>);
}