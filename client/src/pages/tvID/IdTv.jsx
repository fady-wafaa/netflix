import { useSelector , useDispatch } from 'react-redux';
import { useEffect } from "react";
import { getTvID } from "../../redux/actions/TvShows.action";

const IdTv = ({match , history}) => {

    const dispatch = useDispatch();

    const getIdTv = useSelector(state => state.getTvID)

    const { loading , tv , error } = getIdTv;


    useEffect(()=>{
        if(tv && match.params.id !== tv._id){
            dispatch(getTvID(match.params.id))
        }
    },[dispatch, tv , match])
  
    return (
        
            <div className="item" >
              
              {loading ? (<h1>loading .......</h1>) : error ? ( <h1>error</h1>) :  
              (
                  <>
                
                      <div className="all_data" key={tv._id} >
                          <div className="bac"></div>
                          <img className="w-100 img_detl" src={"https://image.tmdb.org/t/p/original" + tv.backdrop_path} alt="" />
                          <div className="data_post">
                                  <div className="post_img">
                                      <img className="" src={"https://image.tmdb.org/t/p/original" + tv.poster_path} alt="" />
                                  </div>
                                   <div className="post">
                                      <h1>{tv.original_title}</h1>
                                      <p>{tv.overview}</p>
                                  <div className="detals">

                                      <div className="eye">
                                      <i className="fas fa-eye"></i>
                                      {   ( <h5>{Number(tv.popularity).toFixed()}</h5>)}
                                      </div>

                                      <div className="vote">
                                      <i className="fas fa-star"></i>
                                          <h5>{tv.vote_average}</h5>
                                      </div>

                                      <div className="language">
                                      <i className="fas fa-language"></i>
                                          <h5>{tv.original_language}</h5>
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

export default IdTv
