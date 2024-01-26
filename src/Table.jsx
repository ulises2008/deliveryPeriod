import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

export default function DenseTable(props) {
  const classes = useStyles();
  const {data} = props

  return (
    <TableContainer component={Paper}>
      <Table className= 'table' size="normal"  >
        <TableHead>
          <TableRow>
            <TableCell align="center" name= 'id'>OrderNO</TableCell>
            <TableCell align="center" name= 'phone'>ItemID</TableCell>
            <TableCell align="center" name= 'name'>Order name</TableCell>
            <TableCell align="center" name= 'email'>Item description</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
        {data.map((data) => (
            <TableRow key={props.id}>
              <TableCell align="center" > <a href="#">{data.id }</a></TableCell>
              <TableCell align="center"><a href="#">{data.phone}</a></TableCell>
              <TableCell align="center"><a href="#" >{data.name}</a></TableCell>
              <TableCell align="center"><a href="#">{data.email}</a></TableCell>
            </TableRow>
          ))}
        </TableBody>
        
      </Table>
    </TableContainer>
  );
}
