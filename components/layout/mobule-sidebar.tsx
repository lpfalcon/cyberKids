
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import { Sidebar } from "@/components/layout/sidebar"
import { Menu } from "lucide-react";

export const MobileSidebar = () => {

    return (
        <Sheet >

            <SheetTrigger>
                <Menu className="text-white" />
            </SheetTrigger>

            <SheetContent className="p-0 z-[100] border-0" side="left">
                    <SheetTitle/>
                    <SheetDescription>
                    </SheetDescription>
                <Sidebar />
            </SheetContent>
            
        </Sheet>
    );

};