import React from 'react';

const Login = () => {

    const handleLogin = (e) => {
        e.preventDefault();
    }

    const handleSignUp = (e) => {
        e.preventDefault();
    }

    return (
        <div>
            <h1>Login or Sign up</h1>
            <form className="Login">
                <label htmlFor="email">
                    <p>Email</p>
                    <input type="text" name="email" />
                </label>
                <label htmlFor="password">
                    <p>Password</p>
                    <input type="password" name="password" />
                </label>
                <div>
                    <button onClick={handleLogin}>Login</button>
                    <button onClick={handleSignUp}>Sign Up</button>
                </div>
            </form>
        </div>
    )
}

export default Login;