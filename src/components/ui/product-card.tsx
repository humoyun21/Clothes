import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import IconButton, { IconButtonProps } from "@mui/material/IconButton";
import VisibilityIcon from "@mui/icons-material/Visibility";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import useMediaStore from "../../store/media";

interface ExpandMoreProps extends IconButtonProps {
  expand: boolean;
}

const ExpandMore = styled((props: ExpandMoreProps) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  borderRadius: 1.3,
  border: "2px solid #fff",
  boxShadow: 24,
  p: 0,
};

export default function BasicModal({ data }: any) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [expanded, setExpanded] = React.useState(false);
  const [img, setImg] = React.useState([]);
  const { getMedia } = useMediaStore();
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  const getImage = async () => {
    const response = await getMedia(data.product_id);
    setImg(response.images.map((item: any) => item.image_url));
  };
  React.useEffect(() => {
    getImage();
  }, []);
  return (
    <div>
      <button
        onClick={handleOpen}
        className="px-[6px] py-[7px] border border-gray-300 active:bg-gray-300 duration-150 bg-gray-200 rounded-md"
      >
        <VisibilityIcon />
      </button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Card sx={{ maxWidth: 400 }}>
            <CardHeader
              action={
                <IconButton aria-label="settings">
                  <MoreVertIcon />
                </IconButton>
              }
              title={data.product_name}
            />
            <CardMedia
              component="img"
              height="194"
              image={img[0]}
              alt="Paella dish"
            />
            <CardContent>
              <Typography variant="body2" color="text.secondary">
                {data.description}
              </Typography>
            </CardContent>
            <CardActions disableSpacing className="border">
              <ExpandMore
                expand={expanded}
                onClick={handleExpandClick}
                aria-expanded={expanded}
                aria-label="show more"
              >
                <ExpandMoreIcon />
              </ExpandMore>
            </CardActions>
            <Collapse in={expanded} timeout="auto" unmountOnExit>
                <Typography paragraph>Method:</Typography>
              <CardContent className="grid grid-cols-2">
                <div>
                  <Typography paragraph>
                    <b>Cost: </b>
                    {data.cost}
                  </Typography>
                  <Typography paragraph>
                    <b>Cost: </b>
                    {data.cost}
                  </Typography>
                  <Typography paragraph>
                    <b>Count: </b>
                    {data.count}
                  </Typography>
                  <Typography paragraph>
                    <b>Discount: </b>
                    {data.discount}
                  </Typography>
                  <Typography paragraph>
                    <b>Max age: </b>
                    {data.age_max}
                  </Typography>
                </div>
                <div>
                  <Typography paragraph>
                    <b>Min age: </b>
                    {data.age_min}
                  </Typography>
                  <Typography paragraph>
                    <b>Color: </b>
                    {data.color}
                  </Typography>
                  <Typography paragraph>
                    <b>Size: </b>
                    {data.size}
                  </Typography>
                  <Typography paragraph>
                    <b>Made in: </b>
                    {data.made_in}
                  </Typography>
                  <Typography paragraph>
                    <b>For gender: </b>
                    {data.for_gender}
                  </Typography>
                </div>
              </CardContent>
            </Collapse>
          </Card>
        </Box>
      </Modal>
    </div>
  );
}
