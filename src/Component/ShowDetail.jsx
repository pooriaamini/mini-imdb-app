import { useEffect } from "react";
function ShowDetail({ movie }) {


    useEffect( function(){

        if(!movie.detail.Title) return;

        document.title=`Movie | ${movie.detail.Title}`

        return function(){
            document.title="MovieLibrary"
        }
    
      } ,[movie.detail.Title])


    return (

        <div className="show-detail">

            <div className="header">

                <img className="header-img" src={movie.detail.Poster} alt={movie.detail.Title} />

                <div className="header-sub">

                    <div className="name">

                        <div className="title">{movie.detail.Title}</div>

                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="svg">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                        </svg>

                    </div>

                    <div className="year">

                        <div className="sal">

                            {movie.detail.Year}


                        </div>

                        <p className="d">.</p>

                        <div className="time">
                            {movie.detail.Runtime}


                        </div>

                        <p className="d">.</p>

                        <div className="age">

                            {movie.detail.Rated}

                        </div>

                    </div>

                    <div
                        className="Genre">

                        {movie.detail.Genre}
                    </div>




                    <div className="rating">


                        <div className="btn1">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#f5c518" className="w-4 h-4">
                                <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z" clipRule="evenodd" />
                            </svg>
                            <div className="rate">
                                {movie.detail.imdbRating}/10
                            </div>
                        </div>

                        <button className="btn">

                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#5799ef " className="svg">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
                            </svg>



                            <p>Rate</p>

                        </button>

                    </div>

                </div>



            </div>

           

            <div className="main">

                <div className="plot">
                {
                    movie.detail.Plot

                }

                </div>

                <div className="star">

                    Starring {movie.detail.Actors}

                </div>

                <div className="director">Directed by {movie.detail.Director}</div>

                

            </div>

            <div className="footer">
            <button   className='btn'>
              Add to watch
            </button>

            </div>




        </div>
    )
}

export default ShowDetail;