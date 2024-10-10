 import React from "react"
 import Image from "next/image"


function Arrival(){
    return(
        <main className="mt-10 bg-slate-100">
            <section>
                <div>
                    <h2 className="text-center font-sans font-extrabold text-4xl">New - Arrival</h2>
                </div>

                <div className="grid grid-cols-5 justify-items-center  mt-14 lg:gap-28 mr-44 mx-28  ">
{/* p1 */}
                <div className="py-10 ">
                <p className="font-semibold text-teal-900 ml-32">$55</p>

                <div className="rounded-2xl overflow-hidden shadow-lg cursor-pointer ">
                <Image width={500} height={900} src="/w1.jpg" alt="shirt" />

                    <div className="flex flex-col gap-2">
                        <p className="font-bold  mt-4 ">COOFANDY</p>
                        <small className="">Men's Sustainably Crafted Classic Fit Deck Jacket</small>
                        <div>
                        <button className="bg-yellow-400 text-black py-2 px-16  hover:text-teal-50">Cart</button>

                        </div>
                    </div>
                </div>
                </div>
                {/* p2 */}
                <div className="py-10">
                <p className="font-semibold text-teal-900 ml-32">$70</p>

                <div className="rounded-2xl overflow-hidden shadow-lg mt-5 cursor-pointer">
                <Image width={500} height={900} src="/w2.jpg" alt="shirt" />

                    <div className="flex flex-col gap-2">
                        <p className="font-bold  mt-4 ">COOFANDY Jack</p>
                        <small className="">Men's Sustainably Crafted Classic Fit Jacket </small>
                        <div >
                        <button className="bg-yellow-400 text-black py-2 px-16  hover:text-teal-50">Cart</button>

                        </div>
                    </div>
                </div>
                </div>
                {/* p3 */}
                <div className="py-10">
                <p className="font-semibold text-teal-900 ml-32">$170</p>

                <div className="rounded-2xl overflow-hidden shadow-lg cursor-pointer ">
                <Image width={130} height={900} src="/w3.jpg" alt="shirt" />

                    <div className="flex flex-col gap-2">
                        <p className="font-bold  mt-4 ">FANCY BAG</p>
                        <small className="">PUMA Backpack & Lunch Kit Combo</small>
                        <div>
                        <button className="bg-yellow-400 text-black py-2 px-16  hover:text-teal-50">Cart</button>

                        </div>
                    </div>
                </div>
                </div>
                {/* p4 */}
                <div className="py-10">
                <p className="font-semibold text-teal-900 ml-32">$130</p>

                <div className="rounded-2xl overflow-hidden shadow-lg mb-20 cursor-pointer">
                <Image width={130} height={900} src="/w4.jpg" alt="shirt" />

                    <div className="flex flex-col gap-2">
                        <p className="font-bold  mt-4 ">PUMA BAGPACK</p>
                    <small className="">Defender Team Sports Backpack, Grey/Black </small>
                        <div >
                        <button className="bg-yellow-400 text-black py-2 px-16  hover:text-teal-50">Cart</button>

                        </div>
                    </div>
                </div>
                </div>
                {/* p5 */}
                <div className="py-10">
                <p className="font-semibold text-teal-900 ml-32">$40</p>

                <div className="rounded-2xl overflow-hidden shadow-lg mt-2 cursor-pointer">
                <Image width={500} height={900} src="/w5.jpg" alt="shirt" />

                    <div className="flex flex-col gap-2">
                        <p className="font-bold  mt-4 ">WATER BOTTLE</p>
                        <small className="">Standard Water Bottle with  Cap and Vacuum  </small>
                        <div>
                        <button className="bg-yellow-400 text-black py-2 px-16  hover:text-teal-50">Cart</button>

                        </div>
                    </div>
                </div>
                </div>

        </div>

            </section>
        </main>
    )
}

export default Arrival