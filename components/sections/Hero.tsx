import { memo, useEffect, useRef } from 'react';
import { ChevronUp } from 'lucide-react';
import { FadeIn } from '../ui/FadeIn';
import { LightParticles } from '../ui/LightParticles';
import { useLanguage } from '../../contexts/LanguageContext';
import { useTranslation } from '../../i18n/translations';
import { gsap } from 'gsap';

export const Hero = memo(() => {
    const { language } = useLanguage();
    const t = useTranslation(language);
    const titleRef = useRef<HTMLHeadingElement>(null);
    const subtitleRef = useRef<HTMLParagraphElement>(null);
    const buttonsRef = useRef<HTMLDivElement>(null);
    const parishNameRef = useRef<HTMLSpanElement>(null);

    useEffect(() => {
        // Usar context para mejor gestión de animaciones
        const ctx = gsap.context(() => {
            const timeline = gsap.timeline({ delay: 0.3 });
            
            timeline
                .fromTo(titleRef.current,
                    { opacity: 0, y: 40, scale: 0.95 },
                    { 
                        opacity: 1, 
                        y: 0, 
                        scale: 1,
                        duration: 1.2, 
                        ease: 'power3.out' 
                    }
                )
                .fromTo(subtitleRef.current,
                    { opacity: 0, y: 30 },
                    { 
                        opacity: 1, 
                        y: 0, 
                        duration: 1, 
                        ease: 'power2.out' 
                    },
                    '-=0.8'
                )
                .fromTo(buttonsRef.current?.children,
                    { opacity: 0, y: 20 },
                    { 
                        opacity: 1, 
                        y: 0, 
                        duration: 0.8,
                        stagger: 0.15,
                        ease: 'power2.out' 
                    },
                    '-=0.6'
                );

            // Animación de gradiente brillante que se mueve a través del texto
            if (parishNameRef.current) {
                gsap.to(parishNameRef.current, {
                    backgroundPosition: '200% center',
                    duration: 3,
                    ease: 'none',
                    repeat: -1
                });
            }
        });

        return () => {
            ctx.revert(); // Limpia todas las animaciones
        };
    }, []);

    return (
        <section id="inicio" className="relative h-screen min-h-[600px] max-h-screen flex items-center justify-center overflow-hidden">
            {/* Background Image with Overlay */}
            <div className="absolute inset-0 z-0">
                <img
                    src="/iglesia-hero.jpg"
                    alt="Interior de la Iglesia Santa Rita con vitrales dorados"
                    className="w-full h-full object-cover blur-sm"
                    loading="eager"
                    fetchpriority="high"
                    style={{
                        objectPosition: '53% 50%',
                        objectFit: 'cover'
                    }}
                    onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.style.display = 'none';
                        const parent = target.parentElement;
                        if (parent) {
                            parent.style.background = 'linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%)';
                        }
                    }}
                />
                
                {/* Partículas de luz */}
                <LightParticles />

                {/* Overlay degradado base mejorado */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-parish-blue/20 to-parish-blue-dark/90 mix-blend-multiply transition-opacity duration-1000" />

                {/* Viñeta cinematográfica refinada */}
                <div
                    className="absolute inset-0 pointer-events-none"
                    style={{
                        background: 'radial-gradient(ellipse at center, transparent 30%, rgba(0,0,0,0.3) 60%, rgba(0,0,0,0.7) 100%)'
                    }}
                />
                
                {/* Brillo sutil superior */}
                <div 
                    className="absolute top-0 left-0 right-0 h-1/3 pointer-events-none"
                    style={{
                        background: 'radial-gradient(ellipse at top, rgba(217, 119, 6, 0.1) 0%, transparent 70%)'
                    }}
                />
            </div>

            <div className="relative z-10 text-center px-4 sm:px-6 max-w-5xl mx-auto text-white pb-12 sm:pb-0">
                <h1 
                    ref={titleRef}
                    className="font-serif text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-5 sm:mb-8 leading-[1.1] tracking-tight"
                    style={{
                        textShadow: '0 4px 20px rgba(0, 0, 0, 0.5), 0 0 40px rgba(217, 119, 6, 0.3)'
                    }}
                >
                    Iglesia <br className="md:hidden" /> 
                    <span 
                        ref={parishNameRef}
                        className="inline-block"
                        style={{
                            background: 'linear-gradient(90deg, #d97706 0%, #fbbf24 25%, #fef3c7 50%, #fbbf24 75%, #d97706 100%)',
                            backgroundSize: '200% auto',
                            backgroundClip: 'text',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                            backgroundPosition: '0% center'
                        }}
                    >
                        {t.hero.parishName}
                    </span>
                </h1>
                
                <p 
                    ref={subtitleRef}
                    className="font-sans text-sm sm:text-lg md:text-xl lg:text-2xl font-light opacity-95 mb-6 sm:mb-12 max-w-3xl mx-auto leading-relaxed tracking-wide"
                    style={{
                        textShadow: '0 2px 10px rgba(0, 0, 0, 0.5)'
                    }}
                >
                    {t.hero.subtitle}
                </p>
                
                <div ref={buttonsRef} className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                    <a
                        href="#horarios"
                        className="w-full sm:w-auto px-8 py-3.5 bg-parish-arena text-parish-blue rounded-full font-bold hover:bg-parish-arena-light hover:shadow-glow transition-all duration-200 ease-out transform hover:scale-105 active:scale-95 flex items-center justify-center text-sm sm:text-base shadow-divine"
                    >
                        {t.hero.scheduleButton}
                    </a>
                    <a
                        href="#donar"
                        className="w-full sm:w-auto px-8 py-3.5 bg-transparent border-2 border-white/80 text-white rounded-full font-bold hover:bg-white/10 hover:border-white hover:shadow-glow transition-all duration-200 ease-out transform hover:scale-105 active:scale-95 flex items-center justify-center text-sm sm:text-base backdrop-blur-sm"
                    >
                        {t.hero.donateButton}
                    </a>
                </div>
            </div>

            <div 
                className="absolute bottom-8 left-0 right-0 text-center text-white/60 hover:text-white/90 transition-colors duration-300" 
                aria-hidden="true"
                style={{
                    animation: 'float 3s ease-in-out infinite'
                }}
            >
                <ChevronUp className="mx-auto rotate-180" size={32} />
            </div>
        </section>
    );
});

Hero.displayName = 'Hero';
