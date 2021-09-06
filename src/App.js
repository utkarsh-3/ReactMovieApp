import './App.css';
import Contact from './components/Contact/Contact';
import About from './components/About/About';
import 'bootstrap/dist/css/bootstrap.min.css';
import {NavLink, Route,Switch} from 'react-router-dom';
import Home from './components/Home/Home';
import MovieList from './components/MovieList/MovieList';
import Cart from './components/Cart/Cart';


function App() {
  
  
  return (
      
       
        <Switch>
            <Route path="/" exact component={Home} />
            <Route path='/Contact' component={Contact}/>
            <Route path='/About' component={About}/>
            <Route path='/MovieList' component={MovieList}/>
            <Route path='/Cart' component={Cart}/>
        </Switch>
           
          

  );
}

export default App;
