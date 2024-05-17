// import React from 'react'
// import "./Bagues.css"
// import { useSelector } from 'react-redux'
// import { NavLink, useParams } from 'react-router-dom'

// function Bagues() {
//     // const jewelrySlice = useSelector((state) => state.jewelrySlice)
//     // const params = useParams()
//     // const recup = jewelrySlice.data.filter(element => element.category === params.category)
//     return (
//         <div>
//             <h1>{recup.category}</h1>
//             {
//                 recup.map((item, index) => (
//                     <NavLink key={index} to={`/productDetail/${item.name}`}>
//                         <div className='divProducts'>
//                             {/* <img src={item.image} alt={item.name} /> */}
//                             <img src={`/${item.image}`} alt={item.name} />
//                             <h5>{item.name}</h5>
//                             <h5>{item.price} €</h5>
//                             <h5>{item.description}</h5>
//                         </div>
//                     </NavLink>
//                 ))
//             }
//         </div>
//     )
// }

// export default Bagues