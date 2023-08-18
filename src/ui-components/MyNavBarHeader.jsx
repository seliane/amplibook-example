/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import {getOverrideProps, useNavigateAction,} from "@aws-amplify/ui-react/internal";
import {Flex, Icon, Image, Text} from "@aws-amplify/ui-react";
import OSTLogoWithText from "./OSTLogoWithText";
import MyIcon from "./MyIcon";

export default function MyNavBarHeader(props) {
    const {imageKey, overrides, ...rest} = props;
    const dashboardOnClick = useNavigateAction({type: "url", url: "/"});
    const jobsOnClick = useNavigateAction({type: "url", url: "/about"});
    const applicantsOnClick = useNavigateAction({type: "url", url: "/posts"});
    const companyOnClick = useNavigateAction({type: "url", url: "/my-posts"});
    const imageOnClick = useNavigateAction({type: "url", url: "/profile"});
    return (
        <Flex
            gap="40px"
            direction="row"
            width="1440px"
            height="unset"
            justifyContent="center"
            alignItems="center"
            position="relative"
            boxShadow="0px 2px 6px rgba(0.05098039284348488, 0.10196078568696976, 0.14901961386203766, 0.15000000596046448)"
            padding="24px 32px 24px 32px"
            backgroundColor="rgba(255,255,255,1)"
            {...getOverrideProps(overrides, "MyNavBarHeader")}
            {...rest}
        >
            <Icon
                width="18px"
                height="12px"
                viewBox={{minX: 0, minY: 0, width: 18, height: 12}}
                paths={[
                    {
                        d: "M0 2L0 0L18 0L18 2L0 2ZM0 7L18 7L18 5L0 5L0 7ZM0 12L18 12L18 10L0 10L0 12Z",
                        fill: "rgba(31,31,31,0.8)",
                        fillRule: "evenodd",
                    },
                ]}
                display="block"
                gap="unset"
                alignItems="unset"
                justifyContent="unset"
                shrink="0"
                position="relative"
                {...getOverrideProps(overrides, "icon")}
            ></Icon>
            <OSTLogoWithText
                display="none"
                gap="10px"
                direction="column"
                width="39.34px"
                height="unset"
                justifyContent="flex-start"
                alignItems="flex-start"
                shrink="0"
                position="relative"
                padding="0px 5px 0px 5px"
                color="brand"
                {...getOverrideProps(overrides, "OSTLogoWithText")}
            ></OSTLogoWithText>
            <Flex
                gap="40px"
                direction="row"
                width="unset"
                height="unset"
                justifyContent="flex-start"
                alignItems="center"
                shrink="0"
                position="relative"
                padding="0px 0px 0px 0px"
                {...getOverrideProps(overrides, "Frame 32138474710")}
            >
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
                    width="unset"
                    height="unset"
                    gap="unset"
                    alignItems="unset"
                    shrink="0"
                    position="relative"
                    padding="0px 0px 0px 0px"
                    whiteSpace="pre-wrap"
                    children="Home"
                    onClick={() => {
                        dashboardOnClick();
                    }}
                    {...getOverrideProps(overrides, "Dashboard")}
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
                    width="unset"
                    height="unset"
                    gap="unset"
                    alignItems="unset"
                    shrink="0"
                    position="relative"
                    padding="0px 0px 0px 0px"
                    whiteSpace="pre-wrap"
                    children="About"
                    onClick={() => {
                        jobsOnClick();
                    }}
                    {...getOverrideProps(overrides, "Jobs")}
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
                    width="unset"
                    height="unset"
                    gap="unset"
                    alignItems="unset"
                    shrink="0"
                    position="relative"
                    padding="0px 0px 0px 0px"
                    whiteSpace="pre-wrap"
                    children="Posts"
                    onClick={() => {
                        applicantsOnClick();
                    }}
                    {...getOverrideProps(overrides, "Applicants")}
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
                    width="unset"
                    height="unset"
                    gap="unset"
                    alignItems="unset"
                    shrink="0"
                    position="relative"
                    padding="0px 0px 0px 0px"
                    whiteSpace="pre-wrap"
                    children="My Posts"
                    onClick={() => {
                        companyOnClick();
                    }}
                    {...getOverrideProps(overrides, "Company")}
                ></Text>
            </Flex>
            <Flex
                gap="32px"
                direction="row"
                width="unset"
                height="unset"
                justifyContent="flex-end"
                alignItems="center"
                grow="1"
                shrink="1"
                basis="0"
                position="relative"
                padding="0px 0px 0px 0px"
                {...getOverrideProps(overrides, "Frame 32138474715")}
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
                    type="notification"
                    {...getOverrideProps(overrides, "MyIcon")}
                ></MyIcon>
                <Image
                    width="45px"
                    height="45px"
                    display="block"
                    gap="unset"
                    alignItems="unset"
                    justifyContent="unset"
                    shrink="0"
                    position="relative"
                    borderRadius="160px"
                    padding="0px 0px 0px 0px"
                    objectFit="cover"
                    src={imageKey}
                    onClick={() => {
                        imageOnClick();
                    }}
                    {...getOverrideProps(overrides, "image")}
                ></Image>
            </Flex>
        </Flex>
    );
}
