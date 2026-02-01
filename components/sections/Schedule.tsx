import { memo, useEffect, useRef } from 'react';
import type { ReactNode } from 'react';
import { Calendar, Clock, MapPin, Phone, Mail, ChurchIcon } from 'lucide-react';
import { FadeIn } from '../ui/FadeIn';
import { useLanguage } from '../../contexts/LanguageContext';
import { useTranslation } from '../../i18n/translations';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export interface ScheduleItem {
    label: string;
    time: string;
}

export interface ScheduleCard {
    icon: ReactNode;
    title: string;
    items: ScheduleItem[];
    className?: string;
    iconBg?: string;
}

export const Schedule = memo(() => {
    const { language } = useLanguage();
    const t = useTranslation(language);
    const sectionRef = useRef<HTMLDivElement>(null);
    const cardRef = useRef<HTMLDivElement>(null);

    const schedules: ScheduleCard[] = [
        {
            icon: <Calendar className="w-8 h-8 text-parish-blue" />,
            title: t.schedule.masses.title,
            items: [
                { label: t.schedule.masses.sundaysLabel, time: "12:30" }
            ],
            className: "bg-gradient-to-br from-blue-100 to-blue-50 border-blue-300 shadow-xl",
            iconBg: "bg-parish-blue text-white"
        }
    ];

    useEffect(() => {
        if (!cardRef.current) return;

        const card = cardRef.current;
        const bells = card.querySelectorAll('.bell-icon');
        const timeDisplay = card.querySelector('.time-display');

        // Usar context para mejor cleanup
        const ctx = gsap.context(() => {
            // Animación de campanas
            bells.forEach((bell, index) => {
                gsap.to(bell, {
                    rotation: index % 2 === 0 ? 15 : -15,
                    duration: 0.6,
                    ease: 'power2.inOut',
                    yoyo: true,
                    repeat: -1,
                    repeatDelay: 2,
                    delay: index * 0.2
                });
            });

            // Animación del reloj
            gsap.fromTo(timeDisplay,
                { scale: 0.9, opacity: 0.8 },
                {
                    scale: 1,
                    opacity: 1,
                    duration: 1.5,
                    ease: 'power2.inOut',
                    yoyo: true,
                    repeat: -1
                }
            );
        }, card);

        return () => {
            ctx.revert(); // Limpia todas las animaciones
        };
    }, [language]);

    return (
        <section id="horarios" ref={sectionRef} className="py-24 bg-gradient-to-br from-parish-blue via-blue-900 to-parish-blue relative overflow-hidden">
            {/* Fondo con efecto de vitrales */}
            <div className="absolute inset-0 opacity-10">
                <div 
                    className="absolute inset-0"
                    style={{
                        backgroundImage: `
                            radial-gradient(circle at 10% 20%, rgba(251, 191, 36, 0.4) 0%, transparent 50%),
                            radial-gradient(circle at 90% 80%, rgba(217, 119, 6, 0.3) 0%, transparent 50%),
                            radial-gradient(circle at 50% 50%, rgba(147, 51, 234, 0.2) 0%, transparent 50%),
                            radial-gradient(circle at 30% 70%, rgba(59, 130, 246, 0.3) 0%, transparent 50%)
                        `
                    }}
                />
            </div>

            {/* Patrón decorativo tipo iglesia */}
            <div className="absolute inset-0 opacity-5">
                <div 
                    className="absolute inset-0"
                    style={{
                        backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 50px, rgba(255,255,255,0.1) 50px, rgba(255,255,255,0.1) 51px)',
                        backgroundSize: '100% 100px'
                    }}
                />
            </div>

            <div className="container mx-auto px-4 relative z-10">
                <FadeIn>
                    <div className="text-center mb-16">
                        <div className="flex justify-center items-center gap-3 mb-4">
                            <div className="w-12 h-0.5 bg-gradient-to-r from-transparent to-parish-gold rounded-full"></div>
                            <ChurchIcon className="w-8 h-8 text-parish-gold" strokeWidth={2} />
                            <div className="w-12 h-0.5 bg-gradient-to-l from-transparent to-parish-gold rounded-full"></div>
                        </div>
                        <span className="text-parish-gold font-bold tracking-widest uppercase text-sm mb-4 block">Información Parroquial</span>
                        <h2 className="font-serif text-4xl md:text-5xl text-white font-bold mb-6 drop-shadow-lg">
                            {t.schedule.title}
                        </h2>
                        <div className="w-24 h-1.5 bg-gradient-to-r from-transparent via-parish-gold to-transparent mx-auto rounded-full mb-6 shadow-glow"></div>
                        <p className="text-blue-100 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
                            {t.schedule.subtitle}
                        </p>
                    </div>
                </FadeIn>

                <div className="grid grid-cols-1 max-w-4xl mx-auto">
                    {schedules.map((schedule, idx) => (
                        <FadeIn key={schedule.title} delay={idx * 150} className="h-full">
                            <div 
                                ref={cardRef}
                                className="relative bg-parish-arena/95 backdrop-blur-md rounded-3xl p-6 sm:p-8 md:p-10 lg:p-12 shadow-2xl hover:shadow-parish-gold/20 transition-all duration-500 group overflow-hidden border-2 border-parish-gold/30"
                            >
                                {/* Decoración superior - oculta en móvil */}
                                <div className="hidden sm:block absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-parish-blue via-parish-gold to-parish-blue"></div>
                                
                                {/* Campanas decorativas */}
                                <div className="absolute top-8 left-8 bell-icon">
                                    <div className="w-12 h-12 rounded-full bg-parish-gold/10 flex items-center justify-center">
                                        <ChurchIcon className="w-6 h-6 text-parish-gold" />
                                    </div>
                                </div>
                                <div className="absolute top-8 right-8 bell-icon">
                                    <div className="w-12 h-12 rounded-full bg-parish-gold/10 flex items-center justify-center">
                                        <ChurchIcon className="w-6 h-6 text-parish-gold" />
                                    </div>
                                </div>

                                {/* Patrón de fondo sutil */}
                                <div className="absolute inset-0 opacity-[0.02]">
                                    <div 
                                        className="absolute inset-0"
                                        style={{
                                            backgroundImage: 'radial-gradient(circle at 2px 2px, #1e3a8a 1px, transparent 0)',
                                            backgroundSize: '32px 32px'
                                        }}
                                    />
                                </div>

                                <div className="relative z-10 flex flex-col items-center text-center">
                                    {/* Ícono principal grande */}
                                    <div className="mb-8 relative">
                                        <div className="absolute inset-0 bg-parish-gold/20 rounded-3xl blur-xl"></div>
                                        <div className="relative w-24 h-24 rounded-3xl bg-gradient-to-br from-parish-blue to-blue-800 flex items-center justify-center shadow-2xl shadow-parish-blue/50 group-hover:scale-110 transition-transform duration-500">
                                            <Clock className="w-12 h-12 text-white" strokeWidth={2.5} />
                                        </div>
                                    </div>

                                    <h3 className="font-serif text-3xl md:text-4xl font-bold text-parish-blue mb-4">
                                        {schedule.title}
                                    </h3>

                                    <div className="w-16 h-1 bg-gradient-to-r from-parish-gold to-amber-600 rounded-full mb-10"></div>

                                    {/* Display de horario principal */}
                                    <div className="space-y-6 mb-8">
                                        {schedule.items.map((item, i) => (
                                            <div key={i} className="flex flex-col gap-4">
                                                <div className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-gradient-to-r from-parish-blue/10 to-parish-gold/10 border border-parish-gold/30">
                                                    <Calendar className="w-5 h-5 text-parish-blue" />
                                                    <span className="text-base text-parish-blue font-bold uppercase tracking-wider">
                                                        {item.label}
                                                    </span>
                                                </div>
                                                <div className="time-display">
                                                    <div className="inline-block px-12 py-6 rounded-2xl bg-gradient-to-br from-parish-gold via-amber-500 to-parish-gold shadow-2xl shadow-parish-gold/30">
                                                        <span className="text-6xl md:text-7xl font-bold text-white font-serif drop-shadow-lg">
                                                            {item.time}
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Brillo decorativo en hover */}
                                <div className="absolute inset-0 bg-gradient-to-br from-parish-gold/0 via-parish-gold/5 to-parish-gold/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                            </div>
                        </FadeIn>
                    ))}
                </div>
            </div>
        </section>
    );
});

Schedule.displayName = 'Schedule';
