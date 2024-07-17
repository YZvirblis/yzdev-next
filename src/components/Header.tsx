import Link from 'next/link'
import ThemeSwitcher from '../components/ThemeSwitcher'

const Header = () => (
    <header className="bg-gray-800 text-white p-4 flex justify-between items-center">
        <nav className="container mx-auto flex justify-between">
            <Link href="/">
                <a className="text-2xl font-bold">Yuriy Zhvirblis</a>
            </Link>
            <div className="flex items-center">
                <Link href="#about">
                    <a className="ml-4">About</a>
                </Link>
                <Link href="#projects">
                    <a className="ml-4">Projects</a>
                </Link>
                <Link href="#contact">
                    <a className="ml-4">Contact</a>
                </Link>
            </div>
        </nav>
        <ThemeSwitcher />
    </header>
)

export default Header
