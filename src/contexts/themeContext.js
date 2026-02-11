'use client'

import { createContext, useEffect, useState } from "react"

export const ThemeContext = createContext()

export function ThemeProvider({ children }) {

    const [themeLight, setThemeLight] = useState(false)

    useEffect(() => {
        document.documentElement.setAttribute('data-theme', themeLight ? 'light' : 'dark' )
    }, [themeLight])

    return (
        <ThemeContext.Provider value={{ themeLight, setThemeLight }}>
            {children}
        </ThemeContext.Provider>
    )
}

