import * as React from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import TypeSelector from "./components";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { height, textAlign } from "@mui/system";
import ToolTip  from "components/ToolTip";
import Card  from "components/Card";
import Button from "components/Button";
import { Backdrop } from "@mui/material";
import SearchBox from "components/SearchBox";
import * as FileSaver from "file-saver";
import * as XLSX from "xlsx";
import { visuallyHidden } from "@mui/utils";
import Box from "@mui/material/Box";
import TableSortLabel from "@mui/material/TableSortLabel";

const theme = createTheme({
  typography: { fontFamily: "Montserrat !important" },
  components: {
    // Name of the component
    // MuiTable: {
    //   styleOverrides: {
    //     // Name of the slot
    //     root: {
    //       // Some CSS
    //      borderLeft:"1px solid black"
    //     },

    //   },
    // },
    MuiTableBody: {
      styleOverrides: {
        root: {
          fontFamily: "Source Sans Pro !important",
        },
      },
    },
    MuiTableSortLabel: {
      styleOverrides: {
        root: {
          "&.Mui-active": {
            color: "white",
          },
          "&:hover": {
            color: "white",
          },
        },
        active: {},
        icon: {
          color: "inherit !important",
          // color:"red"
        },
      },
    },
    MuiTableHead: {
      styleOverrides: {
        // Name of the slot
        root: {
          // Some CSS
          backgroundColor: "#0EA5E9",
          color: "white",
        },
      },
    },

    MuiTableCell: {
      styleOverrides: {
        stickyHeader:{
          backgroundColor: "#0EA5E9",
          color: "white",
        },
        // Name of the slot
        head: {
          textTransform: "capitalize",
          color: "white",
          padding: "12px 6px",
        },
        root: {
          // Some CSS
          // color:"white",
          padding: "6px",
          border: "1px solid #ddd",
          lineHeight: "15px",
        },
      },
    },
  },
});

export default function CustomTable({
  headCells,
  rows,
  Filters,
  isSearch,
  isDownloadable,
  fileName,
  showRecordPerPage,
  defaultSortColumn,
  spanningRow,
  navigationPath,
}) {
  const [showFilters, setShowFilters] = React.useState(false);
  const [order, setOrder] = React.useState("asc");
  const [orderBy, setOrderBy] = React.useState(defaultSortColumn);
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const EnhancedTableHead = (props) => {
    const {
      onSelectAllClick,
      order,
      orderBy,
      numSelected,
      rowCount,
      onRequestSort,
    } = props;
    const createSortHandler = (property) => (event) => {
      onRequestSort(event, property);
    };

    return (
      <TableHead>
        <TableRow>
          {headCells.map((head, index) => (
            <TableCell
              key={head.id}
              align="left"
              sortDirection={orderBy === head.key ? order : false}
            >
              <p
                style={{
                  fontWeight: "bold",
                  textAlign: head.type !== "text" && "center",
                }}
              >
                {head.type == "text" ? (
                  <TableSortLabel
                    className=""
                    active={orderBy === head.key}
                    direction={orderBy === head.key ? order : "asc"}
                    onClick={createSortHandler(head.key)}
                  >
                    {head.label}
                    {orderBy === head.key ? (
                      <Box component="span" sx={visuallyHidden}>
                        {order === "desc"
                          ? "sorted descending"
                          : "sorted ascending"}
                      </Box>
                    ) : null}
                  </TableSortLabel>
                ) : (
                  head.label
                )}
              </p>
            </TableCell>
          ))}
        </TableRow>
      </TableHead>
    );
  };
  const descendingComparator = (a, b, orderBy) => {
    if (b[orderBy] < a[orderBy]) {
      return -1;
    }
    if (b[orderBy] > a[orderBy]) {
      return 1;
    }
    return 0;
  };

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === "asc";
    console.log(orderBy, property, order);
    console.log(isAsc);
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
  };

  const getComparator = (order, orderBy) => {
    return order === "desc"
      ? (a, b) => descendingComparator(a, b, orderBy)
      : (a, b) => -descendingComparator(a, b, orderBy);
  };
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };
  const handleFilterCLick = () => {
    setShowFilters(!showFilters);
  };

  const fileType =
    "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8";
  const fileExtension = ".xlsx";

  const exportToCSV = (rows, fileName) => {
    const ws = XLSX.utils.json_to_sheet(rows);
    const wb = { Sheets: { data: ws }, SheetNames: ["data"] };
    const excelBuffer = XLSX.write(wb, { bookType: "xlsx", type: "array" });
    const data = new Blob([excelBuffer], { type: fileType });
    FileSaver.saveAs(data, fileName + fileExtension);
  };

  return (
    <Paper elevation={0} sx={{ width: '100%', overflow: 'hidden' }} >
      <div className="relative">
        <div className="flex space-x-4 justify-end">
          {isSearch && (
            <div className="py-2">
              <SearchBox />
            </div>
          )}
          {isDownloadable && (
            <div
              className="flex items-center space-x-2 "
              onClick={(e) => exportToCSV(rows, fileName)}
            >
              <ToolTip label="Download">
                <div>
                  <svg
                    class="h-5 w-5 text-gray-400 cursor-pointer"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                    />
                  </svg>
                </div>
              </ToolTip>
            </div>
          )}
        </div>
      </div>
      <ThemeProvider theme={theme}>
        <TableContainer sx={{ maxHeight: 150 }}  aria-label="sticky table">
          <Table stickyHeader>
            <EnhancedTableHead
              order={order}
              orderBy={orderBy}
              onRequestSort={handleRequestSort}
              rowCount={rows.length}
            />

            <TableBody>
              {rows
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .sort(getComparator(order, orderBy))
                .map((row, rowIndex) => (
                  <TableRow className={row.classes} key={rowIndex}>
                    {headCells.map((head, headIndex) => (
                      <TableCell
                        key={headIndex}
                        style={{
                          textAlign: row[head.key] === undefined && "center",
                        }}
                      >
                        {/* params consist of ID, type of data, data, options */}
                        <TypeSelector
                          id={row.id}
                          label={head.type}
                          value={row[head.key]}
                          options={row[head.options]}
                          navigationPath={head.navigationPath}
                        />
                      </TableCell>
                    ))}
                  </TableRow>
                ))}
              {spanningRow?.map((row) => (
                <TableRow>
                  {row.map((rowData) => (
                    <TableCell colSpan={rowData.colspan}>
                      <TypeSelector
                        fieldLabel={rowData.label}
                        // id={row.id}
                        readOnly={rowData.readOnly}
                        value={rowData.value}
                        label={rowData.type}
                        options={rowData.value}
                      />
                    </TableCell>
                  ))}
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        {showRecordPerPage && (
          <TablePagination
            rowsPerPageOptions={[5, 10, 15, { value: -1, label: "All" }]}
            component="div"
            count={rows.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            labelRowsPerPage={
              <div className="text-regular">Records per page</div>
            }
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
        )}
      </ThemeProvider>
    </Paper>
  );
}
