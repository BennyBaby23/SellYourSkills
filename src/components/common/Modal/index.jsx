import React from 'react';
import { Modal, Button } from 'antd';
import "./index.scss";
//open a new modal after clicking share a new post. modal is from antd
const ModalComponent = ({ modalOpen, setModalOpen, setStatus, status, sendStatus, }) => {


  return (
    <>
      <br />
      <br />
      <Modal
        title="Start a new Post"
        centered
        open={modalOpen}
        // button to send the modal data to databasedb and share it. Only share button appear if data entered 
        footer={[
            <Button onClick={sendStatus} key="submit" type="primary" disabled={status.length > 0 ? false : true}>
                Share
            </Button>
        ]}
      >
        {/* input fied to enter that data */}
        <input className="modal-input" placeholder='What do you like to Share?' onChange={(event) => setStatus(event.target.value)} value={status}/>
      </Modal>
    </>
  );
};

export default ModalComponent;