import React, { useState } from 'react'
import Pagination from '@mui/material/Pagination'

export const Pagination = (page) => {




  const handleChange = (e, p) => {
    console.log(e, p)
    setPage(p)
  }
  return (
    <div>
              <Pagination count={7} b onchange ={handleChange} onClick = {nextPage}></Pagination>

    </div>
  )
}








// import React from 'react';
// import { makeStyles } from '@material-ui/core/styles';
// import Typography from '@material-ui/core/Typography';
// import Pagination from '@material-ui/lab/Pagination';

// const useStyles = makeStyles((theme) => ({
//   root: {
//     '& > * + *': {
//       marginTop: theme.spacing(2),
//     },
//   },
// }));

// export default function PaginationControlled() {
//   const classes = useStyles();
//   const [page, setPage] = React.useState(1);
//   const handleChange = (event, value) => {
//     setPage(value);
//   };

//   return (
//     <div className={classes.root}>
//       <Typography>Page: {page}</Typography>
//       <Pagination count={7} page={page} onChange={handleChange} />
//     </div>
//   );
// }
