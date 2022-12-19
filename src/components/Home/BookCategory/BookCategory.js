import React from 'react';
import { Link } from 'react-router-dom';

const BookCategory = ({ bookcategory }) => {
    const { category_id, name, img } = bookcategory
    return (
        <div>
            <div className="max-w-screen-xl mx-auto card card-compact w-96 bg-base-100 shadow-xl">
                <figure>

                    <img className='w-96 h-48' src={img} alt="" />

                </figure>
                <div className="card-body">
                    <h2 className="text-2xl text-center font-bold my-5">{name} Category</h2>
                    <div className="card-actions justify-center">
                        <Link to={`/category/${category_id}`}>
                            <button bookcategory={bookcategory} className="btn bg-purple-600 btn-primary font-semibold">See All Books</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default BookCategory;