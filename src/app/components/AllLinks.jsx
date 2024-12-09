import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import "./components-css/allLinks.css"

const AllLinks = () => {
    return (
        <div className='all_link_container'>
            <div className='all_link_div'>
                <p className='all_heading'>Icons</p>
                <Link href={"/"} className='all_link'>Air Force 1</Link>
                <Link href={"/"} className='all_link'>Huarache</Link>
                <Link href={"/"} className='all_link'>Air Max 90</Link>
                <Link href={"/"} className='all_link'>Air Max 95</Link>
            </div>




            <div className='all_link_div'>
                <p className='all_heading'>Shoes</p>
                <Link href={"/"} className='all_link'>All Shoes</Link>
                <Link href={"/"} className='all_link'>Custom Shoes</Link>
                <Link href={"/"} className='all_link'>Jordan Shoes</Link>
                <Link href={"/"} className='all_link'>Running Shoes</Link>
            </div>




            <div className='all_link_div'>
                <p className='all_heading'>Clothing</p>
                <Link href={"/"} className='all_link'>All Clothing</Link>
                <Link href={"/"} className='all_link'>Modest Wear</Link>
                <Link href={"/"} className='all_link'>Hoodies & Pullovers</Link>
                <Link href={"/"} className='all_link'>Shirts & Tops</Link>
            </div>




            <div className='all_link_div'>
                <p className='all_heading'>Kid's</p>
                <Link href={"/"} className='all_link'>Infant & Toddlers Shoes</Link>
                <Link href={"/"} className='all_link'>Kid's Shoes</Link>
                <Link href={"/"} className='all_link'>Kid's Jordan Shoes</Link>
                <Link href={"/"} className='all_link'>Kid's Basketball Shoes</Link>
            </div>




        </div>
    )
}

export default AllLinks