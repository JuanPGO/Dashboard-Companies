import { Input } from "@/components/ui/input"
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet"
import { UserButton } from "@clerk/nextjs"
import { Menu, Search } from "lucide-react"
import SidebarRoutes from "../SidebarRoutes/SidebarRoutes"
import { ToggleTheme } from "../ToggleTheme/ToggleTheme"
function Navbar() {
    return (
        <nav className="flex items-center px-2 gap-x-4 md:px-6 justify-between w-full bg-background border-b h-20">

            <div className="block xl:hidden">
                <Sheet>
                    <SheetTrigger>
                        <Menu />
                    </SheetTrigger>
                    <SheetContent side="left">
                        <SheetTitle />
                        {/* <SheetTitle></SheetTitle> No debe mostrar nada, pero es necesario para que no salga el warning relacionado al titulo y sheet.primitive */}
                        <SidebarRoutes />
                    </SheetContent>
                </Sheet>
            </div>
            <div className="relative w-[300px]">
                <Input placeholder="Search..." className="rounded-lg" />
                <Search strokeWidth={1} className="absolute top-2 right-2" />
            </div>
            <div className="flex gap-x-2 items-center">
                <ToggleTheme />
                <UserButton />
            </div>

        </nav>
    )
}

export default Navbar