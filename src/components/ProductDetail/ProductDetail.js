import React from 'react'
import "./ProductDetail.css"
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { addCart } from '../../features/jewelrySlice'

function ProductDetail() {
    const jewelrySlice = useSelector((state) => state.jewelrySlice)
    const params = useParams()
    const recup = jewelrySlice.data.find(element => element.name === params.id)
    const dispatch=useDispatch()

    return (
        <div className='divProductDetailP'>

            <div>
                <h1 className='h1ProductDetail'>Product Detail</h1>
            </div>

            {/* css du Products.js (standBy) */}
            <div className='divProducts divProductDetail'>
                <div>
                {/* <img src={recup.image} alt={recup.name} /> */}
                {/* Quand il capte pas mon image -> {`/${...}`} */}
                    <img src={`/${recup.image}`} alt={recup.name} />
                </div>
                <div>
                    <h5>{recup.name}</h5>
                    <h5>{recup.price} €</h5>
                    <h6>{recup.description}</h6>
                    <button className='btnProducts' onClick={() => dispatch(addCart(recup.id))}>Buy</button>
                </div>
            </div>
        </div>
    )
}

export default ProductDetail