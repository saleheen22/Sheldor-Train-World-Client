import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { Rating } from "@smastrom/react-rating";
import Swal from 'sweetalert2'
import { PacmanLoader } from 'react-spinners';
import { Link } from "react-router-dom";
import useTitle from "../../hooks/useTitle";

const Mytoys = () => {
    useTitle('My Toys')
    const { user, loading } = useContext(AuthContext);
    const [isSort, setIsSort] = useState(false);
    const [sortValue, setSortValue] = useState(1);

    const [myToys, setMyToys] = useState([]);
    const url = `https://toy-marketplace-server-side-eight.vercel.app/toyseller?seller_email=${user.email}&value=${sortValue}`;
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setMyToys(data);
            })
    }, [])



    const handleSort = (id) => {
        console.log(id);
        setIsSort(true);
        setSortValue(id);
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setMyToys(data);
            })



    }





    const handleDelete = id => {
        const proceed = confirm('Are you Sure, you want to Delete?')
        console.log(id);

        if (proceed) {
            fetch(`https://toy-marketplace-server-side-muntasaleheen-gmailcom.vercel.app/toy/${id}`,
                {
                    method: 'DELETE'
                })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        Swal.fire({
                            title: 'Deleted',
                            text: "The toy has been deleted",
                            icon: 'success',
                            confirmButtonText: 'Cool'
                        })

                        const remaining = myToys.filter(toy => toy._id !== id)

                        setMyToys(remaining);
                    }
                })
        }
    }
    return (
        <div>


            <div>


                <div className="my-10 mx-10">
                    <h1>Please Click the appropriate button to  sort the toys based on price </h1>
                    <button onClick={() => handleSort(1)} className="btn bg-orange-500 mx-5">Ascending</button>
                    <button onClick={() => handleSort(-1)} className="btn">Descending</button>
                    <p className="text-2xl"><span>Note:</span><span className="text-red-500">[Please Click the sorting button Multiple times if not working on first click]</span></p>
                </div>

            {
                loading? <>
                <PacmanLoader color="rgba(54, 215, 183, 1)" />
                </> :
                <>
                         <div className="overflow-x-auto w-full">
                <table className="table table-zebra w-full">
                    {/* head */}
                    <thead >
                        <tr>
                            <th className="bg-sky-400">
                                Picture
                            </th>
                            <th className="bg-sky-400">Toy Name</th>
                            <th className="bg-sky-400">Seller Name</th>
                            <th className="bg-sky-400">Seller Email</th>
                            <th className="bg-sky-400">Sub-Category</th>
                            <th className="bg-sky-400">Price</th>
                            <th className="bg-sky-400"> Rating</th>
                            <th className="bg-sky-400">Available Quantity</th>
                            <th className="bg-sky-400">Description</th>
                            <th className="bg-sky-400">Update</th>
                            <th className="bg-sky-400">Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            myToys.map(toy => (
                                <>
                                    <tr>

                                        <td>
                                            <div className="flex items-center space-x-3">
                                                <div className="avatar">
                                                    <div className="mask mask-squircle w-12 h-12">
                                                        <img src={toy?.img} />
                                                    </div>
                                                </div>
                                            </div>
                                        </td>
                                        <td>
                                            {toy.name}
                                            <br />
                                        </td>
                                        <td>{toy.seller_name}</td>
                                        <td>{toy.seller_email}</td>
                                        <td>{toy.type}</td>
                                        <td>${toy.price}</td>
                                        <td> <span className="ms-5">{toy.rating}</span>
                                            <br />
                                            <p className="tb"><Rating readOnly={true} style={{ maxWidth: 250 }} value={toy.rating} /></p>
                                        </td>
                                        <td>{toy.available_quantity}</td>
                                        <td><p>{toy.detailed_description}</p></td>
                                        <td>
                                            <Link to={`/update/${toy._id}`}><button className="btn bg-orange-400 border-none">Update</button></Link>


                                        </td>
                                        <td><button onClick={() => handleDelete(toy._id)} className="btn btn-square border-none bg-red-600">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                                        </button></td>


                                    </tr>

                                </>
                            ))
                        }

                    </tbody>



                </table>
            </div>
                </>
            }


            </div>

       
        </div>
    );
};

export default Mytoys;