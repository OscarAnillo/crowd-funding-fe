import { useState } from "react";
import { Typography, Button, Modal, Box } from "@mui/material";

const style = {
  borderRadius: "10px",
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "85%",
  margin: "auto",
  background: "#fff",
  border: "1px solid rgb(215,215,215)",
  boxShadow: 24,
  p: 4,
  textAlign:"center"
};

export default function ModalComplete() {
  const [openModal, setOpenModal] = useState(true);

  const clickHandlerClose = () => {
    setOpenModal(false);
  };

  return (
    <div className="complete-modal-div">
      <Modal
        open={openModal}
        onClose={clickHandlerClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div className="complete-div">
            <img src="/images/icon-check.svg" alt="" />
            <Typography
              id="complete-modal-title"
              variant="subtitle1"
              component="h1"
            >
              Thanks for your support!
            </Typography>
            <Typography
              id="complete-modal-description"
              variant="body2"
              sx={{ mt: 2 }}
            >
              Your pledge brings us one step closer to sharing Mastercraft
              Bamboo Monitor Riser worldwide. You will get an email once our
              campaign is completed.
            </Typography>
            <Button><a href="/">Got it!</a></Button>
          </div>
        </Box>
      </Modal>
    </div>
  );
}
