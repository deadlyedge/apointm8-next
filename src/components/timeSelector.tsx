"use client"

import { useState } from "react"
import { cn } from "@/lib/utils"
import { Slider } from "./ui/slider"
import { Calendar } from "./ui/calendar"
import { zhCN } from "date-fns/locale"
import { add, format } from "date-fns"

const timeData = Array.from(
  { length: 24 },
  (_, i) => `${i.toString().padStart(2, "0")}:00`
)

const TimeSelector = () => {
  const [dateSelected, setDateSelected] = useState<Date>()
  const [timeSelected, setTimeSelected] = useState(0)
  const [durationSelected, setDurationSelected] = useState(1)

  const handleTimeSelect = ([value]: number[]) => {
    setTimeSelected(value)
  }
  // const handleTimeSelect = (index: number) => {
  //   setTimeSelected(index)
  // }

  const handleDurationSelect = ([value]: number[]) => {
    setDurationSelected(value)
  }

  const startTimeSelected = dateSelected
    ? add(
        new Date(
          dateSelected.getFullYear(),
          dateSelected.getMonth(),
          dateSelected.getDate()
        ),
        { hours: timeSelected }
      )
    : new Date()

  const serviceTime = {
    startTime: format(startTimeSelected, "MMMM d日, H:mm", {
      locale: zhCN,
    }),
    endTime: format(
      add(startTimeSelected, { hours: durationSelected }),
      "H:mm",
      {
        locale: zhCN,
      }
    ),
  }

  const startTimeFormated = format(startTimeSelected, "H:mm", {
    locale: zhCN,
  })

  return (
    <div className='flex flex-col flex-wrap items-center justify-start w-96 md:w-[800px] mx-auto md:h-[400px] gap-3'>
      <div className='flex flex-col items-center justify-center whitespace-nowrap rounded-md border w-96'>
        <Calendar
          mode='single'
          selected={dateSelected}
          onSelect={setDateSelected}
          disabled={{ before: new Date() }}
          weekStartsOn={0}
          locale={zhCN}
          // footer={
          //   dateSelected
          //     ? `Selected: ${format(dateSelected, "MMMM dd", { locale: zhCN })}`
          //     : "选择日期"
          // }
          // className=''
        />
      </div>

      {/* <div className='flex flex-col items-center justify-center whitespace-nowrap rounded-md border w-96'>
        <div className='text-xs'>选择开始时间</div>
        <div className='flex flex-col flex-wrap items-center justify-center py-1 w-80 h-72'>
          {timeData.map((time, index) => (
            <div
              key={index}
              onClick={() => handleTimeSelect(index)}
              className={cn(
                timeSelected === index
                  ? "bg-secondary ring-4 ring-accent text-black hover:bg-destructive hover:text-white"
                  : "hover:bg-accent/50",
                "w-1/4 flex p-2 rounded-full items-center justify-center text-xl  cursor-pointer"
              )}>
              {time}
            </div>
          ))}
        </div>
      </div> */}

      <div className='w-96 flex flex-col items-center justify-center'>
        <div className='text-xs'>选择开始时间</div>
        <Slider
          onValueChange={(value) => handleTimeSelect(value)}
          defaultValue={[timeSelected]}
          max={23.5}
          min={0}
          step={0.5}
        />
        <div className='border w-32 flex justify-center rounded-md p-2 m-2 text-lg'>
          开始于
          <span className='text-destructive font-bold ml-1'>
            {startTimeFormated}
          </span>
        </div>
      </div>

      <div className='w-96 flex flex-col items-center justify-center'>
        <div className='text-xs'>选择时长</div>
        <Slider
          onValueChange={(value) => handleDurationSelect(value)}
          defaultValue={[durationSelected]}
          max={3}
          min={0}
          step={0.5}
        />
        <div className='border w-32 flex justify-center rounded-md p-2 m-2 text-lg'>
          <span className='text-destructive font-bold mr-1'>{durationSelected}</span>
          小时
        </div>
      </div>

      <div className='m-5 p-5 border border-white'>
        <div className='text-xs'>预约时间</div>
        <div className='text-xl'>
          {serviceTime.startTime} 至 {serviceTime.endTime}
        </div>
      </div>
    </div>
  )
}

export default TimeSelector
