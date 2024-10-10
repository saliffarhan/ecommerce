import Link from "next/link"
import React from "react"
import Image from "next/image"

function Product2(){
    return (
        <main className="mt-14 mx-8">
             <section className="flex justify-around ">
                {/* left side */}
                <div>
                <Image width={300} height={200} src="/p7.jpg" alt="model" />

                </div>
                {/* right side */}
                <div className="mr-7">
                    <h1 className="font-bold font-sans text-3xl mb-3 text-green-700">Lee Men's</h1>
                        <p>Extreme Motion Crossroad Cargo Short</p> 
                        <h4 className="mt-5 font-bold">$ 40</h4>
                     <p className="mt-2  font-sans font-light">170+ bought in past month</p>
                    

                     <label >Size:</label>
                  <select className="mt-2">
                  <option>small</option>
                  <option >medium</option>
                  <option>Excel</option>
                  <option>large</option>
                </select>
                 <div>
                <h4 className="mt-16 font-bold text-2xl mb-2 text-green-700">Product Details</h4>
                <p className=" font-sans font-light">Fabric type100% Cotton</p>
                <p className=" font-sans font-light">Care instructionsMachine Wash</p>
                <p className=" font-sans font-light">OriginImported</p>
                <button className="bg-green-600 text-white py-2 px-5 mt-10 hover:text-black  font-bold mb-20">ADD TO CART</button>
                </div>
                
                </div>
             </section>
            
        </main>

         
    )
}

export default Product2