import React from 'react';
import { FaEdit, FaEye } from 'react-icons/fa';
import { MdDelete, MdEdit } from 'react-icons/md';
import { Link } from 'react-router';
import Swal from 'sweetalert2';

const CoffeeCard = ({ coffee, coffees, setCoffees }) => {

    const { _id, name, price, quantity, photo } = coffee;

    const handleDelete = (_id) => {
        // console.log(_id);
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
                // Start Deleting the coffee form DB
                fetch(`http://localhost:3000/coffees/${_id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log('after delete', data);
                        if (data.deletedCount) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your Coffee has been deleted.",
                                icon: "success"
                            });

                            // remove the current coffee form state
                            const remainingCoffee = coffees.filter(c => c._id !== _id);
                            setCoffees(remainingCoffee)
                        }
                    })
            }
        });
    }

    return (
        <div className="card card-side bg-base-200 shadow-sm border-2 p-3">
            <figure>
                <img
                    src={photo}
                    alt="Movie" />
            </figure>
            <div className="flex w-full justify-around mt-4">
                <div>
                    <h2 className="">Name:{name}</h2>
                    <p>Price: {price}</p>
                    <p>Quantity: {quantity}</p>
                </div>
                <div className="card-actions">
                    <div className="join join-vertical space-y-3">

                        <Link to={`/coffee/${_id}`}>
                            <button className="btn join-item bg-yellow-600"><FaEye className='text-white text-lg' /></button>
                        </Link>


                        <Link to={`/updateCoffee/${_id}`}>
                            <button className="btn join-item bg-white text-black"><MdEdit className='text-lg' /></button>
                        </Link>


                        <button onClick={() => handleDelete(_id)} className="btn join-item bg-red-700"><MdDelete className='text-lg' /></button>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default CoffeeCard;