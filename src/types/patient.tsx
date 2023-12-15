interface Patient {
    id: string
    name: string
    phone: string
    email: string
    birthday: string
    sex: string
    race: string
    stage: string
    external_notes: string
    status: string
    psas: number[]
    visitDates: string[]
}

export default Patient