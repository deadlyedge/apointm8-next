"use client"

import * as React from "react"
import * as SliderPrimitive from "@radix-ui/react-slider"

import { cn } from "@/lib/utils"

const Slider = React.forwardRef<
  React.ElementRef<typeof SliderPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof SliderPrimitive.Root>
>(({ className, ...props }, ref) => (
  <SliderPrimitive.Root
    ref={ref}
    className={cn(
      "relative flex w-full touch-none select-none items-center",
      className
    )}
    {...props}>
    <SliderPrimitive.Track className='relative h-3 w-full grow overflow-hidden rounded-full bg-accent/20'>
      <SliderPrimitive.Range className='absolute h-full bg-accent' />
    </SliderPrimitive.Track>
    <SliderPrimitive.Thumb className='block h-6 w-6 rounded-full border-2 ring-2 border-secondary bg-background shadow transition-colors outline-none ring-ring hover:bg-destructive disabled:pointer-events-none disabled:opacity-50 cursor-pointer' />
  </SliderPrimitive.Root>
))
Slider.displayName = SliderPrimitive.Root.displayName

export { Slider }
