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
          <a
            href="https://drive.google.com/file/d/1JJXY6dPlv3enEXnnvUANnXVafQ2ApE8q/view?usp=sharing"
            target="_blank"
          >
            <Button variant="ghost" className="rounded-full p-2">
              <DownloadIcon />
            </Button>
          </a>
        </TooltipTrigger>
        <TooltipContent> Download CV </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
