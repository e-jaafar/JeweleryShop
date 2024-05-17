import React from 'react'
import "./Cart.css"
import { useDispatch, useSelector } from 'react-redux'
import { addCart, checkout, deleteCart } from '../../features/jewelrySlice'
import { Trash } from 'lucide-react';


function Cart() {
    const jewelrySlice = useSelector((state) => state.jewelrySlice)
    const dispatch = useDispatch()

    return (
        <div className='totalCart'>
            <h1 className='h1Cart'>Cart</h1>
        <div >

            {/* <h2>Total: {jewelrySlice.totalCart} €</h2> */}
            {/* Pour arrondire à 2 chiffres après la , */}
            <h3>Total: {jewelrySlice.totalCart.toFixed(2)} €</h3>

            <button type='submit' onClick={() => dispatch(checkout())} className='btnCart'>Checkout   <Trash /> </button>
        </div>



            {/* Repris de ProductDetail.js */}
            {/* <div className='divProducts divProductDetail'>
                <div>
                    <img src={`/${recup.image}`} alt={recup.name} />
                </div>
                <div>
                    <h5>{recup.name}</h5>
                    <h5>{recup.price} €</h5>
                    <h6>{recup.description}</h6>
                    <button className='btnProducts'>Buy</button>
                </div>
            </div> */}


                <div className='divCart'>
            {
                jewelrySlice.tabCart.map((item, index) => (
                    <div key={index} className='divProducts divProductDetail'>
                        <div>
                            <img src={`/${item.image}`} alt={item.name} />
                        </div>
                        <div className=''>
                            <h5>{item.name}</h5>
                            <h5>{item.price} €</h5>
                            <h6>{item.description}</h6>
                            {/* ajouter directement dans ma fct addCart */}
                            <p>Quantity: {item.quantity}</p>
                            <button className='btnProducts' onClick={() => dispatch(addCart(item.id))}>Add</button>
                            <button className='btnProducts' onClick={()=> dispatch(deleteCart(item.id))}>Supprimer</button>
                        </div>
                    </div>
                ))
            }

                </div>

            {/* <button type='submit' onClick={() => dispatch(checkout())}>Checkout</button> */}
            {/* <input type="submit" onClick={() => dispatch(checkout())}/> */}
        </div>
    )
}

export default Cart