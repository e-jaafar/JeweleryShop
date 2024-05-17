import React, { useState } from 'react'
import "./NavBar.css"
import { NavLink, Outlet } from 'react-router-dom'
import { ShoppingCart } from 'lucide-react';
import { useDispatch, useSelector } from 'react-redux';
import { updateSearch } from '../../features/searchSlice';
import { Search } from 'lucide-react';



function NavBar() {
    const [search, setSearch] = useState('');
    const loginSlice=useSelector((state)=>state.loginSlice)
    const dispatch = useDispatch();
    const [showSearchIcon, setShowSearchIcon] = useState(true);
    const [showClearIcon, setShowClearIcon] = useState(false);

  

    const updateSearchValue = (event) => {
        setSearch(event.target.value);
    }
    const handleSearchChange = (event) => {
        dispatch(updateSearch(event.target.value));
        updateSearchValue(event);
        setShowSearchIcon(event.target.value === ''); // Afficher l'icône de recherche si le champ est vide
        setShowClearIcon(event.target.value !== ''); // Afficher l'icône de suppression si le champ n'est pas vide
    };
    
    

    return (
        <div className=''>

            <div className='navBar'>
                <div className='leftNavbar '>
                    <NavLink className="navLink" to={'/'}>Home</NavLink>
                    <NavLink className="navLink" to={'/category/Ring'}>Rings</NavLink>
                    <NavLink className="navLink" to={'/category/Bracelet'}>Bracelets</NavLink>
                    <NavLink className="navLink" to={'/category/Watch'}>Watches</NavLink>
                    <NavLink className="navLink" to={'/category/Necklace'}>Necklaces</NavLink>
                    <NavLink className="navLink" to={'/category/Earring'}>Earrings</NavLink>
                </div>
                <div className='rightNavbar'>
               <input
                    type="text"
                    placeholder="Search"
                    className="searchBar"
                    value={search}
                    onChange={handleSearchChange}
                />
                {showSearchIcon && <Search style={{ position: "absolute", marginLeft: "113px", marginTop: "5px" }} />}
                                    <NavLink className="navLink" to={'/login'}>{loginSlice.nameInitial.charAt(0).toUpperCase() + loginSlice.nameInitial.slice(1)}</NavLink>

                    <NavLink className="navLink" to={'/cart'}>  My basket <ShoppingCart style={{ position: "absolute" }} /> </NavLink>
                </div>
            </div>

            <div className='divOutletNavBar'>
                <Outlet />
            </div>

        </div>
    )
}

export default NavBar
