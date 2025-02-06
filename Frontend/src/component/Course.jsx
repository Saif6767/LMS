import React, { useEffect, useState } from 'react';
import Card from './Card';

import axios from 'axios';
import { Link } from 'react-router-dom';

function Course() {
    const [book, setBook] = useState([])
    useEffect(() => {
        const getBook = async () => {
            try {
                const res = await axios.get("https://lms-lbh0.onrender.com/book");
                console.log(res.data);
                setBook(res.data)
            } catch (error) {
                console.log(error);
            }
        }
        getBook();
    }, [])
    return (
        <>
            <div className='max-w-screen-2xl container mx-auto md:px-20 px-4 dark:bg-slate-900 dark:text-white'>
                <div className='mt-16 items-center justify-center text-center'>
                    <h1 className='text-2xl font-semibold md:text-4xl'>
                        We're delighted to have you <span className='text-blue-700'>Here!:)</span>
                    </h1>
                    <p className='mt-12'>
                        A book description is a summary of the contents of a book, usually including information about the plot, characters, and setting. Its purpose is to help potential readers decide whether they should read the book.
                    </p>
                    <Link to="/">
                        <button className='mt-6 bg-purple-700 text-white px-4 py-2 rounded-md hover:bg-purple-800'>Back</button>
                    </Link>
                </div>
                <div className='mt-12 grid grid-cols-1 md:grid-cols-3 '>
                    {book.map((item) => (
                        <Card key={item.id} item={item} />
                    ))

                    }
                </div>
            </div>
        </>
    )
}

export default Course
