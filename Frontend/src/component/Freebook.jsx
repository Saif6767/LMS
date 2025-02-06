import React, { useEffect, useState } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import axios from 'axios';

import Card from '../component/Card';

function Freebook() {
    const [book, setBook] = useState([]);

    useEffect(() => {
        const getBook = async () => {
            try {
                const res = await axios.get("https://lms-lbh0.onrender.com/book");
                console.log(res.data);
                setBook(res.data.filter((data) => data.category === "Free"));
            } catch (error) {
                console.error("Error fetching books:", error);
            }
        };
        getBook();
    }, []);

    var settings = {
        dots: true,
        infinite: true, // Change false to true
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1, // Change 3 to 1 for smooth scrolling
        autoplay: true,
        autoplaySpeed: 3000, // Auto-slide every 3 seconds
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (
        <>
            <div className='max-w-screen-2xl container mx-auto md:px-20 px-4 dark:bg-slate-900 dark:text-white'>
                <div>
                    <h1 className='font-semibold text-xl pb-2'>Free Books Available</h1>
                </div>

                <div>
                    <Slider {...settings}>
                        {book.map((item, index) => (
                            <Card item={item} key={item.id || index} />
                        ))}
                    </Slider>
                </div>
            </div>
        </>
    );
}

export default Freebook;
