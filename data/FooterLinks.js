import { businessFormLink, consultantFormLink } from "./FormLinks";

const instagram = "https://www.instagram.com/cycdallas/?igsh=ZzhqeDFpN3JlYnF2";
const linkedin = "https://www.linkedin.com/company/consult-your-community-at-utdallas/";
const email = "mailto:utdallas@consultyourcommunity.org";
const discord = "https://discord.gg/ua3wQvaTRd";

export const footerLinks = [
    {
        title: "Resources",
        links: [
            {
                title: "Email",
                href: email,
            },
            {
                title: "Business Form",
                href: businessFormLink,
            },
            {
                title: "Consultant Form",
                href: consultantFormLink,
            },
        ],
    },
    {
        title: "Follow us",
        links: [
            {
                title: "LinkedIn",
                href: linkedin,
            },
            {
                title: "Discord",
                href: discord,
            },
            {
                title: "Instagram",
                href: instagram,
            },
        ],
    },
];
