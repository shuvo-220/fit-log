import Image from "next/image";
import Link from "next/link";
import { MdOutlineDateRange } from "react-icons/md";
import { CiSaveUp2 } from "react-icons/ci";

const GymDetails = async ({ params }) => {
    const { id } = await params;

    const res = await fetch(
        `https://api.abcz.workers.dev/api/fitlog/${id}`
    );
    const details = await res.json();

    return (
        <div className="min-h-screen bg-[#15171D] text-white px-5 py-10">
            <div className="max-w-6xl mx-auto">

                {/* Back */}


                {/* Details Card */}
                <div className="grid grid-cols-1 lg:grid-cols-2 bg-[#1D2027] rounded-2xl overflow-hidden">

                    {/* LEFT - IMAGE */}
                    <div className="relative min-h-[350px] lg:min-h-[650px]">
                        <Image
                            src={details.image}
                            alt={details.name}
                            fill
                            className="object-cover"
                        />
                    </div>

                    {/* RIGHT - TEXT */}
                    <div className="p-6 md:p-10 flex flex-col justify-center">

                        <h1 className="text-3xl md:text-5xl font-bold mb-4">
                            {details.name}
                        </h1>
                        {/* Description */}
                        <p className="text-gray-400 leading-7 mb-7">
                            {details.description}
                        </p>
                        <div className="flex items-center gap-2">
                            {details.muscleGroups.map((muscle, index) => (
                                <span key={index} className="bg-[#CCFF00] py-0.5 px-2 text-slate-700 rounded-full">
                                    {muscle}
                                </span>
                            ))}
                        </div>

                        {/* Workout Info */}
                       <div className="bg-slate-800 p-3 my-5 rounded-sm">
                            <div className="flex items-center justify-between text-slate-300">
                                <span>Equipment</span>
                                <span>{details.equipment}</span>
                            </div>
                            <hr className="text-slate-700 py-1 mt-1" />

                           
                            <div className="flex items-center justify-between text-slate-300">
                                <span>Difficulty</span>
                                <span>{details.difficulty}</span>
                            </div>
                            <hr className="text-slate-700 py-1 mt-1" />
                            <div className="flex items-center justify-between text-slate-300">
                                <span>Sets</span>
                                <span>{details.sets}</span>
                            </div>
                            <hr className="text-slate-700 py-1 mt-1" />
                            <div className="flex items-center justify-between text-slate-300">
                                <span>Reps</span>
                                <span>{details.reps}</span>
                            </div>
                            <hr className="text-slate-700 py-1 mt-1" />
                            <div className="flex items-center justify-between text-slate-300">
                                <span>Duration</span>
                                <span>{details.duration}</span>
                            </div>
                            <hr className="text-slate-700 py-1 mt-1" />
                            <div className="flex items-center justify-between text-slate-300">
                                <span>Calories</span>
                                <span>{details.caloriesBurned}</span>
                            </div>
                            <hr className="text-slate-700 py-1 mt-1" />

                             <div className="flex items-center justify-between text-slate-300">
                                <span>Rating</span>
                                <span>{details.rating}</span>
                            </div>
                            <hr className="text-slate-700 py-1 mt-1" />
                       </div>

                        {/* Instructions */}
                        <div>
                            <h2 className="text-2xl font-bold mb-4">
                                Instructions
                            </h2>

                            <div className="space-y-3">
                                {details.instructions?.map((instruction, index) => (
                                    <div
                                        key={index}
                                        className="flex gap-3 items-start"
                                    >
                                        <span className=" ">
                                            {index + 1}
                                        </span>

                                        <p className="text-gray-400 leading-6">
                                            {instruction}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Button */}
                        <div className="mt-5 flex items-center gap-5">
                            <button className="text-slate-700 cursor-pointer rounded-sm flex items-center gap-2 bg-[#CCFF00] py-2 px-4">
                                <MdOutlineDateRange /> Add To Today's Plan
                            </button>
                            <button className="text-slate-700 cursor-pointer rounded-sm flex items-center gap-2 border border-slate-300 text-white py-2 px-4">
                                <CiSaveUp2 /> Save For Later
                            </button>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default GymDetails;