"use client"
import React, { useEffect, useState } from 'react'
import { LuSendHorizonal } from "react-icons/lu";
import { Listbox, ListboxButton, ListboxOption, ListboxOptions } from '@headlessui/react'
import { IoIosArrowDown } from "react-icons/io";
import axios from 'axios';
import { FaCheck } from 'react-icons/fa';

const Contact = () => {
    const options = [
        { id: 1, option: 'Discuss a Project' },
        { id: 2, option: 'Hire me for a Freelance Project' },
        { id: 3, option: 'Hire me fulltime' },
        { id: 4, option: 'General Query' },
        { id: 5, option: 'Anything else' },
    ]
    const [selectedOption, setSelectedOption] = useState(options[0])
    const [formData, setFormData] = useState({
        name: "",
        email_phone: "",
        purpose: selectedOption,
        message: ""
    })

    const [state, setState] = useState("idle")
    async function handleSubmit() {
        setState("loading");
        try {
            const data = {
                name: formData.name.trim(),
                email_phone: formData.email_phone.trim(),
                purpose: selectedOption.option,
                message: formData.message.trim()
            }
            const response = await axios.post("/api/email", JSON.stringify(data))
            if (response.data.status === 'success') {
                setState("success");
            } else if (response.data.status === 'missing') {
                setState("missing");
            } else {
                setState("fail")
            }
        } catch (error) {
            setState("fail")
        }
    }

    useEffect(() => {
        let timer;
        if (state === "success" || state === "fail" || state === "missing") {
            timer = setTimeout(() => {
                setState("idle");
            }, 4000);
        }

        return () => { clearTimeout(timer) }
    }, [state]);

    return (
        <div>
            <h1 className='text-4xl font-bold text-text dark:text-white'>🤙🏻Connect with Me</h1>
            <p className='text-text-muted dark:text-dark-text-muted mt-2'>
                Reach out to connect or collaborate on exciting projects and opportunities
            </p>
            <div className='mt-8'>
                <div className='grid grid-cols-2 gap-x-4 gap-y-10'>
                    <div className='lg:col-span-1 col-span-2 relative bg-background dark:bg-dark-background rounded-lg shadow-lg'>
                        <input
                            type="text"
                            onChange={(e) => { setFormData(prev => ({ ...prev, name: e.target.value })) }}
                            value={formData.name}
                            className='peer text-text dark:text-dark-text py-4 px-6 bg-transparent w-full outline-none'
                            placeholder=' '
                        />
                        <label className='absolute text-text-muted dark:text-dark-text-muted pointer-events-none transform -top-6  translate-y-0 left-2 scale-75 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:left-4 peer-placeholder-shown:scale-100 peer-focus:-top-6 peer-focus:left-2 peer-focus:scale-75 peer-focus:translate-y-0 duration-300 origin-left'>
                            Your Name
                        </label>
                    </div>
                    <div className='lg:col-span-1 col-span-2 relative bg-background dark:bg-dark-background rounded-lg shadow-lg'>
                        <input
                            type="text"
                            onChange={(e) => { setFormData(prev => ({ ...prev, email_phone: e.target.value })) }}
                            value={formData.email_phone}
                            className='peer text-text dark:text-dark-text py-4 px-6 bg-transparent w-full outline-none'
                            placeholder=' '
                        />
                        <label className='absolute text-text-muted dark:text-dark-text-muted pointer-events-none transform -top-6  translate-y-0 left-2 scale-75 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:left-4 peer-placeholder-shown:scale-100 peer-focus:-top-6 peer-focus:left-2 peer-focus:scale-75 peer-focus:translate-y-0 duration-300 origin-left'>
                            Your Email/Phone
                        </label>
                    </div>
                    <div className='col-span-2 relative bg-background dark:bg-dark-background rounded-lg shadow-lg'>
                        <Listbox value={selectedOption} onChange={setSelectedOption}>
                            <ListboxButton className={'py-4 px-6 flex justify-between items-center relative text-text dark:text-dark-text w-full text-start'}>
                                <span>{selectedOption.option}</span>
                                <span>
                                    <IoIosArrowDown />
                                </span>
                            </ListboxButton>
                            <ListboxOptions className={'w-[var(--button-width)] outline-none p-4 flex flex-col space-y-1 rounded-lg mt-2 backdrop-blur-xl bg-background dark:bg-dark-background text-text-muted dark:text-dark-text-muted'} anchor="bottom">
                                {options.map((option) => (
                                    <ListboxOption key={option.id} value={option} className="py-2 px-4 text-text dark:text-dark-text rounded-md hover:bg-background dark:bg-dark-background cursor-pointer duration-300">
                                        {option.option}
                                    </ListboxOption>
                                ))}
                            </ListboxOptions>
                        </Listbox>
                        <label className='absolute text-text-muted dark:text-dark-text-muted pointer-events-none transform -top-6  translate-y-0 left-2 scale-75 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:left-4 peer-placeholder-shown:scale-100 peer-focus:-top-6 peer-focus:left-2 peer-focus:scale-75 peer-focus:translate-y-0 duration-300 origin-left'>
                            Purpose for contacting
                        </label>
                    </div>
                    <div className='col-span-2 relative bg-background dark:bg-dark-background rounded-lg shadow-lg'>
                        <textarea
                            type="text"
                            onChange={(e) => { setFormData(prev => ({ ...prev, message: e.target.value })) }}
                            value={formData.message}
                            className='peer text-text dark:text-dark-text py-4 px-6 bg-transparent w-full outline-none'
                            placeholder=' '
                            style={{ minHeight: "120px", maxHeight: "200px" }}
                        />
                        <label className='absolute text-text-muted dark:text-dark-text-muted pointer-events-none transform -top-6  left-2 scale-75 peer-placeholder-shown:top-4  peer-placeholder-shown:left-4 peer-placeholder-shown:scale-100 peer-focus:-top-6 peer-focus:left-2 peer-focus:scale-75  duration-300 origin-left'>
                            Your Message
                        </label>
                    </div>
                    {state === 'missing' &&
                        <div className='col-span-2 flex justify-center items-center mx-auto'>
                            <p className='text-red-500 text-center'>Please fill out every field</p>
                        </div>
                    }
                    <div className='col-span-2'>
                        <button
                            onClick={() => {
                                if (state === "idle") {
                                    handleSubmit();
                                }
                            }}
                            className='group ms-auto py-4 px-16 rounded-lg bg-pri text-white flex justify-center items-center space-x-2 duration-300 md:w-auto w-full'>
                            <span>
                                {state === "loading" &&
                                    <img
                                        src="buttonLoader.gif"
                                        className='h-8'
                                        alt=""
                                    />
                                }
                                {state === "success" && "Sent"}
                                {state === "fail" && "Not Sent"}
                                {(state === "idle" || state === "missing") && "Send"}
                            </span>
                            {(state === "idle" || state === "missing") && <span className='group-hover:ps-2 duration-300'><LuSendHorizonal /></span>}
                            {state === "success" && <span className='group-hover:ps-2 duration-300'><FaCheck /></span>}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact
