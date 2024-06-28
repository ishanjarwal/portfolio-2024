import { skills } from '@/constants/constants'
import React from 'react'


const Skills = () => {


    return (
        <div>
            <h1 className='text-4xl font-bold text-white dark:text-dark-text'>💎 My Skills</h1>
            <p className='text-text-muted dark:text-dark-text-muted mt-2'>
                Explore my versatile skill set in full stack development and Design
            </p>
            <div className='mt-8 grid lg:grid-cols-2 gap-4'>
                {skills.map((item, idx) =>
                    <div className='xl:px-8 px-4 py-6 bg-background dark:bg-dark-background border-2 border-border dark:border-dark-border rounded-xl'>
                        <h1 className='text-2xl text-white dark:text-dark-text'>{item.heading}</h1>
                        <div className='flex flex-wrap mt-4'>
                            {item.bullets.map((li, idx) => {
                                const Icon = li.icon;
                                return (
                                    <span className='flex justify-center space-x-2 items-center rounded-lg mb-2 me-2 bg-white text-pri py-2 px-4 duration-300 hover:text-white hover:bg-pri cursor-pointer'>
                                        {li.icon && <span style={{ fill: li.color }} className='h-6 w-6'>{li.icon}</span>}
                                        <span>{li.technology}</span>
                                    </span>
                                )
                            })}
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}

export default Skills
