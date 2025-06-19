import React from 'react';
import { useLoaderData } from 'react-router';
import Swal from 'sweetalert2';

const UpdateCoffee = () => {
    const coffee = useLoaderData();
    const { _id, name, quantity, supplier, taste, price, details, photo } = coffee;
    console.log(coffee);

    const handleUpdateCoffee = (e) => {
        e.preventDefault()
        const form = e.target;
        const formData = new FormData(form);
        const updatedCoffee = Object.fromEntries(formData.entries())
        console.log('data after update', updatedCoffee);

        // Send Updated Coffe to Database
        fetch(`http://localhost:3000/coffees/${_id}`, {
            method: 'PUT',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(updatedCoffee)
        }).then(res => res.json()).then(data => {
            console.log(data);
            if (data.modifiedCount) {
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Your Coffee updated successfully",
                    showConfirmButton: false,
                    timer: 1500
                });
            }
        })
    }

    return (
        <div className='p-24'>
            <div className='text-center p-12 space-y-10'>
                <h1 className='text-6xl'>Update Coffee</h1>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veritatis iure labore autem laborum qui ex, sunt minima maxime quo at!ś</p>
            </div>
            <form onSubmit={handleUpdateCoffee}>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
                        <label className="label">Name</label>
                        <input type="text" defaultValue={name} className="input w-full" placeholder="Coffee Name" name='name' />
                    </fieldset>
                    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
                        <label className="label">Quantity</label>
                        <input type="text" defaultValue={quantity} className="input w-full" placeholder="Quantity" name='quantity' />
                    </fieldset>
                    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
                        <label className="label">Supplier</label>
                        <input type="text" defaultValue={supplier} className="input w-full" placeholder="Supplier Name" name='supplier' />
                    </fieldset>
                    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
                        <label className="label">Taste</label>
                        <input type="text" defaultValue={taste} className="input w-full" placeholder="Taste Name" name='taste' />
                    </fieldset>
                    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
                        <label className="label">Price</label>
                        <input type="text" defaultValue={price} className="input w-full" placeholder="Price" name='price' />
                    </fieldset>
                    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
                        <label className="label">Details</label>
                        <input type="text" defaultValue={details} className="input w-full" placeholder="Details" name='details' />
                    </fieldset>
                </div>
                <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4 my-6">
                    <label className="label">Photo</label>
                    <input type="text" defaultValue={photo} className="input w-full" placeholder="Photo URL" name='photo' />
                </fieldset>
                <input type="submit" value="Update Coffee" className='btn w-full' />
            </form>
        </div>
    );
};

export default UpdateCoffee;