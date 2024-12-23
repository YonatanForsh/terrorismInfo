import { useEffect, useState } from 'react'
import { BarChart } from '@mui/x-charts/BarChart';
import { Box } from '@mui/material';

interface types  {
    name:string
    eventsCount:number
}

function  Types()  {
    const [ types , setTypes] = useState<types[]>([])
    const [ names , setNames] = useState<string[]>([])
    const [ value , setValue] = useState<number[]>([])
    
    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await fetch("http://localhost:3000/api/events/");
            const data = await response.json();
            setTypes(data)
          } catch (error) {
            console.error("Error fetching data:", error);
          }
        };
        fetchData();
      }, []);

      useEffect(() => {
        if (types.length > 0) {
            const extractedNames = types.map((e) => e.name);
            const extractedValues = types.map((e) => e.eventsCount);
            setNames(extractedNames);
            setValue(extractedValues);
          }
      }, [types]);

  return (
    <div>
      {types &&
      <Box sx={{ margin: 5, textAlign: 'center' }}>
      <h1> נתוני אירועי טרור לפי סוג תקיפה</h1> 
      <BarChart
        series={[
          { data: value },
        ]}
      height={600}
      xAxis={[{ data: names, scaleType: 'band' }]}
    />
    </Box>
    }
    </div>
  )
}
export default Types
