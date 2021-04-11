import './App.css';
import {useState,useEffect} from 'react'

function App() {

  const [country, setCountry] = useState('N.A.')
  const [capital, setCapital] = useState('Berlin')

let cancelled = false
const loadData = async ()=>{
  
      const response = await fetch(`https://restcountries.eu/rest/v2/capital/${capital}`)
      const jsonObj = await response.json()            
      setTimeout( ()=> {                       
                         if(!cancelled)
                          setCountry(jsonObj[0].name)
                      } , Math.random()*10000)
      
    }


useEffect(() => {      

   loadData();
    // clean up function.
   return () => {
        cancelled = true
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

export default App;
