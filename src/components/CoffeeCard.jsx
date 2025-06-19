import React from 'react';
import { FaEdit, FaEye } from 'react-icons/fa';
import { MdDelete, MdEdit } from 'react-icons/md';
import Swal from 'sweetalert2';

const CoffeeCard = ({ coffee }) => {

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
                Swal.fire({




                    // title: "Deleted!",
                    // text: "Your file has been deleted.",
                    // icon: "success"
                });
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
                        <button className="btn join-item bg-yellow-600"><FaEye className='text-white' /></button>
                        <button className="btn join-item bg-white text-black"><MdEdit className='text-lg' /></button>
                        <button onClick={() => handleDelete(_id)} className="btn join-item bg-red-700"><MdDelete className='text-lg' /></button>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default CoffeeCard;