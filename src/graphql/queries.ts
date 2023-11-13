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
  $language_code: String!
  $code: String!
) {
  sendVerificationCode(
    phone: $phone
    language_code: $language_code
    code: $code
  )
}
` as GeneratedQuery<
  APITypes.SendVerificationCodeQueryVariables,
  APITypes.SendVerificationCodeQuery
>;
export const getPatient = /* GraphQL */ `query GetPatient($id: ID!) {
  getPatient(id: $id) {
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
    language_code
    notify
    id
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetPatientQueryVariables,
  APITypes.GetPatientQuery
>;
export const listPatients = /* GraphQL */ `query ListPatients(
  $filter: ModelPatientFilterInput
  $limit: Int
  $nextToken: String
) {
  listPatients(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
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
      language_code
      notify
      id
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
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
      language_code
      notify
      id
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.PatientsByNameQueryVariables,
  APITypes.PatientsByNameQuery
>;
