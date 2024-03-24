"use client";

import { businessFormLink, consultantFormLink } from "../../data/FormLinks";

function CallToAction() {
    return (
        <section className="py-28 bg-[url('/TeamPicture.webp')] bg-center bg-cover">
            <div className="gap-8 items-center px-4 mx-auto max-w-screen-lg">
                <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-white">Let&apos;s work together</h2>
                <p className="mb-6 font-light text-white md:text-lg md:w-8/12">
                    Unlock the full potential of your business or career with Consult Your Community&apos;s consulting services. Contact us today to learn more
                    about how we can help you.
                </p>
                <div className="flex flex-col space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4">
                    <a
                        href={consultantFormLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-3 text-center"
                    >
                        Student? Become a Consultant
                    </a>
                    <a
                        href={businessFormLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-3 text-center"
                    >
                        Small Business? Work with Us
                    </a>
                </div>
            </div>
        </section>
    );
}

export default CallToAction;
