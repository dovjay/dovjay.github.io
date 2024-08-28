import { Button } from "@/components/ui/button";
import { useState } from "react"

export default function Count() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <div>{count}</div>
      <Button onClick={() => setCount(count + 1)}>Click me</Button>
    </div>
  )
}