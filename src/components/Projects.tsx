import { useEffect, useState, useRef } from 'react'
import ProjectsData from '../data/projects'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'

const Projects = () => {
    const [rotation, setRotation] = useState(0)
    const [currentCategoryIndex, setCurrentCategoryIndex] = useState(0)
    const [isVisible, setIsVisible] = useState(false)
    const projectsRef = useRef(null)

    const handleLeftClick = () => {
        const newRotation = rotation - (360 / ProjectsData.length)
        setRotation(newRotation)
        updateCurrentCategory(newRotation)
    }

    const handleRightClick = () => {
        const newRotation = rotation + (360 / ProjectsData.length)
        setRotation(newRotation)
        updateCurrentCategory(newRotation)
    }

    const updateCurrentCategory = (newRotation: number) => {
        const index = Math.round((newRotation / (360 / ProjectsData.length)) % ProjectsData.length)
        setCurrentCategoryIndex((index + ProjectsData.length) % ProjectsData.length) // Ensure the index is always positive
    }

    useEffect(() => {
        updateCurrentCategory(rotation)
    }, [rotation])

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    setIsVisible(entry.isIntersecting)
                })
            },
            { threshold: 0.1 }
        )

        if (projectsRef.current) {
            observer.observe(projectsRef.current)
        }

        return () => {
            if (projectsRef.current) {
                observer.unobserve(projectsRef.current)
            }
        }
    }, [])

    return (
        <section id="projects" className="container mx-auto p-4 relative flex flex-col" ref={ projectsRef }>
            <button onClick={ handleLeftClick } className={ `carousel-button left-4 ${isVisible ? 'show' : ''}` }>
                <FontAwesomeIcon icon={ faChevronLeft } />
            </button>
            <button onClick={ handleRightClick } className={ `carousel-button right-4 ${isVisible ? 'show' : ''}` }>
                <FontAwesomeIcon icon={ faChevronRight } />
            </button>
            <div className='projects-banner'>
                <div className='projects-slider' style={ { '--projects-quantity': ProjectsData.length, transform: `perspective(1000px) rotateY(${rotation}deg)` } as React.CSSProperties }>
                    { ProjectsData.map((categoryData, index) => (
                        <div key={ index } className='projects-item mt-16' style={ { '--projects-item-position': index } as React.CSSProperties }>
                            <img src={ categoryData.image } alt={ categoryData.category } />
                        </div>
                    )) }
                </div>
            </div>
            <div className="projects-details mt-8 p-4 bg-gray-100 rounded-lg shadow-lg">
                <h2 className="text-2xl font-bold mb-4">{ ProjectsData[currentCategoryIndex].category }</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    { ProjectsData[currentCategoryIndex].projects.map((project, idx) => (
                        <div key={ idx } className="project-item bg-white p-4 rounded-lg shadow-md">
                            <h3 className="text-xl font-semibold mb-2">{ project.title }</h3>
                            <img src={ project.image ? project.image : ProjectsData[currentCategoryIndex].image } alt={ `${project.title} image` } />
                            <p className="text-gray-700 mb-2">{ project.description }</p>
                            <div className="flex flex-wrap">
                                { project.technologies.map((tech, techIdx) => (
                                    <img key={ techIdx } src={ tech.logo } alt={ tech.name } className="h-6 w-6 mr-2 mb-2" />
                                )) }
                            </div>
                            <a href={ project.link } target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">View Project</a>
                        </div>
                    )) }
                </div>
            </div>
        </section>
    )
}

export default Projects
