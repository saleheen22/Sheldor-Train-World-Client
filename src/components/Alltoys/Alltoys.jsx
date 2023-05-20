import { Link, useLoaderData } from 'react-router-dom';
import './Alltoys.css'
import { AuthContext } from '../provider/AuthProvider';
import { useState } from 'react';

const Alltoys = () => {
    const allToys = useLoaderData(AuthContext);



    const [searchToy, setSearchToy] = useState(allToys);


    const handleSearch = event => {
        event.preventDefault();
        const form = event.target;
        const search = form.search.value;
        console.log(search)
        const updatedToy = allToys.filter(toy => toy.name == search);
        setSearchToy(updatedToy);
    }

    return (
        <div className='w-name ms-16'>
            <div className='mt-5'><h2>Search Toys by Name</h2></div>

            <div className="form-control py-12">
                <form onSubmit={handleSearch}>
                    <div className="input-group">
                        <input type="text"
                            name='search'
                            placeholder="Search…" className="input input-bordered" />
                        <button className="btn btn-square bg-orange-400">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6  w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                        </button>
                    </div>
                </form>
            </div>
            <div className="overflow-x-auto">
                <table className="table table-zebra w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>Seller</th>
                            <th>Toy Name</th>
                            <th>Sub-Category</th>
                            <th>Price</th>
                            <th>Available Quantity</th>
                            <th>Details</th>
                        </tr>
                    </thead>
                    <tbody>

                        {searchToy.map(toy => (
                            <>
                                <tr>
                                    <td>{toy?.seller_name}</td>
                                    <td>{toy.name}</td>
                                    <td>{toy.type}</td>
                                    <td>${toy.price}</td>

                                    <td>{toy.available_quantity}</td>

                                    <Link to={`/toy/${toy._id}`}><td><button className='btn bg-orange-400 border-none'>View Details</button></td></Link>

                                </tr>

                            </>

                        ))



                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Alltoys;