/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { Post } from "../models";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { FlexProps, ImageProps, TextProps } from "@aws-amplify/ui-react";
import { MyIconProps } from "./MyIcon";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type MyCommentCardOverridesProps = {
    MyCommentCard?: PrimitiveOverrideProps<FlexProps>;
    Body?: PrimitiveOverrideProps<FlexProps>;
    image?: PrimitiveOverrideProps<ImageProps>;
    Frame38474984?: PrimitiveOverrideProps<FlexProps>;
    Frame38474985?: PrimitiveOverrideProps<FlexProps>;
    Frame38474986?: PrimitiveOverrideProps<FlexProps>;
    Scott?: PrimitiveOverrideProps<TextProps>;
    "Lorem ipsum"?: PrimitiveOverrideProps<TextProps>;
    Frame38474988?: PrimitiveOverrideProps<FlexProps>;
    MyIcon38474989?: MyIconProps;
    "\u201CLorem ipsum dolor sit amet, consectetur adipiscing elit. \u201D"?: PrimitiveOverrideProps<TextProps>;
    Share38474991?: PrimitiveOverrideProps<FlexProps>;
    Share38474992?: PrimitiveOverrideProps<FlexProps>;
    MyIcon38474993?: MyIconProps;
    "9938474994"?: PrimitiveOverrideProps<TextProps>;
    Repost?: PrimitiveOverrideProps<FlexProps>;
    MyIcon38474996?: MyIconProps;
    "9938474997"?: PrimitiveOverrideProps<TextProps>;
    Like?: PrimitiveOverrideProps<FlexProps>;
    MyIcon38474999?: MyIconProps;
    "9938475000"?: PrimitiveOverrideProps<TextProps>;
    MyIcon38475001?: MyIconProps;
} & EscapeHatchProps;
export declare type MyCommentCardProps = React.PropsWithChildren<Partial<FlexProps> & {
    post?: Post;
    image?: String;
    name?: String;
} & {
    overrides?: MyCommentCardOverridesProps | undefined | null;
}>;
export default function MyCommentCard(props: MyCommentCardProps): React.ReactElement;
