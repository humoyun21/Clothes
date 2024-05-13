import { useState, useEffect } from "react";
import Table from "@table";
import useCategoryStore from "../../store/category";
import { Button } from "@mui/material";
import { Category } from "@modals"
const index = () => {
  const { getData, data, isLoading } = useCategoryStore();
  const [modal, setModal] = useState(false);
  const [item, setItem] = useState({});
  const [params] = useState({
    page: 1,
    limit: 10,
  });
  const editItem = (item: any) => {
    setModal(true);
    setItem(item);
  }
  const handleClose = () => {
    setModal(false);
    setItem({});
  }
  const headers = [
    { title: "№", value: "index" },
    { title: "Category name", value: "category_name" },
  ];
  const action = [{ action: "edit", action2: "delete" }];
  useEffect(() => {
    getData(params);
  }, []);
  return (
    <div>
      {modal && <Category open={modal} handleClose={handleClose} item={item} />}
      <div className="flex justify-end">
        <Button variant="contained"onClick={()=>setModal(true)}>
          Add category
        </Button>
      </div>
      <Table
        headers={headers}
        body={data}
        action={action}
        isLoading={isLoading}
        editItem={editItem}
      />
    </div>
  );
};

export default index;