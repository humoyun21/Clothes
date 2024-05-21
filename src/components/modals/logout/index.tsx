import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import LogoutIcon from "@mui/icons-material/Logout";
import { removeDataFromCookie } from "@data-service";
import { useNavigate } from "react-router-dom";
import { Button } from "@mui/material";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  borderRadius: 1.3,
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #fff",
  boxShadow: 24,
  p: 3,
  outline: "none",
};

export default function BasicModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const navigate = useNavigate();
  const logOut = () => {
    removeDataFromCookie("token");
    removeDataFromCookie("refresh_token");
    navigate("/");
    window.location.reload();
  };

  return (
    <div>
      <button
        onClick={handleOpen}
        className="border px-[6px] py-[5px] rounded-md bg-[#ffffff20] hover:bg-[#ffffff3e] active:bg-[#ffffff20] duration-150"
      >
        <LogoutIcon />
      </button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div className="flex justify-between">
            <Typography id="modal-modal-title" variant="h6" component="h2">
              Do you want to exit?
            </Typography>
            <div className="flex gap-3 mt-16">
              <Button onClick={handleClose}>No</Button>
              <Button onClick={logOut} variant="contained">Yes</Button>
            </div>
          </div>
        </Box>
      </Modal>
    </div>
  );
}
