"use client";

import { businessFormLink, consultantFormLink } from "../../data/FormLinks";

function CallToAction() {
    return (
        <section className="py-28 bg-[url('/CallToAction.jpg')] bg-center bg-cover">
            <div className="gap-8 items-center px-4 mx-auto max-w-screen-lg">
                <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-white">Let&apos;s work together</h2>
                <p className="mb-6 font-light text-white md:text-lg md:w-8/12">
                    Unlock the full potential of your business or career with UT Dallas CYC Chapter&apos;s consulting services. Contact us today to learn more
                    about how we can help you.
                </p>
                <div className="flex flex-col space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4">
                    <a
                        href={consultantFormLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                    >
                        Student? Become a Consultant
                    </a>
                    <a
                        href={businessFormLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                    >
                        Small Business?
                        <svg className="ml-2 -mr-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path
                                fillRule="evenodd"
                                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                                clipRule="evenodd"
                            ></path>
                        </svg>
                    </a>
                </div>
            </div>
        </section>
    );
}

export default CallToAction;
