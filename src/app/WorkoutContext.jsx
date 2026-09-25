"use client";

import React, { createContext, useContext, useState } from "react";

const WorkoutContext = createContext();

export const WorkoutProvider = ({ children }) => {
    const [todayPlan, setTodayPlan] = useState([]);
    const [savedExercises, setSavedExercises] = useState([]);

    // Add to Today's Plan
    const addToTodayPlan = (exercise) => {
        setTodayPlan((prev) => {
            const alreadyExists = prev.some(
                (item) => item.id === exercise.id
            );

            if (alreadyExists) return prev;

            return [
                ...prev,
                {
                    ...exercise,
                    minutes: parseInt(exercise.duration) || 0,
                    calories: Number(exercise.caloriesBurned) || 0,
                },
            ];
        });
    };

    // Save for Later
    const saveForLater = (exercise) => {
        setSavedExercises((prev) => {
            const alreadyExists = prev.some(
                (item) => item.id === exercise.id
            );

            if (alreadyExists) return prev;

            return [
                ...prev,
                {
                    ...exercise,
                    minutes: parseInt(exercise.duration) || 0,
                    calories: Number(exercise.caloriesBurned) || 0,
                },
            ];
        });
    };

    // Remove from Today's Plan
    const removeFromTodayPlan = (id) => {
        setTodayPlan((prev) =>
            prev.filter((item) => item.id !== id)
        );
    };

    // Remove from Saved
    const removeFromSaved = (id) => {
        setSavedExercises((prev) =>
            prev.filter((item) => item.id !== id)
        );
    };

    return (
        <WorkoutContext.Provider
            value={{
                todayPlan,
                savedExercises,
                addToTodayPlan,
                saveForLater,
                removeFromTodayPlan,
                removeFromSaved,
            }}
        >
            {children}
        </WorkoutContext.Provider>
    );
};

export const useWorkout = () => {
    const context = useContext(WorkoutContext);

    if (!context) {
        throw new Error(
            "useWorkout must be used inside WorkoutProvider"
        );
    }

    return context;
};