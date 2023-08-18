/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import {
  getOverrideProps,
  useAuth,
  useNavigateAction,
} from "@aws-amplify/ui-react/internal";
import OSTLogoWithText from "./OSTLogoWithText";
import { Flex, Icon, Image, Text } from "@aws-amplify/ui-react";
import MyIcon from "./MyIcon";
export default function MyNavBarSide(props) {
  const { imageKey, isVisible, overrides, ...rest } = props;
  const authAttributes = useAuth().user?.attributes ?? {};
  const labelThreeEightFourSevenFourEightFiveEightOnClick = useNavigateAction({
    type: "url",
    url: "/",
  });
  const labelThreeEightFourSevenFourEightSixFourOnClick = useNavigateAction({
    type: "url",
    url: "/about",
  });
  const labelThreeEightFourSevenFourEightSixEightOnClick = useNavigateAction({
    type: "url",
    url: "/posts",
  });
  const labelThreeEightFourSevenFourEightSevenTwoOnClick = useNavigateAction({
    type: "url",
    url: "/my-posts",
  });
  const frameFourOneSixOnClick = useNavigateAction({
    type: "url",
    url: "/profile",
  });
  return (
    <Flex
      gap="10px"
      direction="row"
      width="unset"
      height="unset"
      justifyContent="flex-start"
      alignItems="flex-start"
      position="relative"
      padding="80px 80px 80px 80px"
      backgroundColor="rgba(255,255,255,1)"
      display={isVisible == true ? "block" : "none"}
      {...getOverrideProps(overrides, "MyNavBarSide")}
      {...rest}
    >
      <Flex
        gap="10px"
        direction="row"
        width="385px"
        height="762px"
        justifyContent="flex-start"
        alignItems="flex-start"
        shrink="0"
        position="relative"
        padding="32px 0px 32px 0px"
        {...getOverrideProps(overrides, "NavBarSide")}
      >
        <Flex
          gap="32px"
          direction="column"
          width="unset"
          height="unset"
          justifyContent="flex-start"
          alignItems="flex-start"
          grow="1"
          shrink="1"
          basis="0"
          alignSelf="stretch"
          position="relative"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "Frame 32138474851")}
        >
          <Flex
            gap="32px"
            direction="column"
            width="unset"
            height="unset"
            justifyContent="flex-start"
            alignItems="flex-start"
            grow="1"
            shrink="1"
            basis="0"
            alignSelf="stretch"
            position="relative"
            padding="0px 32px 0px 32px"
            {...getOverrideProps(overrides, "Frame 32138474852")}
          >
            <Flex
              gap="32px"
              direction="row"
              width="unset"
              height="unset"
              justifyContent="space-between"
              alignItems="center"
              shrink="0"
              alignSelf="stretch"
              position="relative"
              padding="0px 0px 0px 0px"
              {...getOverrideProps(overrides, "Frame 437")}
            >
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
                gap="10px"
                direction="row"
                width="unset"
                height="unset"
                justifyContent="center"
                alignItems="center"
                shrink="0"
                position="relative"
                borderRadius="4px"
                padding="8px 16px 8px 16px"
                {...getOverrideProps(overrides, "Button")}
              >
                <Icon
                  width="14px"
                  height="14px"
                  viewBox={{ minX: 0, minY: 0, width: 14, height: 14 }}
                  paths={[
                    {
                      d: "M14 1.41L12.59 0L7 5.59L1.41 0L0 1.41L5.59 7L0 12.59L1.41 14L7 8.41L12.59 14L14 12.59L8.41 7L14 1.41Z",
                      fill: "rgba(31,31,31,1)",
                      fillRule: "nonzero",
                    },
                  ]}
                  display="block"
                  gap="unset"
                  alignItems="unset"
                  justifyContent="unset"
                  shrink="0"
                  position="relative"
                  {...getOverrideProps(overrides, "icon38474943")}
                ></Icon>
              </Flex>
            </Flex>
            <Flex
              gap="16px"
              direction="column"
              width="unset"
              height="unset"
              justifyContent="flex-start"
              alignItems="flex-start"
              shrink="0"
              position="relative"
              padding="0px 0px 0px 0px"
              {...getOverrideProps(overrides, "Frame 414")}
            >
              <Flex
                gap="8px"
                direction="row"
                width="unset"
                height="unset"
                justifyContent="flex-start"
                alignItems="center"
                shrink="0"
                position="relative"
                padding="0px 0px 0px 0px"
                {...getOverrideProps(overrides, "Frame 322")}
              >
                <Flex
                  gap="0"
                  direction="row"
                  width="unset"
                  height="unset"
                  justifyContent="flex-start"
                  alignItems="flex-start"
                  shrink="0"
                  position="relative"
                  borderRadius="4px"
                  padding="6px 6px 6px 6px"
                  backgroundColor="rgba(233,249,252,1)"
                  {...getOverrideProps(overrides, "icon38474856")}
                >
                  <MyIcon
                    width="18px"
                    height="18px"
                    display="block"
                    gap="unset"
                    alignItems="unset"
                    justifyContent="unset"
                    overflow="hidden"
                    shrink="0"
                    position="relative"
                    padding="0px 0px 0px 0px"
                    type="home"
                    {...getOverrideProps(overrides, "MyIcon38474857")}
                  ></MyIcon>
                </Flex>
                <Text
                  fontFamily="Inter"
                  fontSize="16px"
                  fontWeight="400"
                  color="rgba(4,125,149,1)"
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
                  children="Home"
                  onClick={() => {
                    labelThreeEightFourSevenFourEightFiveEightOnClick();
                  }}
                  {...getOverrideProps(overrides, "label38474858")}
                ></Text>
              </Flex>
            </Flex>
            <Flex
              gap="16px"
              direction="column"
              width="unset"
              height="unset"
              justifyContent="flex-start"
              alignItems="flex-start"
              shrink="0"
              position="relative"
              padding="0px 0px 0px 0px"
              {...getOverrideProps(overrides, "Section38474859")}
            >
              <Text
                fontFamily="Inter"
                fontSize="16px"
                fontWeight="600"
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
                children="Manage"
                {...getOverrideProps(overrides, "label38474860")}
              ></Text>
              <Flex
                gap="8px"
                direction="row"
                width="unset"
                height="unset"
                justifyContent="flex-start"
                alignItems="center"
                shrink="0"
                position="relative"
                padding="0px 0px 0px 0px"
                {...getOverrideProps(overrides, "link38474861")}
              >
                <Flex
                  gap="0"
                  direction="row"
                  width="unset"
                  height="unset"
                  justifyContent="flex-start"
                  alignItems="flex-start"
                  shrink="0"
                  position="relative"
                  borderRadius="4px"
                  padding="6px 6px 6px 6px"
                  backgroundColor="rgba(233,249,252,1)"
                  {...getOverrideProps(overrides, "icon38474862")}
                >
                  <MyIcon
                    width="18px"
                    height="18px"
                    display="block"
                    gap="unset"
                    alignItems="unset"
                    justifyContent="unset"
                    overflow="hidden"
                    shrink="0"
                    position="relative"
                    padding="0px 0px 0px 0px"
                    type="content"
                    {...getOverrideProps(overrides, "MyIcon38474863")}
                  ></MyIcon>
                </Flex>
                <Text
                  fontFamily="Inter"
                  fontSize="16px"
                  fontWeight="400"
                  color="rgba(4,125,149,1)"
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
                  children="About"
                  onClick={() => {
                    labelThreeEightFourSevenFourEightSixFourOnClick();
                  }}
                  {...getOverrideProps(overrides, "label38474864")}
                ></Text>
              </Flex>
              <Flex
                gap="8px"
                direction="row"
                width="unset"
                height="unset"
                justifyContent="flex-start"
                alignItems="center"
                shrink="0"
                position="relative"
                padding="0px 0px 0px 0px"
                {...getOverrideProps(overrides, "link38474865")}
              >
                <Flex
                  gap="0"
                  direction="row"
                  width="unset"
                  height="unset"
                  justifyContent="flex-start"
                  alignItems="flex-start"
                  shrink="0"
                  position="relative"
                  borderRadius="4px"
                  padding="6px 6px 6px 6px"
                  backgroundColor="rgba(233,249,252,1)"
                  {...getOverrideProps(overrides, "icon38474866")}
                >
                  <MyIcon
                    width="18px"
                    height="18px"
                    display="block"
                    gap="unset"
                    alignItems="unset"
                    justifyContent="unset"
                    overflow="hidden"
                    shrink="0"
                    position="relative"
                    padding="0px 0px 0px 0px"
                    type="group"
                    {...getOverrideProps(overrides, "MyIcon38474867")}
                  ></MyIcon>
                </Flex>
                <Text
                  fontFamily="Inter"
                  fontSize="16px"
                  fontWeight="400"
                  color="rgba(4,125,149,1)"
                  lineHeight="24px"
                  textAlign="left"
                  display="block"
                  direction="column"
                  justifyContent="unset"
                  letterSpacing="0.01px"
                  width="100px"
                  height="unset"
                  gap="unset"
                  alignItems="unset"
                  shrink="0"
                  position="relative"
                  padding="0px 0px 0px 0px"
                  whiteSpace="pre-wrap"
                  children="Posts"
                  onClick={() => {
                    labelThreeEightFourSevenFourEightSixEightOnClick();
                  }}
                  {...getOverrideProps(overrides, "label38474868")}
                ></Text>
              </Flex>
              <Flex
                gap="8px"
                direction="row"
                width="unset"
                height="unset"
                justifyContent="flex-start"
                alignItems="center"
                shrink="0"
                position="relative"
                padding="0px 0px 0px 0px"
                {...getOverrideProps(overrides, "link38474869")}
              >
                <Flex
                  gap="0"
                  direction="row"
                  width="unset"
                  height="unset"
                  justifyContent="flex-start"
                  alignItems="flex-start"
                  shrink="0"
                  position="relative"
                  borderRadius="4px"
                  padding="6px 6px 6px 6px"
                  backgroundColor="rgba(233,249,252,1)"
                  {...getOverrideProps(overrides, "icon38474870")}
                >
                  <MyIcon
                    width="18px"
                    height="18px"
                    display="block"
                    gap="unset"
                    alignItems="unset"
                    justifyContent="unset"
                    overflow="hidden"
                    shrink="0"
                    position="relative"
                    padding="0px 0px 0px 0px"
                    type="file"
                    {...getOverrideProps(overrides, "MyIcon38474871")}
                  ></MyIcon>
                </Flex>
                <Text
                  fontFamily="Inter"
                  fontSize="16px"
                  fontWeight="400"
                  color="rgba(4,125,149,1)"
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
                  children="My Posts"
                  onClick={() => {
                    labelThreeEightFourSevenFourEightSevenTwoOnClick();
                  }}
                  {...getOverrideProps(overrides, "label38474872")}
                ></Text>
              </Flex>
            </Flex>
            <Flex
              gap="16px"
              direction="column"
              width="unset"
              height="unset"
              justifyContent="flex-start"
              alignItems="flex-start"
              shrink="0"
              position="relative"
              padding="0px 0px 0px 0px"
              {...getOverrideProps(overrides, "Section38474873")}
            >
              <Text
                fontFamily="Inter"
                fontSize="16px"
                fontWeight="600"
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
                children="Set up"
                {...getOverrideProps(overrides, "label38474874")}
              ></Text>
              <Flex
                gap="8px"
                direction="row"
                width="unset"
                height="unset"
                justifyContent="flex-start"
                alignItems="center"
                shrink="0"
                position="relative"
                padding="0px 0px 0px 0px"
                {...getOverrideProps(overrides, "link38474875")}
              >
                <Flex
                  gap="0"
                  direction="row"
                  width="unset"
                  height="unset"
                  justifyContent="flex-start"
                  alignItems="flex-start"
                  shrink="0"
                  position="relative"
                  borderRadius="4px"
                  padding="6px 6px 6px 6px"
                  backgroundColor="rgba(233,249,252,1)"
                  {...getOverrideProps(overrides, "icon38474876")}
                >
                  <MyIcon
                    width="18px"
                    height="18px"
                    display="block"
                    gap="unset"
                    alignItems="unset"
                    justifyContent="unset"
                    overflow="hidden"
                    shrink="0"
                    position="relative"
                    padding="0px 0px 0px 0px"
                    type="data"
                    {...getOverrideProps(overrides, "MyIcon38474877")}
                  ></MyIcon>
                </Flex>
                <Text
                  fontFamily="Inter"
                  fontSize="16px"
                  fontWeight="400"
                  color="rgba(4,125,149,1)"
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
                  children="Data"
                  {...getOverrideProps(overrides, "label38474878")}
                ></Text>
              </Flex>
              <Flex
                gap="8px"
                direction="row"
                width="unset"
                height="unset"
                justifyContent="flex-start"
                alignItems="center"
                shrink="0"
                position="relative"
                padding="0px 0px 0px 0px"
                {...getOverrideProps(overrides, "link38474879")}
              >
                <Flex
                  gap="0"
                  direction="row"
                  width="unset"
                  height="unset"
                  justifyContent="flex-start"
                  alignItems="flex-start"
                  shrink="0"
                  position="relative"
                  borderRadius="4px"
                  padding="6px 6px 6px 6px"
                  backgroundColor="rgba(233,249,252,1)"
                  {...getOverrideProps(overrides, "icon38474880")}
                >
                  <MyIcon
                    width="18px"
                    height="18px"
                    display="block"
                    gap="unset"
                    alignItems="unset"
                    justifyContent="unset"
                    overflow="hidden"
                    shrink="0"
                    position="relative"
                    padding="0px 0px 0px 0px"
                    type="storage"
                    {...getOverrideProps(overrides, "MyIcon38474881")}
                  ></MyIcon>
                </Flex>
                <Text
                  fontFamily="Inter"
                  fontSize="16px"
                  fontWeight="400"
                  color="rgba(4,125,149,1)"
                  lineHeight="24px"
                  textAlign="left"
                  display="block"
                  direction="column"
                  justifyContent="unset"
                  letterSpacing="0.01px"
                  width="100px"
                  height="unset"
                  gap="unset"
                  alignItems="unset"
                  shrink="0"
                  position="relative"
                  padding="0px 0px 0px 0px"
                  whiteSpace="pre-wrap"
                  children="Storage"
                  {...getOverrideProps(overrides, "label38474882")}
                ></Text>
              </Flex>
              <Flex
                gap="8px"
                direction="row"
                width="unset"
                height="unset"
                justifyContent="flex-start"
                alignItems="center"
                shrink="0"
                position="relative"
                padding="0px 0px 0px 0px"
                {...getOverrideProps(overrides, "link38474883")}
              >
                <Flex
                  gap="0"
                  direction="row"
                  width="unset"
                  height="unset"
                  justifyContent="flex-start"
                  alignItems="flex-start"
                  shrink="0"
                  position="relative"
                  borderRadius="4px"
                  padding="6px 6px 6px 6px"
                  backgroundColor="rgba(233,249,252,1)"
                  {...getOverrideProps(overrides, "icon38474884")}
                >
                  <MyIcon
                    width="18px"
                    height="18px"
                    display="block"
                    gap="unset"
                    alignItems="unset"
                    justifyContent="unset"
                    overflow="hidden"
                    shrink="0"
                    position="relative"
                    padding="0px 0px 0px 0px"
                    type="authentication"
                    {...getOverrideProps(overrides, "MyIcon38474885")}
                  ></MyIcon>
                </Flex>
                <Text
                  fontFamily="Inter"
                  fontSize="16px"
                  fontWeight="400"
                  color="rgba(4,125,149,1)"
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
                  children="Authentication"
                  {...getOverrideProps(overrides, "label38474886")}
                ></Text>
              </Flex>
            </Flex>
          </Flex>
          <Flex
            gap="32px"
            direction="column"
            width="unset"
            height="unset"
            justifyContent="flex-start"
            alignItems="flex-start"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            {...getOverrideProps(overrides, "Frame 32138474887")}
          >
            <Flex
              gap="9px"
              direction="row"
              width="385px"
              height="unset"
              justifyContent="flex-start"
              alignItems="center"
              shrink="0"
              position="relative"
              padding="0px 32px 0px 32px"
              onClick={() => {
                frameFourOneSixOnClick();
              }}
              {...getOverrideProps(overrides, "Frame 416")}
            >
              <Flex
                gap="16px"
                direction="row"
                width="unset"
                height="unset"
                justifyContent="flex-start"
                alignItems="center"
                grow="1"
                shrink="1"
                basis="0"
                position="relative"
                padding="0px 0px 0px 0px"
                {...getOverrideProps(overrides, "Frame 415")}
              >
                <Image
                  width="48px"
                  height="48px"
                  display="block"
                  gap="unset"
                  alignItems="unset"
                  justifyContent="unset"
                  shrink="0"
                  position="relative"
                  borderRadius="40px"
                  padding="0px 0px 0px 0px"
                  objectFit="cover"
                  src={imageKey}
                  {...getOverrideProps(overrides, "Rectangle 1163")}
                ></Image>
                <Flex
                  gap="0"
                  direction="column"
                  width="100px"
                  height="unset"
                  justifyContent="flex-start"
                  alignItems="flex-start"
                  shrink="0"
                  position="relative"
                  padding="0px 0px 0px 0px"
                  {...getOverrideProps(overrides, "Frame 32138474891")}
                >
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
                    children={authAttributes["name"]}
                    {...getOverrideProps(overrides, "Wesley Peck")}
                  ></Text>
                </Flex>
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
                type="settings"
                {...getOverrideProps(overrides, "MyIcon38474893")}
              ></MyIcon>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
}
