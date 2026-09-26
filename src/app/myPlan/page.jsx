"use client";

import React, { useState } from "react";
import Image from "next/image";
import { MdOutlineWatchLater } from "react-icons/md";
import { FaBurn, FaRegStar } from "react-icons/fa";
import { useWorkout } from "../WorkoutContext";
import Link from "next/link";

const Page = () => {
    const [activeTab, setActiveTab] = useState("today");
    const [sortBy, setSortBy] = useState("duration");

    const {
        todayPlan,
        savedExercises,
        removeFromTodayPlan,
        removeFromSaved,
    } = useWorkout();

    const currentData =
        activeTab === "today" ? todayPlan : savedExercises;

    // Sort data
    const sortedData = [...currentData].sort((a, b) => {
        if (sortBy === "duration") {
            return (
                Number(a.minutes || a.duration || 0) -
                Number(b.minutes || b.duration || 0)
            );
        }

        if (sortBy === "calories") {
            return (
                Number(a.calories || a.caloriesBurned || 0) -
                Number(b.calories || b.caloriesBurned || 0)
            );
        }

        if (sortBy === "rating") {
            return (
                Number(a.rating || 0) -
                Number(b.rating || 0)
            );
        }

        return 0;
    });

    // Total minutes
    const totalMinutes = currentData.reduce(
        (total, exercise) =>
            total +
            Number(
                exercise.minutes ||
                exercise.duration ||
                0
            ),
        0
    );

    // Total calories
    const totalCalories = currentData.reduce(
        (total, exercise) =>
            total +
            Number(
                exercise.calories ||
                exercise.caloriesBurned ||
                0
            ),
        0
    );

    // Remove exercise
    const handleRemove = (id) => {
        if (activeTab === "today") {
            removeFromTodayPlan(id);
        } else {
            removeFromSaved(id);
        }
    };

    return (
        <div className="min-h-screen bg-[#15171D]">

            <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 xl:px-15 py-10 sm:py-12 lg:py-15">

                {/* Page Title */}
                <div className="mb-8 sm:mb-10">
                    <h1 className="uppercase text-white font-bold text-2xl sm:text-3xl">
                        My Plan
                    </h1>

                    <p className="text-sm sm:text-base text-slate-300 mt-2">
                        Cap of five lifts for today. Finish them, then load more.
                    </p>
                </div>

                {/* Summary */}
                <div className="border border-slate-600 py-5 px-4 sm:px-6 rounded-md bg-slate-900">

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 sm:gap-4">

                        {/* Exercise */}
                        <div>
                            <h2 className="text-slate-400 text-sm sm:text-base">
                                Exercise
                            </h2>

                            <span className="text-2xl font-bold text-white">
                                {currentData.length}
                            </span>
                        </div>

                        {/* Minutes */}
                        <div>
                            <h2 className="text-slate-400 text-sm sm:text-base">
                                Minutes
                            </h2>

                            <span className="text-2xl font-bold text-white">
                                {totalMinutes}
                            </span>
                        </div>

                        {/* Calories */}
                        <div>
                            <h2 className="text-slate-400 text-sm sm:text-base">
                                Calories
                            </h2>

                            <span className="text-2xl font-bold text-white">
                                {totalCalories}
                            </span>
                        </div>

                    </div>
                </div>

                {/* Tabs + Sort */}
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 py-5">

                    {/* Tabs */}
                    <div className="flex items-center gap-2 bg-gray-700 p-2 rounded-md w-full md:w-fit">

                        <button
                            onClick={() => setActiveTab("today")}
                            className={`flex-1 md:flex-none px-3 sm:px-4 py-2 rounded-md text-sm sm:text-base whitespace-nowrap ${
                                activeTab === "today"
                                    ? "bg-[#CCFF00] text-black"
                                    : "text-white"
                            }`}
                        >
                            Today's Plan
                        </button>

                        <button
                            onClick={() => setActiveTab("saved")}
                            className={`flex-1 md:flex-none px-3 sm:px-4 py-2 rounded-md text-sm sm:text-base ${
                                activeTab === "saved"
                                    ? "bg-[#CCFF00] text-black"
                                    : "text-white"
                            }`}
                        >
                            Saved
                        </button>

                    </div>

                    {/* Sort */}
                    <div className="text-slate-400 flex items-center justify-between sm:justify-start gap-2">

                        <span className="text-sm sm:text-base">
                            Sort By:
                        </span>

                        <select
                            value={sortBy}
                            onChange={(e) =>
                                setSortBy(e.target.value)
                            }
                            className="select select-sm bg-[#15171D] text-slate-300 border-slate-700 w-32 sm:w-auto"
                        >
                            <option value="duration">
                                Duration
                            </option>

                            <option value="calories">
                                Calories
                            </option>

                            <option value="rating">
                                Rating
                            </option>
                        </select>

                    </div>

                </div>

                {/* Main Area */}
                <div className="space-y-4">

                    {sortedData.length === 0 ? (

                        <div className="text-center py-16 sm:py-20 px-4 border border-slate-800 rounded-md">

                            <p className="text-slate-500 mb-5 text-sm sm:text-base">
                                {activeTab === "today"
                                    ? "No exercises added to today's plan."
                                    : "No saved exercises."}
                            </p>

                            <Link
                                href="/"
                                className="inline-block bg-[#CCFF00] text-black font-semibold px-5 py-2.5 rounded-md hover:bg-[#b8e600] transition"
                            >
                                Browse Workout
                            </Link>

                        </div>

                    ) : (

                        sortedData.map((exercise) => (

                            <div
                                key={exercise.id}
                                className="border border-slate-800 p-4 sm:p-5 rounded-md"
                            >

                                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-5">

                                    {/* Details */}
                                    <div className="flex items-start gap-3 sm:gap-4 min-w-0">

                                        {/* Image */}
                                        <div className="shrink-0">

                                            <Image
                                                src={exercise.image}
                                                alt={exercise.name}
                                                width={120}
                                                height={120}
                                                className="w-20 h-20 sm:w-24 sm:h-24 lg:w-30 lg:h-30 object-cover rounded-md"
                                            />

                                        </div>

                                        {/* Exercise Info */}
                                        <div className="min-w-0">

                                            <h2 className="font-bold text-base sm:text-xl text-white break-words">
                                                {exercise.name}
                                            </h2>

                                            <span className="text-slate-500 text-sm">
                                                {exercise.equipment}
                                            </span>

                                            {/* Stats */}
                                            <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm sm:text-base lg:text-lg pt-2 text-slate-400">

                                                {/* Duration */}
                                                <div className="flex items-center gap-1.5">
                                                    <MdOutlineWatchLater />

                                                    <span>
                                                        {exercise.minutes ||
                                                            exercise.duration ||
                                                            0}{" "}
                                                        min
                                                    </span>
                                                </div>

                                                {/* Calories */}
                                                <div className="flex items-center gap-1.5">

                                                    <FaBurn />

                                                    <span>
                                                        {exercise.calories ||
                                                            exercise.caloriesBurned ||
                                                            0}{" "}
                                                        Kcal
                                                    </span>

                                                </div>

                                                {/* Rating */}
                                                <div className="flex items-center gap-1.5">

                                                    <FaRegStar />

                                                    <span>
                                                        {exercise.rating || 0}
                                                    </span>

                                                </div>

                                            </div>

                                        </div>

                                    </div>

                                    {/* Buttons */}
                                    <div className="flex flex-col sm:flex-row lg:shrink-0 items-stretch sm:items-center gap-2 sm:gap-3 w-full lg:w-auto">

                                        {/* View Details */}
                                        <button
                                            className="cursor-pointer border border-gray-300 py-2 px-4 rounded-full text-white text-sm sm:text-base whitespace-nowrap"
                                        >
                                            View Details
                                        </button>

                                        {/* Mark As Done */}
                                        {activeTab === "today" && (
                                            <button
                                                onClick={() =>
                                                    handleRemove(
                                                        exercise.id
                                                    )
                                                }
                                                className="cursor-pointer py-2 px-4 bg-[#CCFF00] text-black rounded-full text-sm sm:text-base whitespace-nowrap"
                                            >
                                                Mark As Done
                                            </button>
                                        )}

                                        {/* Remove */}
                                        <button
                                            onClick={() =>
                                                handleRemove(
                                                    exercise.id
                                                )
                                            }
                                            className="text-white hover:text-red-500 cursor-pointer px-2 py-2 sm:py-1"
                                        >
                                            X
                                        </button>

                                    </div>

                                </div>

                            </div>

                        ))

                    )}

                </div>

            </div>

        </div>
    );
};

export default Page;