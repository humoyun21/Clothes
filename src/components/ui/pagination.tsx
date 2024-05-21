import * as React from "react";
import Stack from "@mui/material/Stack";
import { Pagination } from "@mui/material";
import { useNavigate, useLocation } from "react-router-dom";
import { PaginationProps } from "@global-interface";
export default function GlobalPagination(props: PaginationProps) {
  const location = useLocation();
  const navigate = useNavigate();
  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    props.setParams(value);
    const searchParams = new URLSearchParams(location.search);
    searchParams.set("page", `${value}`);
    navigate(`?${searchParams}`)
    console.log(event);
  };

  return (
    <Stack spacing={2}>
      <Pagination count={props.totalCount} page={props.page} onChange={handleChange} />
    </Stack>
  );
}
