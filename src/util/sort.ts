interface HasDate {
    date: string
}

export const compareDate = (a: HasDate, b: HasDate) => +new Date(b.date) - +new Date(a.date)