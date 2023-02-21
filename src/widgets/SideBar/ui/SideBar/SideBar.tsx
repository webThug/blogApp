import React, {FC, useState} from "react";
import cls from './SideBar.module.scss';
import {classNames} from "shared/lib/classNames/classNames";
import {ThemeSwitcher} from "shared/ui/ThemeSwitcher";
import {LanguageSwitcher} from "shared/ui/LanguageSwitcher/LanguageSwitcher";

interface SideBarProps {
  className?: string;
}

export const SideBar: FC<SideBarProps> = ({className}) => {
    const [collapsed, setCollapsed] = useState(false);

    function onToggle () {
        setCollapsed(prev => !prev)
    }

    return (
        <div className={classNames(cls.SideBar, {[cls.collapsed]: collapsed }, [className])}>
           <button onClick={onToggle}>toggle</button>
            <div className={cls.switchers}>
                <ThemeSwitcher />
                <LanguageSwitcher className={cls.lang} />
            </div>
        </div>
    );
};