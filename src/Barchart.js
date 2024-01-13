import bar from './bars.png';

export default function Example() {
    return (
        <section className="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:px-8">
            <div className="absolute inset-0 -z-10 bg-[radial-gradient(45rem_50rem_at_top,theme(colors.indigo.100),white)] opacity-20" />
            <div className="absolute inset-y-0 right-1/2 -z-10 mr-16 w-[200%] origin-bottom-left skew-x-[-30deg] bg-white shadow-xl shadow-indigo-600/10 ring-1 ring-indigo-50 sm:mr-28 lg:mr-0 xl:mr-16 xl:origin-center" />
            <div className="mx-auto max-w-2xl lg:max-w-4xl">
                <div className="text-center">
                    <h2 className="text-3xl font-extrabold tracking-tight text-blue-gray-900 sm:text-4xl">
                        Industry Leading Growth and Success
                    </h2>
                </div>
                <figure className="mt-10">
                    <blockquote className="text-center text-lg font-medium leading-8 text-gray-700 sm:leading-9">
                        <p>
                            In recent years, ME has continued to grow
                            both first-party and third party
                            management portfolios to record highs, even alongside strong dispositions at
                            Commercial Assets Residential Assets market peak. This has outpaced and outperformed peers in the industry, while
                            providing exceptional service to our clients.
                        </p>
                    </blockquote>

                    <figcaption className="">
                        <div className="flex justify-center">
                            <div className="flex flex-col justify-center">
                                <div className="flex flex-col justify-center">
                                    <img
                                        src={bar}
                                        alt="bar"
                                        className="w-full h-full"
                                    />
                                </div>
                            </div>
                        </div>
                    </figcaption>
                </figure>
            </div>
        </section>
    )
}
