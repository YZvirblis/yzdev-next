import React, { useEffect, useRef } from 'react'
import skills from '../data/skills'
import { Skill } from '../types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCode, faCloud, faProjectDiagram } from '@fortawesome/free-solid-svg-icons'

const About = () => {
    const paragraphRef = useRef<HTMLParagraphElement>(null)
    const divRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const paragraph = paragraphRef.current
        const div = divRef.current

        if (paragraph) {
            paragraph.classList.add('slide-in-left')
        }

        if (div) {
            div.classList.add('slide-in-right')
        }
    }, [])

    return (
        <section id="about" className="container mx-auto p-4 flex flex-col justify-center min-h-screen">
            <div className="flex flex-col lg:flex-row justify-between items-center bg-gray-100 p-6 rounded-lg shadow-lg">
                <div ref={ paragraphRef } className="mb-4 lg:w-1/2 text-lg leading-relaxed">
                    <p className="mb-4">
                        <FontAwesomeIcon icon={ faCode } className="text-blue-500 mr-2 w-12" />
                        I am an <span className="font-bold">accomplished Full Stack Web Developer</span> with a wealth of expertise in crafting cutting-edge web applications.
                    </p>
                    <p className="mb-4">
                        My proficiency spans a comprehensive array of front-end and back-end technologies, including
                        <span className="font-bold text-blue-500"> JavaScript</span>,
                        <span className="font-bold text-blue-500"> TypeScript</span>,
                        <span className="font-bold text-blue-500"> React</span>,
                        <span className="font-bold text-blue-500"> Angular</span>,
                        <span className="font-bold text-blue-500"> Next.js</span>,
                        <span className="font-bold text-blue-500"> Node.js</span>, and more.
                    </p>
                    <p className="mb-4">
                        <FontAwesomeIcon icon={ faCloud } className="text-blue-500 mr-2 w-12" />
                        I excel in designing and executing responsive, feature-packed web platforms with robust cloud integration.
                    </p>
                    <p className="mb-4">
                        My skill set is further enhanced by my adeptness in cross-platform development, seamless integration with CI/CD workflows, and strong collaborative approach to project management.
                    </p>
                    <p>
                        <FontAwesomeIcon icon={ faProjectDiagram } className="text-blue-500 mr-2 w-12" />
                        My dedication to delivering high-quality, scalable solutions tailored to meet the evolving needs of the digital landscape makes me an invaluable asset in the tech industry.
                    </p>
                </div>
                <div className='lg:w-1/2 flex justify-center'>
                    <div ref={ divRef } className="lg:w-96 lg:h-96 sm:w-24 sm:h-24 profile-picture-wrapper ">
                        <img src="/images/Profile.jpg" alt="Profile Picture" className="profile-picture lg:w-80 lg:h-80 sm:w-16 sm:h-16" />
                    </div>
                </div>
            </div>

            <div className="relative mt-8 overflow-hidden">
                <div className="skills-carousel flex">
                    { skills.concat(skills).map((skill: Skill, index: number) => (
                        <div key={ index } className="p-2">
                            <img src={ skill.logo } alt={ skill.name } className="h-12 w-12 mx-auto object-contain" />
                            <p className="text-center mt-2 text-white">{ skill.name }</p>
                        </div>
                    )) }
                </div>
            </div>
        </section>
    )
}

export default About
