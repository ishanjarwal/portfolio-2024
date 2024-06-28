"use client"
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react'

const NotFound = () => {

    const router = useRouter();
    const [count, setCount] = useState(5);
    useEffect(() => {
        if (count === 0) {
            router.push("/")
            return;
        }

        const timer = setInterval(() => {
            setCount((prevCount) => prevCount - 1);
        }, 1000);

        // Clear the interval when count reaches 0
        return () => clearInterval(timer);
    }, [count]);

    return (
        <div className='flex flex-col space-y-4 justify-center items-center w-full h-full pb-16'>
            <h2 className='text-white text-8xl text-center mx-auto font-bold'>404</h2>
            <p className='text-text text-3xl font-bold text-center px-8'>The page you are looking for doesn't exist.
            </p>
            <p className='text-text-muted text-2xl font-bold text-center px-8'>The page you are looking Redirecting to Home in{" "}<span>{count}</span>{" "}seconds
            </p>
        </div>
    )
}

export default NotFound
