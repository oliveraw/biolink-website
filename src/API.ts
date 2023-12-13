/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreatePatientInput = {
  owner?: string | null,
  name: string,
  phone: string,
  birthday: string,
  email: string,
  sex: string,
  race: string,
  psas: Array< number >,
  biomarker?: string | null,
  pipelineStage: PipelineStage,
  cancerStage: CancerStage,
  treatment: Treatment,
  status: PatientStatus,
  visitDates: Array< string >,
  language_code: string,
  notify: boolean,
  id?: string | null,
};

export enum PipelineStage {
  CREATED = "CREATED",
  PSA1 = "PSA1",
  PSA2 = "PSA2",
  BIOMARKER = "BIOMARKER",
  UROLOGIST = "UROLOGIST",
  BIOPSY = "BIOPSY",
  REPEAT_PSA = "REPEAT_PSA",
  OTHER = "OTHER",
}


export enum CancerStage {
  NOT_APPLICABLE = "NOT_APPLICABLE",
  T1 = "T1",
  T2 = "T2",
  T3 = "T3",
}


export enum Treatment {
  NOT_APPLICABLE = "NOT_APPLICABLE",
  SURGERY = "SURGERY",
  RADIATION = "RADIATION",
  ADT = "ADT",
}


export enum PatientStatus {
  COMPLETED = "COMPLETED",
  SCHEDULED = "SCHEDULED",
  PENDING = "PENDING",
}


export type ModelPatientConditionInput = {
  owner?: ModelStringInput | null,
  name?: ModelStringInput | null,
  phone?: ModelStringInput | null,
  birthday?: ModelStringInput | null,
  email?: ModelStringInput | null,
  sex?: ModelStringInput | null,
  race?: ModelStringInput | null,
  psas?: ModelFloatInput | null,
  biomarker?: ModelStringInput | null,
  pipelineStage?: ModelPipelineStageInput | null,
  cancerStage?: ModelCancerStageInput | null,
  treatment?: ModelTreatmentInput | null,
  status?: ModelPatientStatusInput | null,
  visitDates?: ModelStringInput | null,
  language_code?: ModelStringInput | null,
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

export type ModelFloatInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type ModelPipelineStageInput = {
  eq?: PipelineStage | null,
  ne?: PipelineStage | null,
};

export type ModelCancerStageInput = {
  eq?: CancerStage | null,
  ne?: CancerStage | null,
};

export type ModelTreatmentInput = {
  eq?: Treatment | null,
  ne?: Treatment | null,
};

export type ModelPatientStatusInput = {
  eq?: PatientStatus | null,
  ne?: PatientStatus | null,
};

export type ModelBooleanInput = {
  ne?: boolean | null,
  eq?: boolean | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type Patient = {
  __typename: "Patient",
  owner?: string | null,
  name: string,
  phone: string,
  birthday: string,
  email: string,
  sex: string,
  race: string,
  psas: Array< number >,
  biomarker?: string | null,
  pipelineStage: PipelineStage,
  cancerStage: CancerStage,
  treatment: Treatment,
  status: PatientStatus,
  visitDates: Array< string >,
  language_code: string,
  notify: boolean,
  id: string,
  createdAt: string,
  updatedAt: string,
};

export type UpdatePatientInput = {
  owner?: string | null,
  name?: string | null,
  phone?: string | null,
  birthday?: string | null,
  email?: string | null,
  sex?: string | null,
  race?: string | null,
  psas?: Array< number > | null,
  biomarker?: string | null,
  pipelineStage?: PipelineStage | null,
  cancerStage?: CancerStage | null,
  treatment?: Treatment | null,
  status?: PatientStatus | null,
  visitDates?: Array< string > | null,
  language_code?: string | null,
  notify?: boolean | null,
  id: string,
};

export type DeletePatientInput = {
  id: string,
};

export type ModelPatientFilterInput = {
  owner?: ModelStringInput | null,
  name?: ModelStringInput | null,
  phone?: ModelStringInput | null,
  birthday?: ModelStringInput | null,
  email?: ModelStringInput | null,
  sex?: ModelStringInput | null,
  race?: ModelStringInput | null,
  psas?: ModelFloatInput | null,
  biomarker?: ModelStringInput | null,
  pipelineStage?: ModelPipelineStageInput | null,
  cancerStage?: ModelCancerStageInput | null,
  treatment?: ModelTreatmentInput | null,
  status?: ModelPatientStatusInput | null,
  visitDates?: ModelStringInput | null,
  language_code?: ModelStringInput | null,
  notify?: ModelBooleanInput | null,
  and?: Array< ModelPatientFilterInput | null > | null,
  or?: Array< ModelPatientFilterInput | null > | null,
  not?: ModelPatientFilterInput | null,
};

export type ModelPatientConnection = {
  __typename: "ModelPatientConnection",
  items:  Array<Patient | null >,
  nextToken?: string | null,
};

export enum ModelSortDirection {
  ASC = "ASC",
  DESC = "DESC",
}


export type ModelSubscriptionPatientFilterInput = {
  name?: ModelSubscriptionStringInput | null,
  phone?: ModelSubscriptionStringInput | null,
  birthday?: ModelSubscriptionStringInput | null,
  email?: ModelSubscriptionStringInput | null,
  sex?: ModelSubscriptionStringInput | null,
  race?: ModelSubscriptionStringInput | null,
  psas?: ModelSubscriptionFloatInput | null,
  biomarker?: ModelSubscriptionStringInput | null,
  pipelineStage?: ModelSubscriptionStringInput | null,
  cancerStage?: ModelSubscriptionStringInput | null,
  treatment?: ModelSubscriptionStringInput | null,
  status?: ModelSubscriptionStringInput | null,
  visitDates?: ModelSubscriptionStringInput | null,
  language_code?: ModelSubscriptionStringInput | null,
  notify?: ModelSubscriptionBooleanInput | null,
  and?: Array< ModelSubscriptionPatientFilterInput | null > | null,
  or?: Array< ModelSubscriptionPatientFilterInput | null > | null,
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

export type ModelSubscriptionFloatInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  in?: Array< number | null > | null,
  notIn?: Array< number | null > | null,
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
    owner?: string | null,
    name: string,
    phone: string,
    birthday: string,
    email: string,
    sex: string,
    race: string,
    psas: Array< number >,
    biomarker?: string | null,
    pipelineStage: PipelineStage,
    cancerStage: CancerStage,
    treatment: Treatment,
    status: PatientStatus,
    visitDates: Array< string >,
    language_code: string,
    notify: boolean,
    id: string,
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
    owner?: string | null,
    name: string,
    phone: string,
    birthday: string,
    email: string,
    sex: string,
    race: string,
    psas: Array< number >,
    biomarker?: string | null,
    pipelineStage: PipelineStage,
    cancerStage: CancerStage,
    treatment: Treatment,
    status: PatientStatus,
    visitDates: Array< string >,
    language_code: string,
    notify: boolean,
    id: string,
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
    owner?: string | null,
    name: string,
    phone: string,
    birthday: string,
    email: string,
    sex: string,
    race: string,
    psas: Array< number >,
    biomarker?: string | null,
    pipelineStage: PipelineStage,
    cancerStage: CancerStage,
    treatment: Treatment,
    status: PatientStatus,
    visitDates: Array< string >,
    language_code: string,
    notify: boolean,
    id: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type SendVerificationCodeQueryVariables = {
  phone: string,
  language_code: string,
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
    owner?: string | null,
    name: string,
    phone: string,
    birthday: string,
    email: string,
    sex: string,
    race: string,
    psas: Array< number >,
    biomarker?: string | null,
    pipelineStage: PipelineStage,
    cancerStage: CancerStage,
    treatment: Treatment,
    status: PatientStatus,
    visitDates: Array< string >,
    language_code: string,
    notify: boolean,
    id: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListPatientsQueryVariables = {
  filter?: ModelPatientFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListPatientsQuery = {
  listPatients?:  {
    __typename: "ModelPatientConnection",
    items:  Array< {
      __typename: "Patient",
      owner?: string | null,
      name: string,
      phone: string,
      birthday: string,
      email: string,
      sex: string,
      race: string,
      psas: Array< number >,
      biomarker?: string | null,
      pipelineStage: PipelineStage,
      cancerStage: CancerStage,
      treatment: Treatment,
      status: PatientStatus,
      visitDates: Array< string >,
      language_code: string,
      notify: boolean,
      id: string,
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
      owner?: string | null,
      name: string,
      phone: string,
      birthday: string,
      email: string,
      sex: string,
      race: string,
      psas: Array< number >,
      biomarker?: string | null,
      pipelineStage: PipelineStage,
      cancerStage: CancerStage,
      treatment: Treatment,
      status: PatientStatus,
      visitDates: Array< string >,
      language_code: string,
      notify: boolean,
      id: string,
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
    owner?: string | null,
    name: string,
    phone: string,
    birthday: string,
    email: string,
    sex: string,
    race: string,
    psas: Array< number >,
    biomarker?: string | null,
    pipelineStage: PipelineStage,
    cancerStage: CancerStage,
    treatment: Treatment,
    status: PatientStatus,
    visitDates: Array< string >,
    language_code: string,
    notify: boolean,
    id: string,
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
    owner?: string | null,
    name: string,
    phone: string,
    birthday: string,
    email: string,
    sex: string,
    race: string,
    psas: Array< number >,
    biomarker?: string | null,
    pipelineStage: PipelineStage,
    cancerStage: CancerStage,
    treatment: Treatment,
    status: PatientStatus,
    visitDates: Array< string >,
    language_code: string,
    notify: boolean,
    id: string,
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
    owner?: string | null,
    name: string,
    phone: string,
    birthday: string,
    email: string,
    sex: string,
    race: string,
    psas: Array< number >,
    biomarker?: string | null,
    pipelineStage: PipelineStage,
    cancerStage: CancerStage,
    treatment: Treatment,
    status: PatientStatus,
    visitDates: Array< string >,
    language_code: string,
    notify: boolean,
    id: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};
