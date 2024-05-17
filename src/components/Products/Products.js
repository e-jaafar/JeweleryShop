import React from 'react'
import "./Products.css"
import { NavLink } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { addCart } from '../../features/jewelrySlice'
import { useSelector } from 'react-redux'

function Products(props) {
    const search = useSelector((state) => state.search.value);
    const recup = props.item;
    const dispatch = useDispatch()

    // Filtrer les produits en fonction de la recherche
    if (!recup.name.toLowerCase().includes(search.toLowerCase())) {
        return null;
    }

    return (
        <div>

            <div className='divProducts'>
                <NavLink to={`/productDetail/${recup.name}`}>
                    <img src={recup.image} alt={recup.name} />
                    <h5>{recup.name}</h5>
                    <h5>{recup.price} €</h5>
                    <h6>{recup.description}</h6>
                </NavLink>
                <button className='btnProducts' onClick={() => dispatch(addCart(recup.id))}>Buy</button>
            </div>

        </div>
    )
}

export default Products
