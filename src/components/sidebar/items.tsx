import {
  AreaChart,
  Bell,
  GitBranch,
  History,
  LayoutDashboard,
  Map,
} from "lucide-react";
import { TooltipProvider } from "@/components/ui/tooltip";
import Item from "@/components/sidebar/item";

export default function Items() {
  return (
    <TooltipProvider>
      <Item title="Dashboard" link="/" Icon={LayoutDashboard} />
      <Item title="Branch" link="/branch" Icon={GitBranch} />
      <Item title="Notification" link="/notification" Icon={Bell} />
      <Item title="History" link="/history" Icon={History} />
      <Item title="Analytics" link="/analytics" Icon={AreaChart} />
      <Item title="Map" link="/map" Icon={Map} />
    </TooltipProvider>
  );
}
