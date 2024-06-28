"use client"
import AccordionItem from '@/components/AccordionItem';
import Link from 'next/link';
import React, { useState } from 'react'

const FAQS = () => {

    const [activeIndex, setActiveIndex] = useState(0);
    const handleClick = (index) => {
        setActiveIndex(prev => prev === index ? null : index)
    }

    const faqAccordion = [
        {
            title: "What technologies do you specialize in?",
            data: "I specialize in JavaScript, React, Next, Node.js, Express, and MongoDB. Alongside that, I am learning DS&A in C++"
        },
        {
            title: "Can you describe a recent project you worked on?",
            data: "Recently, I worked on a project where I developed a Full Stack Ecommerce Project with Admin Panel using React for the front-end and Node.js with MongoDB for the back-end. This project involved user authentication, Inventory management, error handling, validations and much more. The best thing about this project is that it can be used in real time, so if you have something to sell online, go ahead with the template."
        },
        {
            title: "How do you stay up-to-date with new technologies?",
            data: "Its important to stay up-to-date in the Tech world so I read a lot of tech blogs, participate in online courses, attend webinars, and stay active in developer communities such as GitHub and Stack Overflow. One really cool app is daily.dev"
        },
        {
            title: "How do you manage your projects?",
            data: "I use my own methodologies to manage my projects. This includes mind mapping, taking notes of every feature that I develop, regular reviews and more. Tools like Trello, Notion and GitHub can help you stay organized and ensure efficient project management."
        },
        {
            title: "What motivates you to be a Full Stack Developer?",
            data: `I am motivated by the constant evolution of technology and the opportunity to solve problems. Are you even a programmer if you look at something and don't say "I could build that". I enjoy the versatility of working on both front-end and back-end, and the satisfaction that comes from seeing a project from concept to completion.`
        }
    ];


    return (
        <div>
            <h1 className='text-4xl font-bold text-white dark:text-dark-text'>❓Some questions I get asked</h1>
            <div className='mt-8 pb-12 flex flex-col space-y-8'>
                {faqAccordion.map((el, idx) =>
                    <AccordionItem title={el.title} data={el.data} onClick={() => { handleClick(idx) }} isOpen={activeIndex === idx} />
                )}
            </div>
            <p className='mt-4 text-text dark:text-dark-text mx-auto px-8 text-center'>Have any other query, hesitate not to{" "}<Link href="/contact#pages" className="text-pri">say a hello.</Link></p>
        </div>
    )
}

export default FAQS
