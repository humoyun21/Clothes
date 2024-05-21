import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import AddPhotoAlternateIcon from "@mui/icons-material/AddPhotoAlternate";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #fff",
  outline: "none",
  boxShadow: 24,
  p: 3,
  borderRadius: 1.3,
};

export default function BasicModal({change, upload}:any) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <AddPhotoAlternateIcon onClick={handleOpen} />
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Image Upload
          </Typography>
          <form className="flex flex-col gap-y-2 mt-7" onSubmit={upload}>
            <input type="file" required onChange={change} />
            <button className="bg-[#1976D2] text-white font-self-bold py-2 px-4 rounded duration-150 active:bg-[#1976d2bc]">
              Upload image
            </button>
          </form>
        </Box>
      </Modal>
    </div>
  );
}
