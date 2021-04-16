import './App.css';
import {useState,useEffect} from 'react'



function App() {

  const [country, setCountry] = useState('N.A.')
  const [capital, setCapital] = useState('Berlin')

  //step 2
   let ctrl = new AbortController()
const loadData = async ()=>{
      //step 2 . Move everything to the setTimeout. show the error. 

      //step 3. put an async in the setTimeout. But there is an error 

      //step4 , put a try catch
      

      setTimeout( async()=> {  
                  try{                         
                        const response = await fetch(`https://restcountries.eu/rest/v2/capital/${capital}`, {signal:ctrl.signal})
                        const jsonObj = await response.json()                    
                        setCountry(jsonObj[0].name)
                  }
                  catch(err)
                  {
                    console.log(err)
                  }
               } , Math.random()*10000)
      
    }


useEffect(() => {      

   loadData();
    // clean up function.
   return () => {
      //step 2
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

export default App;
