/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import {EscapeHatchProps} from "@aws-amplify/ui-react/internal";
import {ButtonProps, DividerProps, FlexProps} from "@aws-amplify/ui-react";

export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type CreateNewPostOverridesProps = {
    CreateNewPost?: PrimitiveOverrideProps<FlexProps>;
    Divider?: PrimitiveOverrideProps<DividerProps>;
    Button?: PrimitiveOverrideProps<ButtonProps>;
} & EscapeHatchProps;
export declare type CreateNewPostProps = React.PropsWithChildren<Partial<FlexProps> & {
    overrides?: CreateNewPostOverridesProps | undefined | null;
}>;
export default function CreateNewPost(props: CreateNewPostProps): React.ReactElement;
