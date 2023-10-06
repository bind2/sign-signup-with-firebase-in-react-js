import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../firebase-config/Firebase'

const Signup = () => {
    const [details, setDetails] = useState({ email: '', password: '' })
    const [error, setError] = useState('')
    const [icon, setIcon] = useState(true)

    const changeHandler = (e) => {
        const { name, value } = e.target
        return setDetails({ ...details, [name]: value })
    }

    const submitHandler = async (e) => {
        e.preventDefault()
        createUserWithEmailAndPassword(auth, details.email, details.password)
            .then(() => alert('success'))
            .then(() => setDetails({ email: '', password: '' }))
            .catch((err) => setError(err.message))
    }
    
    const showHide = (e)=>{
        icon === true ? setIcon(false) : setIcon(true)
        icon === true ? e.target.className = "fa-solid fa-eye-slash" : e.target.className = "fa-solid fa-eye"
    }

    return (
        <div className="form-container">
            <div className="form-box"></div>
            <div className="form-details">
                <h2>Sign up</h2>
                <h3>{error}</h3>
                <form onSubmit={submitHandler}>
                    <div className="input-field">
                        <input type="email" id="email" name='email' value={details.email} onChange={changeHandler} placeholder="enter you email" autoComplete='off' required />
                    </div>
                    <div className="input-field">
                        <input type={icon === true ? "password" : "text"} id="password" name='password' value={details.password} onChange={changeHandler} placeholder="create your password" autoComplete='off' required />
                        <i className="fa-solid fa-eye" id="icon" onClick={showHide}></i>
                    </div>
                    <button type="submit">Sign up</button>

                </form>
                <div>
                    you have already account ? <Link to="/signin">Sign in</Link>
                </div>
            </div>
        </div>
    )
}

export default Signup