import { DownloadIcon } from "lucide-react";
import { Button } from "./ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./ui/tooltip";

export default function DownloadCV() {
  return (
    <TooltipProvider>
      <Tooltip delayDuration={0}>
        <TooltipTrigger asChild>
          <Button variant="ghost" className="rounded-full p-2">
            <DownloadIcon />
          </Button>
        </TooltipTrigger>
        <TooltipContent> Download CV </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  )
}