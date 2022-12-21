import React from "react";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function createData(
  Email: string,
  Phone: number,
  Time: string,
  Foods:string,
) {
  return { Email, Phone, Time,Foods };
}

const rows = [
  createData('azaan@gmail.com', 159169169,'6am-3pm','snacks'),
  createData('azggn@gmail.com', 159169111,'6am-3pm','Fish Items'),
  createData('Ginger@yahoo.com', 356123456, '5am - 10pm','vegeterian'),
];

export default function Contact() {
  
  return (
   <div ><h1>Contact us</h1>  
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 400 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Email</TableCell>
            <TableCell align="right">Phone</TableCell>
            <TableCell align="right">Time</TableCell>
            <TableCell align="right">Foods</TableCell>
           
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.Email}
              
            //   sx={{'&:first-child td':{border:1}, '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.Email}
              </TableCell>
              
              <TableCell align="right">{row.Phone}</TableCell>
              <TableCell align="right">{row.Time}</TableCell>
               <TableCell align="right">{row.Foods}</TableCell> 
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div> 
  );
}
