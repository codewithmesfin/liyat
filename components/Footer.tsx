import Link from 'next/link'
import React from 'react'

export default function Footer() {
    return (
        <div className='bg-gray-300'>
            <div className="mx-auto max-w-7xl p-3 md:p-10">
                <div className="md:flex md:justify-evenly md:space-x-10">
                    <p>Copyright © 2023 LIYAT Remodeling and Restoration - All Rights Reserved. </p>
                    <Link href="https://techethio.com" target="_blank" className=''>Powered by Tech-Ethio </Link>
                </div>
            </div>
        </div>
    )
}
