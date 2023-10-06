import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from 'firebase/auth'
import { auth } from '../firebase-config/Firebase'
import { useNavigate } from 'react-router-dom'


const Signin = () => {
    const navigate = useNavigate()
    const googleProvider = new GoogleAuthProvider()

    const [details, setDetails] = useState({ email: '', password: '' })
    const [error, setError] = useState('')
    const [icon, setIcon] = useState(true)

    const changeHandler = (e) => {
        const { name, value } = e.target
        setDetails({ ...details, [name]: value })
    }

    const submitHandler = async (e) => {
        e.preventDefault()
        signInWithEmailAndPassword(auth, details.email, details.password)
            .then(() => setDetails({ email: '', password: '' }))
            .then(() => navigate('/home'))
            .catch((err) => setError(err.message))

    }

    const signInWithGoogle = () => {
        signInWithPopup(auth, googleProvider)
            .then(() => navigate('/home'))
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
                <h2>Login</h2>
                <h3>{error}</h3>
                <form onSubmit={submitHandler}>
                    <div className="input-field">
                        <input type="email" id="email" name='email' value={details.email} onChange={changeHandler} placeholder="enter your email" autoComplete='off' required />
                    </div>
                    <div className="input-field">
                        <input type={icon === true ? "password" : "text"} id="password" name='password' value={details.password} onChange={changeHandler} placeholder="enter your password" autoComplete='off' required />
                        <i className="fa-solid fa-eye" id="icon" onClick={showHide}></i>
                    </div>
                    <button type="submit">Login</button>
                </form>
                <div className="google-btn" onClick={signInWithGoogle}>
                    <div className="google-icon-wrapper">
                        <img className="google-icon" src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" alt='google-logo' />
                    </div>
                    <button >Sign in with Google</button>
                </div>
                <div>
                    Don't have and account ? <Link to="/">Sign up</Link>
                </div>
            </div>
        </div>
    )
}

export default Signin