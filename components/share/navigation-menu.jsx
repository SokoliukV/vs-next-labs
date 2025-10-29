import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu"
import Link from "next/link";

export default function MainNavMenu () {
    return (<NavigationMenu>
            <NavigationMenuList>
                <NavigationMenuItem>
                    <NavigationMenuLink>
                        <Link href="/">Головна</Link>
                        </NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem>
                    <NavigationMenuLink>
                        <Link href="/about">Про мене</Link>
                        </NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem>
                    <NavigationMenuLink>
                       <Link href="/contact">Контакти</Link>
                    </NavigationMenuLink>
                </NavigationMenuItem>
            </NavigationMenuList>
            </NavigationMenu>);
}