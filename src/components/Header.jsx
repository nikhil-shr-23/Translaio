import React from 'react'

export default function Header() {
    return (
        <header className='flex items-center justify-between gap-4 p-4'>
            <a href="/"><h1 className='font-medium'>Trans<span className='text-green-500 bold text-lg'>Laio</span></h1></a>
            <div className='gap-4 flex items-center '>
                
                <a href="/" className='flex items-center gap-2 specialBtn px-3 py-2 rounded-lg text-green-400'>
                    <p>New</p>
                    <i className="fa-solid fa-plus"></i>
                </a>
            </div>
        </header>
    )
}
