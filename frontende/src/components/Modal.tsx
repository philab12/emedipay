import React from 'react'

type VisibleProps = {
    isVisible: boolean,
    onClose: () => void,
    children: React.ReactNode
}



const Modal = ({isVisible, onClose, children}: VisibleProps) => {

    
    if (!isVisible) return null;

    // const handleOnClose= (event:React.MouseEvent<HTMLDivElement>) => {
    //       if((event.target as Element).id === 'wrapper') onClose(); 
    // }

  return (
    <div className='fixed z-30 h-full text-black  inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center overflow-x-hidden overflow-y-auto'  id="wrapper">
        <div className="w-[600px] flex flex-col xl:w-[800px]">
            <button className='text-white text-xl place-self-end' onClick={onClose}>X</button>
            <div className='bg-white font-bold p-2 rounded'>{children}</div> 
        </div>
    </div>
  )
}

export default Modal