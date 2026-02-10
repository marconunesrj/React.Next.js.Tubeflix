"use client";

import { useEffect, useState } from 'react';
import style from './themeToggle.module.css';

export default function ThemeToggle() { 

    const [themeLight, setThemeLight] = useState(false);

     useEffect(() => {
        document.documentElement.setAttribute('data-theme', themeLight ? 'light' : 'dark' );
    }, [themeLight]);

    return (
        <button className={style.toggleButton} onClick={() => setThemeLight(!themeLight)}>
            {themeLight ? '☀️' : '🌑'}
        </button>
    );
}
