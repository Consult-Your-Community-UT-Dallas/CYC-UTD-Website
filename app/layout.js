import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/root/Navbar";
import Footer from "@/components/root/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
    title: "CYC UT Dallas",
    description:
        "Chapter of the national Consult Your Community organization at UTDallas, providing pro bono consulting services to small businesses and startups locally.",
};

export default function RootLayout({ children }) {
    return (
        <html className="!scroll-smooth" lang="en">
            <body className={inter.className}>
                <Navbar />
                {children}
                <Analytics />
                <SpeedInsights />
                <Footer />
            </body>
        </html>
    );
}
