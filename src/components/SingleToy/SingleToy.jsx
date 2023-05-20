import { useLoaderData } from "react-router-dom";
import './SingleToy.css'
import { Rating } from "@smastrom/react-rating";
const SingleToy = () => {
    const toy = useLoaderData();
    const { name, img, detailed_description, type, seller_name, available_quantity, seller_email, price, rating } = toy;
    return (
        <div className="w-name">
            <div className="overflow-x-auto w-full">
                <table className="table w-full ">
                    {/* head */}
                    <thead className="bg-sky-200">
                        <tr className="bg-sky-200">
                            <th className=" bg-sky-200"> Picture
                            </th>
                            <th className=" bg-sky-200">Toy Name</th>
                            <th className=" bg-sky-200">Seller Name</th>
                            <th className=" bg-sky-200">Seller Email</th>
                            <th className=" bg-sky-200">Price</th>
                            <th className=" bg-sky-200 ms-5 ps-5">Rating</th>
                            <th className=" bg-sky-200">Available Quantity</th>
                            <th className=" bg-sky-200">Detail Description</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        <tr>
                            <td>
                                <div className="flex items-center space-x-3">
                                    <div className="avatar">
                                        <div className="mask mask-squircle w-12 h-12">
                                            <img src={img} alt="Avatar Tailwind CSS Component" />
                                        </div>
                                    </div>

                                </div>
                            </td>
                            <td>
                                {name}
                                <br />
                                <span className="badge badge-ghost badge-sm"><span >Category: </span  >{type}</span>
                            </td>
                            <td>{seller_name}</td>
                            <td>{seller_email}</td>
                            <td>${price}</td>
                            <td> <span className="ms-5">{rating}</span> 
                            <br />
                            <p className="tb"><Rating  readOnly = {true} style={{ maxWidth: 250 }} value={rating} /></p>
                            </td>
                            <td className="ps-12">{available_quantity}</td>
                            <td className="tb ">
                                {/* The button to open modal */}
                                <label htmlFor="my-modal-5" className="btn">View Description</label>
                            
                                <input type="checkbox" id="my-modal-5" className="modal-toggle" />
                                <div className="modal">
                                    <div className="modal-box w-11/12 max-w-5xl">
                                        <h3 className="font-bold text-lg bg-sky-500">Detailed Description</h3>
                                        <p className="py-4 break-all  ">{detailed_description}</p>
                                        <div className="modal-action">
                                            <label htmlFor="my-modal-5" className="btn">Got it!</label>
                                        </div>
                                    </div>
                                </div>
                            </td>


                            <th>

                            </th>
                        </tr>

                    </tbody>
                </table>
            </div>
        </div >
    );
};

export default SingleToy;