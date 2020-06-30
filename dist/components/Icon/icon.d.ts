import React from 'react';
import { FontAwesomeIconProps } from '@fortawesome/react-fontawesome';
export declare enum ThemeProps {
    Primary = "primary",
    Secondary = "secondary",
    Success = "success",
    Info = "info",
    Light = "light",
    Danger = "danger",
    Warning = "warning",
    Dark = "dark"
}
export interface IconProps extends FontAwesomeIconProps {
    theme?: ThemeProps;
}
declare const Icon: React.FC<IconProps>;
export default Icon;
