import { useForm } from "react-hook-form";
import axios from "axios";
import { useAuth } from "../../Auth/auth";
import Profile from "../Profile/profile";
import "./login.scss";

const Login = () => {
  // Gets access to authentication data and functions, using the useAuth hook
  const { loginData, setLoginData } = useAuth();

  // Initializes form validation using react-hook-form
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // Function that handles form submissions
  const formSubmit = async (form) => {
    // Creates a URL-encoded form data
    const formData = new URLSearchParams();
    formData.append("username", form.username);
    formData.append("password", form.password);

    // Defines the API endpoint for login
    const endpoint = `http://localhost:4000/login`;

    try {
      // Sends a POST request to the login endpoint
      const result = await axios.post(endpoint, formData);

      // A call function that handles session data
      handleSessionData(result.data);
    } catch (err) {
      // Logs errors that may occur during the login request
      console.error(`Kunne ikke logge ind: ${err}`);
    }
  };

  // Function that handles session data after a successful login
  const handleSessionData = async (data) => {
    if (data) {
      // Stores the login token in the session storage
      sessionStorage.setItem("token", JSON.stringify(data));

      // Updates the authentication context with user data
      setLoginData(data);
    }
  };

  // Function that logs the user out
  const logOut = () => {
    // Removes the login token from session storage
    sessionStorage.removeItem("token");

    // Clears the authentication context
    setLoginData("");
  };

  return (
    <>
      <div className="pageContainer">
        <figure className="logintext">
          <figcaption>
            <h2>
              <img src={require("./images/loginbin.webp")} alt="logo" />
              Affaldsguiden
            </h2>
            <p>Log ind på Affaldsguiden for at anmelde stationer</p>
          </figcaption>
        </figure>

        <div className="loginContainer">
          <h2>Login</h2>
          {!loginData && !loginData.username ? (
            <form onSubmit={handleSubmit(formSubmit)}>
              <div>
                <input
                  type="text"
                  placeholder="E-mail"
                  {...register("username", { required: true })}
                />
                {errors.username && (
                  <span className="error">Indtast brugernavn</span>
                )}
              </div>
              <div>
                <input
                  placeholder="Password"
                  type="password"
                  {...register("password", { required: true })}
                />
                {errors.password && (
                  <span className="error">
                    Indtast Adgangskode
                  </span>
                )}
              </div>

              <div className="submit">
                <button type="submit">Log Ind</button>
              </div>
            </form>
          ) : (
            <section>
              <p>
                {`Du er logget ind som ${loginData.user.firstname} ${loginData.user.lastname} `}{" "}
              </p>
              <Profile />
              <button onClick={() => logOut()} id="logout">
                Log Ud
              </button>
            </section>
          )}
        </div>
      </div>
    </>
  );
};

export default Login;