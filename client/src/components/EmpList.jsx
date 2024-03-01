import React from 'react'
import { useEmp } from '../context/EmpContext'
import { TableContainer, Table, TableHead, TableBody, TableCell, Paper, TableRow , TablePagination } from '@mui/material'



function EmpList() {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const { empData } = useEmp()

  const setId = (date) => {
    let id = date.toString();
    let newId = id.substr(8, id.length - 1);
    return newId
  }
  const handleChangePage =(event , newPage)=>{
setPage(newPage)
  }
  const handleChangeRowsPerPage = (event) =>{
    setRowsPerPage(+event.target.value);
    setPage(0);
  }

  return (
    <>
     
      <div>
        <TableContainer component={Paper}>
          <Table aria-label='simple table'>
            <TableHead>
              <TableRow>
                <TableCell>ID</TableCell>
                <TableCell>NAME</TableCell>
                <TableCell>DEPARTMENT</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {
                empData
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((singleemp) => (
                  <TableRow key={singleemp._id}>
                    <TableCell>{singleemp._id}</TableCell>
                    <TableCell>{singleemp.empName}</TableCell>
                    <TableCell>{singleemp.empDepartment}</TableCell>
                  </TableRow>
                ))
              }
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
        rowsPerPageOptions={[10]}
        component="div"
        count={empData.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
         onRowsPerPageChange={handleChangeRowsPerPage}
      />
      </div>
    </>

  )
}

export default EmpList