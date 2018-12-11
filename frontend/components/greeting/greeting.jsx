import React from 'react';
import { Link } from 'react-router-dom';


const Greeting = ({currentUser, logout}) => {
    const sessionLinks = () => (
        <nav className="login-signup">
            <Link to="/login">Login</Link>
            <Link to="/signup">Sign Up</Link>
        </nav>
    );

    const personalGreeting = () => (
        <div>
            <h1>Hi {currentUser.username}</h1>
            <button onClick={logout}>Log Out</button>
        </div>
    );        

    return currentUser ? personalGreeting() : sessionLinks()
}

export default Greeting;