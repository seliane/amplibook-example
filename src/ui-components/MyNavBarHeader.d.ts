/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import {EscapeHatchProps} from "@aws-amplify/ui-react/internal";
import {FlexProps, IconProps, ImageProps, TextProps} from "@aws-amplify/ui-react";
import {OSTLogoWithTextProps} from "./OSTLogoWithText";
import {MyIconProps} from "./MyIcon";

export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type MyNavBarHeaderOverridesProps = {
    MyNavBarHeader?: PrimitiveOverrideProps<FlexProps>;
    icon?: PrimitiveOverrideProps<IconProps>;
    OSTLogoWithText?: OSTLogoWithTextProps;
    "Frame 32138474710"?: PrimitiveOverrideProps<FlexProps>;
    Dashboard?: PrimitiveOverrideProps<TextProps>;
    Jobs?: PrimitiveOverrideProps<TextProps>;
    Applicants?: PrimitiveOverrideProps<TextProps>;
    Company?: PrimitiveOverrideProps<TextProps>;
    "Frame 32138474715"?: PrimitiveOverrideProps<FlexProps>;
    MyIcon?: MyIconProps;
    image?: PrimitiveOverrideProps<ImageProps>;
} & EscapeHatchProps;
export declare type MyNavBarHeaderProps = React.PropsWithChildren<Partial<FlexProps> & {
    imageKey?: String;
} & {
    overrides?: MyNavBarHeaderOverridesProps | undefined | null;
}>;
export default function MyNavBarHeader(props: MyNavBarHeaderProps): React.ReactElement;
