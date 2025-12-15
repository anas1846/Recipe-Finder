import { useState } from "react";
import Navbar from "./Navbar";
import Tab from "./Tab";
import recipes from "./recipe";
import TopRecipes from "./Top Recipes";
import FavourateRecipes from "./favourateRecipes";
import Rescipemade from "./rescipe-made"
import { createBrowserRouter,RouterProvider} from 'react-router-dom';

function App() {

  // ✅ hook must be inside component
  const [search, setSearch] = useState("");
  const [cards,setCards]=useState([]);
  const handleSelect = (card) => {
  setCards(prev =>
    prev.find((c) => c.id === card.id)
      ? prev.filter((c) => c.id !== card.id)   // unselect
      : [...prev, card]                        // select
  );
};

  const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <Navbar setSearch={setSearch} search={search} />
        <Tab />
        <TopRecipes 
          search={search}
          onSelect={handleSelect}
          select={cards}
        />
      </>
    )
  },
  {
    path: "/favourate-Recipes",
    element: (
      <>
        <Navbar setSearch={setSearch} />
        <Tab />
        <FavourateRecipes data={cards} />
      </>
    )
  },
  {
    path: "/rescipe-detail/:id",
    element: <Rescipemade />
  }
],
 {
    basename: "/Recipe-Finder"  
  }

);


  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
