import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import del from "../../../assets/delete-icon.svg";
import useUsersStore from "../../../store/users";
import useCategoryStore from "../../../store/category";

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

export default function BasicModal({ data }: any) {
  const { deleteData } = useUsersStore();
  const { deleteCategory } = useCategoryStore();
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const deleteUser = () => {
    if (data.id) {
      deleteData(data.id);
    } else if (data.category_id) {
      deleteCategory(data.category_id);
    }
    handleClose();
  };
  return (
    <div>
      <img
        className="border border-gray-300 py-[9px] px-[10px] rounded-md active:bg-gray-300 duration-150 bg-gray-200 cursor-pointer"
        src={del}
        onClick={handleOpen}
        alt="delate"
      />
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div className="flex justify-between">
            <Typography id="modal-modal-title" variant="h6" component="h2">
              {data.id? "Delete User?" : "Delete Category?"}
            </Typography>
            <div className="flex gap-3 mt-16">
              <Button onClick={handleClose}>No</Button>
              <Button onClick={deleteUser} variant="contained">
                Yes
              </Button>
            </div>
          </div>
        </Box>
      </Modal>
    </div>
  );
}
