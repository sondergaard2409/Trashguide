import { Route, Routes } from "react-router-dom";
import Frontpage from "../Pages/Frontpage/frontpage";
import Sortingpage from "../Pages/Sorting/Sortingpage";
import SortingDetails from "../Pages/Sorting/SortingDetails/sortingdetails";
import Stationpage from "../Pages/Stations/stationpage";
import StationDetails from "../Pages/Stations/Stationdetails/stationdetails"
import OrderPage from "../Pages/Ordering/orderpage";
import Login from "../Pages/Login/login";
import ErrorPage from "../Pages/Errorpage/error404";

const AppRouter = () => {
    return (
        <Routes>
            <Route path="/" element={<Frontpage />}/>
            <Route path="/Sortering" element={<Sortingpage />}/>
            <Route path="/Sortering/:id" element={<SortingDetails />}/>
            <Route path="/Genbrugsstationer" element={<Stationpage />}/>
            <Route path="/Genbrugsstationer/:id" element={<StationDetails />}/>
            <Route path="/Bestilbeholder" element={<OrderPage />}/>
            <Route path="/Login" element={<Login />}/>
            <Route path="*" element={<ErrorPage />}/>
        </Routes>
    );
};

export default AppRouter;