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

    // Bloquear scroll cuando el menú móvil está abierto
    useEffect(() => {
        if (isMobileMenuOpen) {
            // Guardar posición actual del scroll
            const scrollY = window.scrollY;
            document.body.style.position = 'fixed';
            document.body.style.top = `-${scrollY}px`;
            document.body.style.width = '100%';
            document.body.style.overflow = 'hidden';
        } else {
            // Restaurar scroll
            const scrollY = document.body.style.top;
            document.body.style.position = '';
            document.body.style.top = '';
            document.body.style.width = '';
            document.body.style.overflow = '';
            if (scrollY) {
                window.scrollTo(0, parseInt(scrollY || '0') * -1);
            }
        }

        return () => {
            // Cleanup al desmontar
            document.body.style.position = '';
            document.body.style.top = '';
            document.body.style.width = '';
            document.body.style.overflow = '';
        };
    }, [isMobileMenuOpen]);

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
                className={`fixed w-full z-[100] transition-all duration-300 ease-in-out ${isScrolled
                    ? 'bg-parish-arena/100 backdrop-blur-sm shadow-lg py-3'
                    : 'bg-transparent py-5'
                    }`}
                style={{
                    borderBottom: isScrolled ? '1px solid rgba(203, 213, 225, 0.5)' : '1px solid transparent'
                }}
            >
                {/* Efecto de brillo dorado que ilumina hacia abajo - Oculto en móvil */}
                {isScrolled && (
                    <div 
                        className="hidden md:block absolute bottom-0 left-0 right-0 h-12 pointer-events-none"
                        style={{
                            background: 'radial-gradient(ellipse 80% 100% at 50% 0%, rgba(251, 191, 36, 0.4) 0%, rgba(251, 191, 36, 0.2) 40%, transparent 70%)',
                            transform: 'translateY(100%)',
                            filter: 'blur(8px)',
                            animation: 'gentle-glow 3s ease-in-out infinite'
                        }}
                    />
                )}
                
                <div className="container mx-auto px-4 flex justify-between items-center relative z-10">
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
                            aria-label="Abrir formulario de donación"
                            className={`px-5 py-2 rounded-full text-sm font-semibold transition-transform hover:scale-105 ${isScrolled
                                ? 'bg-parish-blue text-white hover:bg-blue-900'
                                : 'bg-parish-arena text-parish-blue hover:bg-parish-arena-light'
                                }`}
                        >
                            {t.nav.donate}
                        </button>
                    </nav>

                    {/* Mobile Toggle - Diseño Premium Mejorado */}
                    <button
                        className={`md:hidden relative z-[101] group ${
                            isScrolled || isMobileMenuOpen
                                ? 'bg-white/95 backdrop-blur-md shadow-lg'
                                : 'bg-white/10 backdrop-blur-sm'
                        } rounded-2xl p-3 transition-all duration-500 ease-out hover:scale-110 active:scale-95 border border-white/20`}
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        aria-label={isMobileMenuOpen ? t.nav.closeMenu : t.nav.menu}
                        aria-expanded={isMobileMenuOpen}
                    >
                        {/* Contenedor de las líneas del hamburguesa/X con animación morphing mejorada */}
                        <div className="relative w-7 h-6 flex flex-col justify-center items-center">
                            {/* Línea superior */}
                            <span
                                className={`absolute h-0.5 w-full rounded-full transition-all duration-500 ease-[cubic-bezier(0.68,-0.55,0.265,1.55)] ${
                                    isScrolled || isMobileMenuOpen ? 'bg-parish-blue' : 'bg-white'
                                } ${
                                    isMobileMenuOpen
                                        ? 'rotate-45 translate-y-0 bg-parish-gold scale-110'
                                        : '-translate-y-2 group-hover:w-5/6 group-hover:-translate-y-2.5'
                                }`}
                            />
                            {/* Línea media */}
                            <span
                                className={`absolute h-0.5 rounded-full transition-all duration-300 ease-out ${
                                    isScrolled || isMobileMenuOpen ? 'bg-parish-blue' : 'bg-white'
                                } ${
                                    isMobileMenuOpen ? 'w-0 opacity-0 rotate-180' : 'w-full opacity-100 group-hover:w-4/6'
                                }`}
                            />
                            {/* Línea inferior */}
                            <span
                                className={`absolute h-0.5 w-full rounded-full transition-all duration-500 ease-[cubic-bezier(0.68,-0.55,0.265,1.55)] ${
                                    isScrolled || isMobileMenuOpen ? 'bg-parish-blue' : 'bg-white'
                                } ${
                                    isMobileMenuOpen
                                        ? '-rotate-45 translate-y-0 bg-parish-gold scale-110'
                                        : 'translate-y-2 group-hover:w-5/6 group-hover:translate-y-2.5'
                                }`}
                            />
                        </div>
                        
                        {/* Anillo decorativo al hacer hover y estado activo */}
                        <div className={`absolute inset-0 rounded-2xl transition-all duration-500 ${
                            isMobileMenuOpen
                                ? 'ring-2 ring-parish-gold scale-110'
                                : isScrolled 
                                    ? 'ring-2 ring-parish-gold/0 group-hover:ring-parish-gold/50 group-hover:scale-110'
                                    : 'ring-2 ring-white/0 group-hover:ring-white/60 group-hover:scale-110'
                        }`} />
                        
                        {/* Efecto de pulso cuando está abierto */}
                        {isMobileMenuOpen && (
                            <span className="absolute inset-0 rounded-2xl ring-2 ring-parish-gold animate-ping opacity-75" />
                        )}
                    </button>
                </div>

                {/* Mobile Menu Overlay - Diseño Premium */}
                <div
                    className={`fixed inset-0 z-[90] md:hidden transition-opacity duration-150 ease-out ${
                        isMobileMenuOpen
                            ? 'opacity-100 pointer-events-auto'
                            : 'opacity-0 pointer-events-none'
                    }`}
                    role="dialog"
                    aria-modal="true"
                    aria-label="Menú de navegación"
                >
                    {/* Backdrop con blur instantáneo */}
                    <div 
                        className={`absolute inset-0 bg-black/40 transition-all duration-75 ease-out ${
                            isMobileMenuOpen ? 'opacity-100 backdrop-blur-xl' : 'opacity-0 backdrop-blur-none'
                        }`}
                        onClick={closeMobileMenu}
                        aria-hidden="true"
                    />
                    
                    {/* Panel deslizante desde la derecha con animación mejorada */}
                    <div
                        className={`absolute top-0 right-0 bottom-0 w-[85%] max-w-sm bg-gradient-to-br from-parish-arena via-white to-parish-arena-light shadow-2xl transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                            isMobileMenuOpen 
                                ? 'translate-x-0 opacity-100' 
                                : 'translate-x-full opacity-0'
                        }`}
                    >
                        {/* Contenido del menú con animaciones stagger */}
                        <div className="flex flex-col h-full relative overflow-hidden">
                            {/* Patrón decorativo de fondo */}
                            <div className="absolute inset-0 opacity-[0.03]">
                                <div className="absolute inset-0" 
                                    style={{
                                        backgroundImage: 'radial-gradient(circle at 2px 2px, #1e3a8a 1px, transparent 0)',
                                        backgroundSize: '32px 32px'
                                    }}
                                />
                            </div>
                            
                            {/* Header del menú con logo */}
                            <div className={`relative p-6 border-b-2 border-parish-gold/20 bg-white/50 backdrop-blur-sm transition-all duration-700 delay-100 ${
                                isMobileMenuOpen ? 'translate-y-0 opacity-100' : '-translate-y-8 opacity-0'
                            }`}>
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center gap-3">
                                        <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-parish-blue via-parish-blue-light to-parish-gold flex items-center justify-center shadow-lg">
                                            <Menu className="text-white" size={24} />
                                        </div>
                                        <div>
                                            <h2 className="font-serif text-xl font-bold text-parish-blue leading-tight">Menú</h2>
                                            <p className="text-xs text-slate-500">Navegación</p>
                                        </div>
                                    </div>
                                    <button
                                        onClick={closeMobileMenu}
                                        className="p-2 rounded-xl hover:bg-slate-100 transition-colors"
                                        aria-label="Cerrar menú"
                                    >
                                        <X className="text-slate-600" size={24} />
                                    </button>
                                </div>
                            </div>
                            
                            {/* Enlaces de navegación con animación stagger */}
                            <nav className="flex-1 overflow-y-auto py-8 px-6">
                                <div className="space-y-2">
                                    {navLinks.map((link, index) => (
                                        <a
                                            key={link.name}
                                            href={link.href}
                                            onClick={closeMobileMenu}
                                            className={`group relative block py-4 px-6 rounded-2xl transition-all duration-300 hover:bg-white/80 hover:shadow-md active:scale-[0.98] ${
                                                isMobileMenuOpen ? 'translate-x-0 opacity-100' : 'translate-x-8 opacity-0'
                                            }`}
                                            style={{
                                                transitionDelay: isMobileMenuOpen ? `${150 + index * 80}ms` : '0ms'
                                            }}
                                        >
                                            {/* Barra lateral de acento */}
                                            <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-0 bg-gradient-to-b from-parish-gold to-parish-gold-light rounded-full transition-all duration-300 group-hover:h-8" />
                                            
                                            <span className="text-2xl font-serif text-slate-800 group-hover:text-parish-gold transition-colors duration-300 group-hover:translate-x-2 inline-block">
                                                {link.name}
                                            </span>
                                        </a>
                                    ))}
                                </div>
                                
                                {/* Botón de idioma mejorado */}
                                <div className={`mt-8 transition-all duration-500 ${
                                    isMobileMenuOpen ? 'translate-x-0 opacity-100' : 'translate-x-8 opacity-0'
                                }`} style={{ transitionDelay: isMobileMenuOpen ? `${150 + navLinks.length * 80}ms` : '0ms' }}>
                                    <button
                                        onClick={cycleLanguage}
                                        className="w-full flex items-center justify-between p-4 rounded-2xl border-2 border-slate-200 hover:border-parish-gold hover:bg-white/60 transition-all duration-300 group"
                                        aria-label={`${t.nav.changeLanguage}. ${t.nav.currentLanguage}: ${language}`}
                                    >
                                        <div className="flex items-center gap-3">
                                            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                                                <Globe size={20} className="text-white" />
                                            </div>
                                            <span className="font-medium text-slate-700 group-hover:text-parish-blue transition-colors">
                                                {t.nav.changeLanguage}
                                            </span>
                                        </div>
                                        <span className="px-3 py-1.5 bg-parish-gold/20 text-parish-blue rounded-lg text-sm font-bold">
                                            {language}
                                        </span>
                                    </button>
                                </div>
                            </nav>
                            
                            {/* Footer con botón de donación destacado */}
                            <div className={`relative p-6 border-t-2 border-parish-gold/20 bg-white/50 backdrop-blur-sm transition-all duration-700 delay-200 ${
                                isMobileMenuOpen ? 'translate-y-0 opacity-100 scale-100' : 'translate-y-8 opacity-0 scale-95'
                            }`}>
                                <button
                                    onClick={openDonationModal}
                                    aria-label="Hacer una donación a la parroquia"
                                    className="w-full relative overflow-hidden group"
                                >
                                    {/* Fondo con gradiente animado */}
                                    <div className="absolute inset-0 bg-gradient-to-r from-parish-gold via-amber-500 to-parish-gold bg-[length:200%_100%] group-hover:animate-[shimmer_2s_linear_infinite] rounded-2xl" />
                                    
                                    {/* Contenido del botón */}
                                    <div className="relative py-4 px-6 flex items-center justify-center gap-3 text-white">
                                        <Heart size={22} className="animate-pulse" />
                                        <span className="font-bold text-lg">{t.nav.makeDonation}</span>
                                    </div>
                                    
                                    {/* Brillo hover */}
                                    <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />
                                </button>
                                
                                <p className="text-center text-xs text-slate-500 mt-3">
                                    Tu apoyo hace la diferencia
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </header>

            {/* Modal de Donaciones */}
            <DonationModal isOpen={isDonationModalOpen} onClose={() => setIsDonationModalOpen(false)}>
                <div className="p-5 sm:p-8 md:p-10">
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
                        <div className="bg-parish-arena rounded-xl p-6 border-2 border-slate-200 hover:border-parish-gold transition-colors">
                            <div className="flex items-start gap-4">
                                <div className="p-3 bg-parish-blue rounded-lg">
                                    <Building2 className="text-white" size={24} />
                                </div>
                                <div className="flex-1">
                                    <h3 className="font-bold text-lg text-slate-800 mb-2">Transferencia Bancaria</h3>
                                    <p className="text-sm text-slate-600 mb-4">
                                        Realiza una transferencia directa a nuestra cuenta parroquial
                                    </p>
                                    <div className="space-y-3 bg-parish-arena rounded-lg p-4 border border-slate-200">
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
                                    <div className="bg-parish-arena rounded-lg p-4 border border-blue-200">
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
                        <div className="bg-parish-arena rounded-xl p-6 border-2 border-slate-200 hover:border-parish-gold transition-colors">
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
