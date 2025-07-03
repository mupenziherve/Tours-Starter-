import { useEffect, useState } from "react";
import PlacesToVisits from "./Tours";


const url = 'https://www.course-api.com/react-tours-project';

const App = () => {
 const [isLoading, setIsLoading] = useState(true)
 const [tours, setTours] = useState([])

 const removeTour = (id) => {
  const newTours = tours.filter((tour) => tour.id !== id);
  setTours(newTours);

 }


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
 <PlacesToVisits fetchedData={tours} removeTour={removeTour}  />
  </div>;
}
Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium, sit! Sit nihil omnis explicabo praesentium quidem ipsum ab corporis, neque doloribus exercitationem. Nemo corrupti maiores numquam dolore beatae similique quia?
Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium, sit! Sit nihil omnis explicabo praesentium quidem ipsum ab corporis, neque doloribus exercitationem. Nemo corrupti maiores numquam dolore beatae similique quia?
Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium, sit! Sit nihil omnis explicabo praesentium quidem ipsum ab corporis, neque doloribus exercitationem. Nemo corrupti maiores numquam dolore beatae similique quia?
Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium, sit! Sit nihil omnis explicabo praesentium quidem ipsum ab corporis, neque doloribus exercitationem. Nemo corrupti maiores numquam dolore beatae similique quia?
Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium, sit! Sit nihil omnis explicabo praesentium quidem ipsum ab corporis, neque doloribus exercitationem. Nemo corrupti maiores numquam dolore beatae similique quia?

export default App;


//// component in react
/// props in react
/// mapping in react

