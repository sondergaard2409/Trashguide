import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import "./sortingdetails.scss";

// Defines the SortingDetails component
const SortingDetails = () => {
  // Initialize state to store data
  const [data, setData] = useState([]);

  // Gets the 'id' parameter from the route
  const { id } = useParams();

  // Uses the 'useEffect' hook to fetch data when 'id' changes
  useEffect(() => {
    // Defines the URL to fetch data from
    const url = `http://localhost:4000/section/${id}`;

    // Defines an async function to fetch data and update the state
    const getData = async () => {
      try {
        // Sends a GET request to the specified URL
        const result = await axios.get(url);

        // Logs the result to the console
        console.log(result);

        // Updates the 'data' state with the fetched data
        setData(result.data);
      } catch (err) {
        // Handles errors if the request fails
        console.error(err);
      }
    };

    // Call the 'getData' function when 'id' changes
    getData();
  }, [id]);

  // Render the component
  return (
    <>
      {/* Only renders data if it exists */}
      {data && (
        <>
          {/* Renders a card for the sorting details */}
          <figure className="sortingcard" key={data.id}>
            {/* Renders the top section of the card with background color */}
            <div
              className="topcard"
              style={{ backgroundColor: `#${data.color}` }}
            >
              <h2>{data.title}</h2>
              <img
                src={`http://localhost:4000/Assets/Images/Guide/Categories/${data.filename}`}
                alt={data.title}
              />
            </div>
            {/* Map over categories, and renders them in the bottom section of cards */}
            {data.categories &&
              data.categories.map((category) => {
                return (
                  <div key={category.id} className="bottomcard">
                    <img
                      src={`http://localhost:4000/Assets/Images/Guide/Icons/${category.icon_filename}`}
                      alt={category.title}
                    />
                    <h2>{category.title}</h2>
                  </div>
                );
              })}
          </figure>
        </>
      )}
    </>
  );
};


export default SortingDetails;