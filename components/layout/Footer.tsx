import { memo, useCallback } from 'react';
import { ChevronUp } from 'lucide-react';
import { Logo } from '../ui/Logo';
import { useLanguage } from '../../contexts/LanguageContext';
import { useTranslation } from '../../i18n/translations';

export const Footer = memo(() => {
    const { language } = useLanguage();
    const t = useTranslation(language);

    const scrollToTop = useCallback(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, []);

    const socialLinks = ['Facebook', 'Twitter', 'Instagram', 'Youtube'];

    return (
        <footer className="bg-parish-blue text-white pt-16 pb-8">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
                    <div className="col-span-1 md:col-span-1">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="text-white">
                                <Logo size={40} />
                            </div>
                            <span className="font-serif text-xl font-bold">Santa Rita</span>
                        </div>
                        <p className="text-blue-200 text-sm leading-relaxed mb-6">
                            {t.footer.aboutText}
                        </p>
                        <div className="flex gap-4">
                            {socialLinks.map((social) => (
                                <a
                                    key={social}
                                    href="#"
                                    className="w-8 h-8 rounded-full bg-blue-800 flex items-center justify-center hover:bg-parish-gold transition-colors text-xs"
                                    aria-label={`Visitar ${social}`}
                                >
                                    {social[0]}
                                </a>
                            ))}
                        </div>
                    </div>

                    <div>
                        <h4 className="font-bold text-lg mb-6 text-parish-gold">{t.schedule.masses.title}</h4>
                        <ul className="space-y-3 text-sm text-blue-100">
                            <li className="flex justify-between">
                                <span>{t.schedule.masses.sundaysLabel}</span>{' '}
                                <span className="text-white font-medium">12:30</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-blue-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-blue-300">
                    <p>&copy; {new Date().getFullYear()} Parroquia Santa Rita. {t.footer.rights}</p>
                    <button
                        onClick={scrollToTop}
                        className="flex items-center gap-2 hover:text-white transition-colors"
                        aria-label="Volver arriba"
                    >
                        Volver arriba <ChevronUp size={14} />
                    </button>
                </div>
            </div>
        </footer>
    );
});

Footer.displayName = 'Footer';
