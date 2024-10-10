import React from "react"
import Image from "next/image"

function Why(){
    return(
        <div className="bg-green-700">
        <main className="mt-16 mx-20 ">
            <section className="flex justify-center gap-28">
                {/* right side */}
                <div className="flex-1 mt-10">
                    <h1 className="font-bold text-5xl mb-5 text-white">A  <span className="text-yellow-500">Company</span> with self respect</h1>
                    <p className="font-light font-sans mb-8 text-emerald-50">We believe that the fashion industry’s most important contribution to a sustainable future is to produce garments that do not need to be replaced every season. That is why we design our clothes to be future-proof: Timeless styling and high quality so they last a long time – which means you will want to keep them longer. Our customers wear the same ELVINE jacket year after year we love that!</p>
                    <h3 className="font-bold text-3xl mb-5 text-teal-50">Our <span className="text-yellow-500">Priorities</span></h3>
                    <small className="text-emerald-50"> - Our most important contribution to the fashion industry is to design.</small>
                    <br />
                    <small className="text-emerald-50">- produce clothes in styles and qualities that last a long time.</small>
                    <br />
                    <small className="text-emerald-50">- We use a water repellent impregnation without highly fluorinated. </small>
                    <br />
                    <small className="text-emerald-50">- We have stopped using PVC altogether.</small>
                    <br />
                    <small className="text-emerald-50">- All our wool is mulesing-free and either recycled or traceable.</small>
                  
                </div>
             
             {/* left-side */}
             <div className="flex-1 object-cover object-right rounded mx-[100px] w-[100rem]">
             <Image width={450} height={200} src="/about.png" alt="model" />
             </div>

            </section>
        </main>
        </div>
    )
}

export default Why