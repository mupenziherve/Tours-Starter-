import { useEffect, useState } from "react";
import PlacesToVisits from "./Tours";


const url = 'https://www.course-api.com/react-tours-project';

const App = () => {
 const [isLoading, setIsLoading] = useState(true)
 const [tours, setTours] = useState([])


 const fetchTours = async () => {
  setIsLoading(true)
  try {
    const response = await fetch(url);
    const result = await response.json();
    setTours(result)

    

  } catch (error) {
    console.log(error);
    
  }
  
 };

useEffect(() => {
  fetchTours();


},[] );


  return <div>
 <PlacesToVisits fetchedData={tours}  />
  </div>;
}
export default App;


//// component in react
/// props in react
/// mapping in react

