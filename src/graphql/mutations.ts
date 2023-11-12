/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedMutation<InputType, OutputType> = string & {
  __generatedMutationInput: InputType;
  __generatedMutationOutput: OutputType;
};

export const createPatient = /* GraphQL */ `mutation CreatePatient(
  $input: CreatePatientInput!
  $condition: ModelPatientConditionInput
) {
  createPatient(input: $input, condition: $condition) {
    owner
    name
    phone
    birthday
    email
    sex
    race
    psas
    biomarker
    stage
    status
    visitDates
    notify
    id
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreatePatientMutationVariables,
  APITypes.CreatePatientMutation
>;
export const updatePatient = /* GraphQL */ `mutation UpdatePatient(
  $input: UpdatePatientInput!
  $condition: ModelPatientConditionInput
) {
  updatePatient(input: $input, condition: $condition) {
    owner
    name
    phone
    birthday
    email
    sex
    race
    psas
    biomarker
    stage
    status
    visitDates
    notify
    id
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdatePatientMutationVariables,
  APITypes.UpdatePatientMutation
>;
export const deletePatient = /* GraphQL */ `mutation DeletePatient(
  $input: DeletePatientInput!
  $condition: ModelPatientConditionInput
) {
  deletePatient(input: $input, condition: $condition) {
    owner
    name
    phone
    birthday
    email
    sex
    race
    psas
    biomarker
    stage
    status
    visitDates
    notify
    id
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeletePatientMutationVariables,
  APITypes.DeletePatientMutation
>;
