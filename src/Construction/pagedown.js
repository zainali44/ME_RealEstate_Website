import { ArrowPathIcon, CloudArrowUpIcon, FingerPrintIcon, LockClosedIcon } from '@heroicons/react/24/outline'

//Navigate to mewebsite/src/Construction/pagedown.js

const features = [
  {
    name: 'Experience and Expertise',
    description:
      'We have decades of combined experience in the construction industry. Our team of experienced professionals has the skills and knowledge to handle any project, big or small.      ',
    icon: CloudArrowUpIcon,
  },
  {
    name: 'Commitment to Quality',
    description:
      'We are committed to providing our clients with the highest quality construction services possible. We leverage our longstanding network of the best vendors in the industry, plus we use only the best materials and construction practices.       ',
    icon: LockClosedIcon,
  },
  {
    name: 'Competitive Pricing',
    description:
      'We offer competitive pricing on all of our services. We will work with you to create a plan that meets your project needs',
    icon: ArrowPathIcon,
  },
]

export default function PageDown() {

  return (
    <div className="bg-black py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
          Why ME?
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-6xl">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-3 lg:gap-y-16">
            {features.map((feature) => (
              <div key={feature.name} className="relative pl-16">
                <dt className="text-base font-semibold leading-7 text-white">
                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center">
                    <feature.icon className="h-6 w-6 text-indigo" aria-hidden="true" />
                  </div>
                  {feature.name}
                </dt>
                <dd className="mt-2 text-base leading-7 text-gray-600">{feature.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}
