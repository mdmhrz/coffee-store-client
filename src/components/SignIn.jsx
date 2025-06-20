import React, { use } from 'react';
import { AuthContext } from '../contexts/AuthContext';



const SignIn = () => {
    const { signInUser } = use(AuthContext)

    const handleSignIn = e => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);

        // firebase sign in signin
        signInUser(email, password).then(res => {
            console.log(res.user);
            const signInInfo = {
                email,
                lastSignInTime: res.user?.metadata?.lastSignInTime
            }
            // update last signin into Database
            fetch('http://localhost:3000/users/', {
                method: "PATCH",
                headers: {
                    'Content-type': 'application/json'
                },
                body: JSON.stringify(signInInfo)
            })
                .then(res => res.json())
                .then(data => {
                    console.log('After update patch', data);
                })

        }).catch(error => {
            console.log(error);
        })
    }

    return (
        <div className="card bg-base-100 max-w-sm mx-auto shrink-0 shadow-2xl">
            <div className="card-body">
                <h1 className="text-4xl font-bold text-center">Sign In now!</h1>
                <form className="fieldset" onSubmit={handleSignIn}>

                    <label className="label">Email</label>
                    <input type="email" className="input" name='email' placeholder="Email" />

                    <label className="label">Password</label>
                    <input type="password" name='password' className="input" placeholder="Password" />

                    <button className="btn btn-neutral mt-4">Sign In</button>
                </form>
            </div>
        </div>
    );
};

export default SignIn;