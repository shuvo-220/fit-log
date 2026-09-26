"use client";

import React, { useState } from "react";
import Image from "next/image";
import { MdOutlineWatchLater } from "react-icons/md";
import { FaBurn, FaRegStar } from "react-icons/fa";
import { useWorkout } from "../WorkoutContext";

const Page = () => {
    const [activeTab, setActiveTab] = useState("today");
    const [sortBy, setSortBy] = useState("duration");

    const {
        todayPlan,
        savedExercises,
        removeFromTodayPlan,
        removeFromSaved,
    } = useWorkout();

    // Current tab data
    const currentData =
        activeTab === "today"
            ? todayPlan
            : savedExercises;

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

            <div className="mx-15 py-15">

                {/* Page Title */}
                <h1 className="uppercase text-white font-bold">
                    My Plan
                </h1>

                <p className="text-sm text-slate-300 mb-10">
                    Cap of five lifts for today. Finish them, then load more.
                </p>

                {/* Summary */}
                <div className="border border-slate-600 py-5 px-4 rounded-md bg-slate-900">

                    <div className="flex items-center justify-between">

                        {/* Exercise */}
                        <div>
                            <h2 className="text-slate-400">
                                Exercise
                            </h2>

                            <span className="text-2xl font-bold text-white">
                                {currentData.length}
                            </span>
                        </div>

                        {/* Minutes */}
                        <div>
                            <h2 className="text-slate-400">
                                Minutes
                            </h2>

                            <span className="text-2xl font-bold text-white">
                                {totalMinutes}
                            </span>
                        </div>

                        {/* Calories */}
                        <div>
                            <h2 className="text-slate-400">
                                Calories
                            </h2>

                            <span className="text-2xl font-bold text-white">
                                {totalCalories}
                            </span>
                        </div>

                    </div>
                </div>

                {/* Tabs + Sort */}
                <div className="flex items-center justify-between py-5">

                    {/* Tabs */}
                    <div className="flex items-center gap-2 bg-gray-700 p-2 rounded-md">

                        <button
                            onClick={() => setActiveTab("today")}
                            className={`px-4 py-2 rounded-md ${
                                activeTab === "today"
                                    ? "bg-[#CCFF00] text-black"
                                    : "text-white"
                            }`}
                        >
                            Today's Plan
                        </button>

                        <button
                            onClick={() => setActiveTab("saved")}
                            className={`px-4 py-2 rounded-md ${
                                activeTab === "saved"
                                    ? "bg-[#CCFF00] text-black"
                                    : "text-white"
                            }`}
                        >
                            Saved
                        </button>

                    </div>

                    {/* Sort */}
                    <div className="text-slate-400 flex items-center gap-2">

                        <span>
                            Sort By:
                        </span>

                        <select
                            value={sortBy}
                            onChange={(e) =>
                                setSortBy(e.target.value)
                            }
                            className="select select-sm bg-[#15171D] text-slate-300 border-slate-700"
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

                        <div className="text-center py-20 border border-slate-800 rounded-md">

                            <p className="text-slate-500">
                                {activeTab === "today"
                                    ? "No exercises added to today's plan."
                                    : "No saved exercises."}
                            </p>

                        </div>

                    ) : (

                        sortedData.map((exercise) => (

                            <div
                                key={exercise.id}
                                className="border border-slate-800 p-5 rounded-md"
                            >

                                <div className="flex items-center justify-between">

                                    {/* Details */}
                                    <div className="flex items-center gap-4">

                                        {/* Image */}
                                        <div>
                                            <Image
                                                src={exercise.image}
                                                alt={exercise.name}
                                                width={120}
                                                height={120}
                                                className="w-30 h-30 object-cover rounded-md"
                                            />
                                        </div>

                                        {/* Exercise Info */}
                                        <div>

                                            <h2 className="font-bold text-xl text-white">
                                                {exercise.name}
                                            </h2>

                                            <span className="text-slate-500">
                                                {exercise.equipment}
                                            </span>

                                            <div className="flex items-center gap-4 text-lg pt-2 text-slate-400">

                                                {/* Duration */}
                                                <div className="flex items-center gap-2">

                                                    <MdOutlineWatchLater />

                                                    {exercise.minutes ||
                                                        exercise.duration ||
                                                        0}{" "}
                                                    min

                                                </div>

                                                {/* Calories */}
                                                <div className="flex items-center gap-2">

                                                    <FaBurn />

                                                    {exercise.calories ||
                                                        exercise.caloriesBurned ||
                                                        0}{" "}
                                                    Kcal

                                                </div>

                                                {/* Rating */}
                                                <div className="flex items-center gap-2">

                                                    <FaRegStar />

                                                    {exercise.rating}

                                                </div>

                                            </div>

                                        </div>

                                    </div>

                                    {/* Buttons */}
                                    <div className="flex items-center gap-3">

                                        {/* View Details */}
                                        <button
                                            className="border border-gray-300 py-2 px-4 rounded-full text-white"
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
                                                className="py-2 px-4 bg-[#CCFF00] text-black rounded-full"
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
                                            className="text-white hover:text-red-500 cursor-pointer px-2"
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