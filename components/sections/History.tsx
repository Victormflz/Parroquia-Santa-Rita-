import { memo, useEffect, useRef } from 'react';
import { FadeIn } from '../ui/FadeIn';
import { useLanguage } from '../../contexts/LanguageContext';
import { useTranslation } from '../../i18n/translations';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const History = memo(() => {
    const { language } = useLanguage();
    const t = useTranslation(language);
    const timelineRef = useRef<HTMLDivElement>(null);
    const progressLineRef = useRef<HTMLDivElement>(null);

    const historyItems = [
        {
            title: t.history.origins.title,
            description: t.history.origins.description,
            gradient: 'from-parish-blue via-blue-600 to-parish-blue',
            position: 'left'
        },
        {
            title: t.history.present.title,
            description: t.history.present.description,
            gradient: 'from-parish-gold via-amber-500 to-parish-gold',
            position: 'right'
        },
        {
            title: t.history.future.title,
            description: t.history.future.description,
            gradient: 'from-purple-600 via-purple-500 to-purple-600',
            position: 'left'
        }
    ];

    useEffect(() => {
        if (!timelineRef.current || !progressLineRef.current) return;

        const timeline = timelineRef.current;
        const progressLine = progressLineRef.current;
        const items = timeline.querySelectorAll('.history-item');

        // Usar context para mejor gestión de animaciones
        const ctx = gsap.context(() => {
            // Animación de la línea de progreso
            gsap.fromTo(progressLine,
                { scaleY: 0 },
                {
                    scaleY: 1,
                    ease: 'none',
                    scrollTrigger: {
                        trigger: timeline,
                        start: 'top center',
                        end: 'bottom center',
                        scrub: 1,
                    }
                }
            );

            // Animación de cada ítem de la historia
            items.forEach((item, index) => {
                const content = item.querySelector('.history-content');
                const position = historyItems[index].position;

                // Animación del contenido
                gsap.fromTo(content,
                    {
                        x: position === 'left' ? -100 : 100,
                        opacity: 0
                    },
                    {
                        x: 0,
                        opacity: 1,
                        duration: 1,
                        ease: 'power3.out',
                        scrollTrigger: {
                            trigger: item,
                            start: 'top 70%',
                            toggleActions: 'play none none none',
                            once: true
                        }
                    }
                );
            });
        }, timeline);

        return () => {
            ctx.revert(); // Limpia todo: animaciones y ScrollTriggers
        };
    }, [language, historyItems]);

    return (
        <section id="historia" className="section-padding bg-gradient-to-br from-parish-beige via-parish-softwhite to-parish-arena-light relative overflow-hidden">
            {/* Patrón decorativo de fondo tipo vitral */}
            <div className="absolute inset-0 opacity-[0.03]">
                <div 
                    className="absolute inset-0"
                    style={{
                        backgroundImage: `
                            radial-gradient(circle at 20% 30%, rgba(30, 58, 138, 0.4) 0%, transparent 50%),
                            radial-gradient(circle at 80% 70%, rgba(217, 119, 6, 0.4) 0%, transparent 50%),
                            radial-gradient(circle at 40% 80%, rgba(147, 51, 234, 0.4) 0%, transparent 50%)
                        `
                    }}
                />
            </div>

            <div className="container-custom relative z-10">
                <FadeIn direction="down" duration={1}>
                    <div className="text-center mb-16 sm:mb-20 lg:mb-24">
                        <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-parish-blue font-bold mb-4 sm:mb-6 text-balance">
                            {t.history.title}
                        </h2>
                        <div className="w-24 h-1.5 bg-gradient-to-r from-transparent via-parish-gold to-transparent mx-auto rounded-full mb-4 sm:mb-6 shadow-glow"></div>
                        <p className="text-parish-text-light text-base sm:text-lg lg:text-xl max-w-3xl mx-auto leading-relaxed px-4">
                            {t.history.subtitle}
                        </p>
                    </div>
                </FadeIn>

                {/* Timeline vertical */}
                <div ref={timelineRef} className="relative max-w-5xl mx-auto">
                    {/* Línea vertical principal */}
                    <div className="absolute left-1/2 top-0 bottom-0 w-1 -translate-x-1/2 bg-gradient-to-b from-parish-blue/20 via-parish-gold/20 to-purple-600/20 rounded-full"></div>
                    
                    {/* Línea de progreso animada */}
                    <div 
                        ref={progressLineRef}
                        className="absolute left-1/2 top-0 bottom-0 w-1 -translate-x-1/2 bg-gradient-to-b from-parish-blue via-parish-gold to-purple-600 rounded-full origin-top"
                        style={{ transformOrigin: 'top' }}
                    ></div>

                    {/* Items de la historia */}
                    <div className="space-y-16 sm:space-y-24 lg:space-y-32 py-8">
                        {historyItems.map((item, index) => {
                            const isLeft = item.position === 'left';

                            return (
                                <div key={index} className={`history-item relative flex items-center ${isLeft ? 'justify-start' : 'justify-end'}`}>
                                    {/* Contenido */}
                                    <div 
                                        className={`history-content w-full sm:w-[calc(50%-3rem)] ${isLeft ? 'sm:pr-8' : 'sm:pl-8'}`}
                                    >
                                        <div className={`group bg-parish-arena/80 backdrop-blur-sm p-6 sm:p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 border border-gray-200 hover:border-parish-gold ${isLeft ? 'sm:text-right' : 'sm:text-left'}`}>
                                            {/* Indicador de dirección */}
                                            <div className={`hidden sm:block absolute top-1/2 -translate-y-1/2 w-8 h-0.5 bg-gradient-to-r ${item.gradient} ${isLeft ? '-right-8' : '-left-8'}`}></div>
                                            
                                            {/* Contenido de la tarjeta */}
                                            <div className="relative">
                                                <div className={`inline-block px-4 py-1 rounded-full text-xs font-semibold mb-4 bg-gradient-to-r ${item.gradient} text-white shadow-lg`}>
                                                    {index === 0 ? 'Orígenes' : index === 1 ? 'Presente' : 'Visión'}
                                                </div>
                                                
                                                <h3 className="font-serif text-2xl sm:text-3xl font-bold mb-4 text-parish-blue group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-parish-blue group-hover:to-parish-gold transition-all duration-300">
                                                    {item.title}
                                                </h3>
                                                
                                                <p className="text-parish-text-light leading-relaxed text-sm sm:text-base">
                                                    {item.description}
                                                </p>

                                                {/* Decoración inferior */}
                                                <div className={`mt-6 h-1 w-20 rounded-full bg-gradient-to-r ${item.gradient} ${isLeft ? 'sm:ml-auto' : 'sm:mr-auto'} group-hover:w-32 transition-all duration-300`}></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>

                {/* Elemento decorativo final */}
                <div className="mt-16 flex justify-center">
                    <div className="w-3 h-3 rounded-full bg-parish-gold shadow-lg shadow-parish-gold/50 animate-pulse"></div>
                </div>
            </div>
        </section>
    );
});

History.displayName = 'History';
