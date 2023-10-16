import React from 'react'
//import image
import RoundedText from "../images/doc.webp";

//import link
import { Link } from 'react-router-dom'

//icons
import {HiArrowDownRight} from "react-icons/hi2"

type Props = {}

const ProjectDocBtn = (props: Props) => {
  return (
    <div className='mx-auto xl:mx-0'>
      <Link to={'/work'}>
        <img src={RoundedText} alt="" width={141} height={148} className=' w-full h-full max-w-[141px] max-h-[148px]' />
      </Link>
    </div>
  )
}

export default ProjectDocBtn