"use client"

import { useState } from "react"
import { cn } from "@/lib/utils"

const timeData = Array.from(
  { length: 24 },
  (_, i) => `${i.toString().padStart(2, "0")}:00`
)

const TimeSelector = () => {
  const [selected, setSelected] = useState(0)

  const handleTimeSelect = (index: number) => {
    setSelected(index)
  }

  return (
    <div className="flex flex-col items-center justify-center whitespace-nowrap rounded-md border w-96">
      <div className="text-xs">选择开始时间</div>
      <div className='flex flex-col flex-wrap items-center justify-center py-1 w-80 h-72'>
        {timeData.map((time, index) => (
          <div
            key={index}
            onClick={() => handleTimeSelect(index)}
            className={cn(
              selected === index
                ? "bg-secondary ring-4 ring-accent text-black hover:bg-destructive hover:text-white"
                : "hover:bg-accent/50",
              "w-1/4 flex p-2 rounded-full items-center justify-center text-xl  cursor-pointer"
            )}>
            {time}
          </div>
        ))}
      </div>
    </div>
  )
}

export default TimeSelector
