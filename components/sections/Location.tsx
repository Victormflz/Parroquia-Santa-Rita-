import { memo } from 'react';
import { MapPin } from 'lucide-react';
import { FadeIn } from '../ui/FadeIn';
import { useLanguage } from '../../contexts/LanguageContext';
import { useTranslation } from '../../i18n/translations';

export const Location = memo(() => {
    const { language } = useLanguage();
    const t = useTranslation(language);

    return (
        <section id="contacto" className="bg-slate-900 text-white relative">
            <div className="grid grid-cols-1 lg:grid-cols-2 h-full">
                <div className="p-12 md:p-20 flex flex-col justify-center">
                    <FadeIn>
                        <h2 className="font-serif text-3xl md:text-4xl font-bold mb-12">{t.location.title}</h2>

                        <div className="mb-12">
                            <div className="flex items-start gap-4">
                                <div className="p-4 bg-white/10 rounded-full shrink-0">
                                    <MapPin className="text-parish-gold" size={32} />
                                </div>
                                <div>
                                    <h4 className="font-bold text-xl mb-2">{t.location.address}</h4>
                                    <p className="text-slate-300 text-lg">
                                        Rúa a Balorca, 2<br />
                                        32300 O Barco, Ourense
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div>
                            <a
                                href="https://www.google.com/maps/dir//Parroquia+de+Santa+Rita,+R%C3%BAa+a+Balorca,+2,+32300+O+Barco,+Province+of+Ourense/@42.4143746,-6.98514,16z/data=!4m9!4m8!1m0!1m5!1m1!1s0xd30847577dc2b63:0x2993620d6298024b!2m2!1d-6.9830815!2d42.4168248!3e3?entry=ttu&g_ep=EgoyMDI2MDEyMS4wIKXMDSoASAFQAw%3D%3D"
                                target="_blank"
                                rel="noreferrer noopener"
                                className="inline-flex items-center gap-2 bg-parish-gold text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-amber-700 transition-colors shadow-lg"
                            >
                                <MapPin size={20} /> Cómo llegar
                            </a>
                        </div>
                    </FadeIn>
                </div>

                <div className="h-[400px] lg:h-auto min-h-[400px] w-full bg-slate-800 relative">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d473.02350469120813!2d-6.983159962636966!3d42.41656683676614!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd30847577dc2b63%3A0x2993620d6298024b!2sParroquia%20de%20Santa%20Rita!5e0!3m2!1ses!2ses!4v1769268026807!5m2!1ses!2ses"
                        width="100%"
                        height="100%"
                        style={{ border: 0, filter: 'grayscale(100%) invert(90%) hue-rotate(180deg)' }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        className="absolute inset-0"
                        title="Ubicación de la Parroquia Santa Rita en O Barco de Valdeorras"
                    ></iframe>
                </div>
            </div>
        </section>
    );
});

Location.displayName = 'Location';
