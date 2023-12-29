interface HasDate {
    date: string
}

export const compareDate = (a: HasDate, b: HasDate) => +new Date(b.date) - +new Date(a.date)

export const formatDate = (date: Date) => new Date(date.getTime() - 60000 * date.getTimezoneOffset()).toISOString().split('T')[0]

export const todaysDate = () => formatDate(new Date())
