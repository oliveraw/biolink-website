import Link from 'next/link'
import { HeartIcon, BellAlertIcon, BookOpenIcon } from '@heroicons/react/24/outline'

import BiolinkLogo from '@/components/BiolinkLogo'
import Copyright from '@/components/copyright'

const features = [
  {
    name: 'Health tracker',
    description:
      'Monitor your progress effortlessly with our integrated health tracker. Keep tabs on your screenings, test results, and overall health metrics in one convenient location. Graphs and visuals make it easy to understand your progress over time.',
    icon: HeartIcon
  },
  {
    name: 'Appointment reminders',
    description:
      'Biolink eliminates the hassle of missing appointments. Our automated system sends timely reminders via email, text, or app notifications, ensuring you never miss a screening session.',
    icon: BellAlertIcon
  },
  {
    name: 'Educational resources',
    description:
      'Knowledge is power. Access an extensive library of articles, videos, and webinars about prostate health, cancer prevention, and the latest advancements in medical research. Empower yourself with information to make informed decisions about your health.',
    icon: BookOpenIcon
  }
]

export default function Home() {
  return (
    <div>
      <header className="absolute inset-x-0 top-0 z-50">
        <nav className="flex items-center justify-between p-6 lg:px-8" aria-label="Global">
          <Link href="/" className="flex lg:flex-1">
            <BiolinkLogo />
          </Link>
          <div className="flex flex-1 justify-end">
            <Link href="/auth/sign-in" className="text-sm font-semibold leading-6 text-gray-900">
              Sign in <span aria-hidden="true">&rarr;</span>
            </Link>
          </div>
        </nav>
      </header>
      <div className="relative isolate px-6 pt-14 lg:px-8">
        <div className="mx-auto max-w-2xl py-16 sm:py-24 lg:py-28">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              A platform to empower your patients
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Biolink Analytics is partnering with leading labs and medical data providers to streamline patient care and provide cost effective insights.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link
                href="/auth/sign-up"
                className="rounded-md bg-green-800 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-green-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Get started
              </Link>
              <Link href="#features" className="text-sm font-semibold leading-6 text-gray-900">
                Learn more <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div id="features" className="py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-base font-semibold leading-7 text-green-800">Improving patient care</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Everything you need to recieve treatment
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              The Biolink platform provides a direct line of communication from labs to patients, streamlining test registration, follow ups, and interactions with doctors.
              Our educational resources help patients navigate the complexities of the prostate cancer screening process.
            </p>
          </div>
          <div className="mx-auto mt-8 max-w-2xl sm:mt-10 lg:mt-12 lg:max-w-4xl">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-3 lg:gap-y-16">
              {features.map((feature) => (
                <div key={feature.name} className="relative pl-16">
                  <dt className="flex items-center text-base font-semibold leading-7 text-gray-900">
                    <feature.icon className="flex mr-2 h-6 w-6 text-green-800" aria-hidden="true" />
                    {feature.name}
                  </dt>
                  <dd className="mt-2 text-base leading-7 text-gray-600">{feature.description}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>

      <Copyright />
    </div>
  )
}
