import React from 'react';
import { useLoaderData } from 'react-router';

const CoffeeDetails = () => {

    const coffee = useLoaderData();
    console.log(coffee);
    return (
        <div>
            <div className="card bg-base-100 w-96 shadow-sm">
                <figure>
                    <img
                        src={coffee.photo}
                        alt="Shoes" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">{coffee.name}</h2>
                    <h4 className="">Price: {coffee.price}</h4>
                    <h4 className="">Taste: {coffee.taste}</h4>
                    <p>Supplier Name: {coffee.supplier}</p>
                    <p className='text-gray-400'>{coffee.details}</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Buy Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CoffeeDetails;