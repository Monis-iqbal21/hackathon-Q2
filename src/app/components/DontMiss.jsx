import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import "./components-css/dontMiss.css"

const DontMiss = () => {
  return (
    <div className='feature_main_container'>
            <div className='feature_heading'>Featured</div>
            <div className='image_detail_div'>

                <div>
                    <Image src="/images/dontMiss.png" width={1380} height={700} alt='man running'></Image>
                </div>
                <div className='feature_detail_div'>
                    <p className='feature_p1'>FLIGHT ESSENTIALS</p>
                    <p className='feature_p2'>Your built-to-last, all-week wears—but with style only Jordan Brand can deliver.</p>
                    <div className='feature_link_div'><Link href={"/"} className='featured_link'>Shop</Link></div>
                </div>
            </div>
        </div>
  )
}

export default DontMiss