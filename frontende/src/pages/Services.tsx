import React from 'react'
import {RxCrop, RxPencil2, RxDesktop, RxReader, RxRocket} from "react-icons/rx"
import AnimatedRoutes from '../components/AnimatedRoutes'

export const serviceData = [
    {
        icon: <RxCrop />,
        title: 'Branding',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, et.'
    },
    {
        icon: <RxPencil2 />,
        title: 'Branding',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, et.'
    },
    {
        icon: <RxDesktop />,
        title: 'Development',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, et.'
    },
    {
        icon: <RxRocket />,
        title: 'SEO',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, et.'
    },
]

type Props = {}

const Services = (props: Props) => {
  return (
    <>
    <AnimatedRoutes />
    <div>Services</div>
    </>
  )
}

export default Services