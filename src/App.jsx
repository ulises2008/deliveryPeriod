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
