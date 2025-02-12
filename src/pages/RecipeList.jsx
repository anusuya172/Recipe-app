import React, { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { toggleFavorite } from "../redux/favoriteSlice";

const RecipeList = () => {
  const [recipes, setRecipes] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(true);
  const [mealType, setMealType] = useState(""); 

  const dispatch = useDispatch();
  const favorites = useSelector((state) => state.favorites.favoriteRecipes);

  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        setLoading(true);
        const response = await axios.get(
          "https://api.spoonacular.com/recipes/random?number=40&apiKey=0fdd252ad174482ba0f577fe89c6368c"
        );
        setRecipes(response.data.recipes);
      } catch (error) {
        console.error("Error fetching recipes:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchRecipes();
  }, []);

  const filteredRecipes = recipes.filter((recipe) => {
    const lowerCaseSearch = searchTerm.toLowerCase();
    const matchesSearch =
      recipe.title.toLowerCase().includes(lowerCaseSearch) ||
      recipe.extendedIngredients?.some((ingredient) =>
        ingredient.original.toLowerCase().includes(lowerCaseSearch)
      ) ||
      recipe.servings.toString().includes(searchTerm) ||
      recipe.readyInMinutes.toString().includes(searchTerm);

    const matchesMealType =
      !mealType || (recipe.dishTypes && recipe.dishTypes.includes(mealType));

    return matchesSearch && matchesMealType;
  });

  return (
    <div>
      <form
        className="d-flex align-items-center mt-3"
        role="search"
        style={{ justifyContent: "flex-end", paddingRight: "3%" }}
      >
        <div style={{ position: "relative" }}>
          <i
            className="fas fa-search"
            style={{
              position: "absolute",
              left: "10px",
              top: "50%",
              transform: "translateY(-50%)",
              color: "gray",
              fontSize: "1rem",
            }}
          ></i>
          <input
            className="form-control mt-1"
            type="search"
            placeholder="Search..."
            aria-label="Search"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            style={{
              paddingLeft: "40px",
              border: "none",
              background: "none",
              borderBottom: "2px solid black",
              maxWidth: "20.5rem",
              borderRadius: "0",
            }}
          />
        </div>
      </form>

      <div style={{ textAlign: "center", marginTop: "20px" }}>
        {["", "breakfast", "lunch", "dinner"].map((type) => (
          <button
            key={type}
            onClick={() => setMealType(type)}
            style={{
              margin: "5px",
              padding: "10px 20px",
              border: "none",
              borderRadius: "20px",
              cursor: "pointer",
              backgroundColor: mealType === type ? "#ff6347" : "#ddd",
              color: mealType === type ? "white" : "black",
              fontSize: "1rem",
            }}
          >
            {type === "" ? "All" : type.charAt(0).toUpperCase() + type.slice(1)}
          </button>
        ))}
      </div>

      {loading ? (
  <div
    style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "50vh",
    }}
  >
    <div className="spinner-border text-primary" role="status">
      <span className="visually-hidden">Loading...</span>
    </div>
  </div>
) : (
  <div
    style={{
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
      gap: "20px",
      padding: "20px",
    }}
  >
    {filteredRecipes.map((recipe) => (
      <div
        key={recipe.id}
        style={{
          border: "1px solid #ddd",
          borderRadius: "10px",
          padding: "10px",
          textAlign: "center",
          position: "relative",
        }}
      >
        <div
          onClick={() => dispatch(toggleFavorite(recipe))}
          style={{
            position: "absolute",
            top: "10px",
            right: "20px",
            cursor: "pointer",
            fontSize: "1.5rem",
           
            color: favorites.some((fav) => fav.id === recipe.id) ? "rgb(255, 99, 71)" : "white",
          }}
        >
          <i className="fa-solid fa-heart"></i>
        </div>

        <img
          src={recipe.image}
          alt={recipe.title}
          style={{ width: "100%", borderRadius: "10px" }}
        />
        <h3>{recipe.title}</h3>

        <div
          style={{
            background: "#f9f9f9",
            padding: "10px",
            borderRadius: "10px",
            marginTop: "10px",
            textAlign: "left",
          }}
        >
          <p>
            <strong>Preparation Time:</strong> {recipe.readyInMinutes} mins
          </p>
          <p>
            <strong>Servings:</strong> {recipe.servings}
          </p>
          <p>
            <strong>Ingredients:</strong>
          </p>
          <ul style={{ paddingLeft: "20px" }}>
            {recipe.extendedIngredients?.map((ing, index) => (
              <li key={index}>{ing.original}</li>
            ))}
          </ul>
        </div>
      </div>
    ))}
  </div>
)}

    </div>
  );
};

export default RecipeList;
