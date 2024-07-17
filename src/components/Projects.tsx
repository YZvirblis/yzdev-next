import { useState } from 'react'

const projectsData = [
    {
        category: 'Web Development',
        projects: [
            {
                title: 'Project 1',
                description: 'Description of project 1',
                link: 'https://github.com/YZvirblis/project1'
            },
            {
                title: 'Project 2',
                description: 'Description of project 2',
                link: 'https://github.com/YZvirblis/project2'
            }
        ]
    },
    {
        category: 'Game Development',
        projects: [
            {
                title: 'Game 1',
                description: 'Description of game 1',
                link: 'https://github.com/YZvirblis/game1'
            }
        ]
    }
]

const Projects = () => {
    const [expandedCategory, setExpandedCategory] = useState<string | null>(null)

    return (
        <section id="projects" className="container mx-auto p-4">
            <h2 className="text-3xl font-bold mb-4">Projects</h2>
            { projectsData.map((categoryData, index) => (
                <div key={ index }>
                    <h3
                        className="text-2xl font-semibold cursor-pointer"
                        onClick={ () => setExpandedCategory(expandedCategory === categoryData.category ? null : categoryData.category) }
                    >
                        { categoryData.category }
                    </h3>
                    <div className={ expandedCategory === categoryData.category ? 'block' : 'hidden' }>
                        { categoryData.projects.map((project, idx) => (
                            <div key={ idx } className="mb-4">
                                <h4 className="text-xl font-semibold">{ project.title }</h4>
                                <p>{ project.description }</p>
                                <a href={ project.link } className="text-blue-500">View Project</a>
                            </div>
                        )) }
                    </div>
                </div>
            )) }
        </section>
    )
}

export default Projects
