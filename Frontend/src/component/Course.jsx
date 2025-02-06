import React, { useEffect, useState } from 'react';
import Card from './Card';
import axios from 'axios';
import { Link } from 'react-router-dom';

function Course() {
    const [book, setBook] = useState([]);

    useEffect(() => {
        const getBook = async () => {
            try {
                const res = await axios.get("https://lms-lbh0.onrender.com/book"); // सही API URL
                console.log(res.data);
                setBook(res.data);
            } catch (error) {
                console.error("Error fetching books:", error);
            }
        };
        getBook();
    }, []);

    return (
        <>
            <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 dark:bg-slate-900 dark:text-white">
                {/* Header Section */}
                <div className="mt-16 flex flex-col items-center text-center">
                    <h1 className="text-2xl font-semibold md:text-4xl">
                        We're delighted to have you <span className="text-blue-700">Here! 🙂</span>
                    </h1>
                    <p className="mt-4 max-w-2xl text-gray-700 dark:text-gray-300">
                        A book description is a summary of the contents of a book, usually including information about the plot, characters, and setting. Its purpose is to help potential readers decide whether they should read the book.
                    </p>
                    <Link to="/">
                        <button className="mt-6 bg-purple-700 text-white px-6 py-2 rounded-md hover:bg-purple-800 transition duration-300">
                            Back
                        </button>
                    </Link>
                </div>

                {/* Course Cards Section */}
                <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {book.length > 0 ? (
                        book.map((item, index) => (
                            <Card key={item.id || index} item={item} />
                        ))
                    ) : (
                        <p className="text-center text-gray-600 dark:text-gray-400 col-span-3">No books available.</p>
                    )}
                </div>
            </div>
        </>
    );
}

export default Course;
