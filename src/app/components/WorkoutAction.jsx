"use client";

import React from "react";
import { MdOutlineDateRange } from "react-icons/md";
import { CiSaveUp2 } from "react-icons/ci";
import { useWorkout } from "@/app/WorkoutContext";

const WorkoutActions = ({ exercise }) => {
    const {
        addToTodayPlan,
        saveForLater,
        todayPlan,
        savedExercises,
    } = useWorkout();

    const handleAddToToday = () => {
        addToTodayPlan(exercise);
    };

    const handleSaveForLater = () => {
        saveForLater(exercise);
    };

    const alreadyAdded = todayPlan.some(
        (item) => item.id === exercise.id
    );

    const alreadySaved = savedExercises.some(
        (item) => item.id === exercise.id
    );

    return (
        <div className="mt-5 flex items-center gap-5">

            <button
                onClick={handleAddToToday}
                disabled={alreadyAdded}
                className={`text-slate-700 rounded-sm flex items-center gap-2 py-2 px-4 ${alreadyAdded
                        ? "bg-gray-500 cursor-not-allowed"
                        : "bg-[#CCFF00] cursor-pointer"
                    }`}
            >
                <MdOutlineDateRange />

                {alreadyAdded
                    ? "Added To Today's Plan"
                    : "Add To Today's Plan"}
            </button>

            <button
                onClick={handleSaveForLater}
                disabled={alreadySaved}
                className={`rounded-sm flex items-center gap-2 py-2 px-4 ${alreadySaved
                        ? "bg-gray-500 cursor-not-allowed"
                        : "border border-slate-300 text-white cursor-pointer"
                    }`}
            >
                <CiSaveUp2 />

                {alreadySaved ? "Saved" : "Save For Later"}
            </button>

        </div>
    );
};

export default WorkoutActions;