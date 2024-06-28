import { socialLinks } from '@/constants/constants'
import Link from 'next/link'
import React from 'react'
import { motion } from 'framer-motion'

const About = () => {
  return (
    <div>
      <h1 className='text-4xl font-bold text-white dark:text-dark-text'>🧑🏻‍💻About Me</h1>
      <p className='text-text-muted dark:text-dark-text-muted text-lg mt-2'>
        Hi, I’m Ishan, a passionate Full Stack Developer based out of Jaipur with over 2 years of experience in building dynamic and responsive web applications. I specialize in JavaScript, React, Next, Node.js, and have a keen interest in modern web technologies.
      </p>
      <div className='mt-8'>
        <div>
          <h2 className='text-2xl  font-bold text-white dark:text-dark-text'>
            ✍🏻Acedemics and Qualifications
          </h2>
          <p className='text-text-muted dark:text-dark-text-muted text-lg mt-4'>
            I am currently a sophomore at JECRC University, pursuing B.Tech degree in CSE, where I am building a strong foundation in computer science principles. I have done my +2 in Mathematics & Science and scored 90.20% in the CBSE board.
            {/* Additionally, I have earned certifications in [mention any relevant certifications, e.g., AWS Certified Solutions Architect, Certified Scrum Master], which have further honed my skills and expertise. */}
          </p>
        </div>
        {/* <div className='mt-4'>
                    <h2 className='text-2xl  font-bold text-white dark:text-dark-text'>
                        🎖️Achivements and Certificates
                    </h2>
                    <p className='text-text-muted dark:text-dark-text-muted text-lg mt-4'>
                        I love solving problems and thrive in collaborative environments. My journey in web development started with a curiosity about how websites work, which quickly turned into a passion for creating seamless user experiences.
                        <br />
                        <br />
                        When I’m not coding, you can find me cooking, trekking or working out in the gym.
                    </p>
                </div> */}
        <div className='mt-4'>
          <h2 className='text-2xl  font-bold text-white dark:text-dark-text'>
            💪🏻Hobbies and Personal Life
          </h2>
          <p className='text-text-muted dark:text-dark-text-muted text-lg mt-4'>
            I love solving problems and thrive in collaborative environments. My journey in web development started with a curiosity about how websites work, which quickly turned into a passion for creating seamless user experiences.
            <br />
            <br />
            When I’m not coding, you can find me cooking, trekking or working out in the gym.
          </p>
        </div>
        <div className='mt-4'>
          <h2 className='text-2xl  font-bold text-white dark:text-dark-text'>
            🔗Where can you find me ?
          </h2>
          <p className='text-text-muted dark:text-dark-text-muted text-lg mt-4'>
            I am available on most social media platforms by the handle of @ishanjarwal. You can
            &nbsp;
            <Link href="/contact" className='text-pri underline'>send me a message</Link>,&nbsp;
            <a href="mailto:ishan.professional01@gmail.com" className='text-pri underline'>mail me</a>&nbsp;or even&nbsp;
            <a href="tel:+919116080979" className='text-pri underline'>call me anytime</a>&nbsp;
            to discuss a project or for any other purpose.
            <br />
            <br />
            These are my social links, feel free to follow me
          </p>
          <div className='py-8 flex justify-start items-center space-x-4'>
            {socialLinks.map((social, idx) =>
              <a href={social.link} target='_blank' className='hover:scale-110 hover:shadow-xl duration-150'>
                <img
                  src={social.img}
                  alt={social.name}
                  className='w-16 aspect-square'
                />
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default About

