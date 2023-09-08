import React, { useState } from 'react'
import './css/login.css'
import { Link, useNavigate } from 'react-router-dom'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from './firebase';


const Login = () => {

    const navigate = useNavigate();

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')


    // signin function
    const signIn = async (e) => {
        e.preventDefault()

        // firebase
        try {
            await signInWithEmailAndPassword(auth, email, password)

            if (auth) {
                navigate('/')
            }
        }

        catch (error) {
            alert(error.message);
        }
    }


    // register function
    const register = async (e) => {
        e.preventDefault()
        // firebase
        try {
            await createUserWithEmailAndPassword(auth, email, password)

            if (auth) {
                navigate('/')
            }
        }

        catch (error) {
            alert(error.message);
        }


    }

    return (
        <div className='login'>

            <Link to='/'>
                <img
                    className='login-logo'
                    src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" alt="" />
            </Link>

            <div className="login-container">
                <h1>Sign-in</h1>

                <form action="">
                    <h5>E-mail</h5>
                    <input
                        type="text"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                    />

                    <h5>Password</h5>
                    <input
                        type="password"
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                    />

                    <button type='submit' onClick={signIn} className='login-signinbutton'>Sign In</button>
                </form>

                <p>By signing-in you agree to Amazon's FAKE CLONE Conditions of use & sale.
                    Please see our privacy Notice, our Cookies Notice and our Interest-Based Ads Notice.
                </p>

                <button onClick={register} className='login-registerbutton'>Create your Amazon Account</button>
            </div>
        </div>
    )
}

export default Login