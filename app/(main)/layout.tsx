import { MobileHeader } from "@/components/layout/mobile-header";
import { Sidebar } from "@/components/layout/sidebar";

type Props = {

    children: React.ReactNode

};

const MainLayout = ({ children }: Props) => {

    return (
        <>
            <MobileHeader/>
            
            <Sidebar className="lg:flex hidden" />
            <main className="lg:pl-[256px] lg:pt-0
             h-full pt-[50px]">

                <div className="max-w-[1056px] mx-auto pt-6 h-full">

                    {children}

                </div>

            </main>

        </>
    )
};

export default MainLayout