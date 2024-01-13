import { CloudArrowUpIcon, LockClosedIcon, ServerIcon } from '@heroicons/react/20/solid'
import company from './2-br.png'
import { BuildingOffice2Icon, BuildingOfficeIcon, HomeModernIcon } from '@heroicons/react/24/outline'

export default function companyprofile() {
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
              <p className="text-base font-semibold leading-7 text-indigo-700">About Us</p>
              <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Eli and Moshe Adahan, two seasoned entrepreneurs with over 20 years </h1>
              <p className="mt-6 text-xl leading-8 text-gray-700">
                of real estate experience have decided to form ME Real Estate with a unique approach to developing, managing, and acquiring properties. Established in 2010, ME Real Estate is guided by principles of integrity, hard work, and attention to detail.               </p>
            </div>
          </div>
        </div>
        <div className="-ml-12 -mt-12 p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
          <img
            className="w-[48rem] max-w-none rounded-xl bg-gray-900 shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem]"
            src={company}
            alt=""
          />
        </div>
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4">
            <div className="max-w-xl text-base leading-7 text-gray-700 lg:max-w-lg">
              <p className='text-justify'>
                ME Real Estate focuses on increasing value and opportunistic investments. The firm creates value by developing, managing, and investing in secondary appreciating markets with the prospect of rapid growth.
                ME Real Estate provides a full scope of residential and commercial real estate services. We focus on creating enduring, long-term relationships – we make decisions based on a long-range perspective that has been cultivated over years of ownership experience.
              </p>
              <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">WHAT WE DO </h2>
              <p className="mt-6 text-justify">
              We focus on sourcing on market and off market deals though our years of relationships and experience to bring the best investment in that asset class. Understanding local and national market trends and brining deep local knowledge to maximize returns to investors in the Retail, industrial and residential real Estate.                </p>
              <ul role="list" className="mt-8 space-y-8 text-gray-600">
                <li className="flex gap-x-3">
                  <BuildingOffice2Icon className="mt-1 h-5 w-5 flex-none text-indigo-600" aria-hidden="true" />
                  <span className="text-justify">
                    <strong className="font-semibold text-gray-900">Commercial</strong> At ME, we pride ourselves on our expertise in the retail property market. We have found that properties anchored by internet-resistant tenants, such as grocery stores, offer the perfect platform for small and large businesses alike to thrive and succeed within their local communities. We understand the importance of a strong sense of community within the retail market, which is why our focus is on providing properties that can help foster this, while also offering a return on investment for landlords and tenants alike. Our team is dedicated to identifying the best possible properties, carefully selecting only those that meet our high standards for location, accessibility, and marketability.
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <BuildingOfficeIcon className="mt-1 h-5 w-5 flex-none text-indigo-600" aria-hidden="true" />
                  <span className="text-justify">
                    <strong className="font-semibold text-gray-900">Industrial</strong> ME’s industrial strategy focuses on investing in mission critical real estate. By aligning acquisitions profiles with the space needs of national and institutional users, we are able to deliver a safe long term return from key, irreplaceable assets. Identifying assets that are inherently re-tenantable allows us to benefit in both the short and or long term while also eliminating many of the risk factors that exist in traditional investments. 
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <HomeModernIcon className="mt-1 h-5 w-5 flex-none text-indigo-600" aria-hidden="true" />
                  <span className="text-justify">
                    <strong className="font-semibold text-gray-900">Residential</strong> ME is dedicated to providing high-quality homes across the spectrum, from student accommodations to luxury apartments and houses. Our approach is based on offering a range of rental options that cater to diverse needs and budgets. We believe that everyone deserves a comfortable, safe, and well-maintained place to call home, regardless of their background or income level.  We pride ourselves on being attentive to the specific needs of our renters, offering responsive customer service, and providing top-notch amenities that enhance the living experience. Our rental properties are fitted with modern appliances, high-speed internet, and other conveniences to make life as easy and enjoyable as possible.  At ME, we understand that housing is one of the most significant investments individuals make, and we strive to ensure that our rental properties meet the highest standards of quality and affordability. Our mission is to help renters feel at home by creating an inviting, warm, and welcoming environment that they can be proud to call their own.
                  </span>
                </li>
              </ul>
              <p className="mt-8">

              </p>
              <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">CAPABILITIES</h2>
              <p className="mt-6">
                Innovative Deal Sourcing & Structuring Strategies
                Residential and Commercial Asset Management
                Sales, Marketing & Lease Administration
                Investor services, including details quarterly & annual management reports
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
