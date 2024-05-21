import { useEffect, useState } from "react";
import Table from "@table";
import useUsersStore from "../../store/users";
import { User } from "../../components/modals";
import { IconButton, InputBase, Paper } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
const index = () => {
  const { getData, data, isLoading } = useUsersStore();
  const [params] = useState({
    page: 1,
    limit: 10,
  });
  const headers = [
    { title: "№", value: "index" },
    { title: "First name", value: "first_name" },
    { title: "Last name", value: "last_name" },
    { title: "Age", value: "age" },
    { title: "", value: "action" },
  ];
  const action = [
    {action: "edit", action2: "del" },
  ]
  
  useEffect(() => {
    getData(params);
  }, [params]);
  return (
    <>
      
      <div className="py-3 flex justify-between items-center">
        <div className="w-96">
          <Paper
            component="form"
            sx={{
              p: "2px 4px",
              display: "flex",
              alignItems: "center",
              width: "400",
            }}
          >
            <InputBase
              sx={{ ml: 1, flex: 1 }}
              placeholder="Qidiruv"
              inputProps={{ "aria-label": "Search google maps" }}
            />
            <IconButton type="button" sx={{ p: "10px" }} aria-label="search">
              <SearchIcon />
            </IconButton>
          </Paper>
        </div>
        <User />
      </div>
      <Table headers={headers} body={data} action={action} isLoading={isLoading} />
    </>
  );
};

export default index;
