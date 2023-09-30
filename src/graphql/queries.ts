/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedQuery<InputType, OutputType> = string & {
  __generatedQueryInput: InputType;
  __generatedQueryOutput: OutputType;
};

export const getPatient = /* GraphQL */ `query GetPatient($id: ID!) {
  getPatient(id: $id) {
    patientName
    patientPhone
    patientEmail
    patientSex
    patientRace
    patientBirthday
    psas
    biomarker
    stage
    status
    visitDates
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
      patientName
      patientPhone
      patientEmail
      patientSex
      patientRace
      patientBirthday
      psas
      biomarker
      stage
      status
      visitDates
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
export const patientsByPatientName = /* GraphQL */ `query PatientsByPatientName(
  $patientName: String!
  $sortDirection: ModelSortDirection
  $filter: ModelPatientFilterInput
  $limit: Int
  $nextToken: String
) {
  patientsByPatientName(
    patientName: $patientName
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      owner
      patientName
      patientPhone
      patientEmail
      patientSex
      patientRace
      patientBirthday
      psas
      biomarker
      stage
      status
      visitDates
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
  APITypes.PatientsByPatientNameQueryVariables,
  APITypes.PatientsByPatientNameQuery
>;
