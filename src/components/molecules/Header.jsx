import Link from "next/link";
import * as React from "react";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
//use map here and export them into a const object
// const itemsNav = {}
export const Header = () => {
  const navItems = [
    { label: "Home", href: "/" },
    { label: "FAQ", href: "/faq" },
    { label: "About", href: "/about" },
  ];

  return (
    <div className="w-full flex justify-center items-center relative h-10 bg-white shadow-sm rounded-lg p-2">
      {/* Mobile Navigation */}
      <NavigationMenu className="absolute left-2 block sm:hidden">
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger className="text-xs rounded-md px-3 py-1.5 font-medium">
              Menu
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="flex flex-col gap-2 px-4 py-2">
                {navItems.map((item) => (
                  <li key={item.label}>
                    <Link href={item.href}>{item.label}</Link>
                  </li>
                ))}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>

      {/* Desktop Navigation */}
      <NavigationMenu className="hidden sm:flex absolute left-2">
        <NavigationMenuList>
          {navItems.map((item) => (
            <NavigationMenuItem key={item.label}>
              <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                <Link href={item.href}>{item.label}</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
          ))}
        </NavigationMenuList>
      </NavigationMenu>

      <div className="mx-auto flex-grow flex justify-center items-center">
        <Link href="/" className="text-sm font-bold text-center sm:text-base md:text-lg lg:text-2xl text-gray-800 focus:outline-none">
          LEGO4DOLLAZ
        </Link>
      </div>
    </div>
  )
}

export default Header;
