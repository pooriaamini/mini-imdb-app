import { useState } from 'react';
import axios from 'axios';

function Input({ getMovie,watch }) {
  const [query, setQuery] = useState('')

  
  const handlerSub = async (e) => {
    e.preventDefault()
    const response = await axios.get('http://www.omdbapi.com', {
        params: {
          apikey: '4675831f',
          t: query
        }
      })

     
    if(response.data.Response==='True'){
        getMovie(response.data)


    }
      setQuery('')
  
   }
  

  const handlerChange = (e) => {
    setQuery(e.target.value)

  }

  

  return (
    
   

    <div className={`form-div ${watch?' opacity-[.1]':''}`}>
    <div className='text'>Movie Library</div>
    <form onSubmit={handlerSub} className='form' action="">
      <input value={query} onChange={handlerChange} className='form-input' type="text" />
      <button className='form-btn'>Click</button>
    </form>
  </div>
  )
}
export default Input;