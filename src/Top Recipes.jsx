import React from 'react';
import { useEffect ,useState} from 'react';
import './Top Recipes.css';
import recipes from './recipe';
import {NavLink} from 'react-router-dom'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart as solidHeart } from "@fortawesome/free-solid-svg-icons";
import { faHeart as regularHeart } from "@fortawesome/free-regular-svg-icons";

const TopRecipes = ({ search, onSelect,select}) => {
 const [likedRecipes, setLikedRecipes] = useState(() => {
  return JSON.parse(localStorage.getItem("likedRecipes")) || [];
});
 

const toggleLike = (id) => {
  setLikedRecipes((prev) => {
    const updated = prev.includes(id)
      ? prev.filter((item) => item !== id)
      : [...prev, id];

    localStorage.setItem("likedRecipes", JSON.stringify(updated));
    return updated;
  });
};

  const filtered = recipes.filter(item =>
    item.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <div className="grid">
        {filtered.length === 0 ? (
          <h2>No recipe found</h2>
        ) : (
          filtered.map((item, i) => (
            <div className="card" key={i}>
              <img src={item.img} alt={item.name} />
              <div className="card-content">
                <div className="checkbox">
                <h3>{item.name}</h3>
                 <FontAwesomeIcon icon={likedRecipes  ? solidHeart : regularHeart} 
                onClick={() => {
  toggleLike(item.id);
  onSelect(item);
}}
                 style={{
                 color: likedRecipes.includes(item.id) ? "red" : "#888",
        cursor: "pointer",
        fontSize: "22px",
        transition: "0.3s",
                 }}
                //  onChange={()=>onSelect(item)}
                 checked={select.includes(item)}
                 
                 />

              </div>
              <p><NavLink className="detail" to={`/rescipe-detail/${i}`}>View Recipe</NavLink></p>
              </div>
            </div>
          ))
        )}
      </div> 
    </div>
  );
}

export default TopRecipes;