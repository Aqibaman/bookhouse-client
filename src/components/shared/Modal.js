import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { AuthContext } from '../Authentication/AuthProvider';


const Modal = ({ book, setBook }) => {
    const { register, handleSubmit } = useForm();
    const { user } = useContext(AuthContext);
    console.log(book)

    const handleBookNow = data => {
        console.log(data);
        const date = {
            time: Date().slice(0, 15),
            book_id: book._id
        }
        const updatedData = Object.assign(data, date)
        console.log(updatedData)

        fetch(`https://bookhouse-server.vercel.app/bookings`, {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(updatedData)
        })
            .then(res => res.json())
            .then(data => {
                // setCreatedUserEmail(email);
                console.log(data)
                console.log(book._id)
                fetch(`https://bookhouse-server.vercel.app/bookings/${book?._id}`)
                    .then(res => res.json())
                    .then(data => {
                        if (data.modifiedCount > 0) {
                            setBook(null)
                            toast.success("Successfully booked.")
                        }
                    })
            })


    }

    return (
        <div>
            <input type="checkbox" id="bookModal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="bookModal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <input type="checkbox" id="bookModal" className="modal-toggle" />
                    <div className=''>
                        <h2 className='text-2xl font-bold text-center'>Book Now</h2>
                        <form onSubmit={handleSubmit(handleBookNow)}>
                            <div className="form-control w-full ">
                                <label className="label"> <span className="label-text">User Name</span></label>
                                <input type="text"
                                    {...register("username", {

                                    })}
                                    className="input input-bordered w-full " defaultValue={user?.displayName} readOnly />
                            </div>
                            <div className="form-control w-full ">
                                <label className="label"> <span className="label-text">Email Address</span></label>
                                <input type="text"
                                    {...register("emailadress", {

                                    })}
                                    className="input input-bordered w-full " defaultValue={user?.email} readOnly />
                            </div>
                            <div className="form-control w-full ">
                                <label className="label"> <span className="label-text">book Name</span></label>
                                <input type="text"
                                    {...register("bookname", {

                                    })}
                                    className="input input-bordered w-full " defaultValue={book?.book_name} readOnly />
                            </div>
                            <div className="form-control w-full ">
                                <label className="label"> <span className="label-text">book Price</span></label>
                                <input type="text"
                                    {...register("bookprice", {
                                        required: "book price is required"
                                    })}
                                    className="input input-bordered w-full " defaultValue={book?.resale_price} />
                            </div>
                            <div className="form-control w-full ">
                                <label className="label"> <span className="label-text">Your Phone Number</span></label>
                                <input type="text"
                                    {...register("phone", {

                                    })}
                                    className="input input-bordered w-full " required />
                            </div>
                            <div className="form-control w-full ">
                                <label className="label"> <span className="label-text">Location where you want meet buyer</span></label>
                                <input type="text"
                                    {...register("location", {

                                    })}
                                    className="input input-bordered w-full " required />
                            </div>
                            <input className='btn btn-accent w-full mt-3' value="Book Now" type="submit" method="get" />
                            {/* ____________________modal end_________________ */}
                        </form>
                    </div>
                </div>
            </div>
            {/* _____________________________________ */}
        </div>
    );
};

export default Modal;