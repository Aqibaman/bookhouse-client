
import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Modal from '../shared/Modal';
import BookCard from './BookCard';

const AllBooks = () => {

    // console.log(bookcategory);

    const books = useLoaderData();
    const [book, setBook] = useState(null)
    const [button, setbutton] = useState()


    return (
        <div className='lg:mx-16 '>
            <h4 className='text-3xl text-center'>
                See The books on this Category
            </h4>
            <div className="divider"></div>
            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-8 gap-6'>
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
                    <Modal
                        book={book}
                        setbook={setBook}
                    ></Modal>
                }
            </div>
            {/* Put this part before </body> tag */}
            {/* < div className="divider" ></div>
            <div className='flex justify-center my-4'>
                <button className='btn btn-primary'><Link>Add a book</Link></button>
            </div> */}
        </div >
    );
};

export default AllBooks;