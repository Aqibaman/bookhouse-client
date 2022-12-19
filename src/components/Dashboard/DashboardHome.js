import React from 'react';
import { Link } from 'react-router-dom';

const DashboardHome = () => {
    return (
        <div>
            <h4 className='text-4xl font-bold flex justify-center items-center'>Dashboard</h4>
            <p className='text-center my-10 text-2xl'>Please click any of the options from the left side and see the details.</p>
            <Link
                to="/"
                aria-label="Book House"
                title="Book House"
                className="flex justify-center items-center"
            >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-24 h-24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
                </svg>

                <span className="ml-2 text-3xl font-bold tracking-wide text-gray-800 uppercase">
                    Book House
                </span>
            </Link>
        </div>
    );
};

export default DashboardHome;