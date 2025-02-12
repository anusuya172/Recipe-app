import React from "react";

const AboutUs = () => {
  return (
    <div style={{ textAlign: "center", padding: "50px", maxWidth: "800px", margin: "auto" }}>
      <h2 style={{ color: "#ff6347" }}>
        About Us</h2>
      <p style={{ fontSize: "1.1rem", color: "#555", lineHeight: "1.6" }}>
        Welcome to <strong>Tasty Bites</strong>, your go-to destination for delicious and easy-to-make recipes!
        Whether you're an experienced chef or a beginner in the kitchen, we provide a variety of 
        recipes to inspire your cooking journey.
      </p>

      <h3 style={{ marginTop: "30px", color: "#333" }}>Why Choose Us?</h3>
      <ul style={{ listStyleType: "none", padding: 0 }}>
        <li style={{ margin: "10px 0",
           fontSize: "1.1rem" }}><strong>Handpicked Recipes</strong>  From top chefs and home cooks.</li>
        <li style={{ margin: "10px 0", fontSize: "1.1rem" }}> <strong>Easy-to-Follow Guides</strong> Perfect for all skill levels.</li>
        <li style={{ margin: "10px 0",
           fontSize: "1.1rem" }}> <strong>Personalized Favorites</strong> Save and revisit recipes anytime.</li>
        <li
         style={{ margin: "10px 0", fontSize: "1.1rem" }}> <strong>Smart Search & Filters</strong> Find meals by ingredients or meal type.</li>
      </ul>

      <p style={{ fontSize: "1.1rem", marginTop: "20px" }}>
        Join our food-loving community, explore new flavors, and make every meal unforgettable.  
        <strong> 
          Happy Cooking!
          </strong>
      </p>
    </div>
  );
};

export default AboutUs;
