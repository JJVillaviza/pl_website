import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { SideBarIconTypes } from "@/lib/types";
import Link from "next/link";

export default function Items({ title, link, Icon }: SideBarIconTypes) {
  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <Link
          href={link}
          className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8"
        >
          {Icon && <Icon className="h-6 w-6" />}
        </Link>
      </TooltipTrigger>
      <TooltipContent side="right">{title}</TooltipContent>
    </Tooltip>
  );
}
