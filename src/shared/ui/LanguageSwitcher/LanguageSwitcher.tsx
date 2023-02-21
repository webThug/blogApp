import React, {FC} from "react";
import {useTranslation} from "react-i18next";
import {Button, ButtonVariant} from "shared/ui/Button/Button";
import {classNames} from "shared/lib/classNames/classNames";
import cls from './LanguageSwitcher.module.scss';

interface LanguageSwitcherProps {
    className?: string;
}

export const LanguageSwitcher: FC<LanguageSwitcherProps> = ({className}) => {
    const {t, i18n} = useTranslation();

    const toggle = () => {
        i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru')
    }

    return (
        <Button
            variant={ButtonVariant.CLEAR}
            onClick={toggle}
            className={classNames(cls.LanguageSwitcher, {}, [className])}
        >
            {t('Язык')}
        </Button>
    )
};


