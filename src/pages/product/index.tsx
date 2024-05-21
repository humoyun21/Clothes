import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import EditIcon from "@mui/icons-material/Edit";

// import request from "../../service/config";
import useProductStore from "../../store/products";
import useMediaStore from "../../store/media";
import DeleteModal from "../../components/modals/delete-product";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import "./style.scss";
import { Button } from "@mui/material";
function index() {
  const { getProduct } = useProductStore();
  const { getMedia } = useMediaStore();
  const { id } = useParams();
  const navigate = useNavigate();

  const [product, setProduct]: [any, any] = useState({});
  const [img, setImg] = useState([]);

  const response = async () => {
    try {
      const data = await getProduct(id);
      setProduct(data);
    } catch (err) {
      console.log(err);
    }
  };

  const getImg = async (id: any) => {
    try {
      const response: any = await getMedia(id);
      console.log(response);
      setImg(response?.images.map((item: any) => item.image_url));
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    getImg(id);
    response();
  }, []);

  return (
    <>
      <Button variant="contained" onClick={() => navigate("/admin-panel")}>
        <ArrowBackIcon />
      </Button>
      <div className="flex justify-center mt-[170px] items-center gap-6">
        <div className="w-[300px] ">
          {img && <img src={img[0]} alt={product?.description} />}
        </div>
        <div className="card flex flex-col items-start">
          <h2 className="text-[24px] text-slate-900 py-2 mb-4">
            {product?.product_name}
          </h2>

          <div className="flex items-center justify-center gap-8">
            <div>
              <p className="text-[20px] text-slate-600">
                Made in: {product?.made_in}
              </p>
              <p className="text-[20px] text-slate-600">
                Color: {product?.color}
              </p>
              <p className="text-[20px] text-slate-600">Size: {product?.size}</p>
              <p className="text-[20px] text-slate-600">
                Count: {product?.count}
              </p>
            </div>
            <div>
              <p className="text-[20px] text-slate-600">
                Cost: {product?.cost}$
              </p>
              <p className="text-[20px] text-slate-600">
                Discount: {product?.discount}%
              </p>
              <p className="text-[20px] text-slate-600">
                Age Range: {product?.age_min} - {product?.age_max}
              </p>
              <p className="text-[20px] text-slate-600">
                For Gender: {product?.for_gender}
              </p>
            </div>
          </div>
          <p className="text-[20px] text-slate-600 py-2 mb-4">
            Description: {product?.description}
          </p>
          <div className="flex items-center gap-3">
            <DeleteModal data={id} />
            <button className=" text-gray-500">
              <EditIcon />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default index;
