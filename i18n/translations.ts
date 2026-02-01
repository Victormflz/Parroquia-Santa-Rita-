import { Language } from '../types';

export interface Translations {
    // Header
    nav: {
        home: string;
        history: string;
        schedule: string;
        contact: string;
        donate: string;
        menu: string;
        changeLanguage: string;
        currentLanguage: string;
        closeMenu: string;
        makeDonation: string;
    };
    // Hero
    hero: {
        welcome: string;
        parishName: string;
        subtitle: string;
        donateButton: string;
        scheduleButton: string;
    };
    // History
    history: {
        title: string;
        subtitle: string;
        origins: {
            title: string;
            description: string;
        };
        present: {
            title: string;
            description: string;
        };
        future: {
            title: string;
            description: string;
        };
    };
    // Schedule
    schedule: {
        title: string;
        subtitle: string;
        masses: {
            title: string;
            sundaysLabel: string;
            sundaysTime: string;
        };
        confessions: {
            title: string;
            dailyLabel: string;
            dailyTime: string;
            thursdayLabel: string;
            thursdayTime: string;
        };
        office: {
            title: string;
            scheduleLabel: string;
            scheduleTime: string;
            urgentLabel: string;
            urgentTime: string;
        };
        calendarLink: string;
    };
    // Services
    services: {
        title: string;
        baptisms: {
            title: string;
            description: string;
        };
        catechesis: {
            title: string;
            description: string;
        };
        marriages: {
            title: string;
            description: string;
        };
        choir: {
            title: string;
            description: string;
        };
        caritas: {
            title: string;
            description: string;
        };
        youthGroup: {
            title: string;
            description: string;
        };
    };
    // Location
    location: {
        title: string;
        subtitle: string;
        address: string;
        phone: string;
        email: string;
        hours: string;
        hoursDetail: string;
    };
    // Donate
    donate: {
        title: string;
        subtitle: string;
        description: string;
        bankTransfer: string;
        accountNumber: string;
        concept: string;
        thanksMessage: string;
    };
    // Footer
    footer: {
        about: string;
        aboutText: string;
        quickLinks: string;
        contact: string;
        rights: string;
    };
}

export const translations: Record<Language, Translations> = {
    [Language.ES]: {
        nav: {
            home: 'Inicio',
            history: 'Historia',
            schedule: 'Horarios',
            contact: 'Contacto',
            donate: 'Donar',
            menu: 'Menú',
            changeLanguage: 'Cambiar idioma',
            currentLanguage: 'Idioma actual',
            closeMenu: 'Cerrar menú',
            makeDonation: 'Hacer un Donativo',
        },
        hero: {
            welcome: 'Bienvenidos a casa',
            parishName: 'Santa Rita',
            subtitle: 'Misas, Sacramentos y vida comunitaria en O Barco de Valdeorras.',
            donateButton: 'Haz una Donación',
            scheduleButton: 'Ver Horarios',
        },
        history: {
            title: 'Nuestra Historia',
            subtitle: 'Desde 1980 compartiendo fe y vida',
            origins: {
                title: 'Orígenes',
                description: 'Una comunidad de fe formada por familias y vecinos que, a lo largo de los años, han encontrado en este templo un lugar de encuentro, oración y servicio.'
            },
            present: {
                title: 'Presente',
                description: 'Día a día celebramos la vida comunitaria a través de la liturgia, la acogida y el acompañamiento espiritual a quienes nos visitan.'
            },
            future: {
                title: 'Futuro',
                description: 'Miramos adelante con el compromiso de seguir siendo un espacio abierto donde todos encuentren acogida, paz y sentido de comunidad.'
            }
        },
        schedule: {
            title: 'Horarios y Apertura',
            subtitle: 'Nuestras puertas están siempre abiertas para recibirte. Consulta los horarios de nuestras celebraciones y atención pastoral.',
            masses: {
                title: 'Santas Misas',
                sundaysLabel: 'Domingos y Festivos',
                sundaysTime: '12:30 y 19:00'
            },
            confessions: {
                title: 'Confesiones',
                dailyLabel: 'Diario',
                dailyTime: '30 min antes de cada misa',
                thursdayLabel: 'Jueves Eucarístico',
                thursdayTime: '18:30 - 19:30'
            },
            office: {
                title: 'Oficina de la Iglesia',
                scheduleLabel: 'Martes y Jueves',
                scheduleTime: '17:00 - 19:00',
                urgentLabel: 'Atención Urgente',
                urgentTime: 'Cita previa por teléfono'
            },
            calendarLink: 'Ver calendario litúrgico completo'
        },
        services: {
            title: 'Vida de la Iglesia',
            baptisms: {
                title: 'Bautismos',
                description: 'El inicio de la vida cristiana.'
            },
            catechesis: {
                title: 'Catequesis',
                description: 'Formación para niños y adultos.'
            },
            marriages: {
                title: 'Matrimonios',
                description: 'Unión sagrada ante Dios.'
            },
            choir: {
                title: 'Coro',
                description: 'Alabanza a través de la música.'
            },
            caritas: {
                title: 'Cáritas',
                description: 'Ayuda a los más necesitados.'
            },
            youthGroup: {
                title: 'Grupo Joven',
                description: 'Comunidad y actividades juveniles.'
            }
        },
        location: {
            title: 'Encuéntranos',
            subtitle: 'Estamos aquí para ti',
            address: 'Dirección',
            phone: 'Teléfono',
            email: 'Email',
            hours: 'Horario de Atención',
            hoursDetail: 'Lunes a Viernes: 10:00 - 13:00 y 17:00 - 19:00',
        },
        donate: {
            title: 'Apoya Nuestra Misión',
            subtitle: 'Tu generosidad hace posible nuestro trabajo',
            description: 'Tus donaciones nos ayudan a mantener nuestra iglesia, realizar obras de caridad y continuar sirviendo a nuestra comunidad. Cada contribución, grande o pequeña, marca una diferencia.',
            bankTransfer: 'Transferencia Bancaria',
            accountNumber: 'Número de Cuenta',
            concept: 'Concepto: Donativo Iglesia Santa Rita',
            thanksMessage: '¡Gracias por tu generosidad!',
        },
        footer: {
            about: 'Sobre Nosotros',
            aboutText: 'La Iglesia Santa Rita es una comunidad de fe católica dedicada a servir a las familias de O Barco de Valdeorras.',
            quickLinks: 'Enlaces Rápidos',
            contact: 'Contacto',
            rights: 'Todos los derechos reservados.',
        },
    },
    [Language.GL]: {
        nav: {
            home: 'Inicio',
            history: 'Historia',
            schedule: 'Horarios',
            contact: 'Contacto',
            donate: 'Doar',
            menu: 'Menú',
            changeLanguage: 'Cambiar idioma',
            currentLanguage: 'Idioma actual',
            closeMenu: 'Pechar menú',
            makeDonation: 'Facer un Donativo',
        },
        hero: {
            welcome: 'Benvidos á casa',
            parishName: 'Santa Rita',
            subtitle: 'Misas, Sacramentos e vida comunitaria no Barco de Valdeorras.',
            donateButton: 'Fai unha Doazón',
            scheduleButton: 'Ver Horarios',
        },
        history: {
            title: 'A Nosa Historia',
            subtitle: 'Desde 1980 compartindo fe e vida',
            origins: {
                title: 'Orixes',
                description: 'Unha comunidade de fe formada por familias e veciños que, ao longo dos anos, atoparon neste templo un lugar de encontro, oración e servizo.'
            },
            present: {
                title: 'Presente',
                description: 'Día a día celebramos a vida comunitaria a través da liturxia, a acollida e o acompañamento espiritual a quen nos visita.'
            },
            future: {
                title: 'Futuro',
                description: 'Miramos adiante co compromiso de seguir sendo un espazo aberto onde todos atopen acollida, paz e sentido de comunidade.'
            }
        },
        schedule: {
            title: 'Horarios e Apertura',
            subtitle: 'As nosas portas están sempre abertas para recibirte',
            masses: {
                title: 'Santas Misas',
                sundaysLabel: 'Domingos e Festivos',
                sundaysTime: '12:30 e 19:00'
            },
            confessions: {
                title: 'Confesións',
                dailyLabel: 'Diario',
                dailyTime: '30 min antes de cada misa',
                thursdayLabel: 'Xoves Eucarístico',
                thursdayTime: '18:30 - 19:30'
            },
            office: {
                title: 'Oficina da Igrexa',
                scheduleLabel: 'Martes e Xoves',
                scheduleTime: '17:00 - 19:00',
                urgentLabel: 'Atención Urxente',
                urgentTime: 'Cita previa por teléfono'
            },
            calendarLink: 'Ver calendario litúrxico completo'
        },
        services: {
            title: 'Vida da Igrexa',
            baptisms: {
                title: 'Bautismos',
                description: 'O inicio da vida cristiá.'
            },
            catechesis: {
                title: 'Catequese',
                description: 'Formación para nenos e adultos.'
            },
            marriages: {
                title: 'Matrimonios',
                description: 'Unión sagrada ante Deus.'
            },
            choir: {
                title: 'Coro',
                description: 'Eloxio a través da música.'
            },
            caritas: {
                title: 'Cáritas',
                description: 'Axuda aos máis necesitados.'
            },
            youthGroup: {
                title: 'Grupo Xove',
                description: 'Comunidade e actividades xuvenís.'
            }
        },
        location: {
            title: 'Atópanos',
            subtitle: 'Estamos aquí para ti',
            address: 'Enderezo',
            phone: 'Teléfono',
            email: 'Email',
            hours: 'Horario de Atención',
            hoursDetail: 'Luns a Venres: 10:00 - 13:00 e 17:00 - 19:00',
        },
        donate: {
            title: 'Apoia a Nosa Misión',
            subtitle: 'A túa xenerosidade fai posible o noso traballo',
            description: 'As túas doazóns axúdannos a manter a nosa igrexa, realizar obras de caridade e continuar servindo á nosa comunidade. Cada contribución, grande ou pequena, marca unha diferenza.',
            bankTransfer: 'Transferencia Bancaria',
            accountNumber: 'Número de Conta',
            concept: 'Concepto: Donativo Igrexa Santa Rita',
            thanksMessage: 'Grazas pola túa xenerosidade!',
        },
        footer: {
            about: 'Sobre Nós',
            aboutText: 'A Igrexa Santa Rita é unha comunidade de fe católica dedicada a servir ás familias de O Barco de Valdeorras.',
            quickLinks: 'Ligazóns Rápidas',
            contact: 'Contacto',
            rights: 'Todos os dereitos reservados.',
        },
    },
    [Language.EN]: {
        nav: {
            home: 'Home',
            history: 'History',
            schedule: 'Schedule',
            contact: 'Contact',
            donate: 'Donate',
            menu: 'Menu',
            changeLanguage: 'Change language',
            currentLanguage: 'Current language',
            closeMenu: 'Close menu',
            makeDonation: 'Make a Donation',
        },
        hero: {
            welcome: 'Welcome home',
            parishName: 'Santa Rita',
            subtitle: 'Masses, Sacraments, and community life in O Barco de Valdeorras.',
            donateButton: 'Make a Donation',
            scheduleButton: 'View Schedule',
        },
        history: {
            title: 'Our History',
            subtitle: 'Since 1980 sharing faith and life',
            origins: {
                title: 'Origins',
                description: 'A community of faith formed by families and neighbors who, over the years, have found in this temple a place of gathering, prayer, and service.'
            },
            present: {
                title: 'Present',
                description: 'Every day we celebrate community life through liturgy, welcome, and spiritual accompaniment for those who visit us.'
            },
            future: {
                title: 'Future',
                description: 'We look ahead with the commitment to remain an open space where everyone finds welcome, peace, and a sense of community.'
            }
        },
        schedule: {
            title: 'Schedule & Opening Hours',
            subtitle: 'Our doors are always open to welcome you',
            masses: {
                title: 'Holy Masses',
                sundaysLabel: 'Sundays & Holidays',
                sundaysTime: '12:30 & 19:00'
            },
            confessions: {
                title: 'Confessions',
                dailyLabel: 'Daily',
                dailyTime: '30 min before each mass',
                thursdayLabel: 'Eucharistic Thursday',
                thursdayTime: '6:30 PM - 7:30 PM'
            },
            office: {
                title: 'Church Office',
                scheduleLabel: 'Tuesdays & Thursdays',
                scheduleTime: '5:00 PM - 7:00 PM',
                urgentLabel: 'Urgent Care',
                urgentTime: 'By appointment'
            },
            calendarLink: 'View full liturgical calendar'
        },
        services: {
            title: 'Church Life',
            baptisms: {
                title: 'Baptisms',
                description: 'The beginning of Christian life.'
            },
            catechesis: {
                title: 'Catechesis',
                description: 'Formation for children and adults.'
            },
            marriages: {
                title: 'Marriages',
                description: 'Sacred union before God.'
            },
            choir: {
                title: 'Choir',
                description: 'Praise through music.'
            },
            caritas: {
                title: 'Caritas',
                description: 'Help for those in need.'
            },
            youthGroup: {
                title: 'Youth Group',
                description: 'Community and youth activities.'
            }
        },
        location: {
            title: 'Find Us',
            subtitle: 'We are here for you',
            address: 'Address',
            phone: 'Phone',
            email: 'Email',
            hours: 'Office Hours',
            hoursDetail: 'Monday to Friday: 10:00 AM - 1:00 PM and 5:00 PM - 7:00 PM',
        },
        donate: {
            title: 'Support Our Mission',
            subtitle: 'Your generosity makes our work possible',
            description: 'Your donations help us maintain our church, carry out charitable works and continue serving our community. Every contribution, large or small, makes a difference.',
            bankTransfer: 'Bank Transfer',
            accountNumber: 'Account Number',
            concept: 'Concept: Donation Church Santa Rita',
            thanksMessage: 'Thank you for your generosity!',
        },
        footer: {
            about: 'About Us',
            aboutText: 'The Church of Santa Rita is a Catholic faith community dedicated to serving the families of O Barco de Valdeorras.',
            quickLinks: 'Quick Links',
            contact: 'Contact',
            rights: 'All rights reserved.',
        },
    },
};

export const useTranslation = (language: Language): Translations => {
    return translations[language];
};
