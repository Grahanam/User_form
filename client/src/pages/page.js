import React,{useEffect,useState} from 'react'
import '../App.css'
import {Link} from 'react-router-dom'
function Page() {
  let [data,setData]=useState([])
  let getData=()=>{
    // let url='http://3.110.190.32/api/get/'
    let url='http://localhost:8000/api/get/'
    fetch(url)
    .then(response=>response.json())
    .then(data=>
        setData(data)
     )
}

useEffect(()=>{
  getData()
},[])
  return (
    <>
    <h1>FORM DATA</h1>
    <Link to='/'>Open Form</Link>
    <ul>
    {data.map((value,index)=>{
      return(
      <div key={value.id}>
      <li className='data-container'>
        <div className='container'>{value.name}</div>
        <div ><div className='container'>{value.email}</div>
        <div className='data-table'>
        <div className='container'>{value.date.split('T')[0]}</div>
        <div className='container'>{value.number}</div>
        </div>
        </div>
      </li> 
            
      <br/>
      </div>
      
    )})}
    </ul>
    </>
  )
}

export default Page