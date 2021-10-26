import { Route, Switch ,Redirect } from "react-router-dom";
// import Footer from "./layout/Footer/Footer";
import Navbar from "./layout/Navbar/Navbar";
import Home from './pages/Home/Home';
import Logn from './pages/auth/Logn';
import SingUP from './pages/auth/SingUP';
import Movies from './pages/Movies/Movies';
import NotFound from './pages/NotFound/NotFound';
import MoviesId from './pages/MoviesID/MoviesId.jsx';

import TV from "./pages/Tv/TV";
import IdTv from './pages/tvID/IdTv';




function App() {
  return (
    < >

    <Navbar />
    <Switch>
        <Route path='/home' component={Home}/>
        <Route path='/logn' component={Logn}/>
        <Route path='path' component={SingUP}/>
        <Route path='/movie' component={Movies}/>
        <Route path='/tv' component={TV}/>
        <Route path='/tvID/:id' component={IdTv}/>
        <Route path='/MoviesId/:id' component={MoviesId}/>
        <Redirect exact from="/" to="/home" />
        <Route path='*' component={NotFound}/>
    </Switch>
    {/* <Footer /> */}
    </>
  );
}

export default App;
