import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import Home from "./Home/home";
import RecipeList from "./pages/RecipeList";
import Navbar from "./Navbar/navbar"; 
import Favorites from "./pages/Favorites";
import AboutUs from "./About/about";
import Contact from "./Contact/contact";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={
            <div>
              <section id="home"><Home /></section>
              <section id="aboutus"><AboutUs /></section>
              <section id="Contact"><Contact /></section>
            </div>
          } />
        
          <Route path="/recipes" element={<RecipeList />} />
          <Route path="/favorites" element={<Favorites />} />
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
