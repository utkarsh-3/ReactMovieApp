import React from "react";
import {NavLink} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './About.css';


class about extends React.Component{
    constructor(props){
        super(props);
        this.state={count:0};
        this.update=this.update.bind(this);
    }
    update(){
        this.setState(
          {  count:this.state.count+1}
        )
    }
    render(){

        return(
            <>
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
                <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
                    <ol class="carousel-indicators">
                        <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                    </ol>
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                        <img class="d-block w-100" src="https://c4.wallpaperflare.com/wallpaper/125/985/100/venom-movie-venom-2018-movies-movies-wallpaper-preview.jpg" alt="First slide"/>
                        </div>
                        <div class="carousel-item ">
                        <img class="d-block w-100" src="https://c4.wallpaperflare.com/wallpaper/689/479/582/back-to-the-future-movies-movie-poster-wallpaper-preview.jpg" alt="Second slide"/>
                        </div>
                        <div class="carousel-item">
                        <img class="d-block w-100" src="https://c4.wallpaperflare.com/wallpaper/948/95/731/keanu-reeves-john-wick-john-wick-chapter-2-movies-wallpaper-preview.jpg" alt="Third slide"/>
                        </div>
                    </div>
                    <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="sr-only">Previous</span>
                    </a>
                    <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="sr-only">Next</span>
                    </a>

                </div>
                <div className="headerIntro">
                <p>Movies move us like nothing else can, whether they’re scary, funny, dramatic, romantic or anywhere in-between. So many titles, so much to experience.</p>
                </div>
                

            </>
        )
    }
}

export default about;