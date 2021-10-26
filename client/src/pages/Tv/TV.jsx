import { useEffect } from 'react'
import { useDispatch , useSelector} from 'react-redux';
import TVcomb from '../../components/tv/TVcomb';
import { getDataTV as listTv } from './../../redux/actions/TvShows.action';



const TV = () => {

    const dispatch = useDispatch();

    const getDataTV = useSelector(state => state.getDataTV);
    const { loading , tv , error } = getDataTV ;
    // console.log('fad',tv)

    useEffect(()=>{
        dispatch(listTv())
    },[dispatch])
    return (
        <>
        <div className="container my-5">
            <div className="row movies_falms">
                {loading ? (<h1 className="loading">loading................</h1>) : error ? ( <h2>{error}</h2>) : (tv.map((x) =>  <TVcomb
                    id={x._id}
                    name={x.name}
                    img={x.poster_path}
                    language={x.original_language}
                    des={x.overview}
                    vol={x.vote_average}
                    /> )) }
          
            </div>
    </div>
</>
    )
}

export default TV
