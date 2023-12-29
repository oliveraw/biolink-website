import Link from 'next/link'
// import Image from 'next/image'

export default function Logo() {
	return (
		<Link href='/'>
			<img src='/Logo.svg' alt='BioLink' className='h-16' />
		</Link>
	)
}
