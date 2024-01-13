import { ArrowPathIcon, CloudArrowUpIcon, FingerPrintIcon, LockClosedIcon } from '@heroicons/react/24/outline';
import { CheckIcon } from '@heroicons/react/24/solid'

const includedFeatures = [
  "Accounting",
  "Global Standards",
  "Risk Management",
  "Asset Management",
  "Human Resources",
  "Security",
  "Business Continuity",
  "Learning & Development",
  "Technical Services",
  "Digital Solutions",
  "Lease Administration",
  "Tenant Relations",
  "Energy & Sustainability",
  "Procurement",
  "Transition Services",
  "Experience Services",
  "Project Management"
];

const features = [
  {
    name: 'Full Service',
    description:
      'Property management companies that call themselves full service and then proceed to nickel and dime property owners are plentiful. We are structured to keep the property owner’s interest at heart. No tiered flat rates, Read more',
    icon: CloudArrowUpIcon,
  },
  {
    name: 'Concept, Closing, Cashflow ',
    description:
      'We know that getting started investing in rental properties is a daunting task; we’ve been there. By partnering with real estate professionals across the industry, we can ensure that you go from investment concept, Read more',
    icon: LockClosedIcon,
  },
  {
    name: 'Diverse Properties',
    description:
      'We are experienced with every type of property you might be interested in investing in. Not only have we managed thousands of homes from single families to luxury high density  Read more',
    icon: ArrowPathIcon,
  },
];

export default function Services() {
  return (
    <div className="mb-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-6xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-indigo-600">OUR SERVICES
          </h2>
          
        </div>
        <div className="mx-auto mt-10 max-w-3xl sm:mt-20 lg:mt-12 lg:max-w-4xl">
        <ul
              role="list"
              className="mt-8 grid grid-cols-2 gap-4 text-sm leading-6 text-gray-600 sm:grid-cols-3 sm:gap-6 font-medium"
            >
              {includedFeatures.map((feature) => (
                <li key={feature} className="flex gap-x-3">
                  <CheckIcon className="h-6 w-5 flex-none text-indigo-400 mt-0.5" aria-hidden="true" />
                  {feature}
                </li>
              ))}
            </ul>
        </div>
      </div>
    </div>
  );
}
