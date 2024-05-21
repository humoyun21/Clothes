import { useState, useEffect } from "react";
import Table from "@table";
import useProductsStore from "../../store/products";
import { Product } from "../../components/modals";
import GlobalPagination from "../../components/ui/pagination";
const index = () => {
  const { getData, data, isLoading, totalCount } = useProductsStore();
  const [params, setParams] = useState({
    page: 1,
    limit: 10,
  });
  const headers = [
    { title: "№", value: "index" },
    { title: "Product name", value: "product_name" },
    { title: "Color", value: "color" },
    { title: "Cost", value: "cost" },
    { title: "", value: "action" },
  ];
  const action = [{ action: "show", action2: "image" }];
  useEffect(() => {
    getData(params);
  }, [params]);
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
      <div className="flex justify-end">
        <Product />
      </div>
      <Table
        headers={headers}
        body={data}
        action={action}
        isLoading={isLoading}
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
