import { Link } from "react-router-dom";
import "./fparticles.scss";

const fparticles = () => {
    return (
        <>
      <div className="articlecontainer">
        <div className="articleparent1">
          <div className="column2">
            <img
              src={require("./Articleimages/garbagebin.webp")}
              alt="Garbage-bin-with-trash-around-it"
            />
          </div>
          <div className="column1">
            <h2>
              Din <span>guide til sortering</span>
            </h2>
            <p>
              Her kan du se hvordan du skal sortere og hvad der skal i hvilke
              beholdere. Du får også tips og tricks til, hvordan du gør det nemt
              at sortere hjemme hos dig.
            </p>
            <div>
              <Link to="/sortering">
                <button>Se affaldsguiden</button>
              </Link>
              <Link to="/bestilbeholder">
                <button className="button2">Bestil storskrald</button>
              </Link>
            </div>
          </div>
        </div>
        <div className="articleparent2">
          <div className="column1">
            <img
              src={require("./Articleimages/colouredbins.webp")}
              alt="Coloured-trash-bins"
            />
          </div>
          <div className="column2">
            <h2>
              Bestil <span>din nye affaldsbeholder</span>
            </h2>
            <p>
              Her kan du bestille en ny affaldsbeholder.
            </p>
            <Link to="/bestilbeholder">
              <button>Bestil nu</button>
            </Link>
          </div>
        </div>
      </div>
    </>
    );
};

export default fparticles; 