import { useEffect,useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {NavLink} from 'react-router-dom';
import {getMovies} from '../../apiCalls/movieApi';
import MovieList from '../MovieList/MovieList';
import './Home.css';



function Home() {
  
  const [movies,setMovies] = useState([]);
  useEffect(() => {
    getMovies().then((_movies) => setMovies(_movies));
  }, []);
  
  {/* 
  const [delElement,setDel] = useState("6");
  const [place, addPlace] = useState({
    id: "",
    title: "",
    imp: ""
  });

  function placeChange(event) {
    console.log("hi"+event);
    addPlace({
      ...place,
      [event.target.name]: event.target.value,
    });
  }

  function handleDelete(id) {
    console.log(id);
    placeApi.deletePlace(id).then(() => {
    console.log("Deleted"+id);
    });
  }
  
  function myChangeHandler  (event) {
    console.log(event.target.value);
    setDel(event.target.value);
  }
function formSub(event){
  console.log(delElement);
  event.preventDefault();
  handleDelete(delElement)
}
function formSubmit(event){
  event.preventDefault();
    placeApi.savePlace(place).then(() => {
      console.log("Place Added");
    });
    console.log(place);
  }
*/}


  
  return (
      <div >
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
          <a class="navbar-brand" href="#">BestCinemas</a>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
              <li class="nav-item ">
                <NavLink class="nav-link" to="/">Home </NavLink>
              </li>
              <li class="nav-item">
                <NavLink class="nav-link" to="/Contact">Contact</NavLink>
              </li>
              <li class="nav-item">
                <NavLink class="nav-link" to="/About">About</NavLink>
              </li>
              <li class="nav-item">
                <NavLink class="nav-link" to="/Cart">Cart</NavLink>
              </li>
            </ul>
          </div>
        </nav>
        <div className="headerIntro">
          <h2> Welcome To BestCinemas ! </h2>
          <p> Find your favorite movies in all formats and all languages ! </p>
        </div>
        {/*
      <div style={{marginLeft:450}}>
      <h1>Hi there Welcome!</h1></div>
      <img src={logos} width="100%" height="70%"></img>
      <div style={{marginLeft:450}}>
      <Contact name="Utkarsh" />
      <About/>
      </div>
        */}
      <MovieList movies={movies}/>
      {/* 
      <div style={{marginLeft:150}}>
      <button className="btn btn-danger" onClick={()=>{setCol(!openDel)}}>Want to Delete ?</button>
      <Collapse isOpened={openAdd}>
        <div>
          <form onSubmit={formSub}>
            <input type="text"  onChange={myChangeHandler }></input>
            <button >Delete</button>
          </form>
        </div>
      </Collapse>
      <br/>
      <button className="btn btn-danger" onClick={()=>{setCollapse(!openAdd)}}>Want to Add ?</button>
      <Collapse isOpened={openDel}>
        <div>
          <form onSubmit={formSubmit}>
            <label>Enter place Id </label>
            <input name="id" type="text"  onChange={placeChange }></input><br/>
            <label>Enter place name </label>
            <input name="title" type="text"  onChange={placeChange }></input><br/>
            <label>Enter Imp Places </label>
            <input name="imp" type="text"  onChange={placeChange }></input><br/>
            <button >Add</button>
          </form>
        </div>
      </Collapse>
      </div>*/}
   
  
  <footer class="page-footer font-small bg-dark ">
    <div class="container">
      <ul class="list-unstyled list-inline text-center py-2">
        <li class="list-inline-item">
          <h5 class="mb-1 text-white">Register for free</h5>
        </li>
        <li class="list-inline-item">
          <a href="#!" class="btn btn-rounded text-white">Sign up!</a>
        </li>
      </ul>
    </div>
    <div class="footer-copyright text-center text-white">© 2020 Copyright:
      <a href="https://BestCinemas.com/"> Utkarsh Kendre</a>
    </div>
  </footer>
  </div>
  );
}

export default Home;