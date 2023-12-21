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
    id
    owner
    name
    phone
    email
    birthday
    sex
    race
    condition
    treatments
    stage
    status
    psas {
      score
      date
      __typename
    }
    appointments {
      date
      attended
      __typename
    }
    notes {
      content
      date
      __typename
    }
    languageCode
    notify
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
    id
    owner
    name
    phone
    email
    birthday
    sex
    race
    condition
    treatments
    stage
    status
    psas {
      score
      date
      __typename
    }
    appointments {
      date
      attended
      __typename
    }
    notes {
      content
      date
      __typename
    }
    languageCode
    notify
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
    id
    owner
    name
    phone
    email
    birthday
    sex
    race
    condition
    treatments
    stage
    status
    psas {
      score
      date
      __typename
    }
    appointments {
      date
      attended
      __typename
    }
    notes {
      content
      date
      __typename
    }
    languageCode
    notify
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeletePatientMutationVariables,
  APITypes.DeletePatientMutation
>;
