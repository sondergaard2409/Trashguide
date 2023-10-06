import AppRouter from "./Components/AppRouter/AppRouter";
import NavBar from "./Components/Global/Navbar/navbar";
import Footer from "./Components/Global/Footer/footer";
import "./Components/Global/global.scss"

function App() {
  return (
    <>
    <div className="App">
      <NavBar/>
      <AppRouter/>
      <Footer/>
    </div>
    </>
  );
};

export default App;
