import React,{useState} from 'react';
import './MovieList.css';
import Card from '../Card/Card'

function MovieList(props) {
  
  const d=Object.values(props.movies);
  console.log(d[0]);
  
  {/* 
  function handleDelete() {
    id=document.getElementById('take').value;
    console.log(id);
    placeApi.deletePlace(id).then(() => {
    console.log("Deleted"+id);
    });
  }
  const [id, setId] = useState("");
  function changeFun(event){
    id=setId(event.target.value);
    console.log(id);
  }
  */}

  if(d[0]){
  return (
    
    <div>
      <Card movies={d[0]}  />

    {/* 
    <table className="table">
      <thead>
        <tr>
          <th>Image</th>
          <th>Title</th>
          <th>Year</th>
        </tr>
      </thead>
      <tbody>
        {d[0].map((place) => {
          return (
            <tr>
              <td>{place.Poster}</td>
              <td>{place.Title}</td>
              <td>{place.Year}</td>
              </tr>
          );
        })}
      </tbody>
    </table>
   */} 
    

    </div>
  );
  }
  else
  {
    return (
      <p>Hi</p>
    );
  }
  
  
}

export default MovieList;
