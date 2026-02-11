'use client'

import { createContext, useEffect, useState } from "react"

export const ThemeContext = createContext()

export function ThemeProvider({ children }) {

    // Por que funciona:
    
    // useState(false) garante que servidor e cliente renderizem o mesmo valor inicial (🌑), 
    // eliminando o mismatch.
    
    // O primeiro useEffect lê o localStorage após a montagem e atualiza o estado 
    // (pode causar um flash mínimo, mas sem erro de hidratação).
    
    // O segundo useEffect usa o guard if (!mounted) return para não sobrescrever 
    // o localStorage com o valor padrão antes de ler o valor salvo.

    const [themeLight, setThemeLight] = useState(false)
    const [mounted, setMounted] = useState(false)   

    // Ler o tema salvo no localStorage após a montagem no cliente
    useEffect(() => {
        const savedTheme =
            localStorage.getItem('theme') ??
            document.documentElement.getAttribute('data-theme') ??
            'dark'
        setThemeLight(savedTheme === 'light')
        setMounted(true)
    }, [])

    // Atualizar o tema no localStorage e no atributo data-theme do HTML
    useEffect(() => {
        if (!mounted) return
        const savedTheme = themeLight ? 'light' : 'dark'
        localStorage.setItem('theme', savedTheme)
        document.documentElement.setAttribute('data-theme', savedTheme)
    }, [themeLight, mounted])

    return (
        <ThemeContext.Provider value={{ themeLight, setThemeLight }}>
            {children}
        </ThemeContext.Provider>
    )
}

