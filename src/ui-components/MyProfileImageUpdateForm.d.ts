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
export declare type MyProfileImageUpdateFormInputValues = {
    userID?: string;
    image?: string;
    imageKey?: string;
};
export declare type MyProfileImageUpdateFormValidationValues = {
    userID?: ValidationFunction<string>;
    image?: ValidationFunction<string>;
    imageKey?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type MyProfileImageUpdateFormOverridesProps = {
    MyProfileImageUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    SectionalElement0?: PrimitiveOverrideProps<HeadingProps>;
    userID?: PrimitiveOverrideProps<TextFieldProps>;
    image?: PrimitiveOverrideProps<TextFieldProps>;
    imageKey?: PrimitiveOverrideProps<StorageManagerProps>;
} & EscapeHatchProps;
export declare type MyProfileImageUpdateFormProps = React.PropsWithChildren<{
    overrides?: MyProfileImageUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    profileImage?: ProfileImage;
    onSubmit?: (fields: MyProfileImageUpdateFormInputValues) => MyProfileImageUpdateFormInputValues;
    onSuccess?: (fields: MyProfileImageUpdateFormInputValues) => void;
    onError?: (fields: MyProfileImageUpdateFormInputValues, errorMessage: string) => void;
    onCancel?: () => void;
    onChange?: (fields: MyProfileImageUpdateFormInputValues) => MyProfileImageUpdateFormInputValues;
    onValidate?: MyProfileImageUpdateFormValidationValues;
} & React.CSSProperties>;
export default function MyProfileImageUpdateForm(props: MyProfileImageUpdateFormProps): React.ReactElement;
