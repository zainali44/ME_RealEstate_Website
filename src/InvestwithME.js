import logo from "./image-8.png";
import invest from "./invest.png";
import { Typography } from "@material-tailwind/react";

export default function Example() {
    return (
        <div className="bg-white">
            <img
                className="h-96 w-full object-cover object-center brightness-50"
                src="https://images.unsplash.com/photo-1503951458645-643d53bfd90f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                alt="nature image"
            />

            {/* Add the "INVEST WITH ME" text on the cover */}
            <div className="absolute top-1/4 mt-10 left-1/2 transform -translate-x-1/2 -translate-y-1/2 shadow-lg text-black text-center font-bold text-4xl">
                <h1 className="text-5xl font-bold text-white">INVEST WITH ME</h1>
            </div>

            <section className="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:px-8">
                <div className="absolute inset-0 -z-10 bg-[radial-gradient(45rem_50rem_at_top,theme(colors.indigo.100),white)] opacity-20" />
                <div className="absolute inset-y-0 right-1/2 -z-10 mr-10 w-[200%] origin-bottom-left skew-x-[-30deg] bg-white shadow-xl shadow-indigo-600/10 ring-1 ring-indigo-50 sm:mr-28 lg:mr-0 xl:mr-16 xl:origin-center" />
                <div className="mx-auto max-w-2xl lg:max-w-4xl">
                    <h3 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl lg:text-4xl text-inline">
                        <span className="block">Navigating Investors Through Strategic Real Estate Investment Strategies</span>
                    </h3>

                    <p className="mt-6 text-lg leading-8 text-gray-600 paragraph-spacing">
                        In the dynamic landscape of real estate, a profound comprehension of your market stands as an imperative pillar, particularly when confronted with constrained inventory. The essence lies in active engagement and tailoring experiences to forge enduring connections within the community. The discerning populace seeks associations founded on trust and reliability. It is our unwavering commitment to ascend as your unwavering ally.
                    </p>

                    <p className="mt-6 text-lg leading-8 text-gray-600 paragraph-spacing">
                        <span className="font-bold">At ME Real Estate,</span>  we dedicate ourselves to the pursuit of understanding you intricately, comprehending your distinct objectives and cherished principles. In the capacity of your collaborator, we harness this acumen to architect strategies that not only steer us towards achieving these objectives but also remain harmoniously aligned with your core values. Along this transformative trajectory, we remain steadfast in offering clarity, delineating potential risks and rewards of every prospect. This deliberate transparency empowers our associates to make judicious choices in their investment pursuits.
                    </p>

                    <p className="mt-6 text-lg leading-8 text-gray-600 paragraph-spacing">
                        In summation, ME Real Estate emerges as an embodiment of not just industry knowledge, but an embodiment of your aspirations, your convictions. Our steadfast commitment to transparency, strategic prowess, and adaptability solidify our standing as the vanguard of trust and partnership. Together, we embark on a voyage sculpted by insights, marked by opportunities, and bound by shared successes.
                    </p>

                    <div className="mt-20">
                        <h3 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl lg:text-4xl text-inline text-center">
                            <span className="block">Investment Approach</span>
                        </h3>

                        <img src={invest} alt="logo" className="mx-auto" />

                        <h3 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl lg:text-4xl text-inline text-center">
                            <span className="block">Underwriting Process</span>
                        </h3>

                        <div className="mt-6 text-lg leading-8 text-gray-600 paragraph-spacing">
                            <span className="font-bold">At ME Real Estate,</span>we firmly believe that the destiny of a deal is determined right at the closing table. Our approach is anchored in a meticulous and well-structured due diligence and underwriting process. This process is masterfully orchestrated by a diverse team comprising real estate brokers, experts in site development and management, skilled engineers, and seasoned financial professionals. Together, they offer a comprehensive and multi-faceted perspective on every transaction we undertake.
                            <br />
                            <br />
                            We specialize in identifying and securing properties that have long been held by non-corporate entities. While these acquisitions open doors to more personalized negotiation opportunities, they often present challenges in terms of property information accessibility. This is primarily due to historical disorganization and a lack of centralized documentation. However, we have honed our expertise through firsthand experience and an in-depth understanding of these unique transactions. Our hands-on approach and extensive track record empower us to access valuable insights and perspectives that are not easily accessible elsewhere.                            </div>
                    </div>

                    <div className="mt-20">
                        <h3 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl lg:text-4xl text-inline text-center">
                            <span className="block">Investment Criteria</span>
                        </h3>

                        {/*LList of some items*/}
                        <div className="mt-6 text-lg leading-8 text-gray-600 paragraph-spacing space-y-6 text-center">
                        <ul className="grid grid-cols-1 gap-6 mt-6 sm:grid-cols-2 lg:grid-cols-3">
                            <li className="font-bold">Asset Classes</li>
                            <li>Residential</li>
                            <li>Commercial</li>
                            <li>Industrial</li>
                            <li>Land</li>
                            <li>Special Purpose</li>
                            <li>Multi-Family</li>
                            <li>Senior Housing</li>
                            <li>Student Housing</li>
                            <li>Self-Storage</li>
                            </ul>
                        </div>
                        </div>
                </div>
            </section>
        </div>
    );
}
