import { FunctionComponent } from 'react';
import { BaseProps } from '../type';
interface RevolvingDotProps extends BaseProps {
    radius?: string | number;
    secondaryColor?: string;
}
declare const RevolvingDot: FunctionComponent<RevolvingDotProps>;
export default RevolvingDot;
