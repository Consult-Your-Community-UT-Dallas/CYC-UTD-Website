import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/root/Navbar";
import Footer from "@/components/root/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
    title: "CYC UTD",
    description:
        "CYC at UTDallas is a chapter of the national CYC organization, providing pro bono consulting services to small businesses and startups locally.",
};

export default function RootLayout({ children }) {
    return (
        <html className="!scroll-smooth" lang="en">
            <body className={inter.className}>
                <Navbar />
                {children}
                <Footer />
            </body>
        </html>
    );
}
