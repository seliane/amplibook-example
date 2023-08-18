/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import {EscapeHatchProps} from "@aws-amplify/ui-react/internal";
import {FlexProps, ImageProps} from "@aws-amplify/ui-react";

export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type OSTLogoWithTextOverridesProps = {
    OSTLogoWithText?: PrimitiveOverrideProps<FlexProps>;
    "image 2"?: PrimitiveOverrideProps<ImageProps>;
} & EscapeHatchProps;
export declare type OSTLogoWithTextProps = React.PropsWithChildren<Partial<FlexProps> & {
    color?: "brand";
} & {
    overrides?: OSTLogoWithTextOverridesProps | undefined | null;
}>;
export default function OSTLogoWithText(props: OSTLogoWithTextProps): React.ReactElement;
