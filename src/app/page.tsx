import DateSelector from "@/components/dateSelector"
import DurationSelector from "@/components/durationSelector"
import Header from "@/components/header"
import TimeSelector from "@/components/timeSelector"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function Home() {
  return (
    <div>
      <Header />
      <Button>Hello</Button>
      <Button variant='destructive'>Hello</Button>
      <Button variant='secondary'>Hello</Button>
      <Button variant='outline'>Hello</Button>
      <Input
        className='bg-white/10 border-2 max-w-2xl focus:bg-accent focus:text-accent-foreground'
        type='email'
        placeholder='Email'
      />
      <div className='flex flex-col flex-wrap items-start justify-start w-96 sm:w-[800px] mx-auto sm:h-[400px] gap-3'>
          <DateSelector />
          <TimeSelector />
          <DurationSelector />
      </div>
    </div>
  )
}
