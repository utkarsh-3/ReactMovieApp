export function handleDelete(id) {
    placeApi.deletePlace(id).then(() => {
      //props.history.push("/places");
    console.log("Deleted"+id);
  
    });
  }
  