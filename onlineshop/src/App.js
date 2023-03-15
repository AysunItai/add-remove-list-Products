import { useState,useEffect } from 'react';

import { BrowserRouter as Router, Routes, Route}
    from 'react-router-dom';

import './App.scss';

import ProductList from './components/MainPage/ProductList';
import ProductAdd from './components/AddPage/ProductAdd';
const url= "http://localhost:5000/api";

function App() {

const [apiData,setApiData]=useState([]);





//read the data from the api
const getApiData = async () => {
const response = await fetch(url);
const data=await response.json();
setApiData(data) 

};

useEffect(() => {
  getApiData()
}, [url]);
    
    
  const removeData = (arr) =>{
    setApiData(apiData.filter((obj)=>!arr.includes(obj.id)));

  }
  
  return (

  <Router> 
   <Routes>
     <Route exact path='/' element={<ProductList apiData={apiData} removeData={removeData}  />} />
     <Route path='/addproduct' element={<ProductAdd apiData={apiData} setApiData={setApiData}  />} />     
   </Routes>
  </Router>

  );
}

export default App;
