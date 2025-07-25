import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import Link from "next/link"

export const Header = () => {
  return (
    <div className="w-full flex justify-center items-center relative h-10">
        <NavigationMenu className="absolute left-2">
            <NavigationMenuItem className="block sm:hidden">
                <NavigationMenuTrigger className="text-xs">Menu</NavigationMenuTrigger>
                <NavigationMenuContent>
                    <ul className="flex flex-col">
                        <li>
                            <Link href="/" className="text-xs">Home</Link>
                        </li>
                        <li>
                            <Link href="/page" className="text-xs">FAQ</Link>
                        </li>
                        <li>
                            <Link href="/page" className="text-xs">About</Link>
                        </li>
                    </ul>
                </NavigationMenuContent>
            </NavigationMenuItem>

            <NavigationMenuList className="hidden sm:flex">
                <NavigationMenuItem>
                    <NavigationMenuLink asChild>
                        <Link href="/" className="text-xs">Home</Link>
                    </NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem>
                    <NavigationMenuLink asChild>
                        <Link href="/page" className="text-xs">FAQ</Link>
                    </NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem>
                    <NavigationMenuLink asChild>
                        <Link href="/page" className="text-xs">About</Link>
                    </NavigationMenuLink>
                </NavigationMenuItem>
            </NavigationMenuList>
        </NavigationMenu>

      <div className="mx-auto">
        <p className="text-sm font-bold text-center sm:text-base md:text-lg lg:text-2xl">
          E-Commerce
        </p>
      </div>
    </div>
  )
}
