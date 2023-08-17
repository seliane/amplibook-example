/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { ButtonProps, FlexProps, IconProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type MyNavBarHeader2OverridesProps = {
    MyNavBarHeader2?: PrimitiveOverrideProps<FlexProps>;
    "Frame 5"?: PrimitiveOverrideProps<FlexProps>;
    "Amplify Mark"?: PrimitiveOverrideProps<ViewProps>;
    Union?: PrimitiveOverrideProps<IconProps>;
    Home?: PrimitiveOverrideProps<TextProps>;
    Products?: PrimitiveOverrideProps<TextProps>;
    Pricing?: PrimitiveOverrideProps<TextProps>;
    Contact?: PrimitiveOverrideProps<TextProps>;
    actions?: PrimitiveOverrideProps<FlexProps>;
    Button38474733?: PrimitiveOverrideProps<ButtonProps>;
    Button38474734?: PrimitiveOverrideProps<ButtonProps>;
} & EscapeHatchProps;
export declare type MyNavBarHeader2Props = React.PropsWithChildren<Partial<FlexProps> & {
    overrides?: MyNavBarHeader2OverridesProps | undefined | null;
}>;
export default function MyNavBarHeader2(props: MyNavBarHeader2Props): React.ReactElement;
