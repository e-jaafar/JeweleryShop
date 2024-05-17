import React from 'react'
import "./LoginPage.css"
import { useDispatch, useSelector } from 'react-redux'
import { connection, disconnection, recupEmail, recupName, recupPassword } from '../../features/loginSlice'

function LoginPage() {
    const dispatcch = useDispatch() // Correction de la variable dispatch
    const loginSlice = useSelector((state)=> state.loginSlice)
    return (
        <div className="login-page">
            {
                loginSlice.validation === false &&
                <div className="login-form">
                    <h1 className="login-title">Login Page</h1>
                    <h2 className="login-message">{loginSlice.message}</h2>
                    <div style={{display:"flex", flexDirection:"column"}}>
                        <input className="login-input" type="text" placeholder='name' onChange={(e)=>dispatcch(recupName(e.target.value))}/> {/* Correction de la fonction recupName */}
                        <input className="login-input" type="email" placeholder='email @' onChange={(e)=>dispatcch(recupEmail(e.target.value))}/> {/* Correction de la fonction recupEmail */}
                        <input className="login-input" type="password" placeholder='password' onChange={(e)=>dispatcch(recupPassword(e.target.value))}/> {/* Correction de la fonction recupPassword */}
                    </div>
                    <button className="login-button" onClick={()=> dispatcch(connection())}>Connection</button>
                </div>
            }
            {
                loginSlice.validation === true &&
                <div className="welcome-message">
                    <h2 className="login-message">{loginSlice.message}</h2>
                                        {/* <h4>Welcome, {loginSlice.name} !</h4> */}
                    {/* Pour afficher la 1er lettre en maj */}

                    <h4>Welcome, {loginSlice.name} !</h4>
                    <button className="logout-button" onClick={()=>dispatcch(disconnection())}>Disconnect</button>
                </div>
            }
        </div>
    )
}

export default LoginPage
