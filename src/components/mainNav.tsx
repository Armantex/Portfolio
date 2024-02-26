import react from "react";
import { siteConfig } from "@/config/site";
import { Icons } from "./icons";
export default function mainNav() {
  let sizeIcon = "h-8 w-8";
  return (
    <nav className="backdrop-blur-md bg-black/40 w-screen absolute text-white">
      <div className="md:container">
        <div className="flex space-x-2 p-1">
          <div className="flex">
            <a href="#" className="text-xl">
              Home
            </a>
          </div>
          <div className="flex grow justify-center"></div>
          <div className="flex gap-2">
            <a href={siteConfig.links.github}>
              <Icons.gitHub className={sizeIcon} />
            </a>
            <a href={siteConfig.links.whatsapp}>
              <Icons.whatsapp className={sizeIcon} />
            </a>
            <a href={siteConfig.links.curriculum}>
              <Icons.curriculum className={sizeIcon} />
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
