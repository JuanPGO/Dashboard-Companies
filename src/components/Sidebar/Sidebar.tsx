import Logo from "../Logo/Logo"

import SidebarRoutes from "../SidebarRoutes/SidebarRoutes"

function Sidebar() {
    return (
        <div className="h-screen">
            <div className="h-full flex flex-col border-r">
                <Logo />
                <SidebarRoutes />
            </div>
        </div>
    )
}

export default Sidebar