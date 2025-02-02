import React from 'react'

function Card({item}) {

    return (
        <>
            <div className='mt-4 my-3'>
                <div className="card bg-base-100 w-96 shadow-xl hover:scale-105 duration-200 dark:bg-slate-900 dark:text-white dark:border">
                    <figure>
                        <img
                            src={item.image}
                            alt="Shoes" />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title">
                            {item.tittle}
                            <div className="badge badge-info">{item.category}</div>
                        </h2>
                        <p>{item.name}</p>
                        <div className="card-actions justify-between">
                            <div className="badge badge-outline">${item.price}</div>
                            <div className="curser-pointer px-2 py-1 rounded-full border-[2px] hover:bg-blue-900 hover:text-white duration-200">Buy Now</div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Card
