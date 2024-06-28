"use client"
import { navLinks } from '@/constants/constants'
import { ThemeContext } from '@/contexts/ThemeContext'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React, { useContext, useEffect, useState } from 'react'
import { MdDarkMode } from 'react-icons/md'

const Footer = () => {

    const { toggleTheme, theme } = useContext(ThemeContext);

    const pathname = usePathname();
    const [page, setPage] = useState("");
    useEffect(() => {
        setPage(pathname);
        console.log(pathname)
    }, [pathname]);
    return (

        <div className='bg-white/40 backdrop-blur-xl rounded-full p-2 flex justify-between items-center space-x-2 shadow-2xl'>
            {navLinks.map((item, idx) =>
                <Link href={`${item.link}#pages`} className={`${page.split("/")[1] === item.page ? "bg-black text-white shadow-lg" : "bg-white text-black  shadow-md"} py-3 px-3 text-2xl rounded-full whitespace-nowrap capitalize`}>
                    {item.icon}
                </Link>
            )}
            <button
                onClick={toggleTheme}
                className={`${theme === 'dark' ? "bg-white text-black" : "bg-black text-white"} py-3 px-3 text-2xl rounded-full whitespace-nowrap capitalize`}>
                <MdDarkMode />
            </button>
        </div >
    )
}

export default Footer
