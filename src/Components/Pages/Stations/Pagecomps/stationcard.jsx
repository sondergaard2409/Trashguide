import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./stationcard.scss";

const StationCard = () => {
  // State variable that holds data fetched from the API
  const [data, setData] = useState([]);

  // useEffect is used to fetch data when the component mounts
  useEffect(() => {
    const url = `http://localhost:4000/orgs?attributes=id,name,address,zipcode,city,longtitude,latitude`;

    // Function that creates the API request and updates the state with the response data
    const getData = async () => {
      try {
        const result = await axios.get(url);
        console.log(result);

        // Updates the 'data' state with the fetched data
        setData(result.data);
      } catch (err) {
        console.error(err);
      }
    };

    // Calls the getData function when the component mounts
    getData();
  }, []);

  return (
    <>
      <div className="locationcontainer">
        {/* Check if 'data' is available and map through the locations */}
        {data &&
          data.map((location) => {
            return (
              <figure key={location.id}>
                {/* Link to a specific location page */}
                <Link to={`/genbrugsstationer/${location.id}`}>
                  {/* Embedded Google Map */}
                  <iframe
                    title="googlemaplocation"
                    className="locationmap"
                    src={`https://maps.google.com/maps?q=${location.longtitude},${location.latitude}&hl=es;&output=embed`}
                  ></iframe>
                  <figcaption>
                    {/* Displays location name */}
                    <h3>{location.name}</h3>
                    {/* Displays location city */}
                    <p>{location.city}</p>
                  </figcaption>
                </Link>
              </figure>
            );
          })}
      </div>
    </>
  );
};

export default StationCard;