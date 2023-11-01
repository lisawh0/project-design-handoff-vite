import React from 'react';
import { useTranslation } from 'react-i18next';

const LanguageSwitcher = () => {
    const { i18n } = useTranslation();

    const toggleLanguage = () => {
        if (i18n.language === 'en') {
            i18n.changeLanguage('sv');
        } else {
            i18n.changeLanguage('en');
        }
    };

    return (
        <div>
            <button onClick={toggleLanguage}>
                {i18n.language === 'en' ? 'SVE' : 'ENG'}
            </button>
            <img
                className="globe"
                src="/globe.png"
                alt="ENG/SVE"
                style={{ width: '24px', height: '24px' }} // Justera storleken efter behov
            />
        </div>
    );
};

export default LanguageSwitcher;
