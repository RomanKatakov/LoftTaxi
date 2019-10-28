import React from 'react';


export const SignupForm = ({ setPage }) => {
    const onSubmit = e => {
        e.priventDefault()
        setPage('profile')
    };

    return ( <form onSubmit = { onSubmit }>
        <div>
        <input type = 'email'
        name = 'email'
        label = 'email'
        placeholder = 'email'/>
        </div>
        <div>
        <input type = 'text'
        name = 'firstname'
        label = 'firstname'
        placeholder = 'Name'/>
        </div>
        <div>
        <input type = 'text'
        name = 'lastname'
        label = 'lastname'
        placeholder = 'Surname'/>
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