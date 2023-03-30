import {
    ButtonHTMLAttributes, memo, ReactNode,
} from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Button.module.scss';

export enum ButtonVariant {
    CLEAR = 'clear',
    CLEAR_INVERTED = 'clearInverted',
    OUTLINE = 'outline',
    BACKGROUND = 'background',
    BACKGROUND_INVERTED = 'backgroundInverted'
}

export enum ButtonSize {
    M = 'size_m',
    L = 'size_l',
    XL = 'size_xl',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
  className?: string;
  variant?: ButtonVariant;
  square?: boolean;
  size?: ButtonSize;
  disabled?: boolean;
  children?: ReactNode;
}

export const Button = memo((props:ButtonProps) => {
    const {
        className,
        children,
        variant,
        square,
        disabled,
        size = ButtonSize.M,
        ...otherProps
    } = props;

    return (
        <button
            type="button"
            className={
                classNames(
                    cls.Button,
                    { [cls.square]: square, [cls.disabled]: disabled },
                    [className, cls[variant], cls[size]],
                )
            }
            disabled={disabled}
            {...otherProps}
        >
            {children}
        </button>
    );
});
