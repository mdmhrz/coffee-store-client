import React, { use, useContext } from 'react';
import { AuthContext } from '../contexts/AuthContext';
import Swal from 'sweetalert2';

const SignUp = () => {

    const { createUser } = use(AuthContext);
    // console.log(createUser);


    const handleSignUp = e => {
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);

        const { email, password, ...userProfile } = Object.fromEntries(formData)



        console.log(email, password, userProfile);
        // Create user in the firebase
        createUser(email, password).then(res => {
            console.log(res.user);

            // Save profile infor in the database
            fetch('http://localhost:3000/users', {
                method: 'POST',
                headers: {
                    'Content-type': 'application/json'
                },
                bdoy: JSON.stringify(userProfile)
            }).then(res => res.json()).then(data => {
                if (data.insertedId) {
                    Swal.fire({
                        title: "User profile created successfully",
                        icon: "success",
                        draggable: true,
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
            })

        }).catch(error => {
            console.log(error);
        })



    }

    return (

        <div className="card bg-base-100 max-w-sm mx-auto shrink-0 shadow-2xl">
            <div className="card-body">
                <h1 className="text-4xl font-bold text-center">Sign Up now!</h1>
                <form className="fieldset" onSubmit={handleSignUp}>

                    <label className="label">Name</label>
                    <input type="text" className="input" name='name' placeholder="Your Name" />

                    <label className="label">Address</label>
                    <input type="text" className="input" name='address' placeholder="Address" />

                    <label className="label">Phone Number</label>
                    <input type="number" className="input" name='number' placeholder="Your Number" />

                    <label className="label">Photo</label>
                    <input type="text" className="input" name='photo' placeholder="Photo URL" />

                    <label className="label">Email</label>
                    <input type="email" className="input" name='email' placeholder="Email" />

                    <label className="label">Password</label>
                    <input type="password" name='password' className="input" placeholder="Password" />

                    <button className="btn btn-neutral mt-4">Sign Up</button>
                </form>
            </div>
        </div>
    );
};

export default SignUp;