import { useState } from "react"

function MovieShow({ movie,delMovie,setWatch, watch,getNameMovie }) {
    const [isLike,setIsLike]=useState(false)


    const handlerLike=()=>{
      setIsLike(e=>!e)
    }
  
    const handlerDel=()=>{
      delMovie(movie.id)
    }


    const handlerWatch=()=>{
        setWatch(true)
        getNameMovie(movie.detail.Title)
    }
    return (
      <div>
          <div className={`show ${watch?' opacity-[.1]':''}`}>
               <img className='poster' src={movie.detail.Poster} alt={movie.detail.Title} />
            <button className='close-btn' onClick={handlerDel}>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="#A9A9A9	" className="close">
                <path fillRule="evenodd" d="M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16ZM8.28 7.22a.75.75 0 0 0-1.06 1.06L8.94 10l-1.72 1.72a.75.75 0 1 0 1.06 1.06L10 11.06l1.72 1.72a.75.75 0 1 0 1.06-1.06L11.06 10l1.72-1.72a.75.75 0 0 0-1.06-1.06L10 8.94 8.28 7.22Z" clipRule="evenodd" />
              </svg>
            </button>
            <p className='name'>{movie.detail.Title}</p>
            <div className='rating'>
            <button onClick={handlerLike} >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"  className={isLike?'like-click':'like'}>
              <path d="m9.653 16.915-.005-.003-.019-.01a20.759 20.759 0 0 1-1.162-.682 22.045 22.045 0 0 1-2.582-1.9C4.045 12.733 2 10.352 2 7.5a4.5 4.5 0 0 1 8-2.828A4.5 4.5 0 0 1 18 7.5c0 2.852-2.044 5.233-3.885 6.82a22.049 22.049 0 0 1-3.744 2.582l-.019.01-.005.003h-.002a.739.739 0 0 1-.69.001l-.002-.001Z" />
            </svg>
            </button>
              <div className='rate'>
                <p>{movie.detail.imdbRating}</p>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#f5c518" className="w-5 h-5">
                  <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z" clipRule="evenodd" />
                </svg>
              </div>
            </div>
            <button onClick={handlerWatch} className='btn'>
              Watch options
            </button>
          </div>

         
      </div>
      
    )
  }
  
  
  
export default MovieShow;  