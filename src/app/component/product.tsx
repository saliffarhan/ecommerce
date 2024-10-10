 import React from "react"
 import Image from "next/image"
 import Link from "next/link"
 
 function Product(){
    return (
        <main className="mt-10 mx-5 bg-slate-100" >
            <section>

                <div>
                    <h1 className="text-center font-sans font-extrabold text-4xl">TOP - PRODUCTS</h1>
                 </div>

                {/* products */}
                {/* P1 */}
                <div className="grid grid-cols-4 justify-items-center  mt-14 lg:gap-32 mx-32 ">
{/* p1 */}
                <div className="py-10">
                <p className="font-semibold text-teal-900 ml-32">$120</p>
                
                <div className="rounded overflow-hidden shadow-lg max-w-sm">
                <Image width={500} height={900} src="/p1.jpg" alt="shirt" />

                    <div className="flex flex-col gap-2">
                        <p className="font-bold  mt-4 ">COOFANDY</p>
                        <small className="">Men's Linen Shirts Short Sleeve Casual Shirts </small>
                        <div >
                            <button className="bg-yellow-400 text-black py-2 px-16  hover:text-teal-50"><Link href="/product1">Cart</Link></button>

                        </div>
                    </div>
                </div>
                </div>
                {/* p2 */}
                <div className="py-10">
                <p className="font-semibold text-teal-900 ml-32">$80</p>

                <div className="rounded overflow-hidden shadow-lg max-w-sm">
                <Image width={500} height={400} src="/p2.jpg" alt="shirt" />

                    <div className="flex flex-col gap-1">
                        <p className="font-bold mt-3">Nautica</p>
                        <small>Men's Classic Fit Solid Deck Polo</small>
                        <div>
                        <button className="bg-yellow-400 text-black py-2 px-16  hover:text-teal-50"><Link href="/product2">Cart</Link></button>

                        </div>
                    </div>
                </div>
                </div>
                {/* p3 */}
                <div className="py-10">
                <p className="font-semibold text-teal-900 ml-32">$50</p>

                <div className="rounded overflow-hidden shadow-lg max-w-sm">
                <Image width={500} height={900} src="/p5.jpg" alt="shirt" />

                    <div className="flex flex-col gap-1">
                        <p className="font-bold mt-6">PJ PAUL JONES</p>
                        <small>Mens Knit Polo Shirt Short Sleeve Hollow Out Knit Shirt Texture Knitted Polo</small>
                        <div>
                        <button className="bg-yellow-400 text-black py-2 px-16  hover:text-teal-50"><Link href="/product3">Cart</Link></button>
                        </div>
                    </div>
                </div>
                </div>
                {/* p4 */}
                <div className="py-10">
                <p className="font-semibold text-teal-900 ml-32">$150</p>

                <div className="rounded overflow-hidden shadow-lg max-w-sm">
                <Image width={500} height={900} src="/p4.jpg" alt="shirt" />

                    <div className="flex flex-col gap-1 ">
                        <p className="font-bold mt-4">Nautica</p>
                        <small>Men's Sustainably Crafted Classic Fit Deck Polo</small>
                        <div>
                        <button className="bg-yellow-400 text-black py-2 px-16  hover:text-teal-50"><Link href="/product4">Cart</Link></button>
                        </div>
                    </div>
                </div>
                </div>
                {/* p5 */}
                <div className="py-10 "  >
                <p className="font-semibold text-teal-900 ml-32">$99</p>
                <div className="rounded overflow-hidden shadow-lg max-w-sm">
                <Image width={500} height={900} src="/p4.jpg" alt="shirt" />

                    <div className="flex flex-col gap-1">
                        <p className="font-bold mt-3">Nautica</p>
                        <small>Men's Classic Fit Solid Deck Polo</small>
                        <div>
                        <button className="bg-yellow-400 text-black py-2 px-16  hover:text-teal-50"><Link href="./cart">Cart</Link></button>
                        </div>
                    </div>
                </div>
                </div>
                {/* p6 */}
                <div className="py-10">
                <p className="font-semibold text-teal-900 ml-32">$160</p>
                <div className="rounded overflow-hidden shadow-lg max-w-sm">
                <Image width={500} height={900} src="/p8n.jpg" alt="shirt" />

                    <div className="flex flex-col gap-1">
                        <p className="font-bold mt-3">Wrangler</p>
                        <small>Authentics Men's Classic Cargo Stretch Short</small>
                        <div>
                        <button className="bg-yellow-400 text-black py-2 px-16  hover:text-teal-50"><Link href="/product6">Cart</Link></button>

                        </div>
                    </div>
                </div>
                </div>
                {/* p7 */}
                <div className="py-10">
                <p className="font-semibold text-teal-900 ml-32">$40</p>

                <div className="rounded overflow-hidden shadow-lg max-w-sm">
                <Image width={140} height={900} src="/p7.jpg" alt="shirt" />

                    <div className="flex flex-col gap-1">
                        <p className="font-bold mt-4">Lee Men's </p>
                        <small> Extreme Motion Crossroad Cargo Short</small>
                        <div>
                        <button className="bg-yellow-400 text-black py-2 px-16 mt-2  hover:text-teal-50"><Link href="/product7">Cart</Link></button>

                        </div>
                    </div>
                </div>
                </div>
                {/* p8 */}
                <div className="py-10">
                <p className="font-semibold text-teal-900 ml-32">$130</p>

                <div className="rounded overflow-hidden shadow-lg max-w-sm">
                <Image width={500} height={900} src="/p8n.jpg" alt="shirt" />

                    <div className="flex flex-col gap-1">
                        <p className="font-bold mt-3">UNIONBAY </p>
                        <small> Men's Survivor Belted Cargo Short</small>
                        <div>
                        <button className="bg-yellow-400 text-black py-2 px-16  hover:text-teal-50"><Link href="./cart">Cart</Link></button>
                        </div>
                    </div>
                </div>
                </div>
            
                </div>
  
            </section>
        </main>
    )
 }

 export default Product