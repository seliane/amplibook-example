/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import {SyntheticEvent} from "react";
import {EscapeHatchProps} from "@aws-amplify/ui-react/internal";
import {ButtonProps, FlexProps, ImageProps, TextFieldProps, TextProps} from "@aws-amplify/ui-react";

export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type MyEditProfileOverridesProps = {
    MyEditProfile?: PrimitiveOverrideProps<FlexProps>;
    Content?: PrimitiveOverrideProps<FlexProps>;
    "Edit Profile38475047"?: PrimitiveOverrideProps<FlexProps>;
    "Edit Profile38475049"?: PrimitiveOverrideProps<TextProps>;
    Profile?: PrimitiveOverrideProps<FlexProps>;
    image?: PrimitiveOverrideProps<ImageProps>;
    "Upload New Image"?: PrimitiveOverrideProps<TextProps>;
    Forms?: PrimitiveOverrideProps<FlexProps>;
    TextField38475054?: PrimitiveOverrideProps<TextFieldProps>;
    TextField38475056?: PrimitiveOverrideProps<TextFieldProps>;
    "Frame 438"?: PrimitiveOverrideProps<FlexProps>;
    Button38475057?: PrimitiveOverrideProps<ButtonProps>;
    Button3848594?: PrimitiveOverrideProps<ButtonProps>;
} & EscapeHatchProps;
export declare type MyEditProfileProps = React.PropsWithChildren<Partial<FlexProps> & {
    imageKey?: String;
    imageUploadAction?: (event: SyntheticEvent) => void;
} & {
    overrides?: MyEditProfileOverridesProps | undefined | null;
}>;
export default function MyEditProfile(props: MyEditProfileProps): React.ReactElement;
