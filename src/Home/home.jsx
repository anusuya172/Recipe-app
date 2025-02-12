import React from "react";
import { useSelector } from "react-redux";

const Home = () => {
  const { title, image } = useSelector((state) => state.home);

  return (
    <div style={styles.container}>
      <div style={{ ...styles.heroSection, backgroundImage: `url(${image})` }}>
        <h1 style={styles.title}>{title}</h1>
      </div>
    </div>
  );
};

const styles = {
  container: {
    textAlign: "center",
    fontFamily: "Arial, sans-serif",
  },
  heroSection: {
    backgroundSize: "cover",
    backgroundPosition: "center",
    height: "500px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: "white",
    textShadow: "2px 2px 4px rgba(0,0,0,0.6)",
  },
  title: {
    fontSize: "3rem",
    fontWeight: "bold",
  },
};

export default Home;
