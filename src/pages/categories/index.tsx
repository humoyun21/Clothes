import { useState, useEffect } from "react";
import Table from "@table";
import useCategoryStore from "../../store/category";
import { Button } from "@mui/material";
import { Category } from "@modals"
import GlobalPagination from "../../components/ui/pagination";
const index = () => {
  const { getCategory, data, isLoading, totalCount } = useCategoryStore();
  const [modal, setModal] = useState(false);
  const [item, setItem] = useState({});
  const [params, setParams] = useState({
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
    getCategory(params);
  }, []);
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const page = params.get("page");
    const pageNumber = page ? parseInt(page) : 1;
    setParams((prevParams) => ({
      ...prevParams,
      page: pageNumber,
    }));
  }, [location.search]);
  const changePage = (value: number) => {
    setParams((prevParams) => ({
      ...prevParams,
      page: value,
    }));
  };
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
      <GlobalPagination
        totalCount={totalCount}
        page={params.page}
        setParams={changePage}
      />
    </div>
  );
};

export default index;
