"use client";

import Image from "next/image";
import { footerLinks } from "@/data/FooterLinks";

function FooterCard({ title, links }) {
    return (
        <div>
            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase">{title}</h2>
            <ul className="text-gray-600">
                {links.map((link, index) => (
                    <li key={index} className={index !== links.length - 1 ? "mb-4" : ""}>
                        <a href={link.href} target="_blank" rel="noopener noreferrer" className="hover:underline">
                            {link.title}
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    );
}

function Footer() {
    return (
        <footer className="p-4 sm:p-6">
            <div className="mx-auto max-w-screen-xl">
                <div className="md:flex md:justify-between">
                    <div className="mb-6 md:mb-0">
                        <div className="flex items-center">
                            <Image src="/Logo.jpeg" width={32} height={32} alt="CYC Logo" className="mr-3 h-8" />
                            <span className="self-center text-2xl font-semibold whitespace-nowrap">CYC UT Dallas</span>
                        </div>
                        <p className="pt-5 text-sm text-gray-500">Empowering Dallas&apos;s small business owners.</p>
                    </div>
                    <div className={`grid grid-cols-${footerLinks.length} gap-14`}>
                        {footerLinks.map((card, index) => (
                            <FooterCard key={index} {...card} />
                        ))}
                    </div>
                </div>
                <hr className="my-6 border-gray-200 sm:mx-auto lg:my-8" />
                <div className="flex items-center justify-center">
                    <span className="text-sm text-gray-500">
                        © {new Date().getFullYear()}{" "}
                        <a href="https://consultyourcommunity.org/" target="_blank" rel="noopener noreferrer" className="hover:underline">
                            Consult Your Community™
                        </a>
                        . All Rights Reserved.
                    </span>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
