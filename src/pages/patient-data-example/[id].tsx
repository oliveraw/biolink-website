import { Amplify, API, withSSRContext } from 'aws-amplify';
import { useRouter } from 'next/router';
import awsExports from '@/aws-exports';
import { GetServerSideProps } from 'next';
import { getPatient } from '@/graphql/queries';
import { deletePatient } from '@/graphql/mutations';

Amplify.configure({ ...awsExports, ssr: true });

export const getServerSideProps: GetServerSideProps = async (context) => {
    const SSR = withSSRContext(context);

    try {
        const { data } = await SSR.API.graphql({
            query: getPatient,
            authMode: 'API_KEY',    // if you get 'Not Authorized to access owner on type Patient' need to remove "owner" from getPatient in graphql/queries.tsx
            variables: {
                id: context.params?.id
            }
        });
        return {
            props: {
                patient: data.getPatient
            }
        };
    }
    catch(error: any) {
        console.error(error);
        return {
            props: {}
        }
    }
};

export default function Patient({ patient={patientName: "error", psas: "error", status: "error", id: "error"} }) {
    const router = useRouter();
    console.log(patient)

    if (router.isFallback) {
        return (
            <div>
                <h1>Loading&hellip;</h1>
            </div>
        );
    }

    async function handleDelete() {
        try {
            await API.graphql({
                authMode: 'AMAZON_COGNITO_USER_POOLS',
                query: deletePatient,
                variables: {
                    input: { id: patient.id }
                }
            });

            // window.location.href = '/';
        } catch (errors: any) {
            console.error(...errors);
            // throw new Error(errors[0].message);
        }
    }

    return (
        <div>
            {patient.patientName}
            {patient.psas}
            {patient.status}
        </div>
    );
}