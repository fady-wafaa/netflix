

import { useSelector , useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { MoviesID } from '../../redux/actions/falms.action';








const MoviesId = ({match , history}) => {

    const  dispatch = useDispatch()

    const getMoives = useSelector(state => state.MoviesID)
    const { loading , movie , error } = getMoives ;

  useEffect(() => {
     if(movie && match.params.id !== movie._id){
        dispatch(MoviesID(match.params.id))
     }
    
},[ dispatch,movie, match])





  
return (
    
    <div className="item" >
                {loading ? (<h1>loading .......</h1>) : error ? ( <h1>error</h1>) :
                (
                  
                    <>
                        <div className="all_data" key={movie._id} >
                            <div className="bac"></div>
                            <img className="w-100 img_detl" src={"https://image.tmdb.org/t/p/original" + movie.backdrop_path} alt="" />
                            <div className="data_post">
                                    <div className="post_img">
                                        <img className="" src={"https://image.tmdb.org/t/p/original" + movie.poster_path} alt="" />
                                    </div>
                                     <div className="post">
                                        <h1>{movie.original_title}</h1>
                                        <p>{movie.overview}</p>
                                    <div className="detals">

                                        <div className="eye">
                                        <i className="fas fa-eye"></i>
                                 {   ( <h5>{Number(movie.popularity).toFixed()}</h5>)}
                                        </div>

                                        <div className="vote">
                                        <i className="fas fa-star"></i>
                                            <h5>{movie.vote_average}</h5>
                                        </div>

                                        <div className="language">
                                        <i className="fas fa-language"></i>
                                            <h5>{movie.original_language}</h5>
                                        </div>


                                    </div>
                                  </div>

                            </div>
                        </div>


                    </>
                )

                }
            </div>
    )
}

export default MoviesId
