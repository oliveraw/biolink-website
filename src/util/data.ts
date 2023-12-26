export const nonEmptyValues = (data: any) => {
    for (let [key, value] of Object.entries(data)) if (value === '') delete data[key]
    return data
}