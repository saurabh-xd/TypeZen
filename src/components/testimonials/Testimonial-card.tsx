import Image from 'next/image'
import React from 'react'

function TestimonialCard({item}: any) {
  return (
   
        <div  className="flex flex-col h-52 md:h-64 shrink-0 w-60 md:w-sm gap-4 md:gap-10 bg-neutral-900 border border-neutral-800 justify-center p-4 md:p-8 rounded-lg ">
                <p className='max-md:text-sm'>{item.feedback}</p>
                <div className="flex gap-2 items-center">

                    <div>
                    <Image 
                    alt={item.name}
                     src={item.image}
                     width={45}
                     height={45}
                     className="rounded-full size-6 md:size-10 object-cover"
                     />
                    </div>

                    <div>
                        <h2 className="font-semibold max-md:text-sm">{item.name}</h2>
                        <p className="text-neutral-400 text-xs md:text-base">{item.role}</p>
                    </div>
                </div>
            </div>
    
  )
}

export default TestimonialCard