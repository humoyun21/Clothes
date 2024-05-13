import {
  Box,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { Skeleton } from "@mui/material";
import { TableProps } from "@global-interface";
import VisibilityIcon from "@mui/icons-material/Visibility";
import DeleteModal from "../modals/user-delete";
import { UserUpdate } from "../modals";
import edit from "../../assets/edit-icon.svg";

const GlobalTable = ({ headers, body, isLoading, action, editItem }: TableProps) => {
  return (
    <>
      
      <Box sx={{ width: "100%" }}>
        <Paper sx={{ width: "100%", mb: 2 }}>
          <TableContainer>
            <Table
              sx={{ minWidth: 750 }}
              aria-labelledby="tableTitle"
              size="medium"
            >
              <TableHead>
                <TableRow>
                  {headers?.map((header, index) => (
                    <TableCell key={index}>{header.title}</TableCell>
                  ))}
                </TableRow>
              </TableHead>
              <TableBody>
                {isLoading
                  ? Array.from(new Array(5)).map((_, index) => (
                      <TableRow key={index}>
                        {headers?.map((_, i) => (
                          <TableCell key={i}>
                            <Skeleton />
                          </TableCell>
                        ))}
                      </TableRow>
                    ))
                  : body?.map((items, index) => (
                      <TableRow key={index}>
                        {headers?.map((header, i) => (
                          <TableCell
                            key={i}
                            className={items[header.value]?.class}
                          >
                            {items[header.value]}
                          </TableCell>
                        ))}
                        {action?.map((item, i) => (
                          <TableCell key={i}>
                            <div className="flex gap-2">
                              {item.action == "show" ? (
                                <button className="px-[6px] py-[7px] border border-gray-300 active:bg-gray-300 duration-150 bg-gray-200 rounded-md">
                                  <VisibilityIcon />
                                </button>
                              ) : items.id ? (
                                <UserUpdate data={items} />
                              ) : (
                                <img
                                  className="border border-gray-300 p-[9px] rounded-md active:bg-gray-300 duration-150 bg-gray-200 cursor-pointer"
                                  src={edit}
                                  alt="delate"
                                  onClick={() => editItem(items)}
                                />
                              )}
                              {item.action2 == "image" ? (
                                <button className="px-[6px] py-[7px] font-medium text-[14px] border border-gray-300 active:bg-gray-300 duration-150 bg-gray-200 rounded-md">
                                  Set image
                                </button>
                              ) : (
                                <DeleteModal data={items} />
                              )}
                            </div>
                          </TableCell>
                        ))}
                      </TableRow>
                    ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Paper>
      </Box>
    </>
  );
};

export default GlobalTable;
