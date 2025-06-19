import React from 'react';

const AddCoffee = () => {
    return (
        <div className='p-24'>
            <div className='text-center p-12 space-y-10'>
                <h1 className='text-6xl'>Add Coffee</h1>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veritatis iure labore autem laborum qui ex, sunt minima maxime quo at!ś</p>
            </div>
            <form action="">
                <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
                        <label className="label">Name</label>
                        <input type="text" className="input w-full" placeholder="Coffee Name" />
                    </fieldset>
                    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
                        <label className="label">Chef</label>
                        <input type="text" className="input w-full" placeholder="Coffee Name" />
                    </fieldset>
                    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
                        <label className="label">Name</label>
                        <input type="text" className="input w-full" placeholder="Coffee Name" />
                    </fieldset>
                    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
                        <label className="label">Name</label>
                        <input type="text" className="input w-full" placeholder="Coffee Name" />
                    </fieldset>
                    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
                        <label className="label">Name</label>
                        <input type="text" className="input w-full" placeholder="Coffee Name" />
                    </fieldset>
                    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
                        <label className="label">Name</label>
                        <input type="text" className="input w-full" placeholder="Coffee Name" />
                    </fieldset>

                </div>
            </form>
        </div>
    );
};

export default AddCoffee;