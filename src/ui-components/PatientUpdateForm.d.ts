/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, SelectFieldProps, SwitchFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
import { Patient } from "../API.ts";
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
export declare type PatientUpdateFormInputValues = {
    owner?: string;
    name?: string;
    phone?: string;
    birthday?: string;
    email?: string;
    sex?: string;
    race?: string;
    psas?: number[];
    biomarker?: string;
    stage?: string;
    status?: string;
    visitDates?: string[];
    language_code?: string;
    notify?: boolean;
};
export declare type PatientUpdateFormValidationValues = {
    owner?: ValidationFunction<string>;
    name?: ValidationFunction<string>;
    phone?: ValidationFunction<string>;
    birthday?: ValidationFunction<string>;
    email?: ValidationFunction<string>;
    sex?: ValidationFunction<string>;
    race?: ValidationFunction<string>;
    psas?: ValidationFunction<number>;
    biomarker?: ValidationFunction<string>;
    stage?: ValidationFunction<string>;
    status?: ValidationFunction<string>;
    visitDates?: ValidationFunction<string>;
    language_code?: ValidationFunction<string>;
    notify?: ValidationFunction<boolean>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type PatientUpdateFormOverridesProps = {
    PatientUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    owner?: PrimitiveOverrideProps<TextFieldProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
    phone?: PrimitiveOverrideProps<TextFieldProps>;
    birthday?: PrimitiveOverrideProps<TextFieldProps>;
    email?: PrimitiveOverrideProps<TextFieldProps>;
    sex?: PrimitiveOverrideProps<TextFieldProps>;
    race?: PrimitiveOverrideProps<TextFieldProps>;
    psas?: PrimitiveOverrideProps<TextFieldProps>;
    biomarker?: PrimitiveOverrideProps<TextFieldProps>;
    stage?: PrimitiveOverrideProps<SelectFieldProps>;
    status?: PrimitiveOverrideProps<SelectFieldProps>;
    visitDates?: PrimitiveOverrideProps<TextFieldProps>;
    language_code?: PrimitiveOverrideProps<TextFieldProps>;
    notify?: PrimitiveOverrideProps<SwitchFieldProps>;
} & EscapeHatchProps;
export declare type PatientUpdateFormProps = React.PropsWithChildren<{
    overrides?: PatientUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    patient?: Patient;
    onSubmit?: (fields: PatientUpdateFormInputValues) => PatientUpdateFormInputValues;
    onSuccess?: (fields: PatientUpdateFormInputValues) => void;
    onError?: (fields: PatientUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: PatientUpdateFormInputValues) => PatientUpdateFormInputValues;
    onValidate?: PatientUpdateFormValidationValues;
} & React.CSSProperties>;
export default function PatientUpdateForm(props: PatientUpdateFormProps): React.ReactElement;
