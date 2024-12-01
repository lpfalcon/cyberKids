import { Footer } from "./footer";
import { Header } from "./header";

type Props = {
    children: React.ReactNode
};

const MarketingLayout = ({ children }: Props) => {
    return (
        <div className="flex flex-col min-h-screen">

            <Header />
            <main className="flex-1 flex flex-col 
            items-center justify-center">

                {children}

            </main>
            <Footer />

        </div>
    )
}

export default MarketingLayout