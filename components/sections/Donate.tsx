import { memo, useState } from 'react';
import { Heart, ArrowRight, Lock, Shield, CreditCard, Smartphone, Building2, Copy, Check } from 'lucide-react';
import { FadeIn } from '../ui/FadeIn';
import { DonationModal } from '../ui/DonationModal';
import { useLanguage } from '../../contexts/LanguageContext';
import { useTranslation } from '../../i18n/translations';

export const Donate = memo(() => {
    const { language } = useLanguage();
    const t = useTranslation(language);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [copiedField, setCopiedField] = useState<string | null>(null);

    // Datos bancarios reales de la parroquia (deberás actualizarlos)
    const bankDetails = {
        bank: 'Banco Ejemplo',
        iban: 'ES00 0000 0000 00 0000000000',
        swift: 'ABCDESXX',
        beneficiary: 'Parroquia Santa Rita',
        concept: 'Donativo Parroquia'
    };

    const copyToClipboard = (text: string, field: string) => {
        navigator.clipboard.writeText(text);
        setCopiedField(field);
        setTimeout(() => setCopiedField(null), 2000);
    };

    const helpWays = [
        'Voluntariado en actividades parroquiales',
        'Donación de alimentos para Cáritas',
        'Apoyo a la catequesis infantil'
    ];

    return (
        <>
            <section id="donar" className="py-20 bg-parish-blue text-white">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
                        <FadeIn>
                            <div>
                                <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">{t.donate.title}</h2>
                                <p className="text-blue-100 leading-relaxed mb-6">
                                    {t.donate.description}
                                </p>
                                <button
                                    onClick={() => setIsModalOpen(true)}
                                    className="inline-flex items-center gap-2 bg-parish-gold text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-amber-700 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
                                >
                                    <Heart size={20} /> Hacer un Donativo
                                </button>
                            </div>
                        </FadeIn>
                        <FadeIn delay={150}>
                            <div className="bg-white/10 border border-white/20 rounded-2xl p-8">
                                <h3 className="font-serif text-2xl font-bold mb-4">Otras formas de ayudar</h3>
                                <ul className="space-y-4 text-blue-100">
                                    {helpWays.map((way) => (
                                        <li key={way} className="flex items-center gap-3">
                                            <ArrowRight size={16} /> {way}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </FadeIn>
                    </div>
                </div>
            </section>

            <DonationModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
                <div className="p-8 md:p-10">
                    {/* Header con mensaje de confianza */}
                    <div className="text-center mb-8">
                        <div className="inline-flex items-center justify-center w-16 h-16 bg-parish-blue/10 rounded-full mb-4">
                            <Heart className="text-parish-gold" size={32} />
                        </div>
                        <h2 className="font-serif text-3xl font-bold text-parish-blue mb-3">
                            Tu Colaboración es Importante
                        </h2>
                        <p className="text-slate-600 text-lg leading-relaxed max-w-xl mx-auto">
                            Cada donativo ayuda a mantener el templo, apoyar las obras de caridad y sostener las actividades pastorales de nuestra comunidad.
                        </p>
                    </div>

                    {/* Insignias de seguridad */}
                    <div className="flex items-center justify-center gap-6 mb-8 pb-8 border-b border-slate-200">
                        <div className="flex items-center gap-2 text-sm text-slate-600">
                            <Shield className="text-green-600" size={20} />
                            <span className="font-medium">100% Seguro</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-slate-600">
                            <Lock className="text-green-600" size={20} />
                            <span className="font-medium">Datos Protegidos</span>
                        </div>
                    </div>

                    {/* Métodos de pago */}
                    <div className="space-y-6">
                        {/* Transferencia Bancaria */}
                        <div className="bg-slate-50 rounded-xl p-6 border-2 border-slate-200 hover:border-parish-gold transition-colors">
                            <div className="flex items-start gap-4">
                                <div className="p-3 bg-parish-blue rounded-lg">
                                    <Building2 className="text-white" size={24} />
                                </div>
                                <div className="flex-1">
                                    <h3 className="font-bold text-lg text-slate-800 mb-2">Transferencia Bancaria</h3>
                                    <p className="text-sm text-slate-600 mb-4">
                                        Realiza una transferencia directa a nuestra cuenta parroquial
                                    </p>
                                    <div className="space-y-3 bg-white rounded-lg p-4 border border-slate-200">
                                        <div className="flex justify-between items-center">
                                            <div>
                                                <p className="text-xs font-semibold text-slate-500 uppercase mb-1">Banco</p>
                                                <p className="font-mono text-sm font-medium text-slate-800">{bankDetails.bank}</p>
                                            </div>
                                        </div>
                                        <div className="flex justify-between items-center">
                                            <div className="flex-1">
                                                <p className="text-xs font-semibold text-slate-500 uppercase mb-1">IBAN</p>
                                                <p className="font-mono text-sm font-medium text-slate-800">{bankDetails.iban}</p>
                                            </div>
                                            <button
                                                onClick={() => copyToClipboard(bankDetails.iban.replace(/\s/g, ''), 'iban')}
                                                className="ml-2 p-2 hover:bg-slate-100 rounded-lg transition-colors"
                                                title="Copiar IBAN"
                                            >
                                                {copiedField === 'iban' ? (
                                                    <Check className="text-green-600" size={18} />
                                                ) : (
                                                    <Copy className="text-slate-400" size={18} />
                                                )}
                                            </button>
                                        </div>
                                        <div className="flex justify-between items-center">
                                            <div>
                                                <p className="text-xs font-semibold text-slate-500 uppercase mb-1">Beneficiario</p>
                                                <p className="font-medium text-sm text-slate-800">{bankDetails.beneficiary}</p>
                                            </div>
                                        </div>
                                        <div className="flex justify-between items-center">
                                            <div>
                                                <p className="text-xs font-semibold text-slate-500 uppercase mb-1">Concepto</p>
                                                <p className="font-medium text-sm text-parish-blue">{bankDetails.concept}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Bizum */}
                        <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl p-6 border-2 border-blue-200 hover:border-parish-gold transition-colors">
                            <div className="flex items-start gap-4">
                                <div className="p-3 bg-blue-600 rounded-lg">
                                    <Smartphone className="text-white" size={24} />
                                </div>
                                <div className="flex-1">
                                    <h3 className="font-bold text-lg text-slate-800 mb-2">Bizum</h3>
                                    <p className="text-sm text-slate-600 mb-4">
                                        Donación rápida y segura desde tu móvil
                                    </p>
                                    <div className="bg-white rounded-lg p-4 border border-blue-200">
                                        <p className="text-xs font-semibold text-slate-500 uppercase mb-2">Enviar Bizum al número</p>
                                        <div className="flex items-center justify-between">
                                            <p className="font-mono text-2xl font-bold text-blue-600">600 00 00 00</p>
                                            <button
                                                onClick={() => copyToClipboard('600000000', 'bizum')}
                                                className="p-2 hover:bg-slate-100 rounded-lg transition-colors"
                                                title="Copiar número"
                                            >
                                                {copiedField === 'bizum' ? (
                                                    <Check className="text-green-600" size={18} />
                                                ) : (
                                                    <Copy className="text-slate-400" size={18} />
                                                )}
                                            </button>
                                        </div>
                                        <p className="text-xs text-slate-500 mt-3">
                                            📱 Abre tu app bancaria → Bizum → Enviar dinero
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* PayPal (Opcional) */}
                        <div className="bg-slate-50 rounded-xl p-6 border-2 border-slate-200 hover:border-parish-gold transition-colors">
                            <div className="flex items-start gap-4">
                                <div className="p-3 bg-[#0070BA] rounded-lg">
                                    <CreditCard className="text-white" size={24} />
                                </div>
                                <div className="flex-1">
                                    <h3 className="font-bold text-lg text-slate-800 mb-2">Tarjeta / PayPal</h3>
                                    <p className="text-sm text-slate-600 mb-4">
                                        Donación segura con tarjeta de crédito o PayPal
                                    </p>
                                    <a
                                        href="https://www.paypal.com/donate"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-block w-full bg-[#0070BA] text-white text-center py-3 px-4 rounded-lg font-bold hover:bg-[#005EA6] transition-colors"
                                    >
                                        Donar con PayPal
                                    </a>
                                    <p className="text-xs text-slate-500 mt-2 text-center">
                                        Acepta tarjetas de crédito y débito
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Mensaje de agradecimiento y transparencia */}
                    <div className="mt-8 pt-6 border-t border-slate-200 text-center">
                        <p className="text-sm text-slate-600 leading-relaxed">
                            <strong className="text-parish-blue">Gracias por tu generosidad.</strong> Todos los donativos son destinados íntegramente al mantenimiento del templo, actividades pastorales y obras de caridad.
                            {' '}<span className="text-parish-gold font-semibold">Tu contribución marca la diferencia.</span>
                        </p>
                    </div>
                </div>
            </DonationModal>
        </>
    );
});

Donate.displayName = 'Donate';
