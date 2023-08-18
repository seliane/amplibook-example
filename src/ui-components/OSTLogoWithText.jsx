/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import {getOverrideProps, getOverridesFromVariants, mergeVariantsAndOverrides,} from "@aws-amplify/ui-react/internal";
import {Flex, Image} from "@aws-amplify/ui-react";

export default function OSTLogoWithText(props) {
    const {overrides: overridesProp, ...rest} = props;
    const variants = [
        {
            overrides: {"image 2": {}, OSTLogoWithText: {}},
            variantValues: {color: "brand"},
        },
    ];
    const overrides = mergeVariantsAndOverrides(
        getOverridesFromVariants(variants, props),
        overridesProp || {}
    );
    return (
        <Flex
            gap="10px"
            direction="column"
            width="39.34px"
            height="unset"
            justifyContent="flex-start"
            alignItems="flex-start"
            position="relative"
            padding="0px 5px 0px 5px"
            display="flex"
            {...getOverrideProps(overrides, "OSTLogoWithText")}
            {...rest}
        >
            <Image
                width="53.83px"
                height="26px"
                display="block"
                gap="unset"
                alignItems="unset"
                justifyContent="unset"
                shrink="0"
                position="relative"
                padding="0px 0px 0px 0px"
                objectFit="cover"
                {...getOverrideProps(overrides, "image 2")}
            ></Image>
        </Flex>
    );
}
