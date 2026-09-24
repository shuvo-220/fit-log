import Image from "next/image";
import { MdOutlineWatchLater } from "react-icons/md";
import { FaRegStar } from "react-icons/fa";
import { FaBurn } from "react-icons/fa";
import Link from "next/link";


const GymCard = ({ data }) => {

    const { id, name, image, muscleGroups, equipment, duration, caloriesBurned, rating } = data;

    return (
        <div className="">
            <Link href={`/gymCard/${id}`}>
                <div className="card bg-base-100 w-96 shadow-sm">
                    <figure>
                        <Image
                            src={image}
                            alt="image"
                            width={400}
                            height={250}
                        />
                    </figure>
                    <div className="card-body p-5">
                        <div className="flex items-center gap-2">
                            {muscleGroups.map((muscle, index) => (
                                <span key={index} className="bg-[#CCFF00] py-0.5 px-2 text-slate-700 rounded-full">
                                    {muscle}
                                </span>
                            ))}
                        </div>
                        <h2 className="text-2xl uppercase py-1 font-semibold text-white">{data.name}</h2>
                        <span className="text-lg font-light text-slate-400">{data.equipment}</span>
                        <hr className="text-slate-600" />
                        <div className="flex items-center gap-4 text-lg pt-2 text-slate-400">
                            <div className="flex items-center gap-2"> <MdOutlineWatchLater />{duration}</div>
                            <div className="flex items-center gap-2"> <FaBurn />{caloriesBurned} Kcal</div>
                            <div className="flex items-center gap-2"><FaRegStar />{rating}</div>
                        </div>
                    </div>
                </div>
            </Link>
        </div>
    )
}

export default GymCard