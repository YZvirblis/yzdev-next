import { useState, useEffect } from 'react'

const ThemeSwitcher = () => {
    const [theme, setTheme] = useState('light')

    useEffect(() => {
        document.documentElement.className = theme
    }, [theme])

    const toggleTheme = () => {
        setTheme(theme === 'light' ? 'dark' : 'light')
    }

    return (
        <button onClick={ toggleTheme } className="p-2 bg-gray-800 text-white rounded">
            { theme === 'light' ? 'Dark Mode' : 'Light Mode' }
        </button>
    )
}

export default ThemeSwitcher
