/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import {getOverrideProps} from "@aws-amplify/ui-react/internal";
import {Flex, Image, Text} from "@aws-amplify/ui-react";
import MyIcon from "./MyIcon";

export default function MyCommentCard(props) {
    const {post, image, name, overrides, ...rest} = props;
    return (
        <Flex
            gap="16px"
            direction="column"
            width="479px"
            height="unset"
            justifyContent="flex-start"
            alignItems="flex-start"
            position="relative"
            padding="16px 16px 16px 16px"
            backgroundColor="rgba(255,255,255,1)"
            {...getOverrideProps(overrides, "MyCommentCard")}
            {...rest}
        >
            <Flex
                gap="16px"
                direction="row"
                width="unset"
                height="unset"
                justifyContent="flex-start"
                alignItems="flex-start"
                shrink="0"
                alignSelf="stretch"
                position="relative"
                padding="0px 0px 0px 0px"
                {...getOverrideProps(overrides, "Body")}
            >
                <Image
                    width="80px"
                    height="80px"
                    display="block"
                    gap="unset"
                    alignItems="unset"
                    justifyContent="unset"
                    shrink="0"
                    position="relative"
                    borderRadius="64px"
                    padding="0px 0px 0px 0px"
                    objectFit="cover"
                    src={image}
                    {...getOverrideProps(overrides, "image")}
                ></Image>
                <Flex
                    gap="8px"
                    direction="column"
                    width="unset"
                    height="unset"
                    justifyContent="flex-start"
                    alignItems="flex-start"
                    grow="1"
                    shrink="1"
                    basis="0"
                    position="relative"
                    padding="0px 0px 0px 0px"
                    {...getOverrideProps(overrides, "Frame38474984")}
                >
                    <Flex
                        gap="16px"
                        direction="row"
                        width="unset"
                        height="unset"
                        justifyContent="flex-start"
                        alignItems="flex-start"
                        shrink="0"
                        alignSelf="stretch"
                        position="relative"
                        padding="0px 0px 0px 0px"
                        {...getOverrideProps(overrides, "Frame38474985")}
                    >
                        <Flex
                            gap="16px"
                            direction="row"
                            width="unset"
                            height="unset"
                            justifyContent="flex-start"
                            alignItems="flex-start"
                            grow="1"
                            shrink="1"
                            basis="0"
                            position="relative"
                            padding="0px 0px 0px 0px"
                            {...getOverrideProps(overrides, "Frame38474986")}
                        >
                            <Text
                                fontFamily="Inter"
                                fontSize="16px"
                                fontWeight="700"
                                color="rgba(13,26,38,1)"
                                lineHeight="24px"
                                textAlign="left"
                                display="block"
                                direction="column"
                                justifyContent="unset"
                                letterSpacing="0.01px"
                                width="unset"
                                height="unset"
                                gap="unset"
                                alignItems="unset"
                                shrink="0"
                                position="relative"
                                padding="0px 0px 0px 0px"
                                whiteSpace="pre-wrap"
                                children={name}
                                {...getOverrideProps(overrides, "Scott")}
                            ></Text>
                            <Text
                                fontFamily="Inter"
                                fontSize="16px"
                                fontWeight="400"
                                color="rgba(92,102,112,1)"
                                lineHeight="24px"
                                textAlign="left"
                                display="block"
                                direction="column"
                                justifyContent="unset"
                                letterSpacing="0.01px"
                                width="unset"
                                height="unset"
                                gap="unset"
                                alignItems="unset"
                                grow="1"
                                shrink="1"
                                basis="0"
                                position="relative"
                                padding="0px 0px 0px 0px"
                                whiteSpace="pre-wrap"
                                children={post?.title}
                                {...getOverrideProps(overrides, "Lorem ipsum")}
                            ></Text>
                        </Flex>
                        <Flex
                            gap="0"
                            direction="row"
                            width="unset"
                            height="unset"
                            justifyContent="flex-end"
                            alignItems="flex-start"
                            shrink="0"
                            position="relative"
                            padding="0px 0px 0px 0px"
                            {...getOverrideProps(overrides, "Frame38474988")}
                        >
                            <MyIcon
                                width="24px"
                                height="24px"
                                display="block"
                                gap="unset"
                                alignItems="unset"
                                justifyContent="unset"
                                overflow="hidden"
                                shrink="0"
                                position="relative"
                                padding="0px 0px 0px 0px"
                                type="more_horiz"
                                {...getOverrideProps(overrides, "MyIcon38474989")}
                            ></MyIcon>
                        </Flex>
                    </Flex>
                    <Text
                        fontFamily="Inter"
                        fontSize="16px"
                        fontWeight="400"
                        color="rgba(13,26,38,1)"
                        lineHeight="24px"
                        textAlign="left"
                        display="block"
                        direction="column"
                        justifyContent="unset"
                        letterSpacing="0.01px"
                        width="unset"
                        height="unset"
                        gap="unset"
                        alignItems="unset"
                        shrink="0"
                        alignSelf="stretch"
                        position="relative"
                        padding="0px 0px 0px 0px"
                        whiteSpace="pre-wrap"
                        children={post?.description}
                        {...getOverrideProps(
                            overrides,
                            "\u201CLorem ipsum dolor sit amet, consectetur adipiscing elit. \u201D"
                        )}
                    ></Text>
                </Flex>
            </Flex>
            <Flex
                gap="80px"
                direction="row"
                width="unset"
                height="unset"
                justifyContent="flex-start"
                alignItems="flex-start"
                shrink="0"
                alignSelf="stretch"
                position="relative"
                padding="0px 0px 0px 0px"
                {...getOverrideProps(overrides, "Share38474991")}
            >
                <Flex
                    gap="16px"
                    direction="row"
                    width="unset"
                    height="unset"
                    justifyContent="flex-start"
                    alignItems="flex-start"
                    shrink="0"
                    position="relative"
                    padding="0px 0px 0px 0px"
                    {...getOverrideProps(overrides, "Share38474992")}
                >
                    <MyIcon
                        width="24px"
                        height="24px"
                        display="block"
                        gap="unset"
                        alignItems="unset"
                        justifyContent="unset"
                        overflow="hidden"
                        shrink="0"
                        position="relative"
                        padding="0px 0px 0px 0px"
                        type="reply"
                        {...getOverrideProps(overrides, "MyIcon38474993")}
                    ></MyIcon>
                    <Text
                        fontFamily="Inter"
                        fontSize="16px"
                        fontWeight="400"
                        color="rgba(92,102,112,1)"
                        lineHeight="24px"
                        textAlign="left"
                        display="block"
                        direction="column"
                        justifyContent="unset"
                        letterSpacing="0.01px"
                        width="unset"
                        height="unset"
                        gap="unset"
                        alignItems="unset"
                        shrink="0"
                        position="relative"
                        padding="0px 0px 0px 0px"
                        whiteSpace="pre-wrap"
                        children="99"
                        {...getOverrideProps(overrides, "9938474994")}
                    ></Text>
                </Flex>
                <Flex
                    gap="16px"
                    direction="row"
                    width="unset"
                    height="unset"
                    justifyContent="flex-start"
                    alignItems="flex-start"
                    shrink="0"
                    position="relative"
                    padding="0px 0px 0px 0px"
                    {...getOverrideProps(overrides, "Repost")}
                >
                    <MyIcon
                        width="24px"
                        height="24px"
                        display="block"
                        gap="unset"
                        alignItems="unset"
                        justifyContent="unset"
                        overflow="hidden"
                        shrink="0"
                        position="relative"
                        padding="0px 0px 0px 0px"
                        type="shuffle"
                        {...getOverrideProps(overrides, "MyIcon38474996")}
                    ></MyIcon>
                    <Text
                        fontFamily="Inter"
                        fontSize="16px"
                        fontWeight="400"
                        color="rgba(92,102,112,1)"
                        lineHeight="24px"
                        textAlign="left"
                        display="block"
                        direction="column"
                        justifyContent="unset"
                        letterSpacing="0.01px"
                        width="unset"
                        height="unset"
                        gap="unset"
                        alignItems="unset"
                        shrink="0"
                        position="relative"
                        padding="0px 0px 0px 0px"
                        whiteSpace="pre-wrap"
                        children="99"
                        {...getOverrideProps(overrides, "9938474997")}
                    ></Text>
                </Flex>
                <Flex
                    gap="16px"
                    direction="row"
                    width="unset"
                    height="unset"
                    justifyContent="flex-start"
                    alignItems="flex-start"
                    shrink="0"
                    position="relative"
                    padding="0px 0px 0px 0px"
                    {...getOverrideProps(overrides, "Like")}
                >
                    <MyIcon
                        width="24px"
                        height="24px"
                        display="block"
                        gap="unset"
                        alignItems="unset"
                        justifyContent="unset"
                        overflow="hidden"
                        shrink="0"
                        position="relative"
                        padding="0px 0px 0px 0px"
                        type="favorite_border"
                        {...getOverrideProps(overrides, "MyIcon38474999")}
                    ></MyIcon>
                    <Text
                        fontFamily="Inter"
                        fontSize="16px"
                        fontWeight="400"
                        color="rgba(92,102,112,1)"
                        lineHeight="24px"
                        textAlign="left"
                        display="block"
                        direction="column"
                        justifyContent="unset"
                        letterSpacing="0.01px"
                        width="unset"
                        height="unset"
                        gap="unset"
                        alignItems="unset"
                        shrink="0"
                        position="relative"
                        padding="0px 0px 0px 0px"
                        whiteSpace="pre-wrap"
                        children="99"
                        {...getOverrideProps(overrides, "9938475000")}
                    ></Text>
                </Flex>
                <MyIcon
                    width="24px"
                    height="24px"
                    display="block"
                    gap="unset"
                    alignItems="unset"
                    justifyContent="unset"
                    overflow="hidden"
                    shrink="0"
                    position="relative"
                    padding="0px 0px 0px 0px"
                    type="share"
                    {...getOverrideProps(overrides, "MyIcon38475001")}
                ></MyIcon>
            </Flex>
        </Flex>
    );
}
