import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Lottie from 'lottie-react';
import book from '../../Assets/99349-girl-with-books.json';
import search from '../../Assets/65089-book-search.json';
import BookCategory from '../BookCategory/BookCategory';
import axios from 'axios';
import Advertised from '../Advertise/Advertised';

const Home = () => {

    const [bookCategories, setBookCategories] = useState([]);
    useEffect(() => {
        axios
            .get("https://bookhouse-server.vercel.app/bookCategories")
            .then((res) => setBookCategories(res.data))

    }, []);
    return (
        <div className='-z-10'>
            <div>
                <section>
                    <div className="mb-16">
                        <div className="bg-white">
                            <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
                                <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
                                    <div>
                                        <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-400">
                                            Book House
                                        </p>
                                    </div>
                                    <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
                                        <span className="relative inline-block">
                                            <svg
                                                viewBox="0 0 52 24"
                                                fill="currentColor"
                                                className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-gray-400 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
                                            >
                                                <defs>
                                                    <pattern
                                                        id="dc223fcc-6d72-4ebc-b4ef-abe121034d6e"
                                                        x="0"
                                                        y="0"
                                                        width=".135"
                                                        height=".30"
                                                    >
                                                        <circle cx="1" cy="1" r=".7" />
                                                    </pattern>
                                                </defs>
                                                <rect
                                                    fill="url(#dc223fcc-6d72-4ebc-b4ef-abe121034d6e)"
                                                    width="52"
                                                    height="24"
                                                />
                                            </svg>
                                            <span className="relative -z-10">The</span>
                                        </span>{' '}
                                        Platform for building knowledge with used books
                                    </h2>
                                    <p className="text-base text-gray-700 md:text-lg">
                                        Build your knowledge with our 3 category of books which will help you
                                        <br />
                                        not only building knowledge, but also execute it in a right way.
                                    </p>
                                </div>
                                <div className="flex items-center sm:justify-center">
                                    <button
                                        type="submit"
                                        className="inline-flex items-center justify-center h-12 px-6 mr-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-purple-400 hover:bg-purple-700 focus:shadow-outline focus:outline-none"
                                    ><Link to='/signup'>
                                            Get started
                                        </Link>
                                    </button>
                                    <Link
                                        to="/blog"
                                        aria-label=""
                                        className="inline-flex items-center font-semibold text-gray-800 transition-colors duration-200 hover:text-purple-700"
                                    >
                                        Learn more
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="relative px-4 sm:px-0">
                            <div className="absolute inset-0 bg-white h-1/2" />
                            <div className="relative grid mx-auto overflow-hidden bg-white divide-y rounded shadow sm:divide-y-0 sm:divide-x sm:max-w-screen-sm sm:grid-cols-3 lg:max-w-screen-md">
                                <div className="inline-block p-8 text-center">
                                    <div className="flex items-center justify-center w-12 h-12 mx-auto mb-4 rounded-full bg-indigo-50">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-10 h-10 text-purple-800">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M7.875 14.25l1.214 1.942a2.25 2.25 0 001.908 1.058h2.006c.776 0 1.497-.4 1.908-1.058l1.214-1.942M2.41 9h4.636a2.25 2.25 0 011.872 1.002l.164.246a2.25 2.25 0 001.872 1.002h2.092a2.25 2.25 0 001.872-1.002l.164-.246A2.25 2.25 0 0116.954 9h4.636M2.41 9a2.25 2.25 0 00-.16.832V12a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 12V9.832c0-.287-.055-.57-.16-.832M2.41 9a2.25 2.25 0 01.382-.632l3.285-3.832a2.25 2.25 0 011.708-.786h8.43c.657 0 1.281.287 1.709.786l3.284 3.832c.163.19.291.404.382.632M4.5 20.25h15A2.25 2.25 0 0021.75 18v-2.625c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125V18a2.25 2.25 0 002.25 2.25z" />
                                        </svg>


                                    </div>
                                    <p className="font-bold tracking-wide text-gray-800">
                                        Best Book Collections
                                    </p>
                                </div>
                                <div className="inline-block p-8 text-center">
                                    <div className="flex items-center justify-center w-12 h-12 mx-auto mb-4 rounded-full bg-indigo-50">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-10 h-10 text-purple-800">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
                                        </svg>


                                    </div>
                                    <p className="font-bold tracking-wide text-gray-800">
                                        Be a Great Scholar
                                    </p>
                                </div>
                                <div className="inline-block p-8 text-center">
                                    <div className="flex items-center justify-center w-12 h-12 mx-auto mb-4 rounded-full bg-indigo-50">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-10 h-10 text-purple-800">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z" />
                                        </svg>


                                    </div>
                                    <p className="font-bold tracking-wide text-gray-800">
                                        Cost Effective Book Buy
                                    </p>
                                </div>

                            </div>
                        </div>
                    </div>
                </section>
                <section>
                    <Advertised></Advertised>
                </section>

                <section>
                    <div className='my-20'>
                        <div>
                            <p className="text-2xl text-center font-bold text-purple-600">We offer three categories of Books</p>
                            <h2 className='text-5xl text-center font-semibold'>All Three Categories</h2>
                            <p className=' text-center my-5'>Here you can collect the book which you want to learn from our platform. <br /> The books are in different categories. The price are low so that you can purchase the book which you love.</p>
                        </div>
                        <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-5'>
                            {/* here we will set the cateegories */}

                            {
                                bookCategories.map(bookcategory => <BookCategory
                                    key={bookcategory?._id}
                                    bookcategory={bookcategory}
                                ></BookCategory>)
                            }


                        </div>
                    </div>
                </section>

                <section>
                    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
                        <div className="grid gap-5 row-gap-8 lg:grid-cols-2">
                            <div className="flex flex-col justify-center">
                                <div className="max-w-xl mb-6">
                                    <div>
                                        <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-400">
                                            Book House
                                        </p>
                                    </div>
                                    <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-dark sm:text-4xl sm:leading-none">
                                        The knowledge ocean
                                        <br className="hidden md:block" />
                                        in a very {' '}
                                        <span className="inline-block text-deep-purple-accent-400">
                                            low price.
                                        </span>
                                    </h2>
                                    <p className="text-base text-dark md:text-lg">
                                        Buy books from our platform in a very low cost. This books will help you culturing your knowledge in a very low cost. Besides from our book house, we always buy the old books from you. So, drink tea and enjoy the book from book house!
                                    </p>
                                </div>
                                <Link
                                    to="/blog"
                                    aria-label=""
                                    className="inline-flex items-center font-semibold transition-colors duration-200 text-purple-400 hover:text-purple-800"
                                >
                                    Learn more
                                    <svg
                                        className="inline-block w-3 ml-2"
                                        fill="currentColor"
                                        viewBox="0 0 12 12"
                                    >
                                        <path d="M9.707,5.293l-5-5A1,1,0,0,0,3.293,1.707L7.586,6,3.293,10.293a1,1,0,1,0,1.414,1.414l5-5A1,1,0,0,0,9.707,5.293Z" />
                                    </svg>
                                </Link>
                            </div>
                            <div className="relative">
                                <Lottie animationData={book} loop={true} />
                            </div>
                        </div>
                    </div>
                </section>

                <section>
                    <div className="relative flex flex-col-reverse px-4 py-16 mx-auto lg:block lg:flex-col lg:py-32 xl:py-48 md:px-8 sm:max-w-xl md:max-w-full">
                        <div className="z-0 flex justify-center h-full -mx-4 overflow-hidden lg:pt-24 lg:pb-16 lg:pr-8 xl:pr-0 lg:w-1/2 lg:absolute lg:justify-end lg:bottom-0 lg:left-0 lg:items-center">
                            <Lottie animationData={search} loop={true} />
                        </div>
                        <div className="relative flex justify-end max-w-xl mx-auto xl:pr-32 lg:max-w-screen-xl">
                            <div className="mb-16 lg:pr-5 lg:max-w-lg lg:mb-0">
                                <div className="max-w-xl mb-6">
                                    <div>
                                        <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-400">
                                            Book House
                                        </p>
                                    </div>
                                    <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-dark  sm:text-4xl sm:leading-none">
                                        We buy every book
                                        <br className="hidden md:block" />
                                        by checking with our{' '}
                                        <span className="inline-block text-purple-600">
                                            Quality
                                        </span>
                                        {' '}team.
                                    </h2>
                                    <p className="text-base text-dark md:text-lg">
                                        We will ensure you our every books will look great to you and you will enjoy it definitely. Besides, the knowledge from this books will definitely change your life. So, buy our qualityful books and change your life.
                                    </p>
                                </div>
                                <form>

                                    <div className="flex items-center mt-4">
                                        <button
                                            type="submit"
                                            className="inline-flex items-center justify-center h-12 px-6 mr-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-purple-400 hover:bg-purple-700 focus:shadow-outline focus:outline-none"
                                        ><Link to='/blog'>Learn more</Link>

                                        </button>

                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </section>



                <section>
                    <div className="relative bg-gray-900">
                        <div className="absolute inset-x-0 bottom-0">
                            <svg
                                viewBox="0 0 224 12"
                                fill="currentColor"
                                className="w-full -mb-1 text-white"
                                preserveAspectRatio="none"
                            >
                                <path d="M0,0 C48.8902582,6.27314026 86.2235915,9.40971039 112,9.40971039 C137.776408,9.40971039 175.109742,6.27314026 224,0 L224,12.0441132 L0,12.0441132 L0,0 Z" />
                            </svg>
                        </div>
                        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
                            <div className="relative max-w-2xl sm:mx-auto sm:max-w-xl md:max-w-2xl sm:text-center">
                                <h2 className="mb-6 font-sans text-3xl font-bold tracking-tight text-white sm:text-4xl sm:leading-none">
                                    Read Books
                                    <br className="hidden md:block" />
                                    And Enjoy{' '}
                                    <span className="relative inline-block">
                                        Your Life{' '}
                                        <div className="w-full h-3 -mt-3 bg-purple-accent-400" />
                                    </span>
                                </h2>
                                <p className="mb-6 text-base font-thin tracking-wide text-gray-300 md:text-lg">
                                    Sign up to our newsletter page for updates
                                </p>
                                <form className="flex flex-col items-center w-full mb-4 md:flex-row md:px-16">
                                    <input
                                        placeholder="Email"
                                        required
                                        type="text"
                                        className="flex-grow w-full h-12 px-4 mb-3 text-white transition duration-200 bg-transparent border-2 border-gray-400 rounded appearance-none md:mr-2 md:mb-0 focus:border-deep-purple-accent-200 focus:outline-none focus:shadow-outline"
                                    />
                                    <button
                                        type="submit"
                                        className="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md md:w-auto bg-purple-400 hover:bg-purple-accent-700 focus:shadow-outline focus:outline-none"
                                    >
                                        Subscribe
                                    </button>
                                </form>
                                <p className="max-w-md mb-10 text-xs font-thin tracking-wide text-gray-500 sm:text-sm sm:mx-auto md:mb-16">
                                    Sign Up Here
                                </p>
                                <Link
                                    to="/signup"
                                    aria-label="Scroll down"
                                    className="flex items-center justify-center w-10 h-10 mx-auto text-white duration-300 transform border border-gray-400 rounded-full hover:text-teal-400 hover:border-teal-400 hover:shadow hover:scale-110"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="12"
                                        height="12"
                                        viewBox="0 0 12 12"
                                        fill="currentColor"
                                    >
                                        <path d="M10.293,3.293,6,7.586,1.707,3.293A1,1,0,0,0,.293,4.707l5,5a1,1,0,0,0,1.414,0l5-5a1,1,0,1,0-1.414-1.414Z" />
                                    </svg>
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default Home;