import {
    BarChart4,
    Building2,
    PanelsTopLeft,
    Settings,
    ShieldCheck,
    CircleHelpIcon,
    Calendar
} from 'lucide-react'

export const dataGeneralSidebar = [
    {
        icon: PanelsTopLeft,
        label: "Dashboard",
        href: "/"
    },
    {
        icon: Building2,
        label: "Companies",
        href: "/companies"
    },
    {
        icon: Calendar,
        label: "Calendar",
        href: "/task"
    }

]

export const dataToolSidebar = [
    {
        icon: CircleHelpIcon,
        label: "FAQs",
        href: "/faqs"
    },
    {
        icon: BarChart4,
        label: "Analytics",
        href: "/analytics",

    }
]

export const dataSupportSidebar = [
    {
        icon: Settings,
        label: "Settings",
        href: "/settings"
    },
    {
        icon: ShieldCheck,
        label: "Security",
        href: "/security",

    }
]