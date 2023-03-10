import { useQuery } from '@tanstack/react-query';
import React from 'react';
import toast from 'react-hot-toast';

const AllSellers = () => {
    const { data: sellers = [], refetch } = useQuery({
        queryKey: ["sellers"],
        queryFn: async () => {
            const res = await fetch("https://bookhouse-server.vercel.app/allsellers");
            const data = await res.json();
            console.log(data)
            return data;
        }
    })

    const handleDeleteSeller = (id) => {
        console.log(id)
        fetch(`https://bookhouse-server.vercel.app/seller/${id}`, {
            method: 'DELETE',
            // headers: {
            //     authorization: `bearer ${localStorage.getItem('accessToken')}`
            // }
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    toast.success(`Seller deleted successfully`)
                    refetch()
                }
            })
    }

    const handleverify = (seller) => {
        console.log(seller)
        if (window.confirm("Are you sure to verify") === true) {
            fetch(`https://bookhouse-server.vercel.app/verified?email=${seller?.email}`)
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    toast.success("Successfully verified")

                })


        }

    }
    return (
        <div>
            <h2 className='text-3xl mb-2'>All Sellers</h2>
            <div className="overflow-x-auto">
                <table className="table w-full">

                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Role</th>
                            <th>Delete</th>
                            <th>Verify</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            sellers?.map((seller, i) =>
                                <tr key={seller._id}>
                                    <th>{i + 1}</th>
                                    <td>{seller.name}</td>
                                    <td>{seller.email}</td>
                                    <td>{seller.type}</td>
                                    <td><button className='btn btn-xs btn-danger' onClick={() => handleDeleteSeller(seller._id)}>Delete</button></td>
                                    <td><button className='btn btn-xs btn-danger' onClick={() => handleverify(seller)}>Verify</button></td>
                                </tr>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllSellers;