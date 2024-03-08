import React, { useContext, useEffect, useState } from 'react';
import Input from './Component/Input';
import ListMovie from './Component/ListMovie';
import DetailMovie from './Component/DetailMovie';

function App() {

  const [list, setList] = useState([])

  const [nameMovie,setNameMovie]=useState([])

  const [watch,setWatch]=useState(false)

  const getMovie = (data) => {
    setList(prv => [...prv, {
      detail: data, id: Date.now(), like: false
    }])

  }
  const getNameMovie=(name)=>{
    setNameMovie(list.filter(item=>{
      return item.detail.Title==name
    }))

  }
  const delMovie=(id)=>{
    setList(prv=>prv.filter(item=>{
      return item.id!=id
    }))

  }

  

  return (

    <div className='app'>

      <Input watch={watch} getMovie={getMovie} />

    <ListMovie getNameMovie={getNameMovie}   watch={watch}  setWatch={setWatch}  delMovie={delMovie} list={list} />
    {
      watch && <DetailMovie  nameMovie={nameMovie}    watch={watch}  setWatch={setWatch}  list={list}/>
    }
  

    </div>
  )
}
export default App;



