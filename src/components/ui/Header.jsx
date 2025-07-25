import Link from "next/link" 

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"

export const Header = () => {
  return (
    <div className="w-full flex justify-center items-center relative h-10 bg-white shadow-sm rounded-lg p-2">
      <NavigationMenu className="absolute left-2 block sm:hidden">
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger className="text-xs rounded-md px-3 py-1.5 font-medium">
              Menu
            </NavigationMenuTrigger>
            <NavigationMenuContent>
                <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                    <Link href="/">
                      Home
                    </Link>
                </NavigationMenuLink>
                <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                    <Link href="/page">
                      FAQ
                    </Link>
                </NavigationMenuLink>
                <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                    <Link href="/page">
                      About
                    </Link>
                </NavigationMenuLink>
            </NavigationMenuContent>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>

      <NavigationMenu className="hidden sm:flex absolute left-2">
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
              <Link href="/">
                Home
              </Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
              <Link href="/page">
                FAQ
              </Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
              <Link href="/page">
                About
              </Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>

      <div className="mx-auto flex-grow flex justify-center items-center">
        <p className="text-sm font-bold text-center sm:text-base md:text-lg lg:text-2xl text-gray-800">
          E-Commerce
        </p>
      </div>
    </div>
  )
}

export default Header;
