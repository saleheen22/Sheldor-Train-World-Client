import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";

const Addtoy = () => {

    const {user} = useContext(AuthContext);
    console.log(user);
    const handleAddToy = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const img  = form.pic.value;
        const sellerName = form.sellerName.value;
        const sellerEmail = form.sellerEmail.value;
        const price = form.price.value;
        const type = form.type.value;
        const rating = form.rating.value;
        const description = form.details.value;
        const quantity = form.quantity.value;
        form.reset();

        console.log(name, img, sellerEmail, sellerName, price, quantity, type, rating, description);

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
                                            <option>Bullet</option>
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
                                    <button className="btn bg-orange-400 border-none">Login</button>
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