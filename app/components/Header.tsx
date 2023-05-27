import React from 'react'
import Image from 'next/image'
import Logo from '../logo.svg'


const Header = () => {
  return (
    <div className='flex justify-around items-center backgroundHeader p-6'>
        <div className='w-1/3 flex justify-center'>
            <Image src={Logo} width={150} height={150} alt='logo'></Image>
        </div>
        <div className='w-1/3 text-center'>
            <input type="text" name="searchBar" id="" placeholder='🔍 Buscar aqui' className='p-2 rounded-full w-11/12 border border-gray-400' />
        </div>
        <nav className='w-1/3 flex justify-center'>
            <ul className='flex gap-5 text-center'>
                <li className='bg-gray-400 w-52 h-5 rounded-full'></li>
                <li className='bg-gray-400 w-52 h-5 rounded-full'></li>
            </ul>
        </nav>
    </div>
  )
}

export default Header