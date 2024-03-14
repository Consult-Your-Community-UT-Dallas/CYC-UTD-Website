"use client";

import { useState } from "react";
import Image from "next/image";

const links = [
    {
        title: "Services",
        href: "/#services",
    },
    {
        title: "Team",
        href: "/team",
    },
    {
        title: "FAQ",
        href: "/#faq",
    },
    {
        title: "Contact",
        href: "/#contact",
    },
];

function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    function NavbarLink({ href, children }) {
        return (
            <li>
                <a
                    onClick={() => setIsMenuOpen(false)}
                    href={href}
                    className="block py-2 pr-4 pl-3 text-gray-700 border-t border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0"
                >
                    {children}
                </a>
            </li>
        );
    }

    return (
        <header>
            <nav className="bg-white border-b-2 border-gray-100 px-4 lg:px-6 py-2.5 fixed w-full z-10">
                <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
                    <a href="/#" className="flex items-center">
                        <Image src="/Logo.jpeg" width={32} height={32} alt="CYC UTD Logo" className="mr-3 h-8" />
                        <span className="self-center text-xl font-semibold whitespace-nowrap text-gray-700 lg:hover:text-primary-700">CYC UT Dallas</span>
                    </a>
                    <button
                        data-collapse-toggle="mobile-menu-2"
                        className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
                        aria-controls="mobile-menu-2"
                        aria-expanded={isMenuOpen ? "true" : "false"}
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                    >
                        <span className="sr-only">Open main menu</span>
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path
                                fillRule="evenodd"
                                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                                clipRule="evenodd"
                            ></path>
                        </svg>
                        <svg className="hidden w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path
                                fillRule="evenodd"
                                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                clipRule="evenodd"
                            ></path>
                        </svg>
                    </button>
                    <div className={`${isMenuOpen ? "" : "hidden"} justify-between items-center w-full lg:flex lg:w-auto lg:order-1`} id="mobile-menu-2">
                        <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                            {links.map((link, index) => (
                                <NavbarLink key={index} href={link.href}>
                                    {link.title}
                                </NavbarLink>
                            ))}
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
}

export default Navbar;
