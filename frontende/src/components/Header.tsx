import React from 'react'
//image
import Logo from "../images/logo_new2.jpg"

//Link
import { Link } from 'react-router-dom'

//Components
import Socials from './Socials'

type Props = {}

const Header = (props: Props) => {
  return (
    <header className='absolute z-30 w-full flex items-center px-16 xl:px-0 xl:h-[90px]'>
      <div className='container mx-auto'>
        <div className='flex flex-col lg:flex-row justify-between items-center gap-y-6 py-8'>
          {/* logo */}
          <Link to="/"><img src={Logo} width={220} height={48} alt=""></img></Link>
          {/* socials */}
          <Socials />
        </div>
      </div>
    </header>
  )
}

export default Header