import { Link, NavLink } from "react-router-dom"


const Navbar = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-transparent">
                    <Link className="navbar-brand text-warning " to="/">netflix</Link>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ">
                            
                      

 

                        <li className="nav-item">
                            <NavLink className="nav-link ml-1 text-light " to="/movie">movie</NavLink>
                        </li>
                

                        <li className="nav-item">
                            <NavLink className="nav-link ml-1 text-light " to="/Tv">Tv</NavLink>
                        </li>
                     
                
                       
                        </ul>
                        <ul className="navbar-nav my-2 my-lg-0 ml-auto " style={{justifyContent:"flex-end"}}>
                        <li className="nav-item">
                            <NavLink className="nav-link ml-1 text-light " to="/signUp">SignUp</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link ml-1 text-light " to="/logIn">LogIn</NavLink>
                        </li>
                        </ul>
                        {/* <form className="form-inline my-2 my-lg-0 ml-auto">
                        <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-outline-warning my-2 my-sm-0" type="submit">Search</button>
                        </form> */}
                    </div>
                </nav>
        </>
    )
}

export default Navbar
