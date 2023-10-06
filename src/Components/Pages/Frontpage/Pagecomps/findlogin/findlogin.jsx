import { Link } from "react-router-dom";
import "./findlogin.scss";

const FindLogin = () => {
    return (
      <>
        <div className="findlogindiv">
          <h2>Find og anmeld genbrugsstationer</h2>
          <div>
            <Link to="/genbrugsstationer">
              <button>Find station</button>
            </Link>
            <Link to={`/login`}>
              <button>Log ind</button>
            </Link>
          </div>
        </div>
      </>
    );
  };
  
  export default FindLogin;