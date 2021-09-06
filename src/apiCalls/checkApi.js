export async function ResponseCheck(response){
    if (response.ok) 
       {
        console.log(response);
        return response.json();

       } 
    if (response.status === 400) {
        const error = await response.text();
    throw new Error(error);
  }
  throw new Error("N/w errors..");
}

export function ErrorCheck(error){
    console.log("Conection to api is failed"+error);
    throw error;
}