"use client";
import {
    Navbar,
    NavBody,
    NavItems,
    MobileNav,
    NavbarLogo,
    NavbarButton,
    MobileNavHeader,
    MobileNavToggle,
    MobileNavMenu,
} from "@/components/ui/resizable-navbar";
import { useState } from "react";
import ContactPage from "./ContactUs";
import Footer from "./Footer";
import { WavyBackground } from "./ui/wavy-background";

export function NavPage() {
    const navItems = [
        {
            name: "Home",
            link: "/",
        },
        {
            name: "About Us",
            link: "/",
        },
        {
            name: "Services",
            link: "/",
        },
        {
            name: "Products",
            link: "/",
        },
        {
            name: "Features",
            link: "#features",
        },
        {
            name: "Pricing",
            link: "#pricing",
        },
    ];

    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    return (
        <div className="relative w-full">
            <Navbar>
                {/* Desktop Navigation */}
                <NavBody>
                    <NavbarLogo />
                    <NavItems items={navItems} />
                    <div className="flex items-center gap-4">
                        <NavbarButton variant="secondary">Login</NavbarButton>
                    </div>
                </NavBody>

                {/* Mobile Navigation */}
                <MobileNav>
                    <MobileNavHeader>
                        <NavbarLogo />
                        <MobileNavToggle
                            isOpen={isMobileMenuOpen}
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        />
                    </MobileNavHeader>

                    <MobileNavMenu
                        isOpen={isMobileMenuOpen}
                        onClose={() => setIsMobileMenuOpen(false)}
                    >
                        {navItems.map((item, idx) => (
                            <a
                                key={`mobile-link-${idx}`}
                                href={item.link}
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="relative text-neutral-600 dark:text-neutral-300"
                            >
                                <span className="block">{item.name}</span>
                            </a>
                        ))}
                        <div className="flex w-full flex-col gap-4">
                            <NavbarButton
                                onClick={() => setIsMobileMenuOpen(false)}
                                variant="primary"
                                className="w-full"
                            >
                                Login
                            </NavbarButton>
                            <NavbarButton
                                onClick={() => setIsMobileMenuOpen(false)}
                                variant="primary"
                                className="w-full"
                            >
                                Book a call
                            </NavbarButton>
                        </div>
                    </MobileNavMenu>
                </MobileNav>
            </Navbar>
            <BackgroudBeam />
            <ContactPage />
            <Footer />

            {/* Navbar */}
        </div>
    );
}

const BackgroudBeam = () => {
    return (
        <>
            <WavyBackground>
                <div className="max-w-6xl mx-auto p-4">
                    <h1 className="text-2xl md:text-4xl lg:text-7xl text-white font-bold inter-var text-center">
                        <span>
                            Illusion AI
                        </span>  <br />Where AI Meets Infinite Wisdom

                    </h1>
                    <p></p>
                    <p className="text-base md:text-lg mt-4 text-white font-normal inter-var text-center">
                        AI that can read your future, solve your business problems, and teach you the secrets of the universe and help you to research — all in one place.
                    </p>
                </div>
            </WavyBackground>

        </>
    )
}
