import { CheckIcon } from '@heroicons/react/20/solid'

const includedFeatures = [
    'Private forum access',
    'Member resources',
    'Entry to annual conference',
    'Official member t-shirt',
]

export default function Example() {
    return (
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-4xl sm:text-center">
                <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Appraisal</h2>
                <p className="mt-6 text-base leading-8 text-gray-600">
                    ME's appraisal division provides accurate and reliable appraisals of properties for a variety of purposes, including financing, tax assessment, and estate planning. The company's team of certified appraisers has a deep understanding of the factors that affect the value of properties and can provide clients with accurate and reliable appraisals.

                </p>
            </div>

            <div className="mx-auto mt-16 max-w-2xl rounded-3xl sm:mt-20 lg:mx-0 lg:flex lg:max-w-none">
                <div className="relative z-10 rounded-3xl shadow-xl overflow-hidden lg:rounded-none lg:rounded-l-3xl">
                    <img
                        className="rounded-2xl"
                        src="https://images.unsplash.com/photo-1480074568708-e7b720bb3f09?auto=format&fit=crop&q=80&w=2074&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        alt="Description of the image"
                    />
                </div>

                <div className="p-8 sm:p-10 lg:flex-auto">
                    <h3 className="text-2xl font-bold tracking-tight text-gray-900">ME's appraisal services include</h3>

                    <div className="mt-10 flex items-center gap-x-4">
                        <h4 className="flex-none text-sm font-semibold leading-6 text-indigo-600">Market value appraisals</h4>
                        <div className="h-px flex-auto bg-gray-100" />
                    </div>
                    <p className="mt-4 text-base leading-6 text-gray-600">
                        ME can provide appraisals of properties for a variety of purposes, including financing, tax assessment, and estate planning.
                    </p>

                    <div className="mt-10 flex items-center gap-x-4">
                        <h4 className="flex-none text-sm font-semibold leading-6 text-indigo-600">Special purpose appraisals</h4>
                        <div className="h-px flex-auto bg-gray-100" />
                    </div>
                    <p className="mt-4 text-base leading-6 text-gray-600">
                        ME can also provide appraisals for special purposes, such as litigation support and eminent domain.
                    </p>
                </div>
            </div>

            <div className="flex flex-col items-center mt-16 w-max-3xl">
                <p className="mt-6 text-base leading-8 text-gray-600 text-sm lg:text-center sm:text-justify ">
                    ME's appraisal division provides accurate and reliable appraisals of properties for a variety of purposes, including financing, tax assessment, and estate planning. The company's team of certified appraisers has a deep understanding of the factors that affect the value of properties and can provide clients with accurate and reliable appraisals.
                </p>            
                <div className="mt-6 w-full h-1 rounded-full sm:w-24" />
            </div>


        </div>
    )
}
