import { cn } from "@/lib/utils"
import { Logo } from "./logo";
import Link from "next/link";
import { SidebarItem } from "./sidebar-item";
import {
    ClerkLoaded,
    ClerkLoading,
    UserButton
} from "@clerk/nextjs";
import { Loader } from "lucide-react";

type Props = {
    className?: string;
};

interface Items {
    iconSrc: string;
    label: string;
    href: string;
}

export const Sidebar = ({ className }: Props) => {
    const menuItems: Items[] = [
        {
            iconSrc: "/learn.svg",
            label: "Learn",
            href: "/learn"
        },
        {
            iconSrc: "/leaderboard.svg",
            label: "Leaderboard",
            href: "/leaderboard"
        },
        {
            iconSrc: "/quests.svg",
            label: "Quests",
            href: "/quests"
        },
        {
            iconSrc: "/shop.svg",
            label: "Shop",
            href: "/shop"
        },
        {
            iconSrc: "/chat.svg",
            label: "Chat",
            href: "/chat"
        },

    ]
    return (
        <div className={cn(`flex h-full lg:w-[256px] lg:fixed
                    left-0 top-0 px-4 border-r-2 flex-col`, className)}>

            <Link href="/learn">
                <Logo height={40} width={40} />
            </Link>

            <div className=" flex flex-col 
            gap-y-2 flex-1">
                {

                    menuItems.map(({ iconSrc, label, href }) => (

                        <SidebarItem
                            key={label}
                            iconSrc={iconSrc}
                            label={label}
                            href={href} />
                    ))
                }
            </div>
            <div className="p-4">

                <ClerkLoading>
                    <Loader className="h-5 w-5 text-muted-foreground animate-spin" />
                </ClerkLoading>

                <ClerkLoaded>
                    <UserButton />
                </ClerkLoaded>
                
            </div>
        </div>
    )
}