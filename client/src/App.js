import { Route, Switch ,Redirect } from "react-router-dom";
// import Footer from "./layout/Footer/Footer";
import Navbar from "./layout/Navbar/Navbar";


import SignUp from './pages/auth/SignUp';
import Movies from './pages/Movies/Movies';
import NotFound from './pages/NotFound/NotFound';
import MoviesId from './pages/MoviesID/MoviesId.jsx';

import TV from "./pages/Tv/TV";
import IdTv from './pages/tvID/IdTv';

import ValidationPage from './pages/Validation/Pages.Validations';
import LogIn from './pages/auth/LogIn';





function App() {
  return (
    < >

    <Navbar />
    <Switch>
      
      <ValidationPage path='/movie' component={Movies} />
      <ValidationPage path='/tv' component={TV} />
      <ValidationPage path='/tvID/:id' component={IdTv} />
      <ValidationPage path='/MoviesId/:id' component={MoviesId}/>
      
      
      
        <Route path='/logIn' component={LogIn}/>
        <Route path='/signUp' component={SignUp}/>
        <Redirect exact from="/" to="/home" />
        <Route path='*' component={NotFound}/>
    </Switch>
    {/* <Footer /> */}
    </>
  );
}

export default App;
