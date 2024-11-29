import { useEffect, useState } from 'react'
import './App.css'
import Schedule from './pages/Schedule';

function App() {
  const [selectedArea, setSelectedArea] = useState(null);

  useEffect(() => {
    const area = localStorage.getItem('CleanPerthArea');
    if (area) {
      setSelectedArea(area)
    }
  }, []);
  
  const handleSave = (area) => {
    localStorage.setItem('CleanPerthArea', area)
    console.log(`Saved Area is ${area}`)
    setSelectedArea(area);
}

  return (
    <div>
      {selectedArea ? (
        <Schedule area={selectedArea}/>
      ) : (
        <div className="relative flex flex-col items-center max-w-screen-xl px-4 mx-auto md:flex-row sm:px-6 p-8">
        <div className="flex items-center py-5 md:w-1/2 md:pb-20 md:pt-10 md:pr-10">
            <div className="text-left">
                <h2 className="text-4xl font-extrabold leading-10 tracking-tight text-gray-800 sm:text-5xl sm:leading-none md:text-6xl">
                    Clean
                    <span className="font-bold text-green-500">Perth</span>
                </h2>
                <p className="max-w-md mx-auto mt-3 text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
                    Help remember the Garbage schedule of Perth, On.
                </p>
                <div className="mt-5 sm:flex md:mt-8">
                    <div className="rounded-md shadow">
                        <a href="" onClick={() => handleSave('north')} className="flex items-center justify-center w-full px-8 py-3 text-base font-medium leading-6 text-white transition duration-150 ease-in-out bg-green-500 border border-transparent rounded-md hover:bg-green-600 focus:outline-none focus:shadow-outline-green md:py-4 md:text-lg md:px-10">
                            North
                        </a>
                    </div>
                    <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3">
                        <a href="" onClick={() => handleSave('south')} className="flex items-center justify-center w-full px-8 py-3 text-base font-medium leading-6 text-white transition duration-150 ease-in-out bg-green-600 border border-transparent rounded-md hover:bg-green-700 focus:outline-none focus:shadow-outline-green md:py-4 md:text-lg md:px-10">
                            South
                        </a>
                    </div>
                </div>
            </div>
        </div>
        <div className="flex items-center py-5 md:w-1/2 md:pb-20 md:pt-10 md:pl-10">
            <div className="relative w-full p-3 rounded md:p-8">
                <div className="rounded-lg bg-green text-black w-full rounded-md">
                    <img src="https://images.unsplash.com/photo-1722482445685-91a6b17d5d02?q=80&w=1475&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                </div>
            </div>
        </div>
       </div>
      )}
    </div>
    
  )
}

export default App
