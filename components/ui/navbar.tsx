import Link from "next/link"
import { Button } from "@/components/ui/button"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { CheckCircle, Menu, Package2 } from "lucide-react"

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
                    {/* <NavigationMenuTrigger className="bg-transparent text-white hover:bg-white/20 transition-colors">Features</NavigationMenuTrigger> */}
                    {/* <NavigationMenuContent>
                      <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                        <li className="row-span-3">
                          <NavigationMenuLink asChild>
                            <a
                              className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-green-500 to-green-600 p-6 no-underline outline-none focus:shadow-md"
                              href="/"
                            >
                              <CheckCircle className="h-6 w-6 text-white" />
                              <div className="mt-4 mb-2 text-lg font-medium text-white">AI-Powered Analysis</div>
                              <p className="text-sm leading-tight text-white/90">
                                Get instant feedback on your resume with our advanced AI technology.
                              </p>
                            </a>
                          </NavigationMenuLink>
                        </li>
                        <li>
                          <NavigationMenuLink asChild>
                            <a
                              className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-white/20 focus:bg-white/20"
                              href="/"
                            >
                              <div className="text-sm font-medium leading-none text-white">ATS Optimization</div>
                              <p className="line-clamp-2 text-sm leading-snug text-white/70">
                                Ensure your resume passes Applicant Tracking Systems.
                              </p>
                            </a>
                          </NavigationMenuLink>
                        </li>
                        <li>
                          <NavigationMenuLink asChild>
                            <a
                              className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-white/20 focus:bg-white/20"
                              href="/"
                            >
                              <div className="text-sm font-medium leading-none text-white">Industry Insights</div>
                              <p className="line-clamp-2 text-sm leading-snug text-white/70">
                                Get tailored advice based on your industry and career goals.
                              </p>
                            </a>
                          </NavigationMenuLink>
                        </li>
                      </ul>
                    </NavigationMenuContent> */}
                  </NavigationMenuItem>
                  <NavigationMenuItem>
                    <Link href="/pricing" legacyBehavior passHref>
                      <NavigationMenuLink className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-transparent px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-white/20 focus:bg-white/20 focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-white/20 data-[state=open]:bg-white/20">
                        Pricing
                      </NavigationMenuLink>
                    </Link>
                  </NavigationMenuItem>
                  <NavigationMenuItem>
                    <Link href="/about" legacyBehavior passHref>
                      <NavigationMenuLink className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-transparent px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-white/20 focus:bg-white/20 focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-white/20 data-[state=open]:bg-white/20">
                        About
                      </NavigationMenuLink>
                    </Link>
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu>
              <Button asChild variant="secondary" className="bg-white/10 text-white hover:bg-white/20 transition-colors">
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
                <SheetContent side="right" className="bg-gradient-to-br from-green-400 to-blue-500">
                  <nav className="flex flex-col space-y-4 mt-4">
                    {/* <Link href="/features" className="text-white hover:text-green-200 transition-colors">
                      Features
                    </Link> */}
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
  )
}