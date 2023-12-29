import { Copyright, Logo } from '@/components/assets'

export default function AuthLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<>
			<header className='p-6 lg:px-8'>
				<Logo />
			</header>
			<main className='mx-auto max-w-sm p-6 lg:px-8'>
				{children}
			</main>
			<Copyright />
		</>
	)
}
