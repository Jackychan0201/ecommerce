import { 
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu"
import Link from "next/link"

export const Header = () => {
    return (
        <div className="w-full flex flex-row justify-center items-center">
            <NavigationMenu className="absolute left-0">
                <NavigationMenuItem className="block xs:hidden">
                    <NavigationMenuTrigger>Navigation</NavigationMenuTrigger>
                    <NavigationMenuContent>
                        <ul>
                            <li>
                                <Link href="/page" className="text-xs">FAQ</Link>
                            </li>
                            <li>
                                <Link href="/page" className="text-xs">About</Link>
                            </li>
                            <li>
                                <Link href="/page" className="text-xs">Home</Link>
                            </li>
                        </ul>
                    </NavigationMenuContent>
                </NavigationMenuItem>
    
                <NavigationMenuList className="hidden xs:flex">
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
            <div>
                <p className="text-sm font-bold text-center sm:text-base md:text-lg lg:text-2xl">E-Commerce</p>
            </div>
        </div>
    )
}