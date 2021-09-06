import React from 'react';
import {NavLink} from 'react-router-dom';

function contact(props){
    
        return (
        <div>
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
        </div>
                );
    
}

export default contact;