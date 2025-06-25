'use client'
import { useEffect, useState } from 'react';

//main animation hook
export const useSlideIn =(delay: number = 100)=> {
    const [isVisible, setIsVisible] = useState(false); //start invisible
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
        const timer = setTimeout(() => { //waits delay ms before setting to true
            setIsVisible(true); //after delay, show it
        }, delay);

        return () => clearTimeout(timer); //cleanup timer if unmounts
    }, [delay]);

    return {isVisible, isMounted}; //return visibility status
};

//scroll triggered animation hook
export const useScrollAnimation = (threshold: number=0.1) => {
    const [isVisible, setIsVisible] = useState(false); //start hidden

    useEffect(() => {
        const observer = new IntersectionObserver((
            [entry]
        ) => {
            if(entry.isIntersecting){
                setIsVisible(true); //show when in view
            }
        }, {threshold} //%of element that must be vissible to trigger
    );

    const element = document.getElementById('scroll-animate'); //watches for an element with id this name
    if(element){
        observer.observe(element); //start watching
    }
    return() => observer.disconnect(); //stop watching when unmounted
    }, [threshold]);
    return isVisible;
};

//animation class builders
export const slideFromRight = (isVisible: boolean, isMounted: boolean = true) => {
    if (!isMounted) return 'translate-x-full opacity-0';
   return  `
    transition-all duration-1000 ease-out
    ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'}
  `;
};

export const slideFromLeft = (isVisible: boolean) => `
  transition-all duration-1000 ease-out
  ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0'}
`;

export const slideFromBottom = (isVisible: boolean) => `
  transition-all duration-1000 ease-out
  ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'}
`;

export const fadeIn = (isVisible: boolean, duration: string = 'duration-1000') => `
  transition-opacity ${duration} ease-out
  ${isVisible ? 'opacity-100' : 'opacity-0'}
`;

export const scaleIn = (isVisible: boolean) => `
  transition-all duration-700 ease-out
  ${isVisible ? 'scale-100 opacity-100' : 'scale-75 opacity-0'}
`;




