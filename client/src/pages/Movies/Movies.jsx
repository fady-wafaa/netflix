import { useEffect } from "react"
import { useDispatch , useSelector } from "react-redux"
import Newfalm from "../../components/Movies/NewFalm"
import { getMovies as listMoives } from "../../redux/actions/falms.action"





const Movies = () => {

    const dispatch = useDispatch();

    const getMoives = useSelector(state => state.getMovies)
    const { loading , movies , error } = getMoives ;
       
        // let [data] = movies.results
    useEffect(() => {
        dispatch(listMoives())
    },[dispatch])

console.log(movies)

    return (
        <>
                <div className="container my-5">
                    <div className="row movies_falms">
                        {loading ? (<h1 className="loading">loading................</h1>) : error ? ( <h2>{error}</h2>) : (movies.map((x) =>  <Newfalm 
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

export default Movies
