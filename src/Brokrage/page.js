import { ArrowPathIcon, BuildingOfficeIcon, CloudArrowUpIcon, CurrencyDollarIcon, FingerPrintIcon, HomeModernIcon, LockClosedIcon } from '@heroicons/react/24/outline'

const features = [
  {
    name: 'Tenant Representation',
    description:
      'ME can help tenants find and negotiate leases for commercial space. Your business needs are specific, so we use our experience to find the right spot (and the right deal) for your business to succeed. The best part about our tenant representation services? It doesnt cost your business a dime.',
    icon: HomeModernIcon,
  },
  {
    name: 'Landlord Representation',
    description:
      'ME can help landlords market and lease their commercial properties. From advice on space improvement, to helping you establish asking rates, to bringing our national tenant contacts to your site, we fill spaces in the ways that benefit properties and tenants the most.      ',
    icon: BuildingOfficeIcon,
  },
  {
    name: 'Investment Sales',
    description:
      'We are experts in acquisition and disposition of properties, so we execute on every step along the path to go from marketing to closing. Whether it is plugging in a buyer from our network or finding you the next placement for your 1031, we get transactions done      ',
    icon: CurrencyDollarIcon,
  },
]

export default function Example() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-3xl lg:text-center">
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          ME's brokerage services include          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
          ME's brokerage division specializes in helping businesses identify ideal properties for lease or purchase. The company's team of experienced brokers has a deep understanding of the real estate market and can help businesses find the perfect space to meet their needs.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-3xl sm:mt-20 lg:mt-24 lg:max-w-6xl">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-3 lg:gap-y-16">
            {features.map((feature) => (
              <div key={feature.name} className="relative pl-16">
                <dt className="text-base font-semibold leading-7 text-indigo-600">
                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg">
                    <feature.icon className="h-6 w-6 text-indigo-500" 
                    aria-hidden="true" />
                  </div>
                  {feature.name}
                </dt>
                <dd className="mt-2 text-base leading-7 text-gray-600 text-justify
                 ">{feature.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}
