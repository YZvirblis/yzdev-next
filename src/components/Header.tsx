import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faFolderOpen, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import ThemeSwitcher from '../components/ThemeSwitcher'

const Header = () => (
    <header className="bg-gray-900 text-white p-4 fixed top-0 left-0 w-full z-50">
        <nav className="container mx-auto flex justify-between items-center">
            <Link href="/">
                <a className="text-3xl font-bold font-roboto hover:text-gray-400 transition duration-300">
                    Yuriy Zhvirblis
                </a>
            </Link>
            <div className="hidden md:flex items-center space-x-6">
                <Link href="#about">
                    <a className="text-lg font-medium font-roboto hover:text-gray-400 transition duration-300 flex items-center space-x-2">
                        <FontAwesomeIcon icon={ faUser } />
                        <span>About</span>
                    </a>
                </Link>
                <Link href="#projects">
                    <a className="text-lg font-medium font-roboto hover:text-gray-400 transition duration-300 flex items-center space-x-2">
                        <FontAwesomeIcon icon={ faFolderOpen } />
                        <span>Projects</span>
                    </a>
                </Link>
                <Link href="#contact">
                    <a className="text-lg font-medium font-roboto hover:text-gray-400 transition duration-300 flex items-center space-x-2">
                        <FontAwesomeIcon icon={ faEnvelope } />
                        <span>Contact</span>
                    </a>
                </Link>
            </div>
            <div className="flex items-center space-x-4">
                <ThemeSwitcher />
            </div>
        </nav>
    </header>
)

export default Header
