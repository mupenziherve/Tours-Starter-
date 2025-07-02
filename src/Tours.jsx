
import Tour from "./Tour";

const PlacesToVisits = ({fetchedData}) => {
  return (
    <section>
        <div className="title">
        <h2>our tours</h2>
        <div className="title-underline"></div>
        </div>
        <div className="tours">

            {fetchedData.map((eachTourData) =>{           
    return  <Tour key={eachTourData.id}  {...eachTourData} />
            })}

        </div>
    </section>
  );
};
export default PlacesToVisits;