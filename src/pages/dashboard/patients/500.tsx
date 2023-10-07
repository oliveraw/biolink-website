import { useEffect } from 'react'
import { useRouter } from 'next/router'

export const getStaticProps = () => {
    return {
      redirect: {
        destination: '/dashboard/patients'
      }
    }
}

export default function Custom500() {
    const router = useRouter()
    
    useEffect(() => {
        router.replace('/dashboard/patients')
    })
    
    return null
}