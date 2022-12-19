import React from 'react';


const Blog = () => {

    return (
        <div>
            <div>
                <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
                    <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
                        <div>
                            <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-dark uppercase rounded-full bg-teal-accent-400">
                                Book House
                            </p>
                        </div>
                        <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-dark sm:text-4xl md:mx-auto">
                            <span className="relative inline-block">
                                <svg
                                    viewBox="0 0 52 24"
                                    fill="currentColor"
                                    className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
                                >
                                    <defs>
                                        <pattern
                                            id="ea469ae8-e6ec-4aca-8875-fc402da4d16e"
                                            x="0"
                                            y="0"
                                            width=".135"
                                            height=".30"
                                        >
                                            <circle cx="1" cy="1" r=".7" />
                                        </pattern>
                                    </defs>
                                    <rect
                                        fill="url(#ea469ae8-e6ec-4aca-8875-fc402da4d16e)"
                                        width="52"
                                        height="24"
                                    />
                                </svg>
                                <span className="relative">The</span>
                            </span>{' '}
                            ultimate platform for building knowledge from
                            <br /> used books
                        </h2>
                        <p className="text-base text-dark md:text-lg">
                            See our famous blogs
                        </p>
                    </div>
                    <div className="grid gap-8 row-gap-10 lg:grid-cols-2">
                        <div className="max-w-md sm:mx-auto sm:text-center">
                            <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-indigo-50 sm:mx-auto sm:w-24 sm:h-24">
                                <svg
                                    className="w-12 h-12 text-dark sm:w-16 sm:h-16"
                                    stroke="currentColor"
                                    viewBox="0 0 52 52"
                                >
                                    <polygon
                                        strokeWidth="3"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        fill="none"
                                        points="29 13 14 29 25 29 23 39 38 23 27 23"
                                    />
                                </svg>
                            </div>
                            <h6 className="mb-3 text-xl text-dark font-bold leading-5">What are the different ways to manage a state in a React application?</h6>
                            <p className="mb-3 text-m text-dark">
                                There are four main types of state you need to properly manage in your React apps:
                                <br />
                                1. Local state: Local state is data we manage in one or another component. <br />
                                2. Global state: Global state is data we manage across multiple components. <br />
                                3. Server state: Data that comes from an external server that must be integrated with our UI state. <br />
                                4. URL state: Data that exists on our URLs, including the pathname and query parameters. <br />
                            </p>

                        </div>
                        <div className="max-w-md sm:mx-auto sm:text-center">
                            <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full text-dark bg-indigo-50 sm:mx-auto sm:w-24 sm:h-24">
                                <svg
                                    className="w-12 h-12 text-deep-purple-accent-400 sm:w-16 sm:h-16"
                                    stroke="currentColor"
                                    viewBox="0 0 52 52"
                                >
                                    <polygon
                                        strokeWidth="3"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        fill="none"
                                        points="29 13 14 29 25 29 23 39 38 23 27 23"
                                    />
                                </svg>
                            </div>
                            <h6 className="mb-3 text-xl text-dark font-bold leading-5">How does prototypical inheritance work?
                            </h6>
                            <p className="mb-3 text-m text-dark">
                                Every object with its methods and properties contains an internal and hidden property known as [[Prototype]]. The Prototypal Inheritance is a feature in javascript used to add methods and properties in objects. It is a method by which an object can inherit the properties and methods of another object. Traditionally, in order to get and set the [[Prototype]] of an object, we use Object.getPrototypeOf and Object.setPrototypeOf. Nowadays, in modern language, it is being set using __proto__.
                            </p>

                        </div>
                        <div className="max-w-md sm:mx-auto sm:text-center">
                            <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full text-dark bg-indigo-50 sm:mx-auto sm:w-24 sm:h-24">
                                <svg
                                    className="w-12 h-12 text-deep-purple-accent-400 sm:w-16 sm:h-16"
                                    stroke="currentColor"
                                    viewBox="0 0 52 52"
                                >
                                    <polygon
                                        strokeWidth="3"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        fill="none"
                                        points="29 13 14 29 25 29 23 39 38 23 27 23"
                                    />
                                </svg>
                            </div>
                            <h6 className="mb-3 text-xl text-dark font-bold leading-5">What is a unit test? Why should we write unit tests?
                            </h6>
                            <p className="mb-3 text-m text-dark">
                                Unit Testing is a type of software testing where individual units or components of a software are tested. The purpose is to validate that each unit of the software code performs as expected. Unit Testing is done during the development (coding phase) of an application by the developers. Unit Tests isolate a section of code and verify its correctness. A unit may be an individual function, method, procedure, module, or object.
                            </p>

                        </div>
                        <div className="max-w-md sm:mx-auto sm:text-center">
                            <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full text-dark bg-indigo-50 sm:mx-auto sm:w-24 sm:h-24">
                                <svg
                                    className="w-12 h-12 text-deep-purple-accent-400 sm:w-16 sm:h-16"
                                    stroke="currentColor"
                                    viewBox="0 0 52 52"
                                >
                                    <polygon
                                        strokeWidth="3"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        fill="none"
                                        points="29 13 14 29 25 29 23 39 38 23 27 23"
                                    />
                                </svg>
                            </div>
                            <h6 className="mb-3 text-xl text-dark font-bold leading-5">
                                React vs. Angular vs. Vue?


                            </h6>
                            <p className="mb-3 text-sm text-dark">
                                React often requires extra modules and components, which keeps the core library small, but means there’s extra work involved when incorporating outside tools. Angular, on the other hand, is more of a full-fledged solution that doesn’t require extras like React often does, though it does have a steeper learning curve for its core compared to React.
                                <br />
                                Vue is generally more suited to smaller, less complex apps and is easier to learn from scratch compared to React. Vue can be easier to integrate into new or existing projects and many feel its use of HTML templates along with JSX is an advantage.
                                <br />
                                A large library like Angular would require more diligence in keeping up with what’s new, while Vue would be less demanding in this regard and the fact that the two most recent major releases of Vue are in separate repositories helps.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blog;