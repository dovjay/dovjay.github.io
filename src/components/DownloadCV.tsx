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
            href="https://drive.google.com/file/d/1a8MQxOR6ByElUKpg5ytTcgNN6FSzevHa/view?usp=drive_link"
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
