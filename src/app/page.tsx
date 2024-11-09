import DateSelector from "@/components/dateSelector"
import Header from "@/components/header"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Slider } from "@/components/ui/slider"
import Image from "next/image"

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
      <Image
        src='/logo_with_text.svg'
        alt='logo_with_text'
        width={160}
        height={40}></Image>
      <DateSelector />
      <Slider defaultValue={[1]} max={3} min={1} step={1} className="w-40"/>
    </div>
  )
}
