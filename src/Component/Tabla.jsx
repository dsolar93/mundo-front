import React from "react";
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';

function Tabla(props) {

  const {Calles} = props;

return(

          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 400 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell align="center">Nombre Calle</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {Calles?.map((row) => (
                <TableRow
                  key={row.id}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell align="center">{row.calle}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>

)
}

export default Tabla