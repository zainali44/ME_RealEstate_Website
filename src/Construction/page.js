// import { CloudArrowUpIcon, LockClosedIcon, ServerIcon } from '@heroicons/react/20/solid'

// const features = [
//   {
//     name: 'Design-build.',
//     description:
//       'We can take your project from conception to completion, handling everything from concept to construction. Our team will see your project through from dirt-work to turn-key.      ',
//     icon: CloudArrowUpIcon,
//   },
//   {
//     name: 'Site Selection. ',
//     description: 'We can help you plan your construction project, including site selection, permitting, and layout. We even perform an assessment on whether your concept is the highest and best use for a site.    ',
//     icon: LockClosedIcon,
//   },
//   {
//     name: 'Conversions and Renovations. ',
//     description: 'We have a wealth of experience renovating existing spaces to make them more functional or stylish. From simple re-fits to conversion to a different use type, we can make an existing structure realize its full potential. Structural, mechanical, and beyond are all under our belt with deep experience on thousands of different jobs.    ',
//     icon: ServerIcon,
//   },
//   {
//     name: 'Tax Incentivized. ',
//     description: 'We can help you take advantage of tax incentives for historical, energy-efficient, and other types of construction projects to make your project make sense. We can help you determine which incentives you are eligible for and help you complete the necessary paperwork. ME has coordinated, renovated, and/or constructed a multitude of tax-incentive eligible projects    ',
//     icon: ServerIcon,
//   }
// ]

// export default function Example() {
//   return (
//     <div className="overflow-hidden bg-white py-24 sm:py-32">
//       <div className="mx-auto max-w-7xl px-6 lg:px-8">
//         <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
//           <div className="lg:pr-8 lg:pt-4">
//             <div className="lg:max-w-lg">
//               <h2 className="text-base font-semibold leading-7 text-indigo-600">Construction </h2>
//               <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">ME offers</p>
//               <p className="mt-6 text-lg leading-8 text-gray-600">
//               a wide range of construction services, from design-build to conversion to tax incentivized construction; it's an integral part of what we do as owner operators, property managers, and a full-service brokerage. We have the experience and expertise to handle any project, big or small and put you first as our partner or as your owner representative.

//               </p>
//               <div className="mt-8">
//                 <p className="text-base font-semibold leading-6 text-indigo-600">Our Services</p>
//               </div>
//               <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
//                 {features.map((feature) => (
//                   <div key={feature.name} className="relative pl-9 text-justify">
//                     <dt className="inline font-semibold text-gray-900">
//                       <feature.icon className="absolute left-1 top-1 h-5 w-5 text-indigo-600" aria-hidden="true" />
//                       {feature.name}
//                     </dt>{' '}
//                     <dd className="inline ">{feature.description}</dd>
//                   </div>
//                 ))}
//               </dl>
//             </div>
//           </div>
//           <img
//             src="https://images.unsplash.com/photo-1583024011792-b165975b52f5?auto=format&fit=crop&q=80&w=1932&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
//             alt="Product screenshot"
//             className="w-[48rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem] md:-ml-4 lg:-ml-0"
//             width={2432}
//             height={1442}
//           />
//         </div>
//       </div>
//     </div>
//   )
// }


import { CloudArrowUpIcon, LockClosedIcon, ServerIcon } from '@heroicons/react/20/solid'
import { CheckIcon } from '@heroicons/react/20/solid'
import { BuildingOffice2Icon, BuildingOfficeIcon, CurrencyDollarIcon, HomeModernIcon } from '@heroicons/react/24/outline'

const includedFeatures = [
  'Office',
  'Warehouse',
  'Modular / Pre-Fab',
  'Distribution',
  'Multi-Family',
  'Manufacturing',
  'Retail',
  'Healthcare',
  'Hospitality',
  'Mixed-Use  ',
]

export default function Example() {
  return (
    <div className="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0">
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <svg
          className="absolute left-[max(50%,25rem)] top-0 h-[64rem] w-[128rem] -translate-x-1/2 stroke-gray-200 [mask-image:radial-gradient(64rem_64rem_at_top,white,transparent)]"
          aria-hidden="true"
        >
          <defs>
            <pattern
              id="e813992c-7d03-4cc4-a2bd-151760b470a0"
              width={200}
              height={200}
              x="50%"
              y={-1}
              patternUnits="userSpaceOnUse"
            >
              <path d="M100 200V.5M.5 .5H200" fill="none" />
            </pattern>
          </defs>
          <svg x="50%" y={-1} className="overflow-visible fill-gray-50">
            <path
              d="M-100.5 0h201v201h-201Z M699.5 0h201v201h-201Z M499.5 400h201v201h-201Z M-300.5 600h201v201h-201Z"
              strokeWidth={0}
            />
          </svg>
          <rect width="100%" height="100%" strokeWidth={0} fill="url(#e813992c-7d03-4cc4-a2bd-151760b470a0)" />
        </svg>
      </div>
      <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4">
            <div className="lg:max-w-lg">
              <p className="text-base font-semibold leading-7 text-indigo-600">Construction </p>
              <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">ME offers</h1>
              <p className="mt-6 text-xl leading-8 text-gray-700 text-justify">
                a wide range of construction services, from design-build to conversion to tax incentivized construction; it's an integral part of what we do as owner operators, property managers, and a full-service brokerage. We have the experience and expertise to handle any project, big or small and put you first as our partner or as your owner representative.
              </p>
            </div>
          </div>
        </div>
        <div className="-ml-12 -mt-12 p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
          <img
            className="w-[48rem] max-w-none rounded-xl bg-gray-900 shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem]"
            src="https://images.unsplash.com/photo-1583024011792-b165975b52f5?auto=format&fit=crop&q=80&w=1932&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
          />
        </div>
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4">
            <div className="max-w-xl text-base leading-7 text-gray-700 lg:max-w-lg">
              <p className="text-justify">
                ME Real Estate focuses on increasing value and opportunistic investments. The firm creates value by developing, managing, and investing in secondary appreciating markets with the prospect of rapid growth.
                ME Real Estate provides a full scope of residential and commercial real estate services. We focus on creating enduring, long-term relationships – we make decisions based on a long-range perspective that has been cultivated over years of ownership experience.
              </p>
              <ul role="list" className="mt-8 space-y-8 text-gray-600">
                <li className="flex gap-x-3">
                  <BuildingOffice2Icon className="mt-1 h-5 w-5 flex-none text-gray-700" aria-hidden="true" />
                  <span className='text-justify'>
                    <strong className="font-semibold text-gray-900"> Design-build.</strong> We can take your project from conception to completion, handling everything from concept to construction. Our team will see your project through from dirt-work to turn-key.      .
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <BuildingOfficeIcon className="mt-1 h-5 w-5 flex-none text-gray-700" aria-hidden="true" />
                  <span className='text-justify'>
                    <strong className="font-semibold text-gray-900">Site Selection. </strong> We can help you plan your construction project, including site selection, permitting, and layout. We even perform an assessment on whether your concept is the highest and best use for a site.
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <HomeModernIcon className="mt-1 h-5 w-5 flex-none text-gray-700" aria-hidden="true" />
                  <span className='text-justify'>
                    <strong className="font-semibold text-gray-900">Conversions and Renovations. </strong> We have a wealth of experience renovating existing spaces to make them more functional or stylish. From simple re-fits to conversion to a different use type, we can make an existing structure realize its full potential. Structural, mechanical, and beyond are all under our belt with deep experience on thousands of different jobs.
                  </span>
                </li>

                <li className="flex gap-x-3">
                  <CurrencyDollarIcon className="mt-1 h-5 w-5 flex-none text-gray-700" aria-hidden="true" />
                  <span>
                    <strong className="font-semibold text-gray-900">Tax Incentivized. </strong> We can help you take advantage of tax incentives for historical, energy-efficient, and other types of construction projects to make your project make sense. We can help you determine which incentives you are eligible for and help you complete the necessary paperwork. ME has coordinated, renovated, and/or constructed a multitude of tax-incentive eligible projects
                  </span>
                </li>
              </ul>
              <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">Catagories of Construction</h2>
              <ul
              role="list"
              className="mt-8 grid grid-cols-2 gap-4 text-sm leading-6 text-gray-600 sm:grid-cols-3 sm:gap-6"
            >
              {includedFeatures.map((feature) => (
                <li key={feature} className="flex gap-x-3">
                  <CheckIcon className="h-6 w-5 flex-none text-indigo-600" aria-hidden="true" />
                  {feature}
                </li>
              ))}
            </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

