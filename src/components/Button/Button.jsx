import Link from 'next/link'
import React from 'react'

const Button = ({ text, url }) => {
    return (
        <Link href={url}>
            <button className='px-3 py-2 bg-green-600 hover:bg-green-500 transition-all duration-300 text-white cursor-pointer rounded-md max-w-fit'>{text}</button>
        </Link>
    )
}

export default Button