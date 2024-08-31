import React from 'react'
import { FaRegFileAlt } from "react-icons/fa";
import { MdDownloadForOffline } from "react-icons/md";
import { IoCloseSharp } from "react-icons/io5";
import { motion } from "framer-motion"

const Card = ({data,reference}) => {
  return( 
    <motion.div drag dragConstraints={reference} className='relative w-40 h-52 rounded-[20px] bg-[#e9f1f8] p-5  overflow-hidden'>
        <FaRegFileAlt/>
        <p className='text-sm leading-tight mt-5 font-semibold'>{data.desc}</p>
        <div className='footer absolute bottom-0 w-full   left-0'>
<div className='flex justify-around items-center  mb-3'>
    <h5 className='text-sm'>{data.filesize}</h5>
    <span>
      {data.close?<IoCloseSharp/>:<MdDownloadForOffline/>}
    </span>
    
</div>


{
  data.tagd.isopen &&(<div id="tag" className={ `w-full py-2 ${data.tagd.tagcolor ==="blue" ? "bg-blue-600":"bg-green-600"} text-center text-xs font-semibold`} >
    <h3>Download Now</h3>
    </div>)
}


        </div>
</motion.div>
  )
}

export default Card
