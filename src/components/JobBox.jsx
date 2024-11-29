import React from 'react'
import { IoTrashSharp, IoPieChart } from "react-icons/io5";

function JobBox(){
  return(
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-4 items-center justify-center">
      <BoxWrapper>
        <div className="rounded-full h-12 w-12 md:h-20 md:w-20 lg:h-20 lg:w-20 xl:h-20 xl:w-20 flex flex-col items-center justify-center bg-sky-500">
           <IoTrashSharp className='text-lg sm:text-xl md:text-3xl lg:text-3xl text-white'>
          </IoTrashSharp>
        </div>
        <div className="p-4">
        <strong className='text-xl text-sky-500 md:text-3xl lg:text-3xl'>27.0583
        </strong>
          <h4 className="text-gray-500">Average disposal fee for Collection jobs
          </h4>
         
        </div>
      </BoxWrapper>
      <BoxWrapper>
        <div className="rounded-full h-12 w-12 md:h-20 md:w-20 lg:h-20 lg:w-20 xl:h-20 xl:w-20 flex flex-col items-center justify-center bg-green-400">
          <IoPieChart className='text-lg sm:text-xl md:text-3xl lg:text-3xl text-white'>
          </IoPieChart>
        </div>
        <div className="p-4">
        <strong className='text-green-400 text-xl md:text-3xl lg:text-3xl'>100
        </strong>
          <h4 className="text-gray-500">Number of E-Waste Collection Jobs Fulfilled

          </h4>
         
        </div>
      </BoxWrapper>
    </div>
  )
}
export default JobBox

function BoxWrapper({children }){
  return<div className="bg-gray-100 rounded-sm p-2 drop-shadow border-gray-200 flex flex-row grow gap-2">{children }  </div>
}