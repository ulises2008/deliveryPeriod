import DenseTable from './Table';
import './App.css'
import ButtonAppBar from './AppBar';
import React, { useEffect, useState } from 'react';
import Pagination from '@mui/material/Pagination'

export function App() {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [perPage, setPerPage ]= useState(3)

  const maximo = data.length / perPage;


  const url = 'https://jsonplaceholder.typicode.com/users';
  const showData = async () => {
    const response = await fetch(url);
    const responseJson = await response.json();
   // console.log(responseJson);
    setData(responseJson);
  };


  useEffect(() => {
    showData();
  }, []);


 


// const itemsPerPage = 3;
// const totalItems = 20; //7 páginas * 3 elementos por página

// const Pagination = () => {
//   const [currentPage, setCurrentPage] = useState(1);

//   const totalPages = Math.ceil(totalItems / itemsPerPage);

//   const renderItems = () => {
//     const startIndex = (currentPage - 1) * itemsPerPage;
//     const endIndex = startIndex + itemsPerPage;

//     const items = [];
//     for (let i = startIndex; i < endIndex && i < totalItems; i++) {
//       items.push(<div key={i}>Elemento {i + 1}</div>);
//     }

//     return items;
//   };

//   const handlePageChange = (newPage) => {
//     if (newPage >= 1 && newPage <= totalPages) {
//       setCurrentPage(newPage);
//     }
//   };

//   const renderPaginationNumbers = () => {
//     const numbers = [];
//     for (let i = 1; i <= totalPages; i++) {
//       numbers.push(
//         <div
//           key={i}
//           className={`pagination-number ${i === currentPage ? 'active' : ''}`}
//           onClick={() => handlePageChange(i)}
//         >
//           {i}
//         </div>
//       );
//     }
//     return numbers;
//   };


  


  return (
    <>
      <ButtonAppBar />

      <p>Periodo de fecha de entrega  </p>
      <section className='data-of-periodo'>
        <input type="date" name="fecha-inicial" id="fecha inicial" />
        <p>-</p>
        <input type="date" name="fecha-inicial" id="fecha inicial" />
        <button>Buscar</button>
      </section>
      <div className='main-container'>
        <DenseTable data= {data}  />
      </div>
<div>

</div>

      <div className="página">
      <Pagination page ={page} setPage = {setPage} maximo = {maximo}></Pagination>
      </div>

    </>

  );
}
