import { MobileSidebar } from "./mobule-sidebar";

export const MobileHeader = () => {

    return (
        <nav className="lg:hidden px-6 flex h-[50px]
        bg-sky-500 fixed w-full border-b z-50
        ">
            <MobileSidebar />
        </nav>
    );

};