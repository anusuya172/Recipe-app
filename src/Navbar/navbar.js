import React from "react";
import { useSelector } from "react-redux";
import { Link ,useLocation } from "react-router-dom";
import "../Navbar/navbar.css"
const Navbar = () => {
  const favorites = useSelector((state) => state.favorites.favoriteRecipes);
  const location = useLocation();

  const handleScroll = (id) => {
    if (location.pathname !== "/") {
      window.location.href = `/#${id}`; 
    } else {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="navbar navbar-expand-lg" style={{ 
      boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)", 
      background: "white", 
      position: "sticky", 
      top: "0", 
      zIndex: "1000" 
    }}>
      <div className="container-fluid " style={{padding:"0 20px 0 20px "}}>
        <div>
          <h1 className="mb-0" style={{ fontWeight: "600" }}>CookEase</h1>
          <small style={{ fontWeight: "600",left:"3px",position:"relative" }}>Recipes</small>
        </div>

        <button
  className="navbar-toggler"
  type="button"
  data-bs-toggle="collapse"
  data-bs-target="#navbarSupportedContent"
  aria-controls="navbarSupportedContent"
  aria-expanded="false"
  aria-label="Toggle navigation"
  style={{ border: "1px solid black", padding: "5px" }}
>
  <span
    className="navbar-toggler-icon"
    style={{ filter: "invert(1)" }}
  ></span>
</button>



        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item"><button  className="nav-link active" style={{border:"none",color:"black",background:"none",fontWeight:"500"}} onClick={() => handleScroll("home")}to="/">Home</button ></li>
            <li className="nav-item"><button  className="nav-link" onClick={() => handleScroll("aboutus")} style={{border:"none",color:"black",background:"none",fontWeight:"500"}} to="/aboutus">About</button ></li>
            <li className="nav-item"><Link  className="nav-link"  to="/recipes" style={{color:"black"}}>Recipes</Link ></li>
           
            <li className="nav-item"><button  className="nav-link" style={{border:"none",color:"black",background:"none",fontWeight:"500"}} onClick={() => handleScroll("Contact")} to="/contact">Contact</button ></li>
          </ul>

          <form className="d-flex ms-auto align-items-center" role="search" style={{ gap: "30px" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
              <i
                className="fa-regular fa-user"
                style={{
                  fontSize: "1.2rem",
                  color: "white",
                  background: "black",
                  padding: "5px 7px",
                  borderRadius: "50%",
                }}
              ></i>
              <Link to="/login" className="custom-link" style={{ textDecoration: "none", color: "black", fontSize: "1rem" }}>
                Log In
              </Link>
            </div>

            <Link to="/favorites" style={{ position: "relative", cursor: "pointer", textDecoration: "none" }}>
              <i className="fa-regular fa-heart" style={{ fontSize: "1.5rem", color: "black" }}></i>
              {favorites.length > 0 && (
                <span style={{
                  position: "absolute",
                  top: "-5px",
                  right: "-10px",
                  background: "rgb(255, 99, 71)",
                  color: "white",
                  borderRadius: "50%",
                  padding: "3px 5px",
                  fontSize: "0.5rem",
                }}>
                  {favorites.length}
                </span>
              )}
            </Link>
          </form>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
