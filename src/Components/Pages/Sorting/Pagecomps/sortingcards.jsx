import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./sortingcards.scss";

const SortingCards = () => {
  const [events, setEvents] = useState([]);

  // Fetches data from the API when the component mounts (adding nodes to DOM)
  useEffect(() => {
    // API URL with query parameters
    const url = `http://localhost:4000/section`;

    // Function that makes an API request
    const getData = async () => {
      try {
        const result = await axios.get(url);
        console.log(result);
        // Sets the retrieved data in the state
        setEvents(result.data);
      } catch (err) {
        console.error(err);
      }
    };

    // Calls the function and fetches data
    getData();
  }, [setEvents]);

  return (
    <>
      <div className="sortingcardcontainer">
        {events &&
          events.map((data) => {
            console.log(data);
            return (
              <figure key={data.id}>
                <Link to={`/sortering/${data.id}`}>
                  <div className="imgbox">
                    <img
                      src={`http://localhost:4000/Assets/Images/Guide/Categories/${data.filename}`}
                      alt={data.title}
                    />
                  </div>
                  <figcaption style={{ backgroundColor: `#${data.color}` }}>
                    <p>{data.title}</p>
                  </figcaption>
                </Link>
              </figure>
            );
          })}
      </div>
    </>
  );
};

export default SortingCards;