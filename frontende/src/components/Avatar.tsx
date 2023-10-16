import React from 'react'
// image
import AvatarImg from "../images/doc.webp";

type Props = {}

const Avatar = (props: Props) => {
  return (
    <div className='hidden xl:flex xl:max-w-none'>
     <img src={AvatarImg} width={737} height={678} alt='' className='translate-z-0 w-full h-full' />
    </div>
  )
}

export default Avatar