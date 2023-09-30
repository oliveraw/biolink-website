/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, SelectFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { Patient } from "../API.ts";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type PatientUpdateFormInputValues = {
    owner?: string;
    patientName?: string;
    patientPhone?: string;
    patientEmail?: string;
    patientSex?: string;
    patientRace?: string;
    patientBirthday?: string;
    psas?: number[];
    biomarker?: string;
    stage?: string;
    status?: string;
    visitDates?: string[];
};
export declare type PatientUpdateFormValidationValues = {
    owner?: ValidationFunction<string>;
    patientName?: ValidationFunction<string>;
    patientPhone?: ValidationFunction<string>;
    patientEmail?: ValidationFunction<string>;
    patientSex?: ValidationFunction<string>;
    patientRace?: ValidationFunction<string>;
    patientBirthday?: ValidationFunction<string>;
    psas?: ValidationFunction<number>;
    biomarker?: ValidationFunction<string>;
    stage?: ValidationFunction<string>;
    status?: ValidationFunction<string>;
    visitDates?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type PatientUpdateFormOverridesProps = {
    PatientUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    owner?: PrimitiveOverrideProps<TextFieldProps>;
    patientName?: PrimitiveOverrideProps<TextFieldProps>;
    patientPhone?: PrimitiveOverrideProps<TextFieldProps>;
    patientEmail?: PrimitiveOverrideProps<TextFieldProps>;
    patientSex?: PrimitiveOverrideProps<TextFieldProps>;
    patientRace?: PrimitiveOverrideProps<TextFieldProps>;
    patientBirthday?: PrimitiveOverrideProps<TextFieldProps>;
    psas?: PrimitiveOverrideProps<TextFieldProps>;
    biomarker?: PrimitiveOverrideProps<TextFieldProps>;
    stage?: PrimitiveOverrideProps<SelectFieldProps>;
    status?: PrimitiveOverrideProps<SelectFieldProps>;
    visitDates?: PrimitiveOverrideProps<TextFieldProps>;
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
