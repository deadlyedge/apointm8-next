"use client"

import { useState } from "react"
import { Calendar } from "./ui/calendar"
import { zhCN } from "date-fns/locale"
import { format } from "date-fns"

const DateSelector = () => {
  const [selected, setSelected] = useState<Date>()

  return (
    <div>
      <Calendar
        mode='single'
        selected={selected}
        onSelect={setSelected}
        weekStartsOn={0}
        locale={zhCN}
        footer={
          selected
            ? `Selected: ${format(selected, "MMMM dd", { locale: zhCN })}`
            : "Pick a day."
        }
      />
    </div>
  )
}

export default DateSelector
