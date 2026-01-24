import { memo } from 'react';
import type { ReactNode } from 'react';
import { Calendar } from 'lucide-react';
import { FadeIn } from '../ui/FadeIn';
import { useLanguage } from '../../contexts/LanguageContext';
import { useTranslation } from '../../i18n/translations';

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

    const schedules: ScheduleCard[] = [
        {
            icon: <Calendar className="w-8 h-8 text-parish-blue" />,
            title: t.schedule.masses.title,
            items: [
                { label: t.schedule.masses.sundaysLabel, time: "12:30" }
            ],
            className: "bg-blue-50/50 border-blue-100 ring-1 ring-blue-100",
            iconBg: "bg-white text-blue-600"
        }
    ];

    return (
        <section id="horarios" className="py-24 bg-white relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(#d4af37_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none" />

            <div className="container mx-auto px-4 relative z-10">
                <FadeIn>
                    <div className="text-center mb-16">
                        <span className="text-parish-gold font-bold tracking-widest uppercase text-sm mb-3 block">Información Parroquial</span>
                        <h2 className="font-serif text-4xl md:text-5xl text-parish-blue font-bold mb-6">
                            {t.schedule.title}
                        </h2>
                        <div className="w-24 h-1.5 bg-parish-gold mx-auto rounded-full mb-6"></div>
                        <p className="text-slate-600 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
                            {t.schedule.subtitle}
                        </p>
                    </div>
                </FadeIn>

                <div className="grid grid-cols-1 max-w-xl mx-auto">
                    {schedules.map((schedule, idx) => (
                        <FadeIn key={schedule.title} delay={idx * 150} className="h-full">
                            <div className={`h-full rounded-3xl p-10 hover:shadow-2xl transition-all duration-300 relative group overflow-hidden ${schedule.className}`}>
                                <div className="absolute top-0 right-0 -mt-8 -mr-8 w-32 h-32 bg-white/40 rounded-full blur-2xl transition-all group-hover:scale-150" />

                                <div className="relative z-10 flex flex-col h-full items-center text-center">
                                    <div className={`mb-6 w-20 h-20 rounded-2xl flex items-center justify-center shadow-lg ${schedule.iconBg} group-hover:scale-110 transition-transform duration-300`}>
                                        {schedule.icon}
                                    </div>

                                    <h3 className="font-serif text-3xl font-bold text-slate-800 mb-8">
                                        {schedule.title}
                                    </h3>

                                    <div className="space-y-4 flex-grow">
                                        {schedule.items.map((item, i) => (
                                            <div key={i} className="flex flex-col gap-2">
                                                <span className="text-base text-slate-500 font-bold uppercase tracking-wider">
                                                    {item.label}
                                                </span>
                                                <span className="text-5xl md:text-6xl font-bold text-parish-blue font-serif">
                                                    {item.time}
                                                </span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </FadeIn>
                    ))}
                </div>
            </div>
        </section>
    );
});

Schedule.displayName = 'Schedule';
