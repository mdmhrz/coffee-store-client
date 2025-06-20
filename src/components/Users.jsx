import React, { useState } from 'react';
import { FaEye } from 'react-icons/fa';
import { MdDelete, MdEdit } from 'react-icons/md';
import { Link, useLoaderData } from 'react-router';
import Swal from 'sweetalert2';

const Users = () => {
    const initialUsers = useLoaderData();
    const [users, setUsers] = useState(initialUsers)
    // console.log(users);


    const handleDelete = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {

                fetch(`https://coffee-store-server-sooty-tau.vercel.app/users/${id}`, {
                    method: 'DELETE'
                }).then(result => result.json()).then(data => {
                    if (data.deletedCount) {

                        const remainingUsers = users.filter(user => user._id !== id);
                        setUsers(remainingUsers);

                        Swal.fire({
                            title: "Deleted!",
                            text: "User has been deleted.",
                            icon: "success"
                        });
                    }

                    console.log('After delete', data);
                })



            }
        });
    }
    return (
        <div>
            <h2 className='text-center text-4xl mb-8'>Total Users = {users.length}</h2>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>
                                No.
                            </th>
                            <th>Name</th>
                            <th>Phone Number</th>
                            <th>Email</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {
                            users.map((user, index) => <tr key={user._id}>
                                <th>
                                    {index + 1}
                                </th>
                                <td>
                                    <div className="flex items-center gap-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle h-12 w-12">
                                                <img
                                                    src={user.photo}
                                                    alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>
                                        <div>
                                            <div className="font-bold">{user.name}</div>
                                            <div className="text-sm opacity-50">{user.address}</div>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    {user.number}

                                </td>
                                <td>{user.email}</td>
                                <th className='flex gap-2'>
                                    <Link to={`/coffee/${user._id}`}>
                                        <button className="btn join-item bg-yellow-600"><FaEye className='text-white ' /></button>
                                    </Link>


                                    <Link to={`/updateCoffee/${user._id}`}>
                                        <button className="btn join-item bg-white text-black"><MdEdit className='' /></button>
                                    </Link>


                                    <button onClick={() => handleDelete(user._id)} className="btn join-item bg-red-700"><MdDelete className='' /></button>
                                </th>
                            </tr>)
                        }

                    </tbody>
                    {/* foot */}

                </table>
            </div>
        </div>
    );
};

export default Users;