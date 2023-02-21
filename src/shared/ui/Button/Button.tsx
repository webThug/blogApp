import {ButtonHTMLAttributes, FC} from "react";
import cls from './Button.module.scss';
import {classNames} from "shared/lib/classNames/classNames";

export enum ButtonVariant {
    CLEAR = 'clear'
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
  className?: string;
  variant?: ButtonVariant;
}

export const Button: FC<ButtonProps> = (props) => {
    const {
        className,
        children,
        variant,
        ...otherProps
    } = props;

    return (
        <button
            className={classNames(cls.Button, {}, [className, cls[variant]])}
            {...otherProps}
        >
            {children}
        </button>
    );
};