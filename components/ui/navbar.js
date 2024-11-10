import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  // NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  // NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, Package2 } from "lucide-react";

export function Navbar() {
  return (
    <nav className="bg-white/10  backdrop-blur-md shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0 flex items-center space-x-2">
              <Package2 className="h-8 w-8 text-white" />
              <span className="text-2xl font-bold text-white">ResumeChecker</span>
            </Link>
          </div>
          <div className="hidden md:flex items-center space-x-4">
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  {/* Features dropdown was here */}
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link href="/pricing" legacyBehavior passHref>
                    <NavigationMenuLink className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-transparent px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-white/20 focus:bg-white/20 focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-white/20 data-[state=open]:bg-white/20">
                      Pricing
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
                {/* <NavigationMenuItem>
                  <Link href="/about" legacyBehavior passHref>
                    <NavigationMenuLink className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-transparent px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-white/20 focus:bg-white/20 focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-white/20 data-[state=open]:bg-white/20">
                      About
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem> */}
              </NavigationMenuList>
            </NavigationMenu>
            <Button
              asChild
              variant="secondary"
              className="bg-white/10 text-white hover:bg-white/20 transition-colors"
            >
              <Link href="/auth">Sign In</Link>
            </Button>
          </div>
          <div className="md:hidden flex items-center">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" className="text-white hover:bg-white/20">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Open menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent
                side="right"
                className="bg-gradient-to-br from-green-400 to-blue-500"
              >
                <nav className="flex flex-col space-y-4 mt-4">
                  <Link href="/pricing" className="text-white hover:text-green-200 transition-colors">
                    Pricing
                  </Link>
                  <Link href="/about" className="text-white hover:text-green-200 transition-colors">
                    About
                  </Link>
                  <Link href="/auth" className="text-white hover:text-green-200 transition-colors">
                    Sign In
                  </Link>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
}
