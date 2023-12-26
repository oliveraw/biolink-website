/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreatePatientInput = {
  id?: string | null,
  owner?: string | null,
  name: string,
  phone: string,
  email?: string | null,
  birthday?: string | null,
  sex?: string | null,
  race?: string | null,
  condition?: string | null,
  treatments: Array< string >,
  stage: Stage,
  status: Status,
<<<<<<< Updated upstream
  appointments: Array< AppointmentInput >,
  psas: Array< PSAInput >,
=======
  psas: Array< PSAInput >,
  appointments: Array< AppointmentInput >,
>>>>>>> Stashed changes
  notes: Array< NoteInput >,
  languageCode: string,
  notify: boolean,
};

export enum Stage {
  NOT_APPLICABLE = "NOT_APPLICABLE",
  INITIAL_PSA = "INITIAL_PSA",
  REPEAT_PSA = "REPEAT_PSA",
  SURVEILLANCE = "SURVEILLANCE",
  BIOMARKER = "BIOMARKER",
  UROLOGIST = "UROLOGIST",
  BIOPSY = "BIOPSY",
}


export enum Status {
  NOT_APPLICABLE = "NOT_APPLICABLE",
  PENDING = "PENDING",
  SCHEDULED = "SCHEDULED",
  COMPLETED = "COMPLETED",
}


<<<<<<< Updated upstream
export type AppointmentInput = {
  date: string,
};

=======
>>>>>>> Stashed changes
export type PSAInput = {
  score: number,
  date: string,
};

<<<<<<< Updated upstream
=======
export type AppointmentInput = {
  date: string,
  attended?: boolean | null,
};

>>>>>>> Stashed changes
export type NoteInput = {
  content: string,
  date: string,
};

export type ModelPatientConditionInput = {
  owner?: ModelStringInput | null,
  name?: ModelStringInput | null,
  phone?: ModelStringInput | null,
  email?: ModelStringInput | null,
  birthday?: ModelStringInput | null,
  sex?: ModelStringInput | null,
  race?: ModelStringInput | null,
  condition?: ModelStringInput | null,
  treatments?: ModelStringInput | null,
  stage?: ModelStageInput | null,
  status?: ModelStatusInput | null,
  languageCode?: ModelStringInput | null,
  notify?: ModelBooleanInput | null,
  and?: Array< ModelPatientConditionInput | null > | null,
  or?: Array< ModelPatientConditionInput | null > | null,
  not?: ModelPatientConditionInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type ModelStageInput = {
  eq?: Stage | null,
  ne?: Stage | null,
};

export type ModelStatusInput = {
  eq?: Status | null,
  ne?: Status | null,
};

export type ModelBooleanInput = {
  ne?: boolean | null,
  eq?: boolean | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type Patient = {
  __typename: "Patient",
  id: string,
  owner?: string | null,
  name: string,
  phone: string,
  email?: string | null,
  birthday?: string | null,
  sex?: string | null,
  race?: string | null,
  condition?: string | null,
  treatments: Array< string >,
  stage: Stage,
  status: Status,
<<<<<<< Updated upstream
  appointments:  Array<Appointment >,
  psas:  Array<PSA >,
=======
  psas:  Array<PSA >,
  appointments:  Array<Appointment >,
>>>>>>> Stashed changes
  notes:  Array<Note >,
  languageCode: string,
  notify: boolean,
  createdAt: string,
  updatedAt: string,
};

<<<<<<< Updated upstream
export type Appointment = {
  __typename: "Appointment",
  date: string,
};

=======
>>>>>>> Stashed changes
export type PSA = {
  __typename: "PSA",
  score: number,
  date: string,
};

<<<<<<< Updated upstream
=======
export type Appointment = {
  __typename: "Appointment",
  date: string,
  attended?: boolean | null,
};

>>>>>>> Stashed changes
export type Note = {
  __typename: "Note",
  content: string,
  date: string,
};

export type UpdatePatientInput = {
  id: string,
  owner?: string | null,
  name?: string | null,
  phone?: string | null,
  email?: string | null,
  birthday?: string | null,
  sex?: string | null,
  race?: string | null,
  condition?: string | null,
  treatments?: Array< string > | null,
  stage?: Stage | null,
  status?: Status | null,
<<<<<<< Updated upstream
  appointments?: Array< AppointmentInput > | null,
  psas?: Array< PSAInput > | null,
=======
  psas?: Array< PSAInput > | null,
  appointments?: Array< AppointmentInput > | null,
>>>>>>> Stashed changes
  notes?: Array< NoteInput > | null,
  languageCode?: string | null,
  notify?: boolean | null,
};

export type DeletePatientInput = {
  id: string,
};

export type ModelPatientFilterInput = {
  id?: ModelIDInput | null,
  owner?: ModelStringInput | null,
  name?: ModelStringInput | null,
  phone?: ModelStringInput | null,
  email?: ModelStringInput | null,
  birthday?: ModelStringInput | null,
  sex?: ModelStringInput | null,
  race?: ModelStringInput | null,
  condition?: ModelStringInput | null,
  treatments?: ModelStringInput | null,
  stage?: ModelStageInput | null,
  status?: ModelStatusInput | null,
  languageCode?: ModelStringInput | null,
  notify?: ModelBooleanInput | null,
  and?: Array< ModelPatientFilterInput | null > | null,
  or?: Array< ModelPatientFilterInput | null > | null,
  not?: ModelPatientFilterInput | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelSortDirection {
  ASC = "ASC",
  DESC = "DESC",
}


export type ModelPatientConnection = {
  __typename: "ModelPatientConnection",
  items:  Array<Patient | null >,
  nextToken?: string | null,
};

export type ModelSubscriptionPatientFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  phone?: ModelSubscriptionStringInput | null,
  email?: ModelSubscriptionStringInput | null,
  birthday?: ModelSubscriptionStringInput | null,
  sex?: ModelSubscriptionStringInput | null,
  race?: ModelSubscriptionStringInput | null,
  condition?: ModelSubscriptionStringInput | null,
  treatments?: ModelSubscriptionStringInput | null,
  stage?: ModelSubscriptionStringInput | null,
  status?: ModelSubscriptionStringInput | null,
  languageCode?: ModelSubscriptionStringInput | null,
  notify?: ModelSubscriptionBooleanInput | null,
  and?: Array< ModelSubscriptionPatientFilterInput | null > | null,
  or?: Array< ModelSubscriptionPatientFilterInput | null > | null,
};

export type ModelSubscriptionIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionBooleanInput = {
  ne?: boolean | null,
  eq?: boolean | null,
};

export type CreatePatientMutationVariables = {
  input: CreatePatientInput,
  condition?: ModelPatientConditionInput | null,
};

export type CreatePatientMutation = {
  createPatient?:  {
    __typename: "Patient",
    id: string,
    owner?: string | null,
    name: string,
    phone: string,
    email?: string | null,
    birthday?: string | null,
    sex?: string | null,
    race?: string | null,
    condition?: string | null,
    treatments: Array< string >,
    stage: Stage,
    status: Status,
<<<<<<< Updated upstream
    appointments:  Array< {
      __typename: "Appointment",
      date: string,
    } >,
=======
>>>>>>> Stashed changes
    psas:  Array< {
      __typename: "PSA",
      score: number,
      date: string,
    } >,
<<<<<<< Updated upstream
=======
    appointments:  Array< {
      __typename: "Appointment",
      date: string,
      attended?: boolean | null,
    } >,
>>>>>>> Stashed changes
    notes:  Array< {
      __typename: "Note",
      content: string,
      date: string,
    } >,
    languageCode: string,
    notify: boolean,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdatePatientMutationVariables = {
  input: UpdatePatientInput,
  condition?: ModelPatientConditionInput | null,
};

export type UpdatePatientMutation = {
  updatePatient?:  {
    __typename: "Patient",
    id: string,
    owner?: string | null,
    name: string,
    phone: string,
    email?: string | null,
    birthday?: string | null,
    sex?: string | null,
    race?: string | null,
    condition?: string | null,
    treatments: Array< string >,
    stage: Stage,
    status: Status,
<<<<<<< Updated upstream
    appointments:  Array< {
      __typename: "Appointment",
      date: string,
    } >,
=======
>>>>>>> Stashed changes
    psas:  Array< {
      __typename: "PSA",
      score: number,
      date: string,
    } >,
<<<<<<< Updated upstream
=======
    appointments:  Array< {
      __typename: "Appointment",
      date: string,
      attended?: boolean | null,
    } >,
>>>>>>> Stashed changes
    notes:  Array< {
      __typename: "Note",
      content: string,
      date: string,
    } >,
    languageCode: string,
    notify: boolean,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeletePatientMutationVariables = {
  input: DeletePatientInput,
  condition?: ModelPatientConditionInput | null,
};

export type DeletePatientMutation = {
  deletePatient?:  {
    __typename: "Patient",
    id: string,
    owner?: string | null,
    name: string,
    phone: string,
    email?: string | null,
    birthday?: string | null,
    sex?: string | null,
    race?: string | null,
    condition?: string | null,
    treatments: Array< string >,
    stage: Stage,
    status: Status,
<<<<<<< Updated upstream
    appointments:  Array< {
      __typename: "Appointment",
      date: string,
    } >,
=======
>>>>>>> Stashed changes
    psas:  Array< {
      __typename: "PSA",
      score: number,
      date: string,
    } >,
<<<<<<< Updated upstream
=======
    appointments:  Array< {
      __typename: "Appointment",
      date: string,
      attended?: boolean | null,
    } >,
>>>>>>> Stashed changes
    notes:  Array< {
      __typename: "Note",
      content: string,
      date: string,
    } >,
    languageCode: string,
    notify: boolean,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type SendVerificationCodeQueryVariables = {
  phone: string,
  languageCode: string,
  code: string,
};

export type SendVerificationCodeQuery = {
  sendVerificationCode?: string | null,
};

export type GetPatientQueryVariables = {
  id: string,
};

export type GetPatientQuery = {
  getPatient?:  {
    __typename: "Patient",
    id: string,
    owner?: string | null,
    name: string,
    phone: string,
    email?: string | null,
    birthday?: string | null,
    sex?: string | null,
    race?: string | null,
    condition?: string | null,
    treatments: Array< string >,
    stage: Stage,
    status: Status,
<<<<<<< Updated upstream
    appointments:  Array< {
      __typename: "Appointment",
      date: string,
    } >,
=======
>>>>>>> Stashed changes
    psas:  Array< {
      __typename: "PSA",
      score: number,
      date: string,
    } >,
<<<<<<< Updated upstream
=======
    appointments:  Array< {
      __typename: "Appointment",
      date: string,
      attended?: boolean | null,
    } >,
>>>>>>> Stashed changes
    notes:  Array< {
      __typename: "Note",
      content: string,
      date: string,
    } >,
    languageCode: string,
    notify: boolean,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListPatientsQueryVariables = {
  id?: string | null,
  filter?: ModelPatientFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  sortDirection?: ModelSortDirection | null,
};

export type ListPatientsQuery = {
  listPatients?:  {
    __typename: "ModelPatientConnection",
    items:  Array< {
      __typename: "Patient",
      id: string,
      owner?: string | null,
      name: string,
      phone: string,
      email?: string | null,
      birthday?: string | null,
      sex?: string | null,
      race?: string | null,
      condition?: string | null,
      treatments: Array< string >,
      stage: Stage,
      status: Status,
      languageCode: string,
      notify: boolean,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type PatientsByNameQueryVariables = {
  name: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelPatientFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type PatientsByNameQuery = {
  patientsByName?:  {
    __typename: "ModelPatientConnection",
    items:  Array< {
      __typename: "Patient",
      id: string,
      owner?: string | null,
      name: string,
      phone: string,
      email?: string | null,
      birthday?: string | null,
      sex?: string | null,
      race?: string | null,
      condition?: string | null,
      treatments: Array< string >,
      stage: Stage,
      status: Status,
      languageCode: string,
      notify: boolean,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type OnCreatePatientSubscriptionVariables = {
  filter?: ModelSubscriptionPatientFilterInput | null,
  owner?: string | null,
};

export type OnCreatePatientSubscription = {
  onCreatePatient?:  {
    __typename: "Patient",
    id: string,
    owner?: string | null,
    name: string,
    phone: string,
    email?: string | null,
    birthday?: string | null,
    sex?: string | null,
    race?: string | null,
    condition?: string | null,
    treatments: Array< string >,
    stage: Stage,
    status: Status,
<<<<<<< Updated upstream
    appointments:  Array< {
      __typename: "Appointment",
      date: string,
    } >,
=======
>>>>>>> Stashed changes
    psas:  Array< {
      __typename: "PSA",
      score: number,
      date: string,
    } >,
<<<<<<< Updated upstream
=======
    appointments:  Array< {
      __typename: "Appointment",
      date: string,
      attended?: boolean | null,
    } >,
>>>>>>> Stashed changes
    notes:  Array< {
      __typename: "Note",
      content: string,
      date: string,
    } >,
    languageCode: string,
    notify: boolean,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdatePatientSubscriptionVariables = {
  filter?: ModelSubscriptionPatientFilterInput | null,
  owner?: string | null,
};

export type OnUpdatePatientSubscription = {
  onUpdatePatient?:  {
    __typename: "Patient",
    id: string,
    owner?: string | null,
    name: string,
    phone: string,
    email?: string | null,
    birthday?: string | null,
    sex?: string | null,
    race?: string | null,
    condition?: string | null,
    treatments: Array< string >,
    stage: Stage,
    status: Status,
<<<<<<< Updated upstream
    appointments:  Array< {
      __typename: "Appointment",
      date: string,
    } >,
=======
>>>>>>> Stashed changes
    psas:  Array< {
      __typename: "PSA",
      score: number,
      date: string,
    } >,
<<<<<<< Updated upstream
=======
    appointments:  Array< {
      __typename: "Appointment",
      date: string,
      attended?: boolean | null,
    } >,
>>>>>>> Stashed changes
    notes:  Array< {
      __typename: "Note",
      content: string,
      date: string,
    } >,
    languageCode: string,
    notify: boolean,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeletePatientSubscriptionVariables = {
  filter?: ModelSubscriptionPatientFilterInput | null,
  owner?: string | null,
};

export type OnDeletePatientSubscription = {
  onDeletePatient?:  {
    __typename: "Patient",
    id: string,
    owner?: string | null,
    name: string,
    phone: string,
    email?: string | null,
    birthday?: string | null,
    sex?: string | null,
    race?: string | null,
    condition?: string | null,
    treatments: Array< string >,
    stage: Stage,
    status: Status,
<<<<<<< Updated upstream
    appointments:  Array< {
      __typename: "Appointment",
      date: string,
    } >,
=======
>>>>>>> Stashed changes
    psas:  Array< {
      __typename: "PSA",
      score: number,
      date: string,
    } >,
<<<<<<< Updated upstream
=======
    appointments:  Array< {
      __typename: "Appointment",
      date: string,
      attended?: boolean | null,
    } >,
>>>>>>> Stashed changes
    notes:  Array< {
      __typename: "Note",
      content: string,
      date: string,
    } >,
    languageCode: string,
    notify: boolean,
    createdAt: string,
    updatedAt: string,
  } | null,
};
