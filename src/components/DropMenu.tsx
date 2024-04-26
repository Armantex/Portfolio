import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  // DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { AlignJustify } from "lucide-react";
import { Button } from "@/components/ui/button";
export function DropMenu({
  sizeIcon,
  drop,
}: {
  sizeIcon: string;
  drop: string;
}) {
  return (
    <div className={drop}>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="linkBorderLess" size="icon">
            <AlignJustify className={sizeIcon} />
          </Button>
        </DropdownMenuTrigger>

        <DropdownMenuContent>
          <DropdownMenuSeparator />
          <DropdownMenuItem>
            <a href="/" className="size-full">
              {" "}
              Home{" "}
            </a>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <a href="/projects" className="size-full">
              {" "}
              Projects{" "}
            </a>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
