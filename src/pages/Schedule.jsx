import React, { useEffect, useState } from 'react'
import DayView from '../components/DayView';

function Schedule({ area }) {
    const [schedule, setSchedule] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        fetch(`http://localhost:5001/schedule/${area}`)
        .then((res) => {
            if (!res.ok) {
                throw new Error(`HTTP error! status: ${res.status}`)
            }
            return res.json();
        })
        .then(data => {
            console.log(data)
            setSchedule(data)
            setIsLoading(false)
         
        })
        .catch(error => {
            console.error(`Error fetching data: ${error}`)
        })
      }, []);
    
    


  return (
    <div>
        {isLoading && <div> Loading</div>}
        {schedule &&  <DayView schedule={schedule} />}
    </div>
  )
}

export default Schedule