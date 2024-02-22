import react from "react";
import { siteConfig } from "@/config/site";
import { Icons } from "./icons";
export default function mainNav() {
  return (
    <nav className="md:container">
      <div className="flex space-x-2">
        <div className="flex bg-slate-500">h</div>
        <div className="flex grow bg-slate-500 justify-center">
            <a href="#">Home</a>
        </div>
        <div className="flex bg-slate-500">
          <a href={siteConfig.links.github}>
            <Icons.gitHub className="h-6 w-6" />
          </a>
          <a href={siteConfig.links.whatsapp}>
            <Icons.whatsapp className="h-6 w-6" />
          </a>
          <a href={siteConfig.links.curriculum}>
            <Icons.curriculum className="h-6 w-6" />
          </a>
        </div>
      </div>
    </nav>
  );
}
