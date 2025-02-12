import React from "react";
import { useSelector } from "react-redux";

const Favorites = () => {
  const favorites = useSelector((state) => state.favorites?.favoriteRecipes || []);

  console.log("Favorites from Redux:", favorites);
  
  return (
    <div className="container mt-4">
      <h2 className="text-center mb-4">Favorite Recipes</h2>
      {favorites.length === 0 ? (
        <p className="text-center">No favorites yet.</p>
      ) : (
        <div className="row">
          {favorites.map((recipe) => (
            <div key={recipe.id} className="col-md-4 mb-4">
              <div className="card h-100">
                {recipe.image && (
                  <img
                    src={recipe.image}
                    alt={recipe.title}
                    className="card-img-top"
                    style={{ height: "200px", objectFit: "cover" }}
                  />
                )}
                <div className="card-body">
                  <h5 className="card-title">{recipe.title || "No Title"}</h5>
                  <p><strong>Preparation Time:</strong> {recipe.readyInMinutes} mins</p>
      <p><strong>Servings:</strong> {recipe.servings}</p>
      <p><strong>Ingredients:</strong> {recipe.extendedIngredients?.map(ing => ing.original).join(", ") || "No ingredients available"}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Favorites;
