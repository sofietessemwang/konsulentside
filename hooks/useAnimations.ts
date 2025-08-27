'use client'
import { useEffect, useRef, useState } from 'react';

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




// Staggered animations hook, gets triggered when refresh
export const useStaggeredAnimation = (itemCount: number, baseDelay: number = 100) => {
  const [visibleItems, setVisibleItems] = useState<boolean[]>(new Array(itemCount).fill(false));

  useEffect(() => {
    const timers: NodeJS.Timeout[] = [];
    
    for (let i = 0; i < itemCount; i++) {
      const timer = setTimeout(() => {
        setVisibleItems(prev => {
          const newState = [...prev];
          newState[i] = true;
          return newState;
        });
      }, baseDelay + (i * 200)); // 200ms delay between each item
      
      timers.push(timer);
    }

    return () => timers.forEach(timer => clearTimeout(timer));
  }, [itemCount, baseDelay]);

  return visibleItems;
};

//staggered animation hook that gets triggered when scrolled
export const useScrollTriggeredAnimation = (itemCount: number) => {
  const [visibleItems, setVisibleItems] = useState<boolean[]>(
    Array(itemCount).fill(false) //start with all items hidden (false)
  );
  //Ref: an array to hold references to each DOM element you want to observe
  const refs = useRef<(HTMLElement | null)[]>([]);

  useEffect(() => {

    const observer = new IntersectionObserver( //create observer to watch when elements enter the viewport
      (entries) => {
        entries.forEach((entry) => { //for each observed entry (element)
          //find the index of the element in the refs array
          const index = refs.current.findIndex((ref) => ref === entry.target);
          if (entry.isIntersecting && index !== -1) {
            //update the visibleItems state to mark this item as vissible
            setVisibleItems((prev) => {
              const updated = [...prev];
              updated[index] = true;
              return updated;
            });
          }
        });
      },
      {
        threshold: 0.6, // triggger when 10% of element is visible 
      }
    );

    refs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      refs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);

  return [refs, visibleItems] as const;
};

export const staggeredSlideUp = (isVisible: boolean) => `
    duration-1000 transition-all ease-in-out
  ${isVisible
    ? "opacity-100 translate-y-0"
    : "opacity-0 translate-y-10"} 
`;
