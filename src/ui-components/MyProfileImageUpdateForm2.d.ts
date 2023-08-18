/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import {GridProps, HeadingProps, TextFieldProps} from "@aws-amplify/ui-react";
import {StorageManagerProps} from "@aws-amplify/ui-react-storage";
import {EscapeHatchProps} from "@aws-amplify/ui-react/internal";
import {ProfileImage} from "../models";

export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type MyProfileImageUpdateForm2InputValues = {
    userID?: string;
    image?: string;
    imageKey?: string;
};
export declare type MyProfileImageUpdateForm2ValidationValues = {
    userID?: ValidationFunction<string>;
    image?: ValidationFunction<string>;
    imageKey?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type MyProfileImageUpdateForm2OverridesProps = {
    MyProfileImageUpdateForm2Grid?: PrimitiveOverrideProps<GridProps>;
    SectionalElement0?: PrimitiveOverrideProps<HeadingProps>;
    userID?: PrimitiveOverrideProps<TextFieldProps>;
    image?: PrimitiveOverrideProps<TextFieldProps>;
    imageKey?: PrimitiveOverrideProps<StorageManagerProps>;
} & EscapeHatchProps;
export declare type MyProfileImageUpdateForm2Props = React.PropsWithChildren<{
    overrides?: MyProfileImageUpdateForm2OverridesProps | undefined | null;
} & {
    id?: string;
    profileImage?: ProfileImage;
    onSubmit?: (fields: MyProfileImageUpdateForm2InputValues) => MyProfileImageUpdateForm2InputValues;
    onSuccess?: (fields: MyProfileImageUpdateForm2InputValues) => void;
    onError?: (fields: MyProfileImageUpdateForm2InputValues, errorMessage: string) => void;
    onCancel?: () => void;
    onChange?: (fields: MyProfileImageUpdateForm2InputValues) => MyProfileImageUpdateForm2InputValues;
    onValidate?: MyProfileImageUpdateForm2ValidationValues;
} & React.CSSProperties>;
export default function MyProfileImageUpdateForm2(props: MyProfileImageUpdateForm2Props): React.ReactElement;
