"use client"
import { navLinks } from '@/constants/constants'
import { ThemeContext } from '@/contexts/ThemeContext'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React, { useContext, useEffect, useState } from 'react'
import { FaGithub } from 'react-icons/fa'
import { MdDarkMode } from "react-icons/md";

const Header = () => {

    const { toggleTheme } = useContext(ThemeContext);

    const pathname = usePathname();
    const [page, setPage] = useState("");
    useEffect(() => {
        setPage(pathname);
        console.log(pathname)
    }, [pathname]);




    return (
        <div className='bg-white/75 dark:bg-black/25 rounded-bl-3xl px-8 flex justify-between items-center space-x-2 shadow-xl'>
            {navLinks.map((item, idx) =>
                <Link href={item.link} className={`${page.split("/")[1] === item.page ? "shine_animate" : ""} shine relative text-text dark:text-dark-text uppercase px-4 py-6 text-sm`}>
                    {item.display}
                </Link>
            )}
            <a href="https://github.com/ishanjarwal" rel="noopener noreferrer" target='_blank' className='text-text dark:text-dark-text text-2xl px-2'>
                <FaGithub />
            </a>
            <button
                onClick={toggleTheme}
                className='text-text dark:text-dark-text text-2xl px-2'>
                <MdDarkMode />
            </button>
        </div>
    )
}

export default Header
