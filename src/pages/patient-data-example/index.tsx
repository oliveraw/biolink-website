// pages/index.js
import { Amplify, API, Auth, withSSRContext } from 'aws-amplify';
import awsExports from '@/aws-exports';
import { createPatient, updatePatient } from '@/graphql/mutations';
import { listPatients } from '@/graphql/queries';
import { GetServerSideProps } from 'next';
import { PatientStatus, PipelineStage } from '@/API';
import PatientCreateForm from '@/ui-components/PatientCreateForm';

Amplify.configure({ ...awsExports, ssr: true });

// get patient list through ssr, pass thru props
// only shows up on page refresh though
export const getServerSideProps = (async (context) => {
  const SSR = withSSRContext(context);

  try {
    const response = await SSR.API.graphql({ query: listPatients, authMode: 'API_KEY' });
    console.log("here", response)
    return {
      props: {
        patients: response.data.listPatients.items,
      },
    };
  } catch (err) {
    console.log("what", err)
    return {
      props: {},
    };
  }
}) satisfies GetServerSideProps

async function handleCreatePatient(event: React.MouseEvent<HTMLElement>) {
  event.preventDefault();

  try {
    const data = await API.graphql({
      authMode: 'AMAZON_COGNITO_USER_POOLS',
      query: createPatient,
      variables: {
        input: {
          patientName: "Someone",
          patientPhone: "7344318512",
          patientEmail: "someemail@gmail.com",
          patientSex: "Male",
          patientRace: "Asian",
          patientBirthday: "2001-12-10",
          psas: [1.2],
          biomarker: "ProstateDx",
          stage: PipelineStage.CREATED,
          status: PatientStatus.WAITING,
          visitDates: ["2023-12-10"],
        },
      }
    })
    console.log(data);
  } catch (error: any) {
    // unable to create entry
    console.error(error);
  }
}

async function handleUpdatePatient(event: React.MouseEvent<HTMLElement>) {
  event.preventDefault();

  try {
    const data = await API.graphql({
      authMode: 'AMAZON_COGNITO_USER_POOLS',
      query: updatePatient,
      variables: {
        input: {
          id: "27ab3f78-095a-4c1b-b0ab-d65f56c9ba87",  // hardcoded from console.log for this example
          psas: [2.5], // overwrites the old psa list
        },
      }
    })
    console.log(data);
  } catch (error: any) {
    // unable to create entry
    console.error(error);
  }
}

async function getAllPatients() {
  try {
    const response = await API.graphql({
      authMode: 'AMAZON_COGNITO_USER_POOLS',
      query: listPatients,
    })
    console.log(response.data?.listPatients.items);
  } catch (error: any) {
    // unable to create entry
    console.error(error);
  }
}

export default function Home({ patients = [] }) {
  console.log("patients", patients)

  return (
    <div className="flex flex-col justify-center items-center">
      <button className="bg-blue-200" onClick={handleCreatePatient}>Example Create Patient</button>
      <button className="bg-blue-300" onClick={handleUpdatePatient}>Example Update Patient</button>

      <ul>
        {patients.map((patient, idx) => (
          <li key={idx}>{patient.patientName} {patient.psas} {patient.id}</li>
        ))}
      </ul>
    </div>
  )
}