'use client';

import { useTranslation as useTranslationBase } from 'react-i18next';

export const useTranslation = () => {
    const { t, i18n } = useTranslationBase('common');
    return { t, i18n };
};
