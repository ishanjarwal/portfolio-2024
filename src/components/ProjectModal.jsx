"use client"
import React from 'react'
import { FaGithub } from 'react-icons/fa';
import { IoMdClose } from "react-icons/io";
import { TbLivePhoto } from 'react-icons/tb';
import { register } from 'swiper/element/bundle';
register();

const swiperOptions = {
    'slides-per-view': "auto",
    'loop': 1,
    'space-between': 16,
    'autoplay-delay': 2000,
    'speed': 500
}

const ProjectModal = ({ data, setData }) => {
    return (
        <div id='project_modal' className='z-[2] xl:py-8 bg-black/50 dark:bg-white/50 backdrop-blur-lg fixed top-0 left-0 w-full min-h-screen max-h-screen flex'>
            <div className="relative max-w-3xl mx-auto w-full max-h-full min-h-full bg-background border-2 border-border xl:rounded-2xl p-8 pt-12 pb-36 shadow-xl overflow-y-auto">
                <button
                    onClick={() => {
                        setData(null)
                    }}
                    className='absolute top-0 right-0 p-4 text-3xl text-text dark:text-dark-text-muted '>
                    <IoMdClose />
                </button>
                <h1 className='text-4xl text-white dark:text-black'>{data.title}</h1>
                <div className='my-4'>
                    <swiper-container {...swiperOptions}>
                        {data.images.map((img, idx) =>
                            <swiper-slide>
                                <div className='h-64 w-auto rounded-xl overflow-hidden'>
                                    <img
                                        src={`projects/${img}`}
                                        alt=""
                                        className='h-full w-full object-center object-cover'
                                    />
                                </div>
                            </swiper-slide>
                        )}
                    </swiper-container>
                </div>
                <div className='mt-8 flex flex-col space-y-2'>
                    <h2 className='text-white dark:text-black text-2xl capitalize'>brief</h2>
                    <p className='text-text dark:text-dark-text text-lg'>{data.description}</p>
                </div>
                <div className='mt-8 flex flex-col space-y-2'>
                    <h2 className='text-white dark:text-black text-2xl capitalize'>Tech Stack used</h2>
                    <div className='mt-4 flex flex-wrap'>
                        {data.technologies.map((technology, idx) =>
                            <span className='mb-2 me-2 py-1 px-2 rounded-md border border-white dark:border-dark-text text-white dark:text-black text-sm '>{technology}</span>
                        )}
                    </div>
                </div>
                {data.highlights &&
                    <div className='mt-4 flex flex-col space-y-2'>
                        <h2 className='text-white dark:text-black text-2xl capitalize'>highlights</h2>
                        <ul className='text-text dark:text-dark-text text-lg ps-4 list-disc'>
                            {data.highlights.map((li, idx) =>
                                <li>{li}</li>
                            )}
                        </ul>
                    </div>
                }
                <div className='mt-8'>
                    <div className='flex justify-start space-x-2'>
                        {data.live &&
                            <button className='py-2 px-6 text-black bg-white rounded-lg flex justify-center items-center space-x-2'>
                                <span className='text-red-500 text-lg'><TbLivePhoto /></span>
                                <span>View Live</span>
                            </button>
                        }
                        <button className='py-2 px-6 text-black bg-white rounded-lg flex justify-center items-center space-x-2'>
                            <span className='text-black text-lg'><FaGithub /></span>
                            <span>Github</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProjectModal