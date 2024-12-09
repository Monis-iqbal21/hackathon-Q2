import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import "./components-css/essential.css"
const Essential = () => {
    return (
        <div className='ess_container'>
            <div className='ess_heading'>The Essentials</div>
            <div className='ess_pics_div'>

                <div className='ess_piv'>
                    <Image src="/images/men.png" width={450} height={550} alt='shoes'></Image>
                    <Link href={"/"} className='ess_btn'>Men&apos;s </Link>
                </div>
                <div className='ess_piv'>
                    <Image src="/images/women.png" width={450} height={550} alt='shoes'></Image>
                    <Link href={"/"} className='ess_btn'>Women&apos;s </Link>
                </div>
                <div className='ess_piv'>
                    <Image src="/images/kid.png" width={450} height={550} alt='shoes'></Image>
                    <Link href={"/"} className='ess_btn'>Kid&apos;s </Link>
                </div>

            </div>
        </div>
    )
}

export default Essential