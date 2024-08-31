import React, { useRef, useState } from 'react'
import Card from './card'

const Forground = () => {
  
  const ref=useRef(null);
  const data=[
{
  id:"1",
  desc:"lorem ipsum sit amat consectetur adipsicing.",
  filesize:"2.3Mb",
  close:true,
  tagd:{
    isopen:true,
    tagtitle:"Download Now",
    tagcolor:"green"}
  },
  {
    id:"2",
    desc:"lorem ipsum sit amat consectetur .",
    filesize:"1.3Mb",
    close:false,
    tagd:{
      isopen:false,
      tagtitle:"Download Now",
      tagcolor:"green"}
    },
    {
      id:"1",
      desc:"lorem ipsum sit amat consectetur adipsicing.",
      filesize:"2.3Mb",
      close:true,
      tagd:{
        isopen:true,
        tagtitle:"Download Now",
        tagcolor:"blue"}
      },
      {
        id:"2",
        desc:"lorem ipsum sit amat consectetur ispun amat consectetur.",
        filesize:"0.7Mb",
        close:false,
        tagd:{
          isopen:false,
          tagtitle:"Download Now",
          tagcolor:"blue"}
        },
        {
          id:"1",
          desc:"lorem ipsum sit amat consectetur adipsicing.lorem 1 lorem 2",
          filesize:"0.3Mb",
          close:true,
          tagd:{
            isopen:true,
            tagtitle:"Download Now",
            tagcolor:"green"}
          }
  ];
  return (
    <div ref={ref} className="fixed z-[3] w-full h-full p-28 justify-center items-center flex flex-wrap  gap-14"> 
{data.map((item,index)=>(
  <Card data={item} reference={ref}/>
))}

</div>
  )
}
export default Forground
