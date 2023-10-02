/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import {
  Badge,
  Button,
  Divider,
  Flex,
  Grid,
  Icon,
  ScrollView,
  SelectField,
  Text,
  TextField,
  useTheme,
} from "@aws-amplify/ui-react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { fetchByPath, validateField } from "./utils";
import { API } from "aws-amplify";
import { getPatient } from "../graphql/queries";
import { updatePatient } from "../graphql/mutations";
function ArrayField({
  items = [],
  onChange,
  label,
  inputFieldRef,
  children,
  hasError,
  setFieldValue,
  currentFieldValue,
  defaultFieldValue,
  lengthLimit,
  getBadgeText,
  runValidationTasks,
  errorMessage,
}) {
  const labelElement = <Text>{label}</Text>;
  const {
    tokens: {
      components: {
        fieldmessages: { error: errorStyles },
      },
    },
  } = useTheme();
  const [selectedBadgeIndex, setSelectedBadgeIndex] = React.useState();
  const [isEditing, setIsEditing] = React.useState();
  React.useEffect(() => {
    if (isEditing) {
      inputFieldRef?.current?.focus();
    }
  }, [isEditing]);
  const removeItem = async (removeIndex) => {
    const newItems = items.filter((value, index) => index !== removeIndex);
    await onChange(newItems);
    setSelectedBadgeIndex(undefined);
  };
  const addItem = async () => {
    const { hasError } = runValidationTasks();
    if (
      currentFieldValue !== undefined &&
      currentFieldValue !== null &&
      currentFieldValue !== "" &&
      !hasError
    ) {
      const newItems = [...items];
      if (selectedBadgeIndex !== undefined) {
        newItems[selectedBadgeIndex] = currentFieldValue;
        setSelectedBadgeIndex(undefined);
      } else {
        newItems.push(currentFieldValue);
      }
      await onChange(newItems);
      setIsEditing(false);
    }
  };
  const arraySection = (
    <React.Fragment>
      {!!items?.length && (
        <ScrollView height="inherit" width="inherit" maxHeight={"7rem"}>
          {items.map((value, index) => {
            return (
              <Badge
                key={index}
                style={{
                  cursor: "pointer",
                  alignItems: "center",
                  marginRight: 3,
                  marginTop: 3,
                  backgroundColor:
                    index === selectedBadgeIndex ? "#B8CEF9" : "",
                }}
                onClick={() => {
                  setSelectedBadgeIndex(index);
                  setFieldValue(items[index]);
                  setIsEditing(true);
                }}
              >
                {getBadgeText ? getBadgeText(value) : value.toString()}
                <Icon
                  style={{
                    cursor: "pointer",
                    paddingLeft: 3,
                    width: 20,
                    height: 20,
                  }}
                  viewBox={{ width: 20, height: 20 }}
                  paths={[
                    {
                      d: "M10 10l5.09-5.09L10 10l5.09 5.09L10 10zm0 0L4.91 4.91 10 10l-5.09 5.09L10 10z",
                      stroke: "black",
                    },
                  ]}
                  ariaLabel="button"
                  onClick={(event) => {
                    event.stopPropagation();
                    removeItem(index);
                  }}
                />
              </Badge>
            );
          })}
        </ScrollView>
      )}
      <Divider orientation="horizontal" marginTop={5} />
    </React.Fragment>
  );
  if (lengthLimit !== undefined && items.length >= lengthLimit && !isEditing) {
    return (
      <React.Fragment>
        {labelElement}
        {arraySection}
      </React.Fragment>
    );
  }
  return (
    <React.Fragment>
      {labelElement}
      {isEditing && children}
      {!isEditing ? (
        <>
          <Button
            onClick={() => {
              setIsEditing(true);
            }}
          >
            Add item
          </Button>
          {errorMessage && hasError && (
            <Text color={errorStyles.color} fontSize={errorStyles.fontSize}>
              {errorMessage}
            </Text>
          )}
        </>
      ) : (
        <Flex justifyContent="flex-end">
          {(currentFieldValue || isEditing) && (
            <Button
              children="Cancel"
              type="button"
              size="small"
              onClick={() => {
                setFieldValue(defaultFieldValue);
                setIsEditing(false);
                setSelectedBadgeIndex(undefined);
              }}
            ></Button>
          )}
          <Button size="small" variation="link" onClick={addItem}>
            {selectedBadgeIndex !== undefined ? "Save" : "Add"}
          </Button>
        </Flex>
      )}
      {arraySection}
    </React.Fragment>
  );
}
export default function PatientUpdateForm(props) {
  const {
    id: idProp,
    patient: patientModelProp,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    owner: "",
    name: "",
    phone: "",
    birthday: "",
    email: "",
    sex: "",
    race: "",
    psas: [],
    biomarker: "",
    stage: "",
    status: "",
    visitDates: [],
  };
  const [owner, setOwner] = React.useState(initialValues.owner);
  const [name, setName] = React.useState(initialValues.name);
  const [phone, setPhone] = React.useState(initialValues.phone);
  const [birthday, setBirthday] = React.useState(initialValues.birthday);
  const [email, setEmail] = React.useState(initialValues.email);
  const [sex, setSex] = React.useState(initialValues.sex);
  const [race, setRace] = React.useState(initialValues.race);
  const [psas, setPsas] = React.useState(initialValues.psas);
  const [biomarker, setBiomarker] = React.useState(initialValues.biomarker);
  const [stage, setStage] = React.useState(initialValues.stage);
  const [status, setStatus] = React.useState(initialValues.status);
  const [visitDates, setVisitDates] = React.useState(initialValues.visitDates);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = patientRecord
      ? { ...initialValues, ...patientRecord }
      : initialValues;
    setOwner(cleanValues.owner);
    setName(cleanValues.name);
    setPhone(cleanValues.phone);
    setBirthday(cleanValues.birthday);
    setEmail(cleanValues.email);
    setSex(cleanValues.sex);
    setRace(cleanValues.race);
    setPsas(cleanValues.psas ?? []);
    setCurrentPsasValue("");
    setBiomarker(cleanValues.biomarker);
    setStage(cleanValues.stage);
    setStatus(cleanValues.status);
    setVisitDates(cleanValues.visitDates ?? []);
    setCurrentVisitDatesValue("");
    setErrors({});
  };
  const [patientRecord, setPatientRecord] = React.useState(patientModelProp);
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? (
            await API.graphql({
              query: getPatient,
              variables: { id: idProp },
            })
          )?.data?.getPatient
        : patientModelProp;
      setPatientRecord(record);
    };
    queryData();
  }, [idProp, patientModelProp]);
  React.useEffect(resetStateValues, [patientRecord]);
  const [currentPsasValue, setCurrentPsasValue] = React.useState("");
  const psasRef = React.createRef();
  const [currentVisitDatesValue, setCurrentVisitDatesValue] =
    React.useState("");
  const visitDatesRef = React.createRef();
  const validations = {
    owner: [],
    name: [{ type: "Required" }],
    phone: [{ type: "Required" }],
    birthday: [{ type: "Required" }],
    email: [{ type: "Required" }],
    sex: [{ type: "Required" }],
    race: [{ type: "Required" }],
    psas: [{ type: "Required" }],
    biomarker: [],
    stage: [{ type: "Required" }],
    status: [{ type: "Required" }],
    visitDates: [{ type: "Required" }],
  };
  const runValidationTasks = async (
    fieldName,
    currentValue,
    getDisplayValue
  ) => {
    const value =
      currentValue && getDisplayValue
        ? getDisplayValue(currentValue)
        : currentValue;
    let validationResponse = validateField(value, validations[fieldName]);
    const customValidator = fetchByPath(onValidate, fieldName);
    if (customValidator) {
      validationResponse = await customValidator(value, validationResponse);
    }
    setErrors((errors) => ({ ...errors, [fieldName]: validationResponse }));
    return validationResponse;
  };
  return (
    <Grid
      as="form"
      rowGap="15px"
      columnGap="15px"
      padding="20px"
      onSubmit={async (event) => {
        event.preventDefault();
        let modelFields = {
          owner: owner ?? null,
          name,
          phone,
          birthday,
          email,
          sex,
          race,
          psas,
          biomarker: biomarker ?? null,
          stage,
          status,
          visitDates,
        };
        const validationResponses = await Promise.all(
          Object.keys(validations).reduce((promises, fieldName) => {
            if (Array.isArray(modelFields[fieldName])) {
              promises.push(
                ...modelFields[fieldName].map((item) =>
                  runValidationTasks(fieldName, item)
                )
              );
              return promises;
            }
            promises.push(
              runValidationTasks(fieldName, modelFields[fieldName])
            );
            return promises;
          }, [])
        );
        if (validationResponses.some((r) => r.hasError)) {
          return;
        }
        if (onSubmit) {
          modelFields = onSubmit(modelFields);
        }
        try {
          Object.entries(modelFields).forEach(([key, value]) => {
            if (typeof value === "string" && value === "") {
              modelFields[key] = null;
            }
          });
          await API.graphql({
            query: updatePatient,
            variables: {
              input: {
                id: patientRecord.id,
                ...modelFields,
              },
            },
          });
          if (onSuccess) {
            onSuccess(modelFields);
          }
        } catch (err) {
          if (onError) {
            const messages = err.errors.map((e) => e.message).join("\n");
            onError(modelFields, messages);
          }
        }
      }}
      {...getOverrideProps(overrides, "PatientUpdateForm")}
      {...rest}
    >
      <TextField
        label="Owner"
        isRequired={false}
        isReadOnly={false}
        value={owner}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              owner: value,
              name,
              phone,
              birthday,
              email,
              sex,
              race,
              psas,
              biomarker,
              stage,
              status,
              visitDates,
            };
            const result = onChange(modelFields);
            value = result?.owner ?? value;
          }
          if (errors.owner?.hasError) {
            runValidationTasks("owner", value);
          }
          setOwner(value);
        }}
        onBlur={() => runValidationTasks("owner", owner)}
        errorMessage={errors.owner?.errorMessage}
        hasError={errors.owner?.hasError}
        {...getOverrideProps(overrides, "owner")}
      ></TextField>
      <TextField
        label="Name"
        isRequired={true}
        isReadOnly={false}
        value={name}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              owner,
              name: value,
              phone,
              birthday,
              email,
              sex,
              race,
              psas,
              biomarker,
              stage,
              status,
              visitDates,
            };
            const result = onChange(modelFields);
            value = result?.name ?? value;
          }
          if (errors.name?.hasError) {
            runValidationTasks("name", value);
          }
          setName(value);
        }}
        onBlur={() => runValidationTasks("name", name)}
        errorMessage={errors.name?.errorMessage}
        hasError={errors.name?.hasError}
        {...getOverrideProps(overrides, "name")}
      ></TextField>
      <TextField
        label="Phone"
        isRequired={true}
        isReadOnly={false}
        value={phone}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              owner,
              name,
              phone: value,
              birthday,
              email,
              sex,
              race,
              psas,
              biomarker,
              stage,
              status,
              visitDates,
            };
            const result = onChange(modelFields);
            value = result?.phone ?? value;
          }
          if (errors.phone?.hasError) {
            runValidationTasks("phone", value);
          }
          setPhone(value);
        }}
        onBlur={() => runValidationTasks("phone", phone)}
        errorMessage={errors.phone?.errorMessage}
        hasError={errors.phone?.hasError}
        {...getOverrideProps(overrides, "phone")}
      ></TextField>
      <TextField
        label="Birthday"
        isRequired={true}
        isReadOnly={false}
        value={birthday}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              owner,
              name,
              phone,
              birthday: value,
              email,
              sex,
              race,
              psas,
              biomarker,
              stage,
              status,
              visitDates,
            };
            const result = onChange(modelFields);
            value = result?.birthday ?? value;
          }
          if (errors.birthday?.hasError) {
            runValidationTasks("birthday", value);
          }
          setBirthday(value);
        }}
        onBlur={() => runValidationTasks("birthday", birthday)}
        errorMessage={errors.birthday?.errorMessage}
        hasError={errors.birthday?.hasError}
        {...getOverrideProps(overrides, "birthday")}
      ></TextField>
      <TextField
        label="Email"
        isRequired={true}
        isReadOnly={false}
        value={email}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              owner,
              name,
              phone,
              birthday,
              email: value,
              sex,
              race,
              psas,
              biomarker,
              stage,
              status,
              visitDates,
            };
            const result = onChange(modelFields);
            value = result?.email ?? value;
          }
          if (errors.email?.hasError) {
            runValidationTasks("email", value);
          }
          setEmail(value);
        }}
        onBlur={() => runValidationTasks("email", email)}
        errorMessage={errors.email?.errorMessage}
        hasError={errors.email?.hasError}
        {...getOverrideProps(overrides, "email")}
      ></TextField>
      <TextField
        label="Sex"
        isRequired={true}
        isReadOnly={false}
        value={sex}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              owner,
              name,
              phone,
              birthday,
              email,
              sex: value,
              race,
              psas,
              biomarker,
              stage,
              status,
              visitDates,
            };
            const result = onChange(modelFields);
            value = result?.sex ?? value;
          }
          if (errors.sex?.hasError) {
            runValidationTasks("sex", value);
          }
          setSex(value);
        }}
        onBlur={() => runValidationTasks("sex", sex)}
        errorMessage={errors.sex?.errorMessage}
        hasError={errors.sex?.hasError}
        {...getOverrideProps(overrides, "sex")}
      ></TextField>
      <TextField
        label="Race"
        isRequired={true}
        isReadOnly={false}
        value={race}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              owner,
              name,
              phone,
              birthday,
              email,
              sex,
              race: value,
              psas,
              biomarker,
              stage,
              status,
              visitDates,
            };
            const result = onChange(modelFields);
            value = result?.race ?? value;
          }
          if (errors.race?.hasError) {
            runValidationTasks("race", value);
          }
          setRace(value);
        }}
        onBlur={() => runValidationTasks("race", race)}
        errorMessage={errors.race?.errorMessage}
        hasError={errors.race?.hasError}
        {...getOverrideProps(overrides, "race")}
      ></TextField>
      <ArrayField
        onChange={async (items) => {
          let values = items;
          if (onChange) {
            const modelFields = {
              owner,
              name,
              phone,
              birthday,
              email,
              sex,
              race,
              psas: values,
              biomarker,
              stage,
              status,
              visitDates,
            };
            const result = onChange(modelFields);
            values = result?.psas ?? values;
          }
          setPsas(values);
          setCurrentPsasValue("");
        }}
        currentFieldValue={currentPsasValue}
        label={"Psas"}
        items={psas}
        hasError={errors?.psas?.hasError}
        runValidationTasks={async () =>
          await runValidationTasks("psas", currentPsasValue)
        }
        errorMessage={errors?.psas?.errorMessage}
        setFieldValue={setCurrentPsasValue}
        inputFieldRef={psasRef}
        defaultFieldValue={""}
      >
        <TextField
          label="Psas"
          isRequired={true}
          isReadOnly={false}
          type="number"
          step="any"
          value={currentPsasValue}
          onChange={(e) => {
            let value = isNaN(parseFloat(e.target.value))
              ? e.target.value
              : parseFloat(e.target.value);
            if (errors.psas?.hasError) {
              runValidationTasks("psas", value);
            }
            setCurrentPsasValue(value);
          }}
          onBlur={() => runValidationTasks("psas", currentPsasValue)}
          errorMessage={errors.psas?.errorMessage}
          hasError={errors.psas?.hasError}
          ref={psasRef}
          labelHidden={true}
          {...getOverrideProps(overrides, "psas")}
        ></TextField>
      </ArrayField>
      <TextField
        label="Biomarker"
        isRequired={false}
        isReadOnly={false}
        value={biomarker}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              owner,
              name,
              phone,
              birthday,
              email,
              sex,
              race,
              psas,
              biomarker: value,
              stage,
              status,
              visitDates,
            };
            const result = onChange(modelFields);
            value = result?.biomarker ?? value;
          }
          if (errors.biomarker?.hasError) {
            runValidationTasks("biomarker", value);
          }
          setBiomarker(value);
        }}
        onBlur={() => runValidationTasks("biomarker", biomarker)}
        errorMessage={errors.biomarker?.errorMessage}
        hasError={errors.biomarker?.hasError}
        {...getOverrideProps(overrides, "biomarker")}
      ></TextField>
      <SelectField
        label="Stage"
        placeholder="Please select an option"
        isDisabled={false}
        value={stage}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              owner,
              name,
              phone,
              birthday,
              email,
              sex,
              race,
              psas,
              biomarker,
              stage: value,
              status,
              visitDates,
            };
            const result = onChange(modelFields);
            value = result?.stage ?? value;
          }
          if (errors.stage?.hasError) {
            runValidationTasks("stage", value);
          }
          setStage(value);
        }}
        onBlur={() => runValidationTasks("stage", stage)}
        errorMessage={errors.stage?.errorMessage}
        hasError={errors.stage?.hasError}
        {...getOverrideProps(overrides, "stage")}
      >
        <option
          children="Created"
          value="CREATED"
          {...getOverrideProps(overrides, "stageoption0")}
        ></option>
        <option
          children="Psa1"
          value="PSA1"
          {...getOverrideProps(overrides, "stageoption1")}
        ></option>
        <option
          children="Psa2"
          value="PSA2"
          {...getOverrideProps(overrides, "stageoption2")}
        ></option>
        <option
          children="Biomarker"
          value="BIOMARKER"
          {...getOverrideProps(overrides, "stageoption3")}
        ></option>
        <option
          children="Urologist"
          value="UROLOGIST"
          {...getOverrideProps(overrides, "stageoption4")}
        ></option>
        <option
          children="Biopsy"
          value="BIOPSY"
          {...getOverrideProps(overrides, "stageoption5")}
        ></option>
        <option
          children="Repeat psa"
          value="REPEAT_PSA"
          {...getOverrideProps(overrides, "stageoption6")}
        ></option>
        <option
          children="Other"
          value="OTHER"
          {...getOverrideProps(overrides, "stageoption7")}
        ></option>
      </SelectField>
      <SelectField
        label="Status"
        placeholder="Please select an option"
        isDisabled={false}
        value={status}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              owner,
              name,
              phone,
              birthday,
              email,
              sex,
              race,
              psas,
              biomarker,
              stage,
              status: value,
              visitDates,
            };
            const result = onChange(modelFields);
            value = result?.status ?? value;
          }
          if (errors.status?.hasError) {
            runValidationTasks("status", value);
          }
          setStatus(value);
        }}
        onBlur={() => runValidationTasks("status", status)}
        errorMessage={errors.status?.errorMessage}
        hasError={errors.status?.hasError}
        {...getOverrideProps(overrides, "status")}
      >
        <option
          children="Completed"
          value="COMPLETED"
          {...getOverrideProps(overrides, "statusoption0")}
        ></option>
        <option
          children="Scheduled"
          value="SCHEDULED"
          {...getOverrideProps(overrides, "statusoption1")}
        ></option>
        <option
          children="Pending"
          value="PENDING"
          {...getOverrideProps(overrides, "statusoption2")}
        ></option>
      </SelectField>
      <ArrayField
        onChange={async (items) => {
          let values = items;
          if (onChange) {
            const modelFields = {
              owner,
              name,
              phone,
              birthday,
              email,
              sex,
              race,
              psas,
              biomarker,
              stage,
              status,
              visitDates: values,
            };
            const result = onChange(modelFields);
            values = result?.visitDates ?? values;
          }
          setVisitDates(values);
          setCurrentVisitDatesValue("");
        }}
        currentFieldValue={currentVisitDatesValue}
        label={"Visit dates"}
        items={visitDates}
        hasError={errors?.visitDates?.hasError}
        runValidationTasks={async () =>
          await runValidationTasks("visitDates", currentVisitDatesValue)
        }
        errorMessage={errors?.visitDates?.errorMessage}
        setFieldValue={setCurrentVisitDatesValue}
        inputFieldRef={visitDatesRef}
        defaultFieldValue={""}
      >
        <TextField
          label="Visit dates"
          isRequired={true}
          isReadOnly={false}
          value={currentVisitDatesValue}
          onChange={(e) => {
            let { value } = e.target;
            if (errors.visitDates?.hasError) {
              runValidationTasks("visitDates", value);
            }
            setCurrentVisitDatesValue(value);
          }}
          onBlur={() =>
            runValidationTasks("visitDates", currentVisitDatesValue)
          }
          errorMessage={errors.visitDates?.errorMessage}
          hasError={errors.visitDates?.hasError}
          ref={visitDatesRef}
          labelHidden={true}
          {...getOverrideProps(overrides, "visitDates")}
        ></TextField>
      </ArrayField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Reset"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          isDisabled={!(idProp || patientModelProp)}
          {...getOverrideProps(overrides, "ResetButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={
              !(idProp || patientModelProp) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
