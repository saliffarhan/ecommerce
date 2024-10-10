import Link from "next/link";
import React from "react";

function Navbar(){
    return(
        <header className="flex justify-between bg-gray-700  ">
            <div className="text-2xl font-semibold ml-20 mt-2 text-white ">
                <h1>ELVINE </h1>
            </div>

            <nav>
                <ul className="flex gap-14 mr-20 mt-2 py-2 text-white font-bold" >
                    <li className="hover:text-yellow-600 font-sans">
                        <Link href="/">PRODUCT</Link>
                    </li>
                    <li className="hover:text-yellow-600 font-sans">
                        <Link href="/">WHY ELVINE</Link>
                    </li>
                    <li className="hover:text-yellow-600 font-sans">
                        <Link href="/">NEW ARRIVAL</Link>
                    </li>
                </ul>

            </nav>
        </header>

    )
}

export default Navbar