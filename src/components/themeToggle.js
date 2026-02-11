"use client";

import { useContext, useEffect, useState } from 'react';
import style from './themeToggle.module.css';
import { ThemeContext } from '@/contexts/themeContext';

export default function ThemeToggle() { 

    const { themeLight, setThemeLight } = useContext(ThemeContext);

    return (
        <button className={style.toggleButton} onClick={() => setThemeLight(!themeLight)}>
            {themeLight ? '☀️' : '🌑'}
        </button>
    );
}
