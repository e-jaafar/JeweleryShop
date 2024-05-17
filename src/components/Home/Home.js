import React from 'react'
import "./Home.css"
import Carousel from '../Carousel/Carousel'
import { useDispatch, useSelector } from 'react-redux'
import Products from '../Products/Products'

function Home() {
    const jewelrySlice = useSelector((state)=> state.jewelrySlice)
    return (
        <div>

            <div>
                <Carousel/>
            </div>

            <div className='divHomeMapProducts'>
                {
                    jewelrySlice?.data.map((item, index)=>(
                        <Products key={index} item={item}/>
                    ))
                }
            </div>

        </div>
    )
}

export default Home