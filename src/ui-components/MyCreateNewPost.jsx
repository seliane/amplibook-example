/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Flex, Icon, Text, View } from "@aws-amplify/ui-react";
export default function MyCreateNewPost(props) {
  const { overrides, ...rest } = props;
  return (
    <Flex
      gap="24px"
      direction="column"
      width="296px"
      height="85px"
      justifyContent="center"
      alignItems="flex-start"
      overflow="hidden"
      position="relative"
      padding="24px 24px 24px 24px"
      backgroundColor="rgba(255,255,255,1)"
      {...getOverrideProps(overrides, "MyCreateNewPost")}
      {...rest}
    >
      <Flex
        gap="8px"
        direction="row"
        width="155px"
        height="unset"
        justifyContent="flex-start"
        alignItems="center"
        shrink="0"
        position="relative"
        border="1px SOLID rgba(0,0,0,0)"
        borderRadius="4px"
        padding="7px 15px 7px 15px"
        backgroundColor="rgba(4,125,149,1)"
        {...getOverrideProps(overrides, "Button")}
      >
        <View
          width="20px"
          height="20px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          overflow="hidden"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "Button Icon")}
        >
          <Icon
            width="11.67px"
            height="11.67px"
            viewBox={{
              minX: 0,
              minY: 0,
              width: 11.6669921875,
              height: 11.66668701171875,
            }}
            paths={[
              {
                d: "M11.6667 6.66667L6.66667 6.66667L6.66667 11.6667L5 11.6667L5 6.66667L0 6.66667L0 5L5 5L5 0L6.66667 0L6.66667 5L11.6667 5L11.6667 6.66667Z",
                fill: "rgba(255,255,255,1)",
                fillRule: "nonzero",
              },
            ]}
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            position="absolute"
            top="18.75%"
            bottom="22.92%"
            left="18.75%"
            right="22.92%"
            {...getOverrideProps(overrides, "Vector")}
          ></Icon>
        </View>
        <Text
          fontFamily="Inter"
          fontSize="16px"
          fontWeight="700"
          color="rgba(255,255,255,1)"
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
          children="New Post"
          {...getOverrideProps(overrides, "label")}
        ></Text>
      </Flex>
    </Flex>
  );
}
