import React, { useState } from 'react';
import Home from './Home';
import './LoginWithLocalStorage.css';

const LoginWithLocalStorage = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const getUsername = localStorage.getItem('usernameData');
    const getPassword = localStorage.getItem('passwordData');


    const handleSubmit = (e) => {
        // e.preventDefault();
        if (username.length && password.length) {
            localStorage.setItem('usernameData', username)
            localStorage.setItem('passwordData', password)
        }
    }

    return (
        <div>
            {
                getUsername && getPassword ? <Home /> :
                    <form onSubmit={handleSubmit}>
                        <div>
                            <input
                                type='text'
                                placeholder='enter username'
                                onChange={e => setUsername(e.target.value)}
                            />
                        </div>
                        <div>
                            <input
                                type='password'
                                placeholder='enter password'
                                onChange={e => setPassword(e.target.value)} />
                        </div>
                        <button>Login</button>
                    </form>
            }
        </div>
    )
};

export default LoginWithLocalStorage;