"use client"
import React, { useEffect } from 'react'
import { motion, AnimatePresence, useAnimation } from "framer-motion"
import { IoIosArrowDown } from "react-icons/io";

const AccordionItem = ({ title, data, isOpen, onClick }) => {

    const controls = useAnimation();

    useEffect(() => {
        if (isOpen) {
            controls.start({
                rotate: 180
            });
        } else {
            controls.start({
                rotate: 0
            });
        }
    }, [isOpen, controls]);

    return (
        <div>
            <button
                onClick={onClick}
                className={`${isOpen ? "bg-white dark:bg-background text-text dark:text-white  rounded-t-xl" : "bg-white/10 dark:bg-white/10 dark:text-dark-text text-text rounded-xl"} group relative w-full py-6 px-8 text-lg font-bold duration-150`}
            >
                <span className={`${isOpen ? "bg-white text-black shadow-lg" : "bg-pri text-white"} absolute z-[2] bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-12 h-12 rounded-full text-xl flex justify-center items-center duration-150 group-hover:bg-white group-hover:text-black`}>
                    <motion.span
                        initial={false}
                        animate={controls}
                    >
                        <IoIosArrowDown />
                    </motion.span>
                </span>
                {title}
            </button>
            <AnimatePresence>
                {isOpen &&
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className='bg-background dark:bg-dark-background rounded-b-xl'
                    >
                        <p className='py-8 px-8 text-text-muted dark:text-dark-text-muted'>
                            {data}
                        </p>
                    </motion.div>
                }
            </AnimatePresence>
        </div>
    )
}

export default AccordionItem