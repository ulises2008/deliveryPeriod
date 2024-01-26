import DenseTable from './Table';
import './App.css'
import ButtonAppBar from './AppBar';
import React, { useEffect, useState } from 'react';
import Pagination from '@mui/material/Pagination'

export function App() {
  const [data, setData] = useState([]);
  const [dataPerPage, setDataPerPage] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPage, setTotalPage ]= useState(1)

  const url = 'https://jsonplaceholder.typicode.com/users';
  const showData = async () => {
    const response = await fetch(url);
    const responseJson = await response.json();
   // console.log(responseJson);
    setTotalPage(responseJson.length/3)
    setDataPerPage(responseJson.slice(3))
    setData(responseJson);
  };

  const getDataPerPage =() =>{
    if(currentPage===1){
      setDataPerPage(data.slice(3))
    }else{
     const numberImpar = 2*(currentPage-1)-1
      const initSlice = currentPage + numberImpar
      setDataPerPage(data.slice(initSlice,(initSlice +3)))
    }
  }


  useEffect(() => {
    showData();
  }, []);

  useEffect(() => {
    getDataPerPage();
  }, [currentPage]);


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
        <DenseTable data= {dataPerPage}  />
      </div>
<div>

</div>

      <div className="página">
      <Pagination page ={currentPage} setPage = {setCurrentPage} maximo = {totalPage}></Pagination>
      </div>

    </>

  );
}
