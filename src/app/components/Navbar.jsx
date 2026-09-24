import React from "react";
import logo from "../assets/logo.png";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
    return (
        <div className="border-b border-slate-500">
            <div className="mx-5 sm:mx-8 md:mx-12 lg:mx-15 py-4 sm:py-5">
                <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">

                    {/* Logo */}
                    <div className="flex items-center gap-2">
                        <Image
                            src={logo}
                            alt="logo"
                            width={24}
                            height={24}
                        />

                        <span className="font-bold text-lg">
                            FITLOG
                        </span>
                    </div>

                    {/* Navigation */}
                    <div className="flex items-center gap-5 text-sm sm:text-base">
                        <Link
                            href="/"
                            className="hover:font-semibold transition"
                        >
                            Workout
                        </Link>

                        <Link
                            href="/"
                            className="hover:font-semibold transition"
                        >
                            My Plan
                        </Link>
                    </div>

                    {/* Plan & Saved */}
                    <div className="flex items-center gap-5 sm:gap-6 text-sm sm:text-base">

                        <div className="flex items-center gap-2">
                            <span>Plan</span>

                            <span className="py-0.5 px-2 bg-[#CCFF00] text-slate-900 rounded-full text-sm">
                                0
                            </span>
                        </div>

                        <div className="flex items-center gap-2">
                            <span>Saved</span>

                            <span className="py-0.5 px-2 rounded-full border border-gray-300 text-sm">
                                0
                            </span>
                        </div>

                    </div>

                </div>
            </div>
        </div>
    );
};

export default Navbar;