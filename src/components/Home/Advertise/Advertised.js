import { useQuery } from '@tanstack/react-query';
import React, { useContext, useState } from 'react';
import BookCard from '../../AllBooks/BookCard';
import { AuthContext } from '../../Authentication/AuthProvider';
import ModalFAdvertise from '../../shared/ModalFAdvertise';


const Advertised = () => {
    const [book, setBook] = useState(null)
    const [button, setbutton] = useState()
    const { user } = useContext(AuthContext)

    const { data: books = [], refetch } = useQuery({
        queryKey: ["books"],
        queryFn: async () => {
            const res = await fetch(`https://bookhouse-server.vercel.app/advertised?email=${user?.email}`, {
                headers: {
                    authorization: `bearer ${localStorage.getItem('accessToken')}`
                }
            });
            const data = await res.json();
            console.log(data)
            return data;
        }
    })
    return (
        <div>
            <div className=''>
                <div>
                    <h2 className='text-4xl text-center font-bold mb-5'>Advertised Items</h2>
                    <h2 className='text-2xl text-center lg:mx-60 mb-5'>See all the ongoing advertised books.
                        <br />
                        You will love to buy from any of them. Pick the book which satisfied your knowledge.
                    </h2>
                </div>

                <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mb-8 gap-6'>
                    {
                        books.map(book =>
                            <BookCard
                                key={book._id}
                                book={book}
                                setBook={setBook}
                                setbutton={setbutton}
                                button={button}
                            ></BookCard>
                        )
                    }
                    {
                        book &&
                        <ModalFAdvertise
                            book={book}
                            setBook={setBook}
                            refetch={refetch}
                        >
                        </ModalFAdvertise>
                    }
                </div>
            </div >
        </div >
    );
};

export default Advertised;