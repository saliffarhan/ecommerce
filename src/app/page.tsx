import Link from "next/link"
import React from "react"
import Hero from "./component/hero"
import Product from "./component/product"
import Why from "./component/elvine"
import Arrival from "./component/new_arrival"
import Product1 from "./product1/page"
import Product2 from "./product2/page"
import Product3 from "./product2/page"
import Product4 from "./product3/page"
import Product6 from "./product6/page"
import Product7 from "./product6/page"


function HomePage(){
  return(
    <div>
      <Hero/>
      <Product/>
      <Why/>
      <Arrival/>
      <Link href="/product1"></Link>
      <Link href="/product2"></Link>
      <Link href="/product3"></Link>
      <Link href="/product4"></Link>
      <Link href="/product6"></Link>
      <Link href="/product7"></Link>


      





      

    </div>
  )
}

export default HomePage