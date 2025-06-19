import React from 'react';
import Swal from 'sweetalert2';

const AddCoffee = () => {


    const handleAddCoffee = e => {
        e.preventDefault()
        const form = e.target;
        const formData = new FormData(form);
        const newCoffee = Object.fromEntries(formData.entries())
        console.log(newCoffee);

        // Send data to DB
        fetch('http://localhost:3000/coffees', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(newCoffee)
        }).then(res => res.json()).then(data => {
            if (data.insertedId) {
                Swal.fire({
                    title: "Coffee Added Successfully",
                    icon: "success",
                    draggable: true
                });
            }
            form.reset();
        })
    }

    return (
        <div className='p-24'>
            <div className='text-center p-12 space-y-10'>
                <h1 className='text-6xl'>Add Coffee</h1>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veritatis iure labore autem laborum qui ex, sunt minima maxime quo at!ś</p>
            </div>
            <form onSubmit={handleAddCoffee}>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
                        <label className="label">Name</label>
                        <input type="text" className="input w-full" placeholder="Coffee Name" name='name' />
                    </fieldset>
                    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
                        <label className="label">Quantity</label>
                        <input type="text" className="input w-full" placeholder="Quantity" name='quantity' />
                    </fieldset>
                    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
                        <label className="label">Supplier</label>
                        <input type="text" className="input w-full" placeholder="Supplier Name" name='supplier' />
                    </fieldset>
                    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
                        <label className="label">Taste</label>
                        <input type="text" className="input w-full" placeholder="Taste Name" name='taste' />
                    </fieldset>
                    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
                        <label className="label">Price</label>
                        <input type="text" className="input w-full" placeholder="Price" name='price' />
                    </fieldset>
                    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
                        <label className="label">Details</label>
                        <input type="text" className="input w-full" placeholder="Details" name='details' />
                    </fieldset>
                </div>
                <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4 my-6">
                    <label className="label">Photo</label>
                    <input type="text" className="input w-full" placeholder="Photo URL" name='photo' />
                </fieldset>
                <input type="submit" value="Add Coffee" className='btn w-full' />
            </form>
        </div>
    );
};

export default AddCoffee;