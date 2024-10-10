import React from "react"
import Image from "next/image"

function Hero(){
    return (
        <div className="bg-gray-900">
        <main className=" mb-10 mx-20">
            <section className="flex gap-10 items-center">
                {/* right side */}
                <div className="flex-1">
                    <h1 className="font-bold text-white text-6xl font-mono mt-20">TIME  <span className="text-yellow-500"> TO DRESS </span> SMARTER</h1>
                    <p className="font-thin text-2xl mt-24 text-teal-50">Visual <span className="text-yellow-500">Merchandising</span> for Brands</p>
                    <h5 className="font-mono mt-4 text-teal-50">Tailored <span className="text-yellow-500">to</span>  fashion </h5>
                    <button className="bg-yellow-500 text-black py-2 px-5 mt-20 hover:text-teal-50 rounded-2xl font-bold">EV Collection</button>
                </div>

                <div className="flex-1 ml-60 ">
                    <Image width={400} height={200} src="/hero.png" alt="model" />
                </div>
            </section>
        </main>
        </div>
    )
}

export default Hero