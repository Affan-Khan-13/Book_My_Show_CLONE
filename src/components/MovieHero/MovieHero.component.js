import React from "react";
import { AiFillHeart } from "react-icons/ai"
import { BiChevronRight } from "react-icons/bi"
import { BsDot } from "react-icons/bs"



const MovieHero = () => {
    return (
        <>
            <div className="md:hidden">
                <img
                    src="https://in.bmscdn.com/iedb/movies/images/mobile/listing/xxlarge/shang-chi-and-the-legend-of-the-ten-rings-et00122566-24-08-2021-02-01-36.jpg"
                    alt="poster"
                />
            </div>

            <div className="hidden md:block lg:hidden">
                <img
                    src="https://in.bmscdn.com/iedb/movies/images/mobile/listing/xxlarge/shang-chi-and-the-legend-of-the-ten-rings-et00122566-24-08-2021-02-01-36.jpg"
                    alt="poster"
                />
            </div>

            <div className="relative hidden lg:block" style={{ height: "30rem" }}>

                <div className="absolute h-full w-full z-10"
                    style={{ backgroundImage: "linear-gradient(90deg, rgb(34, 34, 34) 24.97%, rgb(34, 34, 34) 38.3%, rgba(34, 34, 34, 0.04) 97.47%, rgb(34, 34, 34) 100%)" }}
                />


                <div className="absolute z-30 w-64 h-68 left-36 top-10">
                    <img
                        src="https://in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/shang-chi-and-the-legend-of-the-ten-rings-et00122566-24-08-2021-02-01-36.jpg"
                        alt="poster"
                        className="h-full w-full rounded-xl"
                    />
                </div>

                <div className="absolute z-30 top-10 left-1/3">
                    <div className="w-96">
                        <h1 className="text-white font-bold text-3xl"> Shang-Chi and the Legend of The Ten Rings</h1>
                        <h1 className="text-white font-bold text-3xl">  </h1>
                    </div>


                    <div className="flex flex-row inline-flex items-center gap-2 py-4">
                        <AiFillHeart className="text-red-600 text-2xl" />
                        <p className="text-2xl text-white font-bold "> 91% </p>
                        <p className="text-1xl text-white mt-1"> 25.5k Rating</p>
                        <BiChevronRight className="text-white mt-2" />
                    </div>

                    <div className="bg-zinc-900 h-20 w-88 rounded-xl gap-4 flex items-center my-3">
                        <div className="px-4 py-2">
                            <p className="text-2xl text-white font-bold">Add your ratings & review</p>
                            <p className="text-1xl text-white">Your ratings matter</p>
                        </div>

                        <div>
                            <button className="bg-white text-zinc-900 rounded-xl p-2 mx-6">Rate Now</button>
                        </div>
                    </div>

                    <div className="bg-white h-6 w-60 mt-8 rounded-r-lg">
                        <p className="text-black text-1xl font-bold mx-2"> 2D, 3D, IMAX 2D, MX4D, 4DX</p>
                    </div>
                    <div className="bg-white h-6 w-97 mt-4 rounded-r-lg">
                        <p className="text-black text-1xl font-bold mx-2"> English, Kannada, Tamil, Telugu, Hindi, Malyalam</p>
                    </div>

                    <p className="text-white font-bold text-1xl pt-3 flex items-center"> 2h 12m
                        <BsDot />
                        Action, Adventure, Fantasy
                        <BsDot />
                        UA
                        <BsDot />
                        3 Sep, 2021
                    </p>

                    <button className="bg-red-600 text-1xl text-white font-bold py-2 px-12 rounded-xl my-4">Book TIckets</button>

                </div>


                <img
                    src="https://in.bmscdn.com/iedb/movies/images/mobile/listing/xxlarge/shang-chi-and-the-legend-of-the-ten-rings-et00122566-24-08-2021-02-01-36.jpg"
                    alt="poster"
                    className="w-full h-full"
                />
            </div>
        </>
    )
};

export default MovieHero;
