import { Link } from "react-router-dom";
import "./footer.scss";

const Footer = () => {
    return (
      <>
        <img
          className="footer-img"
          src={require("./footimages/pattern.webp")}
          alt="greenpattern"
        />
        <footer>
          <div className="footer-column1">
            <h3>
              <img src={require("./footimages/footbin.webp")} alt="binlogo" />
              Affaldsguiden
            </h3>
            <p>
              Vi arbejder for at informere om korrekt affaldssortering. Ved at
              sortere hjælper du os, men også klimaet.
            </p>
          </div>
          <div className="footer-column2">
            <p>©2023 Affaldsguiden.</p>
          </div>
  
          <div className="footer-column3">
            {" "}
            <Link
              onClick={() => {
                window.scroll(0, 0);
              }}
            >
              <p>
                Back to top
                <img
                  className="footer-img2"
                  src={require("./footimages/uparrow.webp")}
                  alt="uparrow"
                />
              </p>
            </Link>
          </div>
        </footer>
      </>
    );
  };
  
  export default Footer;