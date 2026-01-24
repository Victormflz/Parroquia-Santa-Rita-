import { memo, useState, useEffect, useCallback } from 'react';
import { Menu, X, Globe, Heart, Lock, Shield, CreditCard, Smartphone, Building2, Copy, Check } from 'lucide-react';
import { Logo } from '../ui/Logo';
import { DonationModal } from '../ui/DonationModal';
import { useLanguage } from '../../contexts/LanguageContext';
import { useTranslation } from '../../i18n/translations';

export const Header = memo(() => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isDonationModalOpen, setIsDonationModalOpen] = useState(false);
    const [copiedField, setCopiedField] = useState<string | null>(null);
    const { language, cycleLanguage } = useLanguage();
    const t = useTranslation(language);

    // Datos bancarios (los mismos que en Donate.tsx)
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

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const closeMobileMenu = useCallback(() => {
        setIsMobileMenuOpen(false);
    }, []);

    const openDonationModal = useCallback((e: React.MouseEvent) => {
        e.preventDefault();
        setIsDonationModalOpen(true);
        setIsMobileMenuOpen(false);
    }, []);

    const navLinks = [
        { name: t.nav.home, href: '#inicio' },
        { name: t.nav.history, href: '#historia' },
        { name: t.nav.schedule, href: '#horarios' },
        { name: t.nav.contact, href: '#contacto' },
    ];

    return (
        <>
            <header
                className={`fixed w-full z-50 transition-all duration-300 ${isScrolled
                    ? 'bg-white shadow-md py-3'
                    : 'bg-transparent py-5'
                    }`}
            >
                <div className="container mx-auto px-4 flex justify-between items-center">
                    <div className="flex items-center">
                        <div className={isScrolled ? 'text-parish-blue' : 'text-white'}>
                            <Logo size={isScrolled ? 36 : 42} />
                        </div>
                    </div>

                    <nav className="hidden md:flex items-center gap-6">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                className={`font-medium transition-colors ${isScrolled
                                    ? 'text-slate-700 hover:text-parish-gold'
                                    : 'text-white hover:text-parish-gold'
                                    }`}
                            >
                                {link.name}
                            </a>
                        ))}

                        <button
                            onClick={cycleLanguage}
                            aria-label={`${t.nav.changeLanguage}. ${t.nav.currentLanguage}: ${language}`}
                            className={`flex items-center gap-1 text-xs font-bold px-2 py-1 rounded border transition-colors ${isScrolled
                                ? 'border-slate-200 text-slate-600 hover:bg-slate-50'
                                : 'border-white/30 text-white hover:bg-white/10'
                                }`}
                        >
                            <Globe size={14} aria-hidden="true" />
                            {language}
                        </button>

                        <button
                            onClick={openDonationModal}
                            className={`px-5 py-2 rounded-full text-sm font-semibold transition-transform hover:scale-105 ${isScrolled
                                ? 'bg-parish-blue text-white hover:bg-blue-900'
                                : 'bg-white text-parish-blue hover:bg-slate-100'
                                }`}
                        >
                            {t.nav.donate}
                        </button>
                    </nav>

                    {/* Mobile Toggle */}
                    <button
                        className={`md:hidden p-2 rounded-lg transition-colors z-[70] relative ${isMobileMenuOpen || isScrolled
                            ? 'text-parish-blue hover:bg-slate-100'
                            : 'text-white hover:bg-white/10'
                            }`}
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        aria-label={isMobileMenuOpen ? t.nav.closeMenu : t.nav.menu}
                        aria-expanded={isMobileMenuOpen}
                    >
                        {isMobileMenuOpen ? (
                            <X size={32} aria-hidden="true" />
                        ) : (
                            <Menu size={32} aria-hidden="true" />
                        )}
                    </button>
                </div>

                {/* Mobile Menu Overlay */}
                <div
                    className={`fixed inset-0 bg-white z-[60] transition-all duration-300 ${isMobileMenuOpen
                        ? 'translate-x-0 opacity-100'
                        : '-translate-x-full opacity-0'
                        }`}
                    role="dialog"
                    aria-modal="true"
                    aria-label="Menú de navegación"
                    aria-hidden={!isMobileMenuOpen}
                >
                    <div className="flex flex-col h-full">
                        <div className="flex justify-start items-center p-5 border-b border-slate-100">
                            <span className="font-serif text-lg font-bold text-parish-blue">{t.nav.menu}</span>
                        </div>
                        <div className="flex-1 flex flex-col justify-center items-center gap-6 p-8">
                            {navLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    onClick={closeMobileMenu}
                                    className="text-2xl font-serif text-slate-800 hover:text-parish-gold transition-colors"
                                >
                                    {link.name}
                                </a>
                            ))}
                            <button
                                onClick={cycleLanguage}
                                className="mt-4 flex items-center gap-2 text-slate-500 font-medium"
                                aria-label={`${t.nav.changeLanguage}. ${t.nav.currentLanguage}: ${language}`}
                            >
                                <Globe size={18} /> {t.nav.changeLanguage} ({language})
                            </button>
                        </div>
                        <div className="p-8 border-t border-slate-100">
                            <button
                                onClick={openDonationModal}
                                className="block w-full text-center bg-parish-gold text-white py-4 rounded-lg font-bold text-lg hover:bg-amber-700 transition-colors"
                            >
                                {t.nav.makeDonation}
                            </button>
                        </div>
                    </div>
                </div>
            </header>

            {/* Modal de Donaciones */}
            <DonationModal isOpen={isDonationModalOpen} onClose={() => setIsDonationModalOpen(false)}>
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

                        {/* PayPal */}
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

Header.displayName = 'Header';
