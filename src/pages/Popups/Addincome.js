import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles({
  table: {
    minWidth: 400
  },
  tableContainer: {
    width: 400
  }, 
  fontSize: {
      fontSize: 16
  }
});

function Addincome(props) {
  const classes = useStyles();
  return (
      <div>
    <TableContainer component={Paper} className={classes.tableContainer}>
      <Table className={classes.table} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell align="left" className={classes.fontSize}>Transaction Details</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableCell>Date</TableCell>
            <TableCell>{}will be later</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Category</TableCell>
            <TableCell>{}will be later</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Amount</TableCell>
            <TableCell>{}will be later</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
    </div>
  );
}

export default Addincome;
