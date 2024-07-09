import { FunctionComponent } from 'react';
import { BaseProps } from '../type';
interface PlaneProps extends Omit<BaseProps, 'width' | 'height'> {
    secondaryColor?: string;
}
export declare const Plane: FunctionComponent<PlaneProps>;
export default Plane;
