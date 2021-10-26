
import { Link } from 'react-router-dom';

const Newfalm = ({id , name , img , language , des , vol}) => {
    return (
        <>
    
                    <Link className="col-md-3 my-3 card_item" key={id} to={`/MoviesId/${id}`}>
                        <div className="item">
                            <div className="vote">
                                <span className="lan"><h6>{language}</h6></span>
                                <span className="vol"><i className="fas fa-star"><h6>{vol}</h6></i></span>
                            </div>
                            <img className="w-100 img-item" src={"https://image.tmdb.org/t/p/original" + img} alt="" />
                       
                        </div>
                    </Link>
         
        </>
    )
}

export default Newfalm
