import React from 'react'
import CircleImage from "../images/circles.png";

type Props = {}

const Circles = (props: Props) => {
  return (
    <div className='w-[200px] xl:w-[300px] absolute -right-16 -bottom-2 mix-blend-color-dodge animate-pulse duration-75 z-10'>
      <img src={CircleImage} width={260} height={200} className='w-full h-full' alt="" />
    </div>
  )
}

export default Circles