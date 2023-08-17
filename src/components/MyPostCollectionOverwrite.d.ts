/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { CollectionProps } from "@aws-amplify/ui-react";
import {MyCommentCardProps} from "../ui-components/MyCommentCard";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type MyPostCollectionOverridesProps = {
    MyPostCollection?: PrimitiveOverrideProps<CollectionProps>;
    MyCommentCard?: MyCommentCardProps;
} & EscapeHatchProps;
export declare type MyPostCollectionProps = React.PropsWithChildren<Partial<CollectionProps<any>> & {
    items?: any[];
    overrideItems?: (collectionItem: {
        item: any;
        index: number;
    }) => MyCommentCardProps;
} & {
    overrides?: MyPostCollectionOverridesProps | undefined | null;
}>;
export default function MyPostCollection(props: MyPostCollectionProps): React.ReactElement;
