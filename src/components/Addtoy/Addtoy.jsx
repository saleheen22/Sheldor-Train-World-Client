import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import Swal from 'sweetalert2'
import useTitle from "../../hooks/useTitle";
const Addtoy = () => {
    useTitle('Add Toy');

    const {user} = useContext(AuthContext);
    console.log(user);
    const handleAddToy = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const img  = form.pic.value;
        const seller_name = form.sellerName.value;
        const seller_email = form.sellerEmail.value;
        const price = parseFloat(form.price.value);
       
        const type = form.type.value;
        const rating = form.rating.value;
        const detailed_description = form.details.value;
        const available_quantity = form.quantity.value;
        form.reset();

        console.log("Type of price", typeof price);

        const newToy = {name, img, seller_name, seller_email, price, available_quantity, type, rating, detailed_description};
        console.log(newToy);

        fetch('https://toy-marketplace-server-side-muntasaleheen-gmailcom.vercel.app/insert',
            {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(newToy)
            }
        )
        .then(res=> res.json())
        .then(data=> {
            console.log("The data is inside the fetch function", data)
            if(data.insertedId){
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
        <div className="w-name">
            <div className="hero  bg-sky-300">
                <div className="hero-content flex-col lg:flex-row-reverse ">

                    <div className="card flex-shrink-0 w-full min-w-full shadow-2xl bg-base-100">
                        <div className="card-body w-full p-12">
                            <form className="w-full" onSubmit={handleAddToy}>
                                <div className="form-control grid md: grid-cols-2 gap-10">
                                    <div>
                                        <label className="label">
                                            <span className="label-text">Toy Name</span>
                                        </label>
                                        <input type="text" placeholder="name"
                                            name="name"
                                            className="input input-bordered" />
                                    </div>
                                    <div>
                                        <label className="label">
                                            <span className="label-text">Picture URL of the Toy</span>
                                        </label>
                                        <input type="url" placeholder="pic url"
                                            name="pic"
                                            className="input input-bordered" />
                                    </div>
                                </div>

                                <div className="form-control grid md:grid-cols-2 gap-6">
                                    <div>
                                        <label className="label">
                                            <span className="label-text">Seller Name</span>
                                        </label>
                                        <input type="text" defaultValue={user
                                        ?.displayName
                                    }  placeholder="Seller Name"
                                            name="sellerName"
                                            className="input input-bordered" />
                                    </div>
                                    <div>
                                        <label className="label">
                                            <span className="label-text">Seller Email</span>
                                        </label>
                                        <input type="email" placeholder="Seller email"
                                            name="sellerEmail" defaultValue={user?.email} 
                                            className="input input-bordered" />
                                    </div>
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Price</span>
                                    </label>
                                    <input type="number" placeholder="price"
                                        name="price"
                                        className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Rating</span>
                                    </label>
                                    <input type="text" placeholder="rating"
                                        name="rating"
                                        className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Available Quantity</span>
                                    </label>
                                    <input type="number" placeholder="quantity"
                                        name="quantity"
                                        className="input input-bordered" />
                                </div>

                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Select Toy Type</span>
                                    </label>
                                    <div className="input-group">
                                        <select name="type" className="select select-bordered">
                                            <option disabled selected>Pick category</option>
                                            <option>bullet</option>
                                            <option>Steam Engine</option>
                                            <option>Disney</option>
                                        </select>
                                    </div>
                                </div>


                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Detailed Description</span>
                                    </label>
                                    <textarea name="details" placeholder="Detailed Description" className="textarea textarea-bordered textarea-lg w-full max-w-xs" ></textarea>
                                </div>


                                <div className="form-control mt-6">
                                    <button className="btn bg-orange-400 border-none">ADD</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Addtoy;