import MovieShow from "./MovieShow";
function ListMovie({ list,delMovie,watch,setWatch,getNameMovie }) {
    return (
      <div className='list'>
        {
          list.map((item) => <MovieShow getNameMovie={getNameMovie}   watch={watch}  setWatch={setWatch} key={item.id} movie={item} delMovie={delMovie} />)
        }
  
      </div>
    )
  }

  export default ListMovie;