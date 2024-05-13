import Table from "@table";
import { useState, useEffect } from "react";
import { Product } from "../../components/modals";
import useProductsStore from "../../store/products";
const index = () => {
  const { getData, data, isLoading } = useProductsStore();
  const [params] = useState({
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
    </div>
  );
};

export default index;