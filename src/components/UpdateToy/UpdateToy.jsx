import { useLoaderData } from "react-router-dom";
import Swal from 'sweetalert2';
import useTitle from "../../hooks/useTitle";

const UpdateToy = () => {
    useTitle('Update');
    const toy = useLoaderData();
    const {_id, price, available_quantity, detailed_description, name, seller_email, seller_name, img, rating, type} = toy;


    const handleUpdate = event => {
        event.preventDefault();
        const form = event.target;
        const price = parseFloat(form.price.value);
        const available_quantity = form.quantity.value;
        const detailed_description = form.details.value;

        const updatedToy = {_id, price, available_quantity, detailed_description, name, seller_email, seller_name, img, rating, type}

        fetch(`https://toy-marketplace-server-side-muntasaleheen-gmailcom.vercel.app/toy/${_id}`,
        {
            method: 'PUT',

            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedToy)
        }
        )
        .then(res=> res.json())
        .then(data => {
            console.log(data);
            if(data.modifiedCount > 0){
                Swal.fire({
                    title: 'Success',
                    text: "New Toy has been added successfully",
                    icon: 'success',
                    confirmButtonText: 'Cool'
                })
            }
        })


    }

    return (
        <div className="bg-sky-400">
                                       <form onSubmit={handleUpdate}  className="p-10" >
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Price</span>
                                    </label>
                                    <input type="number" 
                                    defaultValue={price}
                                    placeholder="price"
                                        name="price" className="input input-bordered" />
                                </div>

                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Available Quantity</span>
                                    </label>
                                    <input type="number" 
                                    defaultValue={available_quantity}
                                    placeholder="quantity"
                                        className="input input-bordered"
                                        name="quantity" />

                                </div>

                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Detailed Description</span>
                                    </label>
                                    <textarea name="details" placeholder="Detailed Description" 
                                    defaultValue={detailed_description}
                                    className="textarea textarea-bordered textarea-lg w-full max-w-2xl" ></textarea>
                                </div>
                              
  

                                <div className="flex flex-col w-full">
                                    <div>                         <div className="form-control mt-6">
                                    <button className="btn btn-primary bg-orange-400 border-none w-100">Update</button>
                                </div></div>
                                    
                                </div>
                            </form>
        </div>
    );
};

export default UpdateToy;