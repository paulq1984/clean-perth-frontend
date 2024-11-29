import React, { useEffect, useState } from 'react'

const DayView = ({area}) => {
  const [isLoading, setIsLoading] = useState(true);


  useEffect(() => {

  })

  return (
    <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
        <div className="text-left">
        <h2 className="text-4xl font-extrabold leading-10 tracking-tight text-gray-800 sm:text-5xl sm:leading-none md:text-6xl">
                    {area}
                </h2>
        </div>
        <div className="group cursor-pointer relative">
            <div className="min-w-32 bg-white min-h-48 p-3 mb-4 font-medium">
               <div className="w-32 flex-none rounded-t lg:rounded-t-none lg:rounded-l text-center shadow-lg">
                <div className="block rounded-t overflow-hidden text-center">
                    <div className="bg-blue-500 text-white py-1">
                        March
                    </div>
                    <div className="pt-1 border-l border-r border-white bg-white">
                        <span className="text-5xl font-bold leading-tight">
                            28
                        </span>
                    </div>
                    <div className="border-l border-r border-b rounded-b-lg text-center border-white bg-white -pt-2 -mb-1">
                        <span className="text-sm">
                            Sunday
                        </span>
                    </div>
                    <div className="pb-2 border-l border-r border-b rounded-b-lg text-center border-white bg-white">
                        <span className="text-xs leading-normal">
                            6:00pm
                        </span>
                    </div>
                </div>
               </div>
            </div>
        </div>
    </div>
  )
}

export default DayView