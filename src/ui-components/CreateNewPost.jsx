/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import {getOverrideProps} from "@aws-amplify/ui-react/internal";
import {Button, Divider, Flex} from "@aws-amplify/ui-react";

export default function CreateNewPost(props) {
    const {overrides, ...rest} = props;
    return (
        <Flex
            gap="24px"
            direction="column"
            width="296px"
            height="unset"
            justifyContent="flex-start"
            alignItems="flex-start"
            overflow="hidden"
            position="relative"
            padding="1px 24px 24px 24px"
            backgroundColor="rgba(255,255,255,1)"
            {...getOverrideProps(overrides, "CreateNewPost")}
            {...rest}
        >
            <Divider
                width="unset"
                height="1px"
                shrink="0"
                alignSelf="stretch"
                size="small"
                orientation="horizontal"
                {...getOverrideProps(overrides, "Divider")}
            ></Divider>
            <Button
                width="139px"
                height="unset"
                justifyContent="space-between"
                shrink="0"
                size="default"
                isDisabled={false}
                variation="primary"
                children="New Post"
                {...getOverrideProps(overrides, "Button")}
            ></Button>
        </Flex>
    );
}
