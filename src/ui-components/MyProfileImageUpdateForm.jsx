/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { Button, Divider, Flex, Grid, Heading } from "@aws-amplify/ui-react";
import { StorageManager } from "@aws-amplify/ui-react-storage";
import { Field, getOverrideProps } from "@aws-amplify/ui-react/internal";
import { ProfileImage } from "../models";
import { fetchByPath, processFile, validateField } from "./utils";
import { DataStore } from "aws-amplify";
export default function MyProfileImageUpdateForm(props) {
  const {
    clearOnSuccess = true,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    imageKey: undefined,
  };
  const [imageKey, setImageKey] = React.useState(initialValues.imageKey);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    setImageKey(initialValues.imageKey);
    setErrors({});
  };
  const validations = {
    imageKey: [],
  };
  const runValidationTasks = async (
    fieldName,
    currentValue,
    getDisplayValue
  ) => {
    const value =
      currentValue && getDisplayValue
        ? getDisplayValue(currentValue)
        : currentValue;
    let validationResponse = validateField(value, validations[fieldName]);
    const customValidator = fetchByPath(onValidate, fieldName);
    if (customValidator) {
      validationResponse = await customValidator(value, validationResponse);
    }
    setErrors((errors) => ({ ...errors, [fieldName]: validationResponse }));
    return validationResponse;
  };
  return (
    <Grid
      as="form"
      rowGap="15px"
      columnGap="15px"
      padding="20px"
      onSubmit={async (event) => {
        event.preventDefault();
        let modelFields = {
          imageKey,
        };
        const validationResponses = await Promise.all(
          Object.keys(validations).reduce((promises, fieldName) => {
            if (Array.isArray(modelFields[fieldName])) {
              promises.push(
                ...modelFields[fieldName].map((item) =>
                  runValidationTasks(fieldName, item)
                )
              );
              return promises;
            }
            promises.push(
              runValidationTasks(fieldName, modelFields[fieldName])
            );
            return promises;
          }, [])
        );
        if (validationResponses.some((r) => r.hasError)) {
          return;
        }
        if (onSubmit) {
          modelFields = onSubmit(modelFields);
        }
        try {
          Object.entries(modelFields).forEach(([key, value]) => {
            if (typeof value === "string" && value === "") {
              modelFields[key] = null;
            }
          });
          const modelFieldsToSave = {};
          await DataStore.save(new ProfileImage(modelFieldsToSave));
          if (onSuccess) {
            onSuccess(modelFields);
          }
          if (clearOnSuccess) {
            resetStateValues();
          }
        } catch (err) {
          if (onError) {
            onError(modelFields, err.message);
          }
        }
      }}
      {...getOverrideProps(overrides, "MyProfileImageUpdateForm")}
      {...rest}
    >
      <Divider
        orientation="horizontal"
        {...getOverrideProps(overrides, "SectionalElement0")}
      ></Divider>
      <Heading
        children="Edit Profile Picture"
        {...getOverrideProps(overrides, "SectionalElement1")}
      ></Heading>
      <Field
        errorMessage={errors.imageKey?.errorMessage}
        hasError={errors.imageKey?.hasError}
        label={"Upload new Image"}
      >
        <StorageManager
          onUploadSuccess={({ key }) => {
            setImageKey((prev) => {
              let value = key;
              if (onChange) {
                const modelFields = {
                  imageKey: value,
                };
                const result = onChange(modelFields);
                value = result?.imageKey ?? value;
              }
              return value;
            });
          }}
          onFileRemove={({ key }) => {
            setImageKey((prev) => {
              let value = initialValues?.imageKey;
              if (onChange) {
                const modelFields = {
                  imageKey: value,
                };
                const result = onChange(modelFields);
                value = result?.imageKey ?? value;
              }
              return value;
            });
          }}
          processFile={processFile}
          accessLevel={"public"}
          acceptedFileTypes={["image/*"]}
          isResumable={false}
          showThumbnails={true}
          maxFileCount={1}
          {...getOverrideProps(overrides, "imageKey")}
        ></StorageManager>
      </Field>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Clear"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          {...getOverrideProps(overrides, "ClearButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Upload"
            type="submit"
            variation="primary"
            isDisabled={Object.values(errors).some((e) => e?.hasError)}
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
