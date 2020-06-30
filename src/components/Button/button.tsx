import React, { FC, ButtonHTMLAttributes, AnchorHTMLAttributes } from 'react';
import classNames  from 'classnames'
export enum ButtonSize {
  Large = 'lg',
  Small = 'sm'
}
export enum ButtonType {
  Primary = 'primary',
  Default = 'default',
  Danger = 'danger',
  Link = 'link',
  Success = 'success',
  Info = 'info',
  Warning = 'warning'
}
interface  BaseButtonProps {
  className?: string,
  disabled?: boolean,
  size?: ButtonSize,
  btnType?: ButtonType,
  children: React.ReactNode,
  href?: string
}
type NativeButtonProps = BaseButtonProps & ButtonHTMLAttributes<HTMLElement> // 交叉类型
type AnchorButtonProps = BaseButtonProps & AnchorHTMLAttributes<HTMLElement>
export type ButtonProps = Partial<NativeButtonProps & AnchorButtonProps>
export const Button: FC<ButtonProps> = (props) => {
  const { size, btnType, children, disabled, href, ...restProps } = props
  const classes= classNames('btn', {
    [`btn-${btnType}`]: btnType,
    [`btn-${size}`]: size,
    'disabled': (btnType === ButtonType.Link) && disabled
  })
  if (btnType === ButtonType.Link && href) {
    return(
      <a
        className={ classes }
        href={ href }
        {...restProps}
      >
        {children}
      </a>
    )
  } else {
    return (
      <button
        className={ classes }
        disabled={ disabled }
        {...restProps}
      >
        {children}
      </button>
    )
  }
}

Button.defaultProps = {
  disabled : false,
  btnType : ButtonType.Default,
}

export default Button;