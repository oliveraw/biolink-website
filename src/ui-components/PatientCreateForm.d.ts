/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, SelectFieldProps, SwitchFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
export declare type EscapeHatchProps = {
    [elementHierarchy: string]: Record<string, unknown>;
} | null;
export declare type VariantValues = {
    [key: string]: string;
};
export declare type Variant = {
    variantValues: VariantValues;
    overrides: EscapeHatchProps;
};
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type PatientCreateFormInputValues = {
    owner?: string;
    name?: string;
    phone?: string;
    birthday?: string;
    email?: string;
    sex?: string;
    race?: string;
    psas?: number[];
    psaDates?: string[];
    psaReminderDates?: string[];
    biomarker?: string;
    pipelineStage?: string;
    cancerStage?: string;
    treatment?: string;
    status?: string;
    visitDates?: string[];
    language_code?: string;
    notify?: boolean;
};
export declare type PatientCreateFormValidationValues = {
    owner?: ValidationFunction<string>;
    name?: ValidationFunction<string>;
    phone?: ValidationFunction<string>;
    birthday?: ValidationFunction<string>;
    email?: ValidationFunction<string>;
    sex?: ValidationFunction<string>;
    race?: ValidationFunction<string>;
    psas?: ValidationFunction<number>;
    psaDates?: ValidationFunction<string>;
    psaReminderDates?: ValidationFunction<string>;
    biomarker?: ValidationFunction<string>;
    pipelineStage?: ValidationFunction<string>;
    cancerStage?: ValidationFunction<string>;
    treatment?: ValidationFunction<string>;
    status?: ValidationFunction<string>;
    visitDates?: ValidationFunction<string>;
    language_code?: ValidationFunction<string>;
    notify?: ValidationFunction<boolean>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type PatientCreateFormOverridesProps = {
    PatientCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    owner?: PrimitiveOverrideProps<TextFieldProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
    phone?: PrimitiveOverrideProps<TextFieldProps>;
    birthday?: PrimitiveOverrideProps<TextFieldProps>;
    email?: PrimitiveOverrideProps<TextFieldProps>;
    sex?: PrimitiveOverrideProps<TextFieldProps>;
    race?: PrimitiveOverrideProps<TextFieldProps>;
    psas?: PrimitiveOverrideProps<TextFieldProps>;
    psaDates?: PrimitiveOverrideProps<TextFieldProps>;
    psaReminderDates?: PrimitiveOverrideProps<TextFieldProps>;
    biomarker?: PrimitiveOverrideProps<TextFieldProps>;
    pipelineStage?: PrimitiveOverrideProps<SelectFieldProps>;
    cancerStage?: PrimitiveOverrideProps<SelectFieldProps>;
    treatment?: PrimitiveOverrideProps<SelectFieldProps>;
    status?: PrimitiveOverrideProps<SelectFieldProps>;
    visitDates?: PrimitiveOverrideProps<TextFieldProps>;
    language_code?: PrimitiveOverrideProps<TextFieldProps>;
    notify?: PrimitiveOverrideProps<SwitchFieldProps>;
} & EscapeHatchProps;
export declare type PatientCreateFormProps = React.PropsWithChildren<{
    overrides?: PatientCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: PatientCreateFormInputValues) => PatientCreateFormInputValues;
    onSuccess?: (fields: PatientCreateFormInputValues) => void;
    onError?: (fields: PatientCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: PatientCreateFormInputValues) => PatientCreateFormInputValues;
    onValidate?: PatientCreateFormValidationValues;
} & React.CSSProperties>;
export default function PatientCreateForm(props: PatientCreateFormProps): React.ReactElement;
