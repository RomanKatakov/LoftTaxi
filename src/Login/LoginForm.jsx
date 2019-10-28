import React from 'react';

export const LoginForm = ({ setPage }) => {
    const onSubmit = e => {
        e.priventDefault()
        setPage('profile')
    };

    return ( <form onSubmit = { onSubmit } >
        <div>
        <input type = 'email'
        name = 'email'
        label = 'email'
        placeholder = 'email'/>
        </div>
        <div>
        <input type = 'password'
        name = 'password'
        label = 'password'
        placeholder = 'password' />
        </div> <button> Login </button>
        </form>
    )
}