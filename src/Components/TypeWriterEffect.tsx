"use client";

import React from 'react';
import { useTypewriter, Cursor } from 'react-simple-typewriter';
import { useTheme } from 'next-themes';

const TypeWriterEffect = ({ props }: { props: string | string[] }) => {
    const { theme } = useTheme();
    const isDark = theme === 'dark';
    
    const [text] = useTypewriter({
        words: Array.isArray(props) ? props : [props],
        loop: true,
        typeSpeed: 150,
        deleteSpeed: 50
    });

    return (
        <div>
            <span className='text-gray-900 dark:text-white'>{text}</span>
            <Cursor cursorColor={isDark ? '#60A5FA' : '#3B82F6'} />
        </div>
    );
};

export default TypeWriterEffect;