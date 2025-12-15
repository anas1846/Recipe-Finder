import React from 'react'
import { useState } from 'react';
import './Navbar.css' 
import TopRecipes from './Top Recipes'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { data } from 'react-router-dom';
const Navbar = ({setSearch ,search  }) => {


  const getChange = (e) => {
    setSearch(e.target.value);  
  };

  const add = () => {
    if (!search || search.trim() === "") return;

    console.log("search:", search);

    // optional: clear input after search
    setSearch("");
  };


  return (
    <div>
       <div className="recipe-home">
     
   <div className="Content">
      <h1 className='Logo'>Recipe Finder</h1>
      <div className="center">
      <div className="search-bar">
        <h1 className='Search-heading'>Stop wondering — start cooking!</h1>
<div className="recipe-search">
  {}
        <input onChange={getChange} type="text" placeholder='Search recipe for your Craving' />
        <FontAwesomeIcon  onClick={add}
         icon={faMagnifyingGlass} style={{ color: "#00000096" }} />
        </div>
        <p>Suggested: pasta, chicken, pizza, cake, cookies & more</p>

        </div>
        </div>
   </div>
     </div>
    </div>
  )
}

export default Navbar