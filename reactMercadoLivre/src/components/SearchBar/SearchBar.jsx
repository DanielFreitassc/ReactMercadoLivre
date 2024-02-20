import React from 'react'
import { IoSearchOutline } from "react-icons/io5";
import "./SearchBar.css"
function SearchBar() {
    return (  
        <form className='search-bar'>
            <input type="search" placeholder="Buscar produtos" className="search__input" required/>
            <button type="submit" className="search__button">
                <IoSearchOutline/>
            </button>
        </form>
    );
}

export default SearchBar;