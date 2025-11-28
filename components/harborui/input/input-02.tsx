import { useId } from "react"

import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export default function Input02() {
  const id = useId()
  return (
    <div className="*:not-first:mt-2">
      <Label htmlFor={id}>Input with end add-on</Label>
      <div className="flex rounded-md shadow-xs">
        <Input
          id={id}
          className="-me-px rounded-e-none shadow-none 
             focus-visible:ring-0 focus-visible:ring-offset-0 
             focus:outline-none focus:border-0"
          placeholder="google"
          type="text"
        />
        <span className="inline-flex items-center rounded-e-md border border-input bg-background px-3 text-sm dark:text-white text-black">
          .com
        </span>
      </div>
    </div>
  )
}
