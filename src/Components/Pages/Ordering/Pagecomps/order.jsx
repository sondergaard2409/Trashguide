import { React, useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./order.scss";

const Order = () => {
  // Defines a state variable data that stores the fetched data
  const [data, setData] = useState([]);

  // Use the useEffect hook to fetch data when the component mounts
  useEffect(() => {
    // Define the URL to fetch data from
    const url = `http://localhost:4000/containers`;

    // Defines an asynchronous function called getData to create the API request
    const getData = async () => {
      try {
        // Creates a GET request using Axios to the specified URL
        const result = await axios.get(url);

        console.log(result);

        // Update the state variable data with the fetched data
        setData(result.data);
      } catch (err) {
        console.error(err);
      }
    };

    // Call the getData function to initiate the data fetching process
    getData();
  }, [setData]); // The useEffect hook will re-run whenever setData changes

  return (
    <div className="ordercontainer">
      <img
        src={require("./Rectangle1.png")}
        alt="first_step_form"
        className="column1"
      />
      <div className="column2">
        <div className="column2text">
          <p>Trin 1</p>
          <h2>Vælg type</h2>
          <p>
            Tation argumentum et usu, dicit viderer evertitur te has. Eu dictas
            concludaturque usu, facete detracto patrioque an per, lucilius
            pertinacia eu vel.
          </p>
        </div>
        <div className="figuregrid">
          {data &&
            data.map((container) => {
              return (
                <figure key={container.id}>
                  {/* Create a Link to another route using React Router */}
                  <Link to={`/bestilbeholder/${container.id}`}>
                    <img
                      src={`http://localhost:4000/Assets/Images/Icons/${container.icon_filename}`}
                      alt={container.name}
                    />
                    <figcaption>
                      <p>{container.name}</p>
                    </figcaption>
                  </Link>
                </figure>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default Order;