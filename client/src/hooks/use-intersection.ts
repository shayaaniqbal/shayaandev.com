import { useState, useEffect, useRef, RefObject } from 'react';

interface IntersectionOptions extends IntersectionObserverInit {
  freezeOnceVisible?: boolean;
}

export function useIntersection<T extends HTMLElement = HTMLDivElement>(
  options: IntersectionOptions = {}
): [RefObject<T>, boolean] {
  const { threshold = 0, root = null, rootMargin = '0px', freezeOnceVisible = false } = options;
  
  const elementRef = useRef<T>(null);
  const [isVisible, setIsVisible] = useState<boolean>(false);
  
  const frozen = isVisible && freezeOnceVisible;

  useEffect(() => {
    const element = elementRef.current;
    if (!element || frozen) return;
    
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold, root, rootMargin }
    );
    
    observer.observe(element);
    
    return () => {
      observer.disconnect();
    };
  }, [threshold, root, rootMargin, frozen]);
  
  return [elementRef, isVisible];
}
