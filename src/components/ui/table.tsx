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
import DeleteModal from "../modals/delete-user";
import { UserUpdate } from "../modals";
import edit from "../../assets/edit-icon.svg";
import VisibilityIcon from "@mui/icons-material/Visibility";
import MediaUpload from "../ui/media-upload";
import { useNavigate, useSearchParams } from "react-router-dom";

const GlobalTable = ({
  headers,
  body,
  isLoading,
  action,
  editItem,
}: TableProps) => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams()
  const page = Number(searchParams.get('page')) || 1
  const limit = Number(searchParams.get('limit')) || 10
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
                      <TableCell>
                        {page * limit - (limit - 1) + index}
                      </TableCell>
                      {headers?.map((header, i) => (
                        i >= 1 &&
                        <TableCell
                          key={i}
                          className={items[header.value]?.class}
                        >
                          {items[header.value]}
                        </TableCell>
                      ))}
                      {action?.map((item, i) => (
                        <TableCell key={i}>
                          <div className="flex gap-4 items-center">
                            {item.action == "show" ? (
                              <button
                                onClick={() => navigate(`/admin-panel/${items.product_id}`)}
                                className="px-[6px] py-[7px] border border-gray-300 active:bg-gray-300 duration-150 bg-gray-200 rounded-md"
                              >
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
                              <MediaUpload data={items.product_id} />
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
