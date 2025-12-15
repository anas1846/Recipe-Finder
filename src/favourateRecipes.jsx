import React from 'react'
import recipes from './recipe'
import { faHourglass2 } from '@fortawesome/free-solid-svg-icons'

const FavourateRecipes = ({ data }) => {
  return (
    <div className="grid">
      {data && data.length > 0 ? (
        data.map((item, i) => (
          <div className="card" key={i}>
            <img src={item.img} alt={item.name} />
            <div className="card-content">
              <h3>{item.name}</h3>
            </div>
          </div>
        ))
      ) : (
        <h2>No Favourite Recipes Added</h2>
      )}
    </div>
  );
};

export default FavourateRecipes
