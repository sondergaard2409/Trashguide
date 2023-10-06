import React from "react";
import { Link } from "react-router-dom"; 

const ErrorPage = () => {
    return (
        <>
        <h1>Error 404 page not found</h1>
        <p>
            <Link to="/">Gå til forside</Link>
        </p>
        </>
    );
};

export default ErrorPage