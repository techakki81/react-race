import './App.css';
import {useState,useEffect} from 'react'



function App1() {

  const [country, setCountry] = useState('N.A.')
  const [capital, setCapital] = useState('Berlin')

  //step1
   let ctrl = new AbortController()
const loadData = async ()=>{
  
       //step1 , put signal in controller . This is like not writing the code itself...
      const response = await fetch(`https://restcountries.eu/rest/v2/capital/${capital}`, {signal:ctrl.signal})
      const jsonObj = await response.json()            
      setTimeout( ()=> { 
                          setCountry(jsonObj[0].name)
                        } , Math.random()*10000)
      
    }


useEffect(() => {      

   loadData();
    // clean up function.
   return () => {
      //step 1
      ctrl.abort()
        
   }
}, [capital])

  
  return (
    <div>
       <button  onClick={()=>setCapital("Berlin")}  >Berlin</button>      
       <button  onClick={()=>setCapital("Paris")}  >Paris</button>      
       <button  onClick={()=>setCapital("Madrid")}  >Madrid</button>   
       <div> 
         {country}
      </div>  
    </div>
  );
}

export default App1;
