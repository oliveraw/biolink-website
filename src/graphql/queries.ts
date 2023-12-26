/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedQuery<InputType, OutputType> = string & {
  __generatedQueryInput: InputType;
  __generatedQueryOutput: OutputType;
};

export const sendVerificationCode = /* GraphQL */ `query SendVerificationCode(
  $phone: String!
  $languageCode: String!
  $code: String!
) {
  sendVerificationCode(phone: $phone, languageCode: $languageCode, code: $code)
}
` as GeneratedQuery<
  APITypes.SendVerificationCodeQueryVariables,
  APITypes.SendVerificationCodeQuery
>;
export const getPatient = /* GraphQL */ `query GetPatient($id: ID!) {
  getPatient(id: $id) {
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
    appointments {
      date
    }
    psas {
      score
      date
    }
    notes {
      content
      date
    }
    languageCode
    notify
    createdAt
    updatedAt
  }
}
` as GeneratedQuery<
  APITypes.GetPatientQueryVariables,
  APITypes.GetPatientQuery
>;
export const listPatients = /* GraphQL */ `query ListPatients(
  $id: ID
  $filter: ModelPatientFilterInput
  $limit: Int
  $nextToken: String
  $sortDirection: ModelSortDirection
) {
  listPatients(
    id: $id
    filter: $filter
    limit: $limit
    nextToken: $nextToken
    sortDirection: $sortDirection
  ) {
    items {
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
      languageCode
      notify
      createdAt
      updatedAt
    }
    nextToken
  }
}
` as GeneratedQuery<
  APITypes.ListPatientsQueryVariables,
  APITypes.ListPatientsQuery
>;
export const patientsByName = /* GraphQL */ `query PatientsByName(
  $name: String!
  $sortDirection: ModelSortDirection
  $filter: ModelPatientFilterInput
  $limit: Int
  $nextToken: String
) {
  patientsByName(
    name: $name
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
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
      languageCode
      notify
      createdAt
      updatedAt
    }
    nextToken
  }
}
` as GeneratedQuery<
  APITypes.PatientsByNameQueryVariables,
  APITypes.PatientsByNameQuery
>;
