import React from 'react'
import "./Category.css"
import { useDispatch, useSelector } from 'react-redux'
import { NavLink, useParams } from 'react-router-dom'
import { addCart } from '../../features/jewelrySlice'

function Category() {
    const jewelrySlice = useSelector((state) => state.jewelrySlice)
    const search = useSelector((state) => state.search.value);
    const params = useParams()
    const recup = jewelrySlice.data.filter(element => element.category === params.category && element.name.toLowerCase().includes(search.toLowerCase()))
    const{category} = useParams()
    const dispatch=useDispatch()

    return (
        <div>
            <h1 className='h1Category'>{category}</h1>
            <h1>{recup.category}</h1>

            <div className='divHomeMapProducts divCategory'>
                {
                    recup?.map((item, index) => (
                        <div key={index} className='divProducts'>
                            <NavLink to={`/productDetail/${item.name}`}>
                                <img src={`/${item.image}`} alt={item.name} />
                                <h5>{item.name}</h5>
                                <h5>{item.price} €</h5>
                                <h5>{item.description}</h5>
                            </NavLink>
                            <button className='btnProducts' onClick={() => dispatch(addCart(item.id))}>Buy</button>
                        </div>

                    ))
                }
            </div>

        </div>
    )
}

export default Category
