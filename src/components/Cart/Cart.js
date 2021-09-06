import React  from "react";
import {NavLink} from 'react-router-dom';
import './Cart.css';

function Cart(){
    var List=localStorage.getItem('shoppingList');
    List=JSON.parse(List);
    console.log(List);
    var total=0;
    return(
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
            <h1>Shopping Cart !</h1>
            <table>
                <thead>
                    <tr>
                        <th>
                             Id 
                        </th>
                        <th>
                             Name 
                        </th>
                        <th>
                             Price
                        </th>

                    </tr>
                </thead>
                    {List.map((movie)=>{
                        total+=movie.Price;
                    return(
                        <tbody>
                            <tr>
                                <td> {movie.Id} </td>
                                <td>{movie.Title}  </td>
                                <td> {movie.Price} </td>
                            </tr>
                        </tbody>
                    );
                })}


            </table>
            <h5>Total Price is : {total}</h5>
            
            



        </div>
    )
}

export default Cart;

