import './App.css';
import React,{useEffect, useState} from 'react';


function App() {
  const [crud, setCrud] = useState([]);
  const[value,setValue]=useState('')


  useEffect(()=>{
    fetch('https://northwind.vercel.app/api/orders')
    .then(res=>res.json())
    .then(data=>{
      setCrud(data)
    })

    },[]);
    
    const handleDelete=(id)=>{
      let newCrud=crud.filter(i=>i.id !== id)
      setCrud(newCrud
        
        )
        
    }
  return (
      <>
    <div className='search_div'>
      <label>Search</label>
      <input type={'text'} placeholder='Search' onChange={(e)=>setValue(e.target.value)} />
    </div>

      <table  id="customers">
        <thead>
        <tr>
          <th>Id</th>
          <th>Name</th>
          <th>CustomerId</th>
          <th>OrderDate</th>
          <th>RequiredDate</th>
          <th>Delete</th>
        </tr>
        </thead>
        <tbody>
           {
              crud.filter(b=>b.shipName.toLowerCase().includes(value)).map((a,key)=>{
              return(
                <tr key={a.id}>
                  <td>{a.id}</td>
                  <td>{a.shipName}</td>
                  <td>{a.customerId}</td>
                  <td>{a.orderDate}</td>
                  <td>{a.requiredDate}</td>
                  <td><button onClick={()=>handleDelete(a.id)}><i class="fa-solid fa-trash-can"></i></button></td>
                </tr>
              )
            })
           }
        </tbody>
      </table>

   
      </>
  );
}

export default App;
