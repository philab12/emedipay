import React from 'react'

// type ConstProp = {
//   children: React.ReactNode
// }

export default function TextError(props: any) {
  return (
    <div className='formError'>
       {props.children}
    </div>
  )
}
