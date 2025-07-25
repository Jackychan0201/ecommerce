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
                <NavigationMenuItem className="flex xs:hidden">
                    <NavigationMenuTrigger>Navigation</NavigationMenuTrigger>
                    <NavigationMenuContent>
                        <NavigationMenuLink asChild>
                                <Link href="/" className="text-xs">Home</Link>
                            </NavigationMenuLink>
                        <NavigationMenuLink asChild>
                                <Link href="/page" className="text-xs">FAQ</Link>
                        </NavigationMenuLink>
                        <NavigationMenuLink asChild>
                                <Link href="/page" className="text-xs">About</Link>
                        </NavigationMenuLink>
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