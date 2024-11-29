import React from 'react'

const DayView = ({schedule}) => {

    const groupByDate = () => {
        const groupedData = {};
    
        schedule.collectionSchedule.forEach((item) => {
          item.dates.forEach((date) => {
            if (!groupedData[date]) {
              groupedData[date] = [];
            }
            groupedData[date].push(item.binColor);
          });
        });
    
        return groupedData;
      };
    
      const groupedData = groupByDate();
    
      // Sort dates in ascending order
      const sortedDates = Object.keys(groupedData).sort(
        (a, b) => new Date(a) - new Date(b)
      );

      const getMonth = (date) => new Date(date).toLocaleString("default", { month: "long" });
      const getDay = (date) => new Date(date).toLocaleString("default", { weekday: "long" });
      const getDate = (date) => new Date(date).getDate();

      const getColorClass = (color) => {
        switch (color.toLowerCase()) {
          case "yellow":
            return "bg-yellow-500";
          case "blue":
            return "bg-blue-500";
          case "green":
            return "bg-green-500";
          case "black":
            return "bg-black text-white";
          default:
            return "bg-gray-500";
        }
      };

      const clearSelectedArea = () => {
        localStorage.removeItem('CleanPerthArea')
      }
    
   
  return (
    <div>
                <h1 className="text-2xl font-bold mb-4">
        Collection Schedule for {schedule.name}
      </h1>
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">

{sortedDates.map((date, index) => (
  <div key={index} className="group cursor-pointer relative">
    <div className="min-w-32 bg-white min-h-48 p-3 mb-4 font-medium">
      <div className="w-32 flex-none rounded-t lg:rounded-t-none lg:rounded-l text-center shadow-lg">
        <div className="block rounded overflow-hidden text-center">
          <div className="bg-blue-500 text-white py-1">
          {getDay(date)} {getDate(date)} {getMonth(date)}
          </div>
          <div className="pt-1 border-l border-r border-white bg-white gap-2 mt-2">
          {groupedData[date].map((binColor, idx) => (
            <span  key={idx} className={`px-2 py-2 text-sm font-bold leading-tight rounded ${getColorClass(binColor)}`}>
              {binColor}
            </span>
             ))}
          </div>
         
          <div className="bg-blue-500 text-white py-1">
              <span className="text-sm">
              Bins Collected
              </span>
          </div>
        </div>
      </div>
    </div>
  </div>
))}
</div>
<div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3">
                        <a href="" onClick={() => clearSelectedArea()} className="flex items-center justify-center w-full px-8 py-3 text-base font-medium leading-6 text-white transition duration-150 ease-in-out bg-green-600 border border-transparent rounded-md hover:bg-green-700 focus:outline-none focus:shadow-outline-green md:py-4 md:text-lg md:px-10">
                            Reset
                        </a>
                    </div>
    </div>


  )
}

export default DayView