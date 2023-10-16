import React from 'react'
import TopLeftIm from "../images/top-left-img.png";

type Props = {}

const TopLeftImg = (props: Props) => {
  return (
    <div className='absolute left-0 top-0 mix-blend-color-dodge z-10 w-[200px] xl:w-[400px] opacity-50'>
      <img src={TopLeftIm} width={400} height={400} alt=""/>
    </div>
  )
}

export default TopLeftImg