import * as React from "react";
import Box from "@mui/material/Box";
import DeleteIcon from "@mui/icons-material/Delete";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { Button } from "@mui/material";
import useProductsStore from "../../../store/products";
import { useNavigate } from "react-router-dom";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #fff",
  borderRadius: 1.3,
  boxShadow: 24,
  p: 4,
};

export default function BasicModal({data}:any) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const navigate = useNavigate();
  const { deleteProduct } = useProductsStore();
  const handleDelete = async () => {
    const response = await deleteProduct(data);
    if (response.status === 200) {
        navigate("/admin-panel");
        handleClose()
    }
  }

  return (
    <div>
      <button className=" text-gray-500" onClick={handleOpen}>
        <DeleteIcon />
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
              Delete Product?
            </Typography>
            <div className="flex gap-3 mt-16">
              <Button onClick={handleClose}>No</Button>
              <Button onClick={handleDelete} variant="contained">
                Yes
              </Button>
            </div>
          </div>
        </Box>
      </Modal>
    </div>
  );
}
