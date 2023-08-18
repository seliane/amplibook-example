/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import {EscapeHatchProps} from "@aws-amplify/ui-react/internal";
import {ButtonProps, DividerProps, FlexProps} from "@aws-amplify/ui-react";

export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type MyLogoutOverridesProps = {
    MyLogout?: PrimitiveOverrideProps<FlexProps>;
    Divider?: PrimitiveOverrideProps<DividerProps>;
    Button?: PrimitiveOverrideProps<ButtonProps>;
} & EscapeHatchProps;
export declare type MyLogoutProps = React.PropsWithChildren<Partial<FlexProps> & {
    overrides?: MyLogoutOverridesProps | undefined | null;
}>;
export default function MyLogout(props: MyLogoutProps): React.ReactElement;
