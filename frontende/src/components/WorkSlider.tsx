import React from 'react'

export const workSlider = {
    slides: [
       {
        images:[
          {
            title: 'title',
            path: '/thumb1.jpg'
          },
          {
            title: 'title',
            path: '/thumb2.jpg'
          },
          {
            title: 'title',
            path: '/thumb3.jpg'
          },
          {
            title: 'title',
            path: '/thumb4.jpg'
          },
        ]
       },

       {
        imgaes: [
            {
                title:"title",
                path: "/thumb4.jpg"
            },
            {
                title:"title",
                path: "/thumb1.jpg"
            },
            {
                title:"title",
                path: "/thumb2.jpg"
            },
            {
                title:"title",
                path: "/thumb3.jpg"
            },
        ]
       }
    ]
}

type Props = {}

const WorkSlider = (props: Props) => {
  return (
    <div>WorkSlider</div>
  )
}

export default WorkSlider