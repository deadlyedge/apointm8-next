"use client"

import { useState } from "react"
import { Slider } from "./ui/slider"

const DurationSelector = () => {
  const [selected, setSelected] = useState(1)

  const handleSelect = ([value]: number[]) => {
    setSelected(value)
  }
  return (<div className="w-40 flex flex-col items-center">
    <div className="text-xs">选择时长</div>
    <Slider
      onValueCommit={(value) => handleSelect(value)}
      defaultValue={[selected]}
      max={3}
      min={1}
      step={1}
      // className='w-full'
    /></div>
  )
}

export default DurationSelector
