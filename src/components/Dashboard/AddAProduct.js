import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
// import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../Authentication/AuthProvider';
import toast from 'react-hot-toast';

const AddAProduct = () => {

    const { register, handleSubmit,
        //  formState: { errors }
    } = useForm();
    const imagehostkey = process.env.REACT_APP_imgbb_key;

    // const navigate = useNavigate()
    const { user } = useContext(AuthContext);
    // console.log(user)


    const handleAddaDoctor = data => {
        // console.log(data)
        const image = data.image[0];
        const formData = new FormData()
        formData.append("image", image)
        const url = `https://api.imgbb.com/1/upload?key=${imagehostkey}`
        fetch(url, {
            method: "POST",
            body: formData
        })
            .then(res => res.json())
            .then(imgdata => {
                if (imgdata.success) {
                    // console.log(imgdata.data.url)
                    const productData = {
                        category_id: data.category_id,
                        img: imgdata.data.url,
                        book_name: data.book_name,
                        Location: data.Location,
                        resale_price: data.resale_price,
                        original_price: data.original_price,
                        years_used: data.years_used,
                        posting_time: Date().slice(0, 15),
                        seller_name: user.displayName,
                        email: data.email,
                        booking_type: 'Book Now',
                        advertise: false,
                        condition: data.condition

                    }
                    // console.log(productData.postTime)
                    fetch("https://bookhouse-server.vercel.app/addproduct", {
                        method: "POST",
                        headers: {
                            "content-type": "application/json",
                            // authorization: `bearer ${localStorage.getItem("accessToken")}`
                        },
                        body: JSON.stringify(productData)
                    })
                        .then(res => res.json())
                        .then(res => {
                            console.log(res)
                            toast.success("Successfully product added")
                            // navigate("/dashboard/managedoctors")
                        })
                }
            })
    }

    return (
        <div>
            <h2 className='text-4xl text-center'>Add a Product</h2>
            <div className="divider divider-primary"></div>
            <div >
                <form onSubmit={handleSubmit(handleAddaDoctor)} className=' grid grid-cols-2 gap-2 lg:mx-20'>
                    <div className="form-control w-full ">
                        <label className="label"> <span className="label-text">Book Name</span></label>
                        <input type="text" {...register("book_name", {
                            required: "Book name is Required"
                        })} className="input input-bordered w-full " />
                    </div>
                    <div className="form-control w-full ">
                        <label className="label"> <span className="label-text">Your Email</span></label>
                        <input type="email" {...register("email", {
                            required: true
                        })} className="input input-bordered w-full " defaultValue={user?.email} readOnly />
                    </div>
                    <div className="form-control w-full ">
                        <label className="label"> <span className="label-text">Your Location</span></label>
                        <input type="text" {...register("Location", {
                            required: true
                        })} className="input input-bordered w-full " />
                    </div>
                    <div className="form-control w-full ">
                        <label className="label"> <span className="label-text">Resale Price</span></label>
                        <input type="number" {...register("resale_price", {
                            required: true
                        })} className="input input-bordered w-full " />
                    </div>
                    <div className="form-control w-full ">
                        <label className="label"> <span className="label-text">Original Price</span></label>
                        <input type="number" {...register("original_price", {
                            required: true
                        })} className="input input-bordered w-full " />
                    </div>
                    <div className="form-control w-full ">
                        <label className="label"> <span className="label-text">Years of Use</span></label>
                        <input type="number" {...register("years_used", {
                            required: true
                        })} className="input input-bordered w-full " />
                    </div>
                    <div className="form-control w-full ">
                        <label className="label"> <span className="label-text">Category</span></label>
                        <select
                            {...register("category_id", {
                                required: "Category is Required"
                            })}
                            className="select select-bordered w-full " required>
                            <option selected disabled>Pick a Category</option>
                            <option value="01">Biography</option>
                            <option value="02" >History</option>
                            <option value="03" >Self-help</option>
                        </select>
                    </div>
                    <div className="form-control w-full ">
                        <label className="label"> <span className="label-text">Condition</span></label>
                        <select
                            {...register("condition", {
                                required: "Condition is Required"
                            })}
                            className="select select-bordered w-full " required>
                            <option selected disabled>Book Condition</option>
                            <option value="Excellent">Excellent</option>
                            <option value="Good" >Good</option>
                            <option value="Fair" >Fair</option>
                        </select>
                    </div>
                    <div className="form-control w-full col-span-2">
                        <label className="label"> <span className="label-text">Photo</span></label>
                        <input type="file" {...register("image", {
                            required: "photo is Required"
                        })} className="input w-full " required />
                    </div>
                    <input className='btn btn-accent mt-4 ' value="Add A Product" type="submit" />
                </form>
            </div>
        </div>
    );
};

export default AddAProduct;