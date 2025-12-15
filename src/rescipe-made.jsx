import { useParams } from "react-router-dom";
import recipes from "./recipe";

const Rescipemade = () => {
  const { id } = useParams();  // get id from URL
  const recipe = recipes[id];   // find recipe

  if (!recipe) return <h2>Recipe not found</h2>;

  return (
    <div>
      <h1>{recipe.name}</h1>
      <img src={recipe.img} alt={recipe.name} />
      <p>{recipe.Ingredients}</p>
    </div>
  );
};

export default Rescipemade;

