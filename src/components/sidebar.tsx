import { Settings } from "lucide-react";
import Link from "next/link";
import { TooltipProvider } from "@/components/ui/tooltip";
import Items from "@/components/sidebar/items";
import Item from "@/components/sidebar/item";
import Image from "next/image";

export default function SideBar() {
  return (
    <aside className="fixed inset-y-0 left-0 z-10 hidden w-[65px] flex-col border-r bg-background sm:flex">
      <nav className="flex flex-col items-center gap-4 px-2 sm:py-5">
        <Link
          href="/"
          className="group flex h-10 w-10 shrink-0 items-center justify-center gap-2 rounded-full bg-primary text-lg font-semibold text-primary-foreground md:h-11 md:w-11 md:text-base"
        >
          <Image
            src="/PLlogoWhite.png"
            width={500}
            height={500}
            alt="logo"
            className="item-center justify-center transition-all
          group-hover:scale-110 md:h-6 md:w-6"
          />
          <span className="sr-only">PL</span>
        </Link>
        <Items />
      </nav>
      <nav className="mt-auto flex flex-col items-center gap-4 px-2 sm:py-5">
        <TooltipProvider>
          <Item title="Settings" link="/settings" Icon={Settings} />
        </TooltipProvider>
      </nav>
    </aside>
  );
}
