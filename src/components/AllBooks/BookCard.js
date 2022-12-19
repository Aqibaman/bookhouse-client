import React from 'react';
import { GoReport } from "react-icons/go";
import toast from 'react-hot-toast';
import { HiOutlineBadgeCheck } from "react-icons/hi";

const BookCard = ({ book, setBook }) => {
    const handleReportproduct = (book) => {

        const bookData = {
            category_id: book.category_id,
            book_id: book._id,
            book_name: book.book_name,
            Location: book.Location,
            resale_price: book.resale_price,
            original_price: book.original_price,
            seller_name: book.seller_name,
            email: book.email,
        }
        fetch("https://bookhouse-server.vercel.app/reportedtoadmin", {
            method: "POST",
            headers: {
                "content-type": "application/json",
                // authorization: `bearer ${localStorage.getItem("accessToken")}`
            },
            body: JSON.stringify(bookData)
        })
            .then(res => res.json())
            .then(res => {
                console.log(res)
                toast.success("Successfully Reported to Admin")
                // navigate("/dashboard/managedoctors")
            })

    }
    return (
        <div>
            <div className="max-w-screen-xl mx-auto card card-compact w-96 bg-base-100 shadow-xl" key={book._id}>
                <figure><img className='h-96' src={book.img} alt="" /></figure>
                <div className="card-body">
                    <div className='grid grid-cols-6'>
                        <h2 className="card-title col-span-5">Book Name: <span className='font-bold'>{book.book_name}</span></h2>
                        <button className='btn btn-outline btn-accent border-none btn-sm' title='Report this product to admin' onClick={() => handleReportproduct(book)}><GoReport /></button>
                    </div>

                    <h4 className='text-xl font-bold'>Asking Price: ${book.resale_price}</h4>
                    <div>
                        <p>Original Price: ${book.original_price}</p>
                        <p>Posted on: {book.posting_time}</p>
                        <p>Location: {book.Location}</p>
                        <p>Years Used: {book.years_used} years</p>
                    </div>
                    <div className="card-actions justify-between">

                        <div className='grid grid-cols-2'>
                            <span>Seller: {book.seller_name}</span>
                            {
                                book?.verified &&
                                <span className='ml-2' title='Verified Seller' ><HiOutlineBadgeCheck style={{
                                    color: 'purple',
                                }} size={25} /></span>
                            }
                        </div>


                        {
                            book.booking_type === "Book Now" &&
                            <label
                                disabled={book.booking_type === "Booked"}
                                htmlFor="bookModal" className="btn btn-primary btn-sm"
                                onClick={() => setBook(book)}
                            >{book.booking_type}</label>
                        }
                        {
                            book.booking_type !== "Book Now" &&
                            <button className='btn btn-primary btn-sm' disabled>{book.booking_type}</button>
                        }
                    </div>

                </div>
            </div>
        </div >
    );
};

export default BookCard;