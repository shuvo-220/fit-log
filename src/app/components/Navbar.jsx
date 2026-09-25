"use client";

import React from "react";
import logo from "../assets/logo.png";
import Image from "next/image";
import Link from "next/link";
import { useWorkout } from "../WorkoutContext";

const Navbar = () => {
    const { todayPlan, savedExercises } = useWorkout();

    return (
        <div className="border-b border-slate-500">
            <div className="mx-5 sm:mx-8 md:mx-12 lg:mx-15 py-4 sm:py-5">
                <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">

                    {/* Logo */}
                    <div className="flex items-center gap-2">
                        <Link href="/" className="flex items-center gap-2">
                            <Image
                                src={logo}
                                alt="logo"
                                width={24}
                                height={24}
                            />

                            <span className="font-bold text-lg">
                                FITLOG
                            </span>
                        </Link>
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
                            href="/myPlan"
                            className="hover:font-semibold transition"
                        >
                            My Plan
                        </Link>
                    </div>

                    {/* Plan & Saved */}
                    <div className="flex items-center gap-5 sm:gap-6 text-sm sm:text-base">

                        {/* Plan */}
                        <Link
                            href="/myPlan"
                            className="flex items-center gap-2"
                        >
                            <Link href='/myPlan'>Plan</Link>

                            <span className="py-0.5 px-2 bg-[#CCFF00] text-slate-900 rounded-full text-sm">
                                {todayPlan.length}
                            </span>
                        </Link>

                        {/* Saved */}
                        <Link
                            href="/myPlan"
                            className="flex items-center gap-2"
                        >
                            <Link href='/myPlan'>Saved</Link>

                            <span className="py-0.5 px-2 rounded-full border border-gray-300 text-sm">
                                {savedExercises.length}
                            </span>
                        </Link>

                    </div>

                </div>
            </div>
        </div>
    );
};

export default Navbar;