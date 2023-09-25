import { API, Auth } from "aws-amplify";

export type patientData = {
    uid: number;
    name: string;
    phone: string;
    email: string;
    sex: string;
    race: string;
    birthday: string;
    psa1: number;
    psa2: number;
}

export async function savePatientData(patientData: patientData) {
    try {
        const user = await Auth.currentAuthenticatedUser()
        const token = user.signInUserSession.idToken.jwtToken
        console.log("token: ", token)

        const data = {
            headers: {
                Authorization: `Bearer ${token}`,
            },
            body: {
                patientData: patientData
            }
        }

        // const response = await API.get('learnAmplifyDBAPI', '/data', {
        //   headers: {
        //     Authorization: `Bearer ${(await Auth.currentSession())
        //       .getIdToken()
        //       .getJwtToken()}`,
        //   },
        // })
        const response = await API.post(process.env.NEXT_PUBLIC_SUBMIT_DATA_API_NAME, process.env.NEXT_PUBLIC_SUBMIT_DATA_API_ROUTE, data)
        console.log("response: ", response)
    }
    catch (err: any) {
        console.log("Error occurred during API call", err)
        // throw new Error("Error occurred during API call", err);
    }
}