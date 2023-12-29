import { parsePhoneNumber } from 'libphonenumber-js'

export const validatePhoneNumber = (phoneNumber: string) => {
    try {
        return parsePhoneNumber(phoneNumber, 'US').isValid()
    } catch {
        return false
    }
}

export const formatPhoneNumber = (phoneNumber: string) => {
    try {
        return parsePhoneNumber(phoneNumber, 'US').formatNational()
    } catch {
        return phoneNumber
    }
}

export const formatPhoneNumberAuth = (phoneNumber: string) => '+1' + phoneNumber.replace(/\D/g,'')