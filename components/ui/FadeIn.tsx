import { useEffect, useRef, memo } from 'react';
import type { ReactNode } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export interface FadeInProps {
  children: ReactNode;
  delay?: number;
  className?: string;
  direction?: 'up' | 'down' | 'left' | 'right' | 'none';
  distance?: number;
  duration?: number;
}

export const FadeIn = memo<FadeInProps>(({ 
  children, 
  delay = 0, 
  className = '',
  direction = 'up',
  distance = 30,
  duration = 0.8
}) => {
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    // Configurar la dirección inicial
    const directionMap = {
      up: { y: distance, x: 0 },
      down: { y: -distance, x: 0 },
      left: { x: distance, y: 0 },
      right: { x: -distance, y: 0 },
      none: { y: 0, x: 0 }
    };

    const initialPosition = directionMap[direction];

    // Configurar estado inicial
    gsap.set(element, {
      opacity: 0,
      ...initialPosition
    });

    // Crear animación con ScrollTrigger usando context
    const ctx = gsap.context(() => {
      gsap.to(element, {
        opacity: 1,
        x: 0,
        y: 0,
        duration: duration,
        delay: delay / 1000,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: element,
          start: 'top 85%',
          toggleActions: 'play none none none',
        }
      });
    }, element);

    return () => {
      ctx.revert(); // Limpia todas las animaciones y ScrollTriggers
    };
  }, [delay, direction, distance, duration]);

  return (
    <div ref={elementRef} className={className}>
      {children}
    </div>
  );
});

FadeIn.displayName = 'FadeIn';
