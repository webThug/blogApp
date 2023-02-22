import React, { FC, useState } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { ThemeSwitcher } from 'shared/ui/ThemeSwitcher';
import { LanguageSwitcher } from 'shared/ui/LanguageSwitcher/LanguageSwitcher';
import cls from './SideBar.module.scss';

interface SideBarProps {
  className?: string;
}

export const SideBar: FC<SideBarProps> = ({ className }) => {
    const [collapsed, setCollapsed] = useState(false);

    function onToggle() {
        setCollapsed((prev) => !prev);
    }

    return (
        <div className={classNames(cls.SideBar, { [cls.collapsed]: collapsed }, [className])}>
            <button type="button" onClick={onToggle}>toggle</button>
            <div className={cls.switchers}>
                <ThemeSwitcher />
                <LanguageSwitcher className={cls.lang} />
            </div>
        </div>
    );
};
