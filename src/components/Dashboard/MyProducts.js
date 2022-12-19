import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../Authentication/AuthProvider';

const MyProducts = () => {
    const { user } = useContext(AuthContext)

    const { data: books = [], refetch } = useQuery({
        queryKey: ["books"],
        queryFn: async () => {
            const res = await fetch(`https://bookhouse-server.vercel.app/product?email=${user?.email}`);
            const data = await res.json();
            console.log(data)
            return data;
        }
    })

    const handleAdvertise = (book) => {
        // console.log(id)
        const updatedProduct = {
            img: book.img,
            category_id: book.category_id,
            book_name: book.book_name,
            Location: book.Location,
            resale_price: book.resale_price,
            original_price: book.original_price,
            seller_name: book.seller_name,
            posting_time: book.posting_time,
            email: book.email,
            verified: book.verified,
            booking_type: book.booking_type,
            advertise: book.advertise,
            book_id: book._id
        }
        console.log(updatedProduct)

        fetch('https://bookhouse-server.vercel.app/advertise', {
            method: 'POST',
            headers: {
                "content-type": "application/json",
                // authorization: `bearer ${localStorage.getItem("accessToken")}`
            },
            body: JSON.stringify(updatedProduct),
        })
            .then(res => res.json())
            .then(res => {
                console.log(res)
                fetch(`https://bookhouse-server.vercel.app/advertise/${book?._id}`)
                    .then(res => res.json())
                    .then(data => {
                        console.log(data)
                        if (data.modifiedCount > 0) {
                            toast.success("Sucesfully Avertised.")
                            refetch()
                        }
                    })
            })
    }

    return (
        <div>
            <div>
                <h2 className='text-3xl mb-2'>All products</h2>
                <div className="overflow-x-auto">
                    <table className="table w-full">

                        <thead>
                            <tr>
                                <th></th>
                                <th>Name</th>
                                <th>Date</th>
                                <th>Asking Price</th>
                                <th>Availability</th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                        <tbody>

                            {
                                books?.map((book, i) =>
                                    <tr key={book._id}>
                                        <th>{i + 1}</th>
                                        <td>{book.book_name}</td>
                                        <td>{book.posting_time}</td>
                                        <td>${book.resale_price}</td>
                                        <td>{book.booking_type === 'Book Now' ? 'Available' : 'Sold'}</td>
                                        <td>
                                            {
                                                !book.advertise && book.booking_type === "Book Now" &&
                                                <button className='btn btn-xs btn-primary' onClick={() => handleAdvertise(book)}>Advertise</button>
                                            }
                                            {
                                                book.advertise &&
                                                <button className='btn btn-xs btn-primary' disabled>Advertised</button>
                                            }
                                            {
                                                book.booking_type !== "Book Now" &&
                                                <button className='btn btn-xs btn-primary' disabled>Already Booked</button>
                                            }

                                        </td>
                                    </tr>)
                            }

                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default MyProducts;