import { useState } from "react";
import {Typography, Modal, Box } from "@mui/material";
import PledgeComponent from "./pledge-component";

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '90%',
    background: '#fff',
    border: '1px solid rgb(215,215,215)',
    boxShadow: 24,
    p: 4,
  };

export default function MastercraftComponent({ showMenu }) {
  const [openModal, setOpenModal] = useState(false);

  const clickHandlerOpen = () => setOpenModal(true);
  const clickHandlerClose = () => setOpenModal(false);

  return (
    <div className={`${showMenu ? "show-main-div" : "main-div"}`}>
      <div className="main-innner-div">
        <img src="/images/logo-mastercraft.svg" alt="" className="img-master" />
        <h1>Mastercraft Bamboo Monitor Riser</h1>
        <p>
          A beautifully handcrafted monitor stand to reduce neck and eye strain.
        </p>
        <div className="main-inner-row">
          <button className="cyan-btn" title="back" onClick={clickHandlerOpen}>
            Back this project
          </button>
          <button className="bookmark-btn" title="bookmark">
            <img src="/images/icon-bookmark.svg" alt="" />
          </button>
        </div>
      </div>
      <Modal
        open={openModal}
        onClose={clickHandlerClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
            <div className="inner-box-modal">
                <Typography id="modal-modal-title" variant="h6" className="modal-title">
                    Back this project
                </Typography>
                <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                    Want to support us in bringing Mastercraft Bamboo Monitor Riser out in the world?
                </Typography>
                {/* */}
            </div>
        </Box>
      </Modal>
    </div>
  );
}
