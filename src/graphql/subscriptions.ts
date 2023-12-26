/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedSubscription<InputType, OutputType> = string & {
  __generatedSubscriptionInput: InputType;
  __generatedSubscriptionOutput: OutputType;
};

export const onCreatePatient = /* GraphQL */ `subscription OnCreatePatient(
  $filter: ModelSubscriptionPatientFilterInput
  $owner: String
) {
  onCreatePatient(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnCreatePatientSubscriptionVariables,
  APITypes.OnCreatePatientSubscription
>;
export const onUpdatePatient = /* GraphQL */ `subscription OnUpdatePatient(
  $filter: ModelSubscriptionPatientFilterInput
  $owner: String
) {
  onUpdatePatient(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnUpdatePatientSubscriptionVariables,
  APITypes.OnUpdatePatientSubscription
>;
export const onDeletePatient = /* GraphQL */ `subscription OnDeletePatient(
  $filter: ModelSubscriptionPatientFilterInput
  $owner: String
) {
  onDeletePatient(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnDeletePatientSubscriptionVariables,
  APITypes.OnDeletePatientSubscription
>;
