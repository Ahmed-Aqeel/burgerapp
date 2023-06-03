import React,{ useState, useEffect} from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';




function App() {
  const [ingred,setIngred]=useState([])
  const [price,setPrice]=useState(0)
  const [meat, setMeat]=useState(0)
  const [salad,setSalad]=useState(0)
  const[cheese, setCheese]=useState(0)
  const [data,setData]=useState([])




const findItem=(item)=>{
  let i=ingred.length-1
  let y=0
  let ingred_updated=[]
  while(y===0 && i>0){
    if(ingred[i]===item){
      ingred_updated=ingred.splice(i)
      y=1
    }
    i--
  }
  setIngred(ingred_updated)
}
  

  function addMeat(){
    setMeat(meat+1)
    setIngred([...ingred,<div className='item meat'><h2>Meat</h2></div>])
    setPrice(price+2)
  }
function removeMeat(){
    
    if(meat>0){
      setPrice(price-2)
      setMeat(meat-1)
      findItem(<div className='item meat'><h2>Meat</h2></div>)
      
      
    
    }
    else{
     
      setMeat(0)
    }
    
  }
  function addSalad(){
    setSalad(salad+1)
    setIngred([...ingred,<div className='item salad'><h2>Salad</h2></div>])
    setPrice(price+0.5)
  }
  function removeSalad(){
   
    if(salad>0){
      setPrice(price-0.5)
      setSalad(salad-1)
    }
    else{
     
      setSalad(0)
    }
  }
  function addCheese(){
    setCheese(cheese+1)
    setIngred([...ingred,<div className='item cheese'><h2>Cheese</h2></div>])
    setPrice(price+1)
  }
  function removeCheese(){
  
    if(cheese>0){
      setPrice(price-1)
      setCheese(cheese-1)
    }
    else{
     
      setCheese(0)
    }
  }
  console.log(ingred)
  
  return (
    <div className="App">
     <div className='burger'>
     <div className='item bun'><h2>Burger Bun</h2></div>
      {ingred}
     <div className='item bun'><h2>Burger Bun</h2></div>
     </div>
     
     
     <div className='order'>
      <div><h3>Price: ${price}</h3></div>
      <div><h3>Salad: {salad}</h3> <button onClick={removeSalad}>Less</button>  <button onClick={addSalad}>more</button> </div>
      <div><h3>Cheese: {cheese}</h3> <button onClick={removeCheese}>Less</button>  <button onClick={addCheese}>more</button> </div>
      <div><h3>Meat: {meat}</h3> <button onClick={removeMeat}>Less</button>  <button onClick={addMeat}>more</button> </div>
     </div>


 
    
     
      {data}   
    </div>
  );
}

export default App;
